from fleio.core.drf import EndUserOnly
from fleio.core.models.second_factor_auth import SecondFactorAuthType
from fleio.core.second_factor_auth.permissions.sfa_manage import SFAManagerPermissions

from plugins.sms_authenticator.common.base_views import SMSAuthenticatorBaseViewSet


class SMSAuthenticatorViewSet(SMSAuthenticatorBaseViewSet):
    def resend_verification_code(self, request):
        pass

    permission_classes = (EndUserOnly, SFAManagerPermissions,)

    @staticmethod
    def can_use_sfa_type(sfa_type: SecondFactorAuthType):
        return sfa_type.enabled_to_enduser
