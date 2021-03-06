import base64
import bleach
import email
import logging
import re
import sys
import os
from typing import Optional
from lxml.html.clean import Cleaner

from django.db import transaction
from django.conf import settings

from plugins.tickets.common.attachments_storage import AttachmentsStorage
from plugins.tickets.common.email_logger import EmailLogger
from plugins.tickets.models import EmailMessage
from plugins.tickets.models import Attachment

LOG = logging.getLogger(__name__)

FILENAME_REGEX = r'name="(.*)"'


class EmailProcessorException(Exception):
    pass


class EmailProcessor:
    @staticmethod
    def process_multipart_payload(message_parts):
        body = b''
        body_html = b''
        body_plain = b''
        attachments = []
        for part in message_parts:
            if part.is_multipart():
                b, a = EmailProcessor.process_multipart_payload(part.get_payload())
                body += b
                for attachment in a:
                    attachments.append(attachment)
            else:
                content_type = part['Content-Type']
                if content_type:
                    if 'text/' in content_type:
                        if 'format=flowed' not in content_type:
                            if '/plain' in content_type:
                                body_plain += part.get_payload(decode=True)
                            elif '/html' in content_type:
                                body_html += part.get_payload(decode=True)
                    else:
                        if 'attachment' in part['Content-Disposition']:
                            attachments.append(part)
        if body_plain or body_html:
            if body_html:
                body += body_html
            else:
                body += body_plain

        return body, attachments

    @staticmethod
    def save_attachment(attachment, received_email: EmailMessage):
        content_disposition = attachment['Content-Disposition']  # type: str
        content_encoding = attachment['Content-Transfer-Encoding']  # type: str
        content_type = attachment['Content-Type']  # type: str

        file_name_match = re.findall(FILENAME_REGEX, content_disposition)
        if len(file_name_match):
            file_name = file_name_match[0]
        else:
            file_name_match = re.findall(FILENAME_REGEX, content_type)
            file_name = file_name_match[0] if len(file_name_match) else ''

        if 'base64' not in content_encoding:
            LOG.warning('Attachment is not encoded as base64, ignoring')
            return

        content_type = content_type.splitlines()[0][:-1]

        attachment_data = base64.standard_b64decode(attachment.get_payload())
        attachment_size = sys.getsizeof(attachment_data)
        # Check if file size is not bigger than the limit
        if attachment_size > getattr(settings, 'MAX_TICKET_ATTACHMENT_SIZE'):
            LOG.error('Attachment file size is bigger than the allowed size, ignoring')
            return
        # Check if there is enough space on the disk
        attachment_storage = AttachmentsStorage.get_attachments_storage()
        statvfs = os.statvfs(getattr(settings, 'ATTACHMENTS_DIR'))
        # Number of free bytes that ordinary users are allowed to use
        free_space = statvfs.f_frsize * statvfs.f_bavail
        if free_space < getattr(settings, 'FREE_DISK_SPACE_LIMIT') or free_space < attachment_size:
            LOG.error('There is not enough free space on the disk to save the attachment, ignoring')
            return
        disk_file_name = attachment_storage.create_disk_file_name(file_name=file_name)
        attachment_storage.save_attachment(disk_file_name=disk_file_name, attachment_data=attachment_data)
        Attachment.objects.create(
            content_type=content_type,
            file_name=file_name,
            disk_file=disk_file_name,
            email_message=received_email,
        )

    AUTO_RESPONDER_HEADER_MAP = {
        'Auto-Submitted': ('auto-generated', 'auto-replied',),
        'X-Autoreply': ('yes',),
        'Preference': ('auto_reply',),
        'X-Precedence': ('auto_reply',),
        'Precedence': ('bulk',),
        'X-Autorespond': None,
        'X-Autogenerated': ('Forward', 'Group', 'Letter', 'Mirror', 'Redirect', 'Reply',),
        'X-FC-MachineGenerated': ('true',),
        'X-AutoReply-From': None,
        'X-Mail-Autoreply': None,
        # Note: 'X-Auto-Response-Suppress' header doesn't necessary indicate that the email is auto generated only that
        # it doesn't expect a response
    }

    @staticmethod
    def get_body_and_attachments(email_message):
        if email_message.is_multipart():
            body, attachments = EmailProcessor.process_multipart_payload(email_message.get_payload())
        else:
            body = email_message.get_payload(decode=True)
            attachments = []
        return body, attachments

    @staticmethod
    def sanitize_html(content):
        content = content.decode('utf-8')
        # 'kill' (completely remove) style tags and its contents (won't remove style attributes, this will be
        # handled by bleach as we may keep some style attributes defined in the django settings file)
        style_cleaner = Cleaner(kill_tags=['style'], safe_attrs_only=False)
        content = style_cleaner.clean_html(content)

        content = bleach.clean(content, strip=True)
        return content

    @staticmethod
    def parse_email_message(message: str) -> Optional[EmailMessage]:
        # LOG FILES
        if getattr(settings, 'LOG_EMAILS_RELATED_TO_TICKETS', False):
            EmailLogger.save_email_message(email_message=message)
        received_email = None
        try:
            # do not create tickets/replies for email messages that are automatic responses
            email_headers = email.parser.HeaderParser().parsestr(text=message, headersonly=True).items()
            email_dict_headers = dict(email_headers)
            for header_key, header_value in EmailProcessor.AUTO_RESPONDER_HEADER_MAP.items():
                if (header_key in email_dict_headers and
                        (EmailProcessor.AUTO_RESPONDER_HEADER_MAP[header_key] is None or
                         email_dict_headers.get(header_key) in header_value)):
                    LOG.debug('Do not continue parsing message as it is an automatic response')
                    return None
            email_message = email.message_from_string(message)

            body, attachments = EmailProcessor.get_body_and_attachments(email_message=email_message)
            body = EmailProcessor.sanitize_html(content=body)

            from_name, from_address = email.utils.parseaddr(email_message.get('From'))

            # parse 'To' addresses
            to_addresses = email_message.get_all('To')
            if to_addresses:
                to_addrs = email.utils.getaddresses(to_addresses)
                to_addrs_list = [x[1] for x in to_addrs if x[1]]
                to_addrs_list = ','.join(to_addrs_list)
            else:
                raise EmailProcessorException('No recipient(s) found in e-mail message')

            # parse 'Cc' addresses
            cc_addrs_list = None
            raw_cc_addresses = email_message.get_all('Cc')
            if raw_cc_addresses:
                cc_addrs = email.utils.getaddresses(raw_cc_addresses)
                cc_addrs_list = [x[1] for x in cc_addrs if x[1]]
                cc_addrs_list = ','.join(cc_addrs_list)

            with transaction.atomic():
                subject = email_message.get('Subject', '')
                if len(subject) > 1024:
                    # truncate subject in case it's length is too big to make sure the ticket is generated
                    subject = '{}...'.format(subject[:1021])
                received_email = EmailMessage.objects.create(
                    sender_address=from_address,
                    to=to_addrs_list,
                    cc=cc_addrs_list,
                    subject=subject,
                    message_id=email_message.get('Message-ID', ''),
                    body=body
                )

                for attachment in attachments:
                    EmailProcessor.save_attachment(attachment, received_email)

        except Exception as e:
            LOG.debug(e)
            LOG.exception('Unable to receive message')

        return received_email
