(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clients-clients-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/client-create/client-create.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reseller/clients-users/clients/client-create/client-create.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-object-details [objectController]=\"objectController\"\n                    [additionalClasses]=\"['fl-card-fixed-md']\">\n</app-object-details>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/client-details/client-details.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reseller/clients-users/clients/client-details/client-details.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-object-details [objectController]=\"objectController\"></app-object-details>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/client-edit/client-edit.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reseller/clients-users/clients/client-edit/client-edit.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-object-details [objectController]=\"objectController\" [additionalClasses]=\"['fl-card-fixed-md']\"></app-object-details>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/client-list/client-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reseller/clients-users/clients/client-list/client-list.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-objects-view [objectsListController]=\"objectListController\"></app-objects-view>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-details-billing/client-details-billing.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reseller/clients-users/clients/tabs/client-details-billing/client-details-billing.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-fleio-service-dynamic-usage [dynamicUsage]=\"dynamicUsage\" [dynamicUsageCost]=\"dynamicUsageCost\">\n</app-fleio-service-dynamic-usage>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-details-configurations/client-details-configurations.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reseller/clients-users/clients/tabs/client-details-configurations/client-details-configurations.component.html ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fl-content fl-content-min-height\">\n  <app-fl-backdrop *ngIf=\"!configuration\"></app-fl-backdrop>\n  <div *ngIf=\"configuration\" fxLayout=\"column\">\n    <p>Configuration:&nbsp;\n      <a class=\"active-link\"\n         [routerLink]=\"[config.getPanelUrl('settings/configurations'), configuration.id]\">\n        {{configuration.name}}\n      </a>\n    </p>\n    <div fxLayout=\"row\">\n      <button mat-button color=\"primary\" (click)=\"changeConfiguration()\">\n        CHANGE CONFIGURATION\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-details-configurations/dialogs/change-configuration-dialog/change-configuration-dialog.component.html":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reseller/clients-users/clients/tabs/client-details-configurations/dialogs/change-configuration-dialog/change-configuration-dialog.component.html ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Change client {{data.client.name}} configuration</h1>\n<div mat-dialog-content fxLayout=\"column\">\n  <p>Current configuration: {{data.configuration.name}}</p>\n  <div [formGroup]=\"changeConfigurationFrom\">\n    <mat-form-field>\n      <mat-select formControlName=\"selectedConfiguration\" placeholder=\"New configuration\">\n        <mat-option *ngFor=\"let configuration of availableConfigurations\" [value]=\"configuration.id\">\n          {{configuration.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"close()\">Cancel</button>\n  <button mat-button disabled=\"{{!(selectedConfiguration.value > 0)}}\" (click)=\"changeConfiguration()\"\n          [color]=\"'primary'\">\n    Change configuration\n  </button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-details-invoices/client-details-invoices.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reseller/clients-users/clients/tabs/client-details-invoices/client-details-invoices.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fl-content fl-content-min-height\">\n  <app-fl-backdrop *ngIf=\"!invoices\"></app-fl-backdrop>\n  <div *ngIf=\"invoices\" fxLayout=\"column\">\n    <table class=\"full-width\" mat-table [dataSource]=\"invoices\">\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef>Invoice id</th>\n        <td mat-cell *matCellDef=\"let invoice\">\n          <a [routerLink]=\"[config.getPanelUrl('billing/invoices'), invoice.id]\">\n            {{invoice.id}}\n          </a>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef>Status</th>\n        <td mat-cell *matCellDef=\"let invoice\">\n          <a [routerLink]=\"[config.getPanelUrl('billing/invoices'), invoice.id]\">\n            {{invoice.status | uppercase}}\n          </a>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"issue_date\">\n        <th mat-header-cell *matHeaderCellDef>Status</th>\n        <td mat-cell *matCellDef=\"let invoice\">\n          <a [routerLink]=\"[config.getPanelUrl('billing/invoices'), invoice.id]\">\n            {{invoice.issue_date | date}}\n          </a>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"total\">\n        <th mat-header-cell *matHeaderCellDef>Total</th>\n        <td mat-cell *matCellDef=\"let invoice\">\n          <a [routerLink]=\"[config.getPanelUrl('billing/invoices'), invoice.id]\">\n            {{invoice.total}} {{invoice.currency}}\n          </a>\n        </td>\n      </ng-container>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    <div fxLayout=\"row\">\n      <button mat-button color=\"primary\" class=\"fl-margin-top\"\n              [routerLink]=\"config.getPanelUrl('billing/invoices/create')\"\n              [queryParams]=\"{client_id: object.id}\">\n        CREATE INVOICE\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-details-journal/client-details-journal.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reseller/clients-users/clients/tabs/client-details-journal/client-details-journal.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fl-content fl-content-min-height\">\n  <app-fl-backdrop *ngIf=\"!journalEntries\"></app-fl-backdrop>\n  <div *ngIf=\"journalEntries\" fxLayout=\"column\">\n    <table class=\"full-width\" mat-table [dataSource]=\"journalEntries\">\n      <ng-container matColumnDef=\"date\">\n        <th mat-header-cell *matHeaderCellDef>Entry date</th>\n        <td mat-cell *matCellDef=\"let journalEntry\">{{journalEntry.date_added | date}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"source\">\n        <th mat-header-cell *matHeaderCellDef>Source</th>\n        <td mat-cell *matCellDef=\"let journalEntry\">{{journalEntry.source_info.name}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"destination\">\n        <th mat-header-cell *matHeaderCellDef>Destination</th>\n        <td mat-cell *matCellDef=\"let journalEntry\">\n          {{journalEntry.destination_info.name}}\n          <span *ngIf=\"journalEntry.destination_info.invoice\">\n            <a [routerLink]=\"[config.getPanelUrl('billing/invoices'), journalEntry.destination_info.invoice]\">\n              Invoice {{journalEntry.destination_info.invoice}}\n            </a>\n          </span>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"amount\">\n        <th mat-header-cell *matHeaderCellDef>Amount</th>\n        <td mat-cell *matCellDef=\"let journalEntry\">\n          {{journalEntry.destination_amount}} {{journalEntry.destination_currency}}\n        </td>\n      </ng-container>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/client-details-openstack-service.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/client-details-openstack-service.component.html ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fl-content fl-content-min-height\">\n  <app-fl-backdrop *ngIf=\"!openstackServices\"></app-fl-backdrop>\n  <div *ngIf=\"openstackServices\" fxLayout=\"column\">\n    <div *ngFor=\"let service of openstackServices\" class=\"fl-margin-bottom\">\n      <p class=\"fl-detail\">Service status: {{service.status}}</p>\n      <p class=\"fl-detail\">Product name: {{service.product.name}}</p>\n      <p class=\"fl-detail\">Product cycle: {{service.cycle.display_name}}</p>\n      <p class=\"fl-detail\">Pricing plan: {{service.pricing_plan.name}}</p>\n      <p class=\"fl-detail\">Service:&nbsp;\n        <a class=\"active-link\"\n           [routerLink]=\"[config.getPanelUrl('billing/services'), service.id]\">\n          {{service.id}}\n        </a>\n      </p>\n      <div *ngIf=\"service.status === 'active'\">\n        <p class=\"fl-detail\">Project ID: {{openstackProjects[service.id].id}}</p>\n        <p class=\"fl-detail\">Project domain ID: {{openstackProjects[service.id].project_domain_id}}</p>\n      </div>\n      <div *ngIf=\"service.status === 'active'\" fxLayout=\"row\">\n        <button mat-button color=\"primary\" (click)=\"changePricingPlan(service)\">\n          Change pricing plan\n        </button>\n        <button mat-button color=\"primary\" (click)=\"terminateService(service)\">\n          Terminate service\n        </button>\n      </div>\n    </div>\n    <div fxLayout=\"row\">\n      <button mat-button color=\"primary\" (click)=\"createOpenstackService()\">\n        Create openstack service\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/dialogs/change-pricing-plan-dialog/change-pricing-plan-dialog.component.html":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/dialogs/change-pricing-plan-dialog/change-pricing-plan-dialog.component.html ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Change service pricing plan</h1>\n<div mat-dialog-content fxLayout=\"column\">\n  <p>Current plan: {{currentPlan.name}}</p>\n  <div [formGroup]=\"changePlanFrom\">\n    <mat-form-field>\n      <mat-select formControlName=\"selectedPlan\" placeholder=\"New plan\">\n        <mat-option *ngFor=\"let plan of availablePlans\" [value]=\"plan.id\">\n          {{plan.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"close()\">Cancel</button>\n  <button mat-button disabled=\"{{!(selectedPlan.value > 0)}}\" (click)=\"changePlan()\"\n          [color]=\"'primary'\">\n    Change plan\n  </button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/dialogs/create-openstack-service-dialog/create-openstack-service-dialog.component.html":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/dialogs/create-openstack-service-dialog/create-openstack-service-dialog.component.html ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Change service pricing plan</h1>\n<div mat-dialog-content fxLayout=\"column\">\n  <div [formGroup]=\"createOpenstackServiceForm\" fxLayout=\"column\">\n    <mat-form-field>\n      <mat-select formControlName=\"product_id\" placeholder=\"Product\">\n        <mat-option *ngFor=\"let product of availableProducts\" [value]=\"product.id\">\n          {{product.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-select formControlName=\"product_cycle_id\" placeholder=\"Product cycle\">\n        <mat-option\n          *ngFor=\"let productCycle of selectedProductCycles\"\n          [value]=\"productCycle.id\">\n          {{productCycle.display_name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-checkbox formControlName=\"create_new_project\" color=\"primary\">\n      Create new project\n    </mat-checkbox>\n    <mat-form-field>\n      <input matInput placeholder=\"Project\" type=\"text\" formControlName=\"project_id\" required\n             [matAutocomplete]=\"autocompleteProject\">\n      <mat-autocomplete #autocompleteProject=\"matAutocomplete\" [displayWith]=\"projectDisplay\">\n        <mat-option *ngFor=\"let project of filteredProjects$ | async\" [value]=\"project\">\n          {{project.name}}\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n  </div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"close()\">Cancel</button>\n  <button mat-button [disabled]=\"!createOpenstackServiceForm.valid\" (click)=\"createOpenstackService()\"\n          [color]=\"'primary'\">\n    Create Openstack service\n  </button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-details-overview/client-details-overview.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reseller/clients-users/clients/tabs/client-details-overview/client-details-overview.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column\" class=\"full-width\">\n  <div fxLayout=\"column\" fxFlex=\"50\">\n    <p class=\"fl-detail\">Company:&nbsp;{{ object.company }}</p>\n    <p class=\"fl-detail\">Email:&nbsp;{{ object.email }}</p>\n    <p class=\"fl-detail\">Country:&nbsp;{{ object.country_name }}</p>\n    <p class=\"fl-detail\">City:&nbsp;{{ object.city }}\n      <span ng-if=\"client.state\">, {{ object.state }}</span>\n    </p>\n    <p class=\"fl-detail\">Address:&nbsp;{{ object.address1 }}</p>\n    <p class=\"fl-detail\" ng-if=\"object.address2\">{{ object.address2 }}</p>\n    <p class=\"fl-detail\">Zip code:&nbsp;{{ object.zip_code }}</p>\n    <p class=\"fl-detail\">Phone:&nbsp;{{ object.phone }}</p>\n    <p class=\"fl-detail\">ID:&nbsp;{{ object.id }}</p>\n    <p class=\"fl-detail\">Created on:&nbsp;{{ object.date_created | date:'mediumDate' }} </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-details-services/client-details-services.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reseller/clients-users/clients/tabs/client-details-services/client-details-services.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>client-details-services works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-details-users/client-details-users.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reseller/clients-users/clients/tabs/client-details-users/client-details-users.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fl-content fl-content-min-height\">\n  <app-fl-backdrop *ngIf=\"!users\"></app-fl-backdrop>\n  <div *ngIf=\"users\" fxLayout=\"column\">\n    <table class=\"full-width\" mat-table [dataSource]=\"users\">\n      <ng-container matColumnDef=\"username\">\n        <th mat-header-cell *matHeaderCellDef>Username</th>\n        <td mat-cell *matCellDef=\"let user\">\n          <a [routerLink]=\"config.getPanelUrl('clients-users/users/' + user.id.toString())\">\n            {{user.username}}\n          </a>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"full_name\">\n        <th mat-header-cell *matHeaderCellDef>Name</th>\n        <td mat-cell *matCellDef=\"let user\">\n          <a [routerLink]=\"config.getPanelUrl('clients-users/users/' + user.id.toString())\">\n            {{user.full_name}}\n          </a>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"(actions)\">\n        <th mat-header-cell *matHeaderCellDef>Actions</th>\n        <td mat-cell *matCellDef=\"let user\">\n          <app-object-actions [objectActions]=\"getUserActions(user)\" [maxVisibleActions]=\"2\">\n          </app-object-actions>\n        </td>\n      </ng-container>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    <div fxLayout=\"row\">\n      <button mat-button color=\"primary\" (click)=\"associateNewUser()\">ASSOCIATE USER</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-details-users/dialogs/associate-user-dialog/associate-user-dialog.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reseller/clients-users/clients/tabs/client-details-users/dialogs/associate-user-dialog/associate-user-dialog.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Associate client {{data.client.name}} with a user</h1>\n<div mat-dialog-content>\n  <div [formGroup]=\"associateUserForm\">\n    <mat-form-field>\n      <mat-select formControlName=\"selectedUser\" placeholder=\"User to associate\">\n        <mat-option *ngFor=\"let user of availableUsers\" [value]=\"user.id\">\n          {{user.full_name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"close()\">Cancel</button>\n  <button mat-button disabled=\"{{!(this.selectedUser.value > 0)}}\" (click)=\"associateUser()\"\n          [color]=\"'primary'\">\n    Associate user\n  </button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-edit-form/client-edit-form.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reseller/clients-users/clients/tabs/client-edit-form/client-edit-form.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"clientForm\">\n  <app-form-errors #formErrors [formGroup]=\"clientForm\"></app-form-errors>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"First name\" type=\"text\" formControlName=\"first_name\" required>\n    <mat-error>{{backendErrors['name'] || 'This field is required!' }}</mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <mat-label for=\"last_name\">Last name</mat-label>\n    <input matInput id=\"last_name\" type=\"text\" formControlName=\"last_name\" required>\n    <mat-error>{{backendErrors['last_name'] || 'This field is required!' }}</mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Account e-mail address\" type=\"text\" formControlName=\"email\" required>\n    <mat-error>{{backendErrors['email'] || 'This field is required!' }}</mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Country\" type=\"text\" formControlName=\"country\" required\n           [matAutocomplete]=\"autocompleteCountry\">\n    <mat-autocomplete #autocompleteCountry=\"matAutocomplete\" [displayWith]=\"countryDisplay\">\n      <mat-option *ngFor=\"let country of filteredCountries$ | async\" [value]=\"country\">\n        {{country.label}}\n      </mat-option>\n    </mat-autocomplete>\n    <mat-error>{{backendErrors['country'] || 'This field is required!' }}</mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Company\" type=\"text\" formControlName=\"company\">\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"VAT ID\" type=\"text\" formControlName=\"vat_id\">\n    <mat-error>{{backendErrors['vat_id'] || 'This field is required!' }}</mat-error>\n  </mat-form-field>\n  <mat-checkbox formControlName=\"tax_exempt\" [color]=\"'primary'\">\n    Tax exempt\n  </mat-checkbox>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Address line 1\" type=\"text\" formControlName=\"address1\" required>\n    <mat-error>{{backendErrors['address1'] || 'This field is required!' }}</mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Address line 2\" type=\"text\" formControlName=\"address2\">\n  </mat-form-field>\n  <mat-form-field class=\"one-third-width one-third-width-spacing\">\n    <input matInput placeholder=\"Country/state\" type=\"text\" formControlName=\"state\" required>\n    <mat-error>{{backendErrors['state'] || 'This field is required!' }}</mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"one-third-width one-third-width-spacing\">\n    <input matInput placeholder=\"City\" type=\"text\" formControlName=\"city\" required>\n    <mat-error>{{backendErrors['city'] || 'This field is required!' }}</mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"one-third-width\">\n    <input matInput placeholder=\"Zip code\" type=\"text\" formControlName=\"zip_code\" required>\n    <mat-error>{{backendErrors['zip_code'] || 'This field is required!' }}</mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Phone\" type=\"text\" formControlName=\"phone\" required>\n    <mat-error>{{backendErrors['phone'] || 'This field is required!' }}</mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <mat-select formControlName=\"currency\" placeholder=\"Currency\">\n      <mat-option *ngFor=\"let currency of createOptions.currencies\" [value]=\"currency\">{{currency}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n</form>\n"

/***/ }),

/***/ "./src/app/reseller/clients-users/clients/client-create/client-create.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/client-create/client-create.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VsbGVyL2NsaWVudHMtdXNlcnMvY2xpZW50cy9jbGllbnQtY3JlYXRlL2NsaWVudC1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/reseller/clients-users/clients/client-create/client-create.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/client-create/client-create.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ClientCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCreateComponent", function() { return ClientCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ui_objects_view_details_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/ui/objects-view/details-base */ "./src/app/shared/ui/objects-view/details-base.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_list_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client-list-ui.service */ "./src/app/reseller/clients-users/clients/client-list-ui.service.ts");





var ClientCreateComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClientCreateComponent, _super);
    function ClientCreateComponent(route, clientListUIService) {
        return _super.call(this, route, clientListUIService, 'create', null) || this;
    }
    ClientCreateComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _client_list_ui_service__WEBPACK_IMPORTED_MODULE_4__["ClientListUIService"] }
    ]; };
    ClientCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-create',
            template: __webpack_require__(/*! raw-loader!./client-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/client-create/client-create.component.html"),
            styles: [__webpack_require__(/*! ./client-create.component.scss */ "./src/app/reseller/clients-users/clients/client-create/client-create.component.scss")]
        })
    ], ClientCreateComponent);
    return ClientCreateComponent;
}(_shared_ui_objects_view_details_base__WEBPACK_IMPORTED_MODULE_2__["DetailsBase"]));



/***/ }),

/***/ "./src/app/reseller/clients-users/clients/client-details/client-details.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/client-details/client-details.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VsbGVyL2NsaWVudHMtdXNlcnMvY2xpZW50cy9jbGllbnQtZGV0YWlscy9jbGllbnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/reseller/clients-users/clients/client-details/client-details.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/client-details/client-details.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ClientDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailsComponent", function() { return ClientDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_list_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client-list-ui.service */ "./src/app/reseller/clients-users/clients/client-list-ui.service.ts");
/* harmony import */ var _shared_ui_objects_view_details_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/ui/objects-view/details-base */ "./src/app/shared/ui/objects-view/details-base.ts");





var ClientDetailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClientDetailsComponent, _super);
    function ClientDetailsComponent(route, clientListUIService) {
        return _super.call(this, route, clientListUIService, 'details', 'client') || this;
    }
    ClientDetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _client_list_ui_service__WEBPACK_IMPORTED_MODULE_3__["ClientListUIService"] }
    ]; };
    ClientDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-details',
            template: __webpack_require__(/*! raw-loader!./client-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/client-details/client-details.component.html"),
            styles: [__webpack_require__(/*! ./client-details.component.scss */ "./src/app/reseller/clients-users/clients/client-details/client-details.component.scss")]
        })
    ], ClientDetailsComponent);
    return ClientDetailsComponent;
}(_shared_ui_objects_view_details_base__WEBPACK_IMPORTED_MODULE_4__["DetailsBase"]));



/***/ }),

/***/ "./src/app/reseller/clients-users/clients/client-edit/client-edit.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/client-edit/client-edit.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VsbGVyL2NsaWVudHMtdXNlcnMvY2xpZW50cy9jbGllbnQtZWRpdC9jbGllbnQtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/reseller/clients-users/clients/client-edit/client-edit.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/client-edit/client-edit.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ClientEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientEditComponent", function() { return ClientEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ui_objects_view_details_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/ui/objects-view/details-base */ "./src/app/shared/ui/objects-view/details-base.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_list_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client-list-ui.service */ "./src/app/reseller/clients-users/clients/client-list-ui.service.ts");





var ClientEditComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClientEditComponent, _super);
    function ClientEditComponent(route, clientListUIService) {
        return _super.call(this, route, clientListUIService, 'edit', 'client') || this;
    }
    ClientEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _client_list_ui_service__WEBPACK_IMPORTED_MODULE_4__["ClientListUIService"] }
    ]; };
    ClientEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-edit',
            template: __webpack_require__(/*! raw-loader!./client-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/client-edit/client-edit.component.html"),
            styles: [__webpack_require__(/*! ./client-edit.component.scss */ "./src/app/reseller/clients-users/clients/client-edit/client-edit.component.scss")]
        })
    ], ClientEditComponent);
    return ClientEditComponent;
}(_shared_ui_objects_view_details_base__WEBPACK_IMPORTED_MODULE_2__["DetailsBase"]));



/***/ }),

/***/ "./src/app/reseller/clients-users/clients/client-list-ui.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/client-list-ui.service.ts ***!
  \**************************************************************************/
/*! exports provided: ClientListUIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientListUIService", function() { return ClientListUIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/config/config.service */ "./src/app/shared/config/config.service.ts");
/* harmony import */ var _shared_ui_objects_view_interfaces_table_data_column_definition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/ui/objects-view/interfaces/table-data/column-definition */ "./src/app/shared/ui/objects-view/interfaces/table-data/column-definition.ts");
/* harmony import */ var _shared_fleio_api_client_user_client_clients_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/fleio-api/client-user/client/clients-api.service */ "./src/app/shared/fleio-api/client-user/client/clients-api.service.ts");
/* harmony import */ var _client_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client-ui.service */ "./src/app/reseller/clients-users/clients/client-ui.service.ts");
/* harmony import */ var _shared_ui_objects_view_actions_router_link_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/ui/objects-view/actions/router-link-action */ "./src/app/shared/ui/objects-view/actions/router-link-action.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");









var ClientListUIService = /** @class */ (function () {
    function ClientListUIService(router, config, clientsApi) {
        this.router = router;
        this.config = config;
        this.clientsApi = clientsApi;
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"](this.config.locale);
    }
    ClientListUIService.prototype.getObjectUIService = function (object, permissions, state) {
        return new _client_ui_service__WEBPACK_IMPORTED_MODULE_6__["ClientUIService"](object, permissions, state, this.router, this.config, this.clientsApi);
    };
    ClientListUIService.prototype.getTableData = function (objectList) {
        var e_1, _a;
        var tableData = {
            header: {
                columns: [
                    // {type: ColumnType.Image, displayName: 'Image', enableSort: false, fieldName: '(image)'},
                    { type: _shared_ui_objects_view_interfaces_table_data_column_definition__WEBPACK_IMPORTED_MODULE_4__["ColumnType"].Value, displayName: 'ID', enableSort: false, fieldName: 'id' },
                    { type: _shared_ui_objects_view_interfaces_table_data_column_definition__WEBPACK_IMPORTED_MODULE_4__["ColumnType"].Value, displayName: 'Name', enableSort: false, fieldName: 'name' },
                    { type: _shared_ui_objects_view_interfaces_table_data_column_definition__WEBPACK_IMPORTED_MODULE_4__["ColumnType"].Value, displayName: 'Up to date credit', enableSort: true, fieldName: 'uptodate_credit' },
                    { type: _shared_ui_objects_view_interfaces_table_data_column_definition__WEBPACK_IMPORTED_MODULE_4__["ColumnType"].Value, displayName: 'Out of credit', enableSort: false, fieldName: 'outofcredit_datetime' },
                    { type: _shared_ui_objects_view_interfaces_table_data_column_definition__WEBPACK_IMPORTED_MODULE_4__["ColumnType"].Value, displayName: 'Configuration', enableSort: true, fieldName: 'configuration_name' },
                    { type: _shared_ui_objects_view_interfaces_table_data_column_definition__WEBPACK_IMPORTED_MODULE_4__["ColumnType"].Value, displayName: 'Group', enableSort: true, fieldName: 'group_name' },
                    { type: _shared_ui_objects_view_interfaces_table_data_column_definition__WEBPACK_IMPORTED_MODULE_4__["ColumnType"].Value, displayName: 'Company', enableSort: true, fieldName: 'company' },
                    { type: _shared_ui_objects_view_interfaces_table_data_column_definition__WEBPACK_IMPORTED_MODULE_4__["ColumnType"].Actions, displayName: 'Actions', enableSort: false, fieldName: '(actions)' },
                ],
                columnNames: [
                    /* '(image)', */ 'id', 'name', 'uptodate_credit', 'outofcredit_datetime', 'configuration_name',
                    'group_name', 'company', '(actions)',
                ],
                statusColumn: 'id',
            },
            rows: [],
        };
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](objectList.objects), _c = _b.next(); !_c.done; _c = _b.next()) {
                var client = _c.value;
                var rowUIService = this.getObjectUIService(client, objectList.permissions, 'uptodate_credit');
                // TODO: add table row class that performs icon/status/url/actions initialization
                var row = {
                    cells: {
                        id: { text: "" + client.id },
                        name: { text: client.name },
                        uptodate_credit: { text: client.uptodate_credit + " " + client.currency },
                        outofcredit_datetime: {
                            text: client.outofcredit_datetime ? this.datePipe.transform(client.outofcredit_datetime) : 'n/a',
                        },
                        configuration_name: { text: client.configuration_name },
                        group_name: { text: client.group_name || 'n/a' },
                        company: { text: client.company },
                    },
                    icon: rowUIService.getIcon(),
                    status: rowUIService.getStatus(),
                    url: rowUIService.getDetailsLink(),
                    actions: rowUIService.getActions(),
                };
                tableData.rows.push(row);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return tableData;
    };
    ClientListUIService.prototype.getActions = function (objectList) {
        return [
            new _shared_ui_objects_view_actions_router_link_action__WEBPACK_IMPORTED_MODULE_7__["RouterLinkAction"]({
                name: 'Create new client',
                tooltip: 'Create new client',
                icon: { name: 'add' },
                router: this.router,
                routerUrl: this.config.getPanelUrl('clients-users/clients/create')
            })
        ];
    };
    ClientListUIService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
        { type: _shared_fleio_api_client_user_client_clients_api_service__WEBPACK_IMPORTED_MODULE_5__["ClientsApiService"] }
    ]; };
    ClientListUIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], ClientListUIService);
    return ClientListUIService;
}());



/***/ }),

/***/ "./src/app/reseller/clients-users/clients/client-list/client-list.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/client-list/client-list.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VsbGVyL2NsaWVudHMtdXNlcnMvY2xpZW50cy9jbGllbnQtbGlzdC9jbGllbnQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/reseller/clients-users/clients/client-list/client-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/client-list/client-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ClientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientListComponent", function() { return ClientListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_ui_api_refresh_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/ui-api/refresh.service */ "./src/app/shared/ui-api/refresh.service.ts");
/* harmony import */ var _client_list_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client-list-ui.service */ "./src/app/reseller/clients-users/clients/client-list-ui.service.ts");
/* harmony import */ var _shared_ui_objects_view_list_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/ui/objects-view/list-base */ "./src/app/shared/ui/objects-view/list-base.ts");






var ClientListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClientListComponent, _super);
    function ClientListComponent(route, clientListUIService, refreshService) {
        var _this = _super.call(this, route, clientListUIService, refreshService, 'clients') || this;
        _this.route = route;
        _this.clientListUIService = clientListUIService;
        _this.refreshService = refreshService;
        return _this;
    }
    ClientListComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    ClientListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _client_list_ui_service__WEBPACK_IMPORTED_MODULE_4__["ClientListUIService"] },
        { type: _shared_ui_api_refresh_service__WEBPACK_IMPORTED_MODULE_3__["RefreshService"] }
    ]; };
    ClientListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-list',
            template: __webpack_require__(/*! raw-loader!./client-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/client-list/client-list.component.html"),
            styles: [__webpack_require__(/*! ./client-list.component.scss */ "./src/app/reseller/clients-users/clients/client-list/client-list.component.scss")]
        })
    ], ClientListComponent);
    return ClientListComponent;
}(_shared_ui_objects_view_list_base__WEBPACK_IMPORTED_MODULE_5__["ListBase"]));



/***/ }),

/***/ "./src/app/reseller/clients-users/clients/client-ui.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/client-ui.service.ts ***!
  \*********************************************************************/
/*! exports provided: ClientUIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientUIService", function() { return ClientUIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_ui_objects_view_interfaces_object_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ui/objects-view/interfaces/object-status */ "./src/app/shared/ui/objects-view/interfaces/object-status.ts");
/* harmony import */ var _shared_ui_objects_view_object_ui_service_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/ui/objects-view/object-ui-service-base */ "./src/app/shared/ui/objects-view/object-ui-service-base.ts");
/* harmony import */ var _shared_ui_objects_view_actions_router_link_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/ui/objects-view/actions/router-link-action */ "./src/app/shared/ui/objects-view/actions/router-link-action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_config_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/config/config.service */ "./src/app/shared/config/config.service.ts");
/* harmony import */ var _shared_ui_objects_view_actions_api_call_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/ui/objects-view/actions/api-call-action */ "./src/app/shared/ui/objects-view/actions/api-call-action.ts");
/* harmony import */ var _tabs_client_details_overview_client_details_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs/client-details-overview/client-details-overview.component */ "./src/app/reseller/clients-users/clients/tabs/client-details-overview/client-details-overview.component.ts");
/* harmony import */ var _shared_fleio_api_client_user_client_clients_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/fleio-api/client-user/client/clients-api.service */ "./src/app/shared/fleio-api/client-user/client/clients-api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tabs_client_edit_form_client_edit_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabs/client-edit-form/client-edit-form.component */ "./src/app/reseller/clients-users/clients/tabs/client-edit-form/client-edit-form.component.ts");
/* harmony import */ var _shared_ui_objects_view_actions_callback_action__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/ui/objects-view/actions/callback-action */ "./src/app/shared/ui/objects-view/actions/callback-action.ts");
/* harmony import */ var _tabs_client_details_invoices_client_details_invoices_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tabs/client-details-invoices/client-details-invoices.component */ "./src/app/reseller/clients-users/clients/tabs/client-details-invoices/client-details-invoices.component.ts");
/* harmony import */ var _tabs_client_details_journal_client_details_journal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tabs/client-details-journal/client-details-journal.component */ "./src/app/reseller/clients-users/clients/tabs/client-details-journal/client-details-journal.component.ts");
/* harmony import */ var _tabs_client_details_billing_client_details_billing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tabs/client-details-billing/client-details-billing.component */ "./src/app/reseller/clients-users/clients/tabs/client-details-billing/client-details-billing.component.ts");
/* harmony import */ var _tabs_client_details_openstack_service_client_details_openstack_service_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tabs/client-details-openstack-service/client-details-openstack-service.component */ "./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/client-details-openstack-service.component.ts");
/* harmony import */ var _tabs_client_details_users_client_details_users_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tabs/client-details-users/client-details-users.component */ "./src/app/reseller/clients-users/clients/tabs/client-details-users/client-details-users.component.ts");
/* harmony import */ var _tabs_client_details_configurations_client_details_configurations_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tabs/client-details-configurations/client-details-configurations.component */ "./src/app/reseller/clients-users/clients/tabs/client-details-configurations/client-details-configurations.component.ts");


















var ClientUIService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClientUIService, _super);
    function ClientUIService(client, permissions, state, router, config, clientsApi) {
        var _this = _super.call(this, client, permissions, state) || this;
        _this.router = router;
        _this.config = config;
        _this.clientsApi = clientsApi;
        return _this;
    }
    ClientUIService.prototype.getIcon = function () {
        return {
            name: '(gravatar)',
            gravatarEmail: this.object.email,
        };
    };
    ClientUIService.prototype.getStatus = function () {
        switch (this.object.status) {
            case 'active':
                return { type: _shared_ui_objects_view_interfaces_object_status__WEBPACK_IMPORTED_MODULE_1__["StatusType"].Defined, value: _shared_ui_objects_view_interfaces_object_status__WEBPACK_IMPORTED_MODULE_1__["StatusValue"].Active };
            case 'suspended':
                return { type: _shared_ui_objects_view_interfaces_object_status__WEBPACK_IMPORTED_MODULE_1__["StatusType"].Defined, value: _shared_ui_objects_view_interfaces_object_status__WEBPACK_IMPORTED_MODULE_1__["StatusValue"].Suspended };
            case 'deleting':
                return { type: _shared_ui_objects_view_interfaces_object_status__WEBPACK_IMPORTED_MODULE_1__["StatusType"].Changing, value: _shared_ui_objects_view_interfaces_object_status__WEBPACK_IMPORTED_MODULE_1__["StatusValue"].Error };
            default:
                return { type: _shared_ui_objects_view_interfaces_object_status__WEBPACK_IMPORTED_MODULE_1__["StatusType"].None, value: _shared_ui_objects_view_interfaces_object_status__WEBPACK_IMPORTED_MODULE_1__["StatusValue"].None };
        }
    };
    ClientUIService.prototype.getTitle = function () {
        switch (this.state) {
            case 'details':
                return {
                    text: "Client " + this.object.name,
                };
            case 'edit':
                return {
                    text: "Edit " + this.object.name,
                };
            case 'create':
                return {
                    text: 'Create client',
                };
            default:
                return {
                    text: "" + this.object.name,
                };
        }
    };
    ClientUIService.prototype.getActions = function () {
        var actions = [];
        actions.push(new _shared_ui_objects_view_actions_router_link_action__WEBPACK_IMPORTED_MODULE_3__["RouterLinkAction"]({
            icon: { name: 'edit', class: 'fl-icons' },
            name: 'Edit',
            tooltip: 'Edit',
            routerUrl: this.config.getPanelUrl("clients-users/clients/" + this.object.id + "/edit"),
            router: this.router,
        }));
        if (this.object.status === 'active') {
            actions.push(new _shared_ui_objects_view_actions_api_call_action__WEBPACK_IMPORTED_MODULE_6__["ApiCallAction"]({
                object: this.object,
                icon: { name: 'pause' },
                name: 'Suspend',
                tooltip: 'Suspend',
                confirmOptions: {
                    confirm: true,
                    title: 'Suspend client',
                    message: "Are you sure you want to suspend client " + this.object.name + " and all associated services"
                },
                apiService: this.clientsApi,
                apiAction: 'suspend',
            }));
        }
        if (this.object.status === 'suspended') {
            actions.push(new _shared_ui_objects_view_actions_api_call_action__WEBPACK_IMPORTED_MODULE_6__["ApiCallAction"]({
                object: this.object,
                icon: { name: 'play_arrow' },
                name: 'Resume',
                tooltip: 'Resume',
                confirmOptions: {
                    confirm: false,
                    title: 'Resume client',
                    message: "Are you sure you want to resume client " + this.object.name
                },
                apiService: this.clientsApi,
                apiAction: 'resume',
            }));
        }
        var deleteAction = new _shared_ui_objects_view_actions_api_call_action__WEBPACK_IMPORTED_MODULE_6__["ApiCallAction"]({
            object: this.object,
            icon: { name: 'delete' },
            name: 'Delete',
            tooltip: 'Delete',
            confirmOptions: {
                confirm: true,
                title: 'Delete client',
                message: "Are you sure you want to delete client " + this.object.name + " and all associated services." +
                    ' All data will be lost.',
            },
            apiService: this.clientsApi,
            callType: _shared_ui_objects_view_actions_api_call_action__WEBPACK_IMPORTED_MODULE_6__["CallType"].Delete,
        });
        if (this.object.suspend_instead_of_terminate) {
            deleteAction.tooltip = "Delete disabled by billing settings 'suspend instead of terminate enabled' set.";
            deleteAction.noPermissions = true;
        }
        actions.push(deleteAction);
        return actions;
    };
    ClientUIService.prototype.getDetailsLink = function () {
        return this.config.getPanelUrl("clients-users/clients/" + this.object.id);
    };
    ClientUIService.prototype.getCardFields = function () {
        var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"](this.config.locale);
        var fields = [
            {
                name: 'Created at',
                value: "" + datePipe.transform(this.object.date_created)
            }
        ];
        if (this.object.outofcredit_datetime) {
            fields.push({
                name: 'Out of credit since',
                value: "" + this.object.outofcredit_datetime
            });
        }
        else {
            fields.push({
                name: 'Up to date credit',
                value: "" + this.object.uptodate_credit
            });
        }
        return fields;
    };
    ClientUIService.prototype.getTabs = function () {
        switch (this.state) {
            case 'details':
                return [
                    {
                        tabName: 'Overview',
                        component: _tabs_client_details_overview_client_details_overview_component__WEBPACK_IMPORTED_MODULE_7__["ClientDetailsOverviewComponent"],
                    },
                    {
                        tabName: 'Billing',
                        component: _tabs_client_details_billing_client_details_billing_component__WEBPACK_IMPORTED_MODULE_14__["ClientDetailsBillingComponent"],
                    },
                    {
                        tabName: 'Invoices',
                        component: _tabs_client_details_invoices_client_details_invoices_component__WEBPACK_IMPORTED_MODULE_12__["ClientDetailsInvoicesComponent"],
                    },
                    {
                        tabName: 'Journal',
                        component: _tabs_client_details_journal_client_details_journal_component__WEBPACK_IMPORTED_MODULE_13__["ClientDetailsJournalComponent"],
                    },
                    {
                        tabName: 'Openstack service',
                        component: _tabs_client_details_openstack_service_client_details_openstack_service_component__WEBPACK_IMPORTED_MODULE_15__["ClientDetailsOpenstackServiceComponent"],
                    },
                    {
                        tabName: 'Users',
                        component: _tabs_client_details_users_client_details_users_component__WEBPACK_IMPORTED_MODULE_16__["ClientDetailsUsersComponent"],
                    },
                    {
                        tabName: 'Configurations',
                        component: _tabs_client_details_configurations_client_details_configurations_component__WEBPACK_IMPORTED_MODULE_17__["ClientDetailsConfigurationsComponent"],
                    },
                ];
            case 'edit':
            case 'create':
                return [
                    {
                        tabName: 'Edit',
                        component: _tabs_client_edit_form_client_edit_form_component__WEBPACK_IMPORTED_MODULE_10__["ClientEditFormComponent"],
                    },
                ];
        }
    };
    ClientUIService.prototype.getCardTags = function () {
        var tags = [];
        if (this.object.configuration_name) {
            tags.push(this.object.configuration_name);
        }
        return tags;
    };
    ClientUIService.prototype.getDetailsActions = function () {
        var actions = [];
        switch (this.state) {
            case 'create':
                actions.push(new _shared_ui_objects_view_actions_router_link_action__WEBPACK_IMPORTED_MODULE_3__["RouterLinkAction"]({
                    name: 'Cancel',
                    routerUrl: this.config.getPrevUrl("clients-users/clients"),
                    router: this.router,
                }));
                actions.push(new _shared_ui_objects_view_actions_callback_action__WEBPACK_IMPORTED_MODULE_11__["CallbackAction"]({ name: 'Create' }));
                break;
            case 'edit':
                actions.push(new _shared_ui_objects_view_actions_router_link_action__WEBPACK_IMPORTED_MODULE_3__["RouterLinkAction"]({
                    name: 'Cancel',
                    routerUrl: this.config.getPrevUrl("clients-users/clients"),
                    router: this.router,
                }));
                actions.push(new _shared_ui_objects_view_actions_callback_action__WEBPACK_IMPORTED_MODULE_11__["CallbackAction"]({ name: 'Save' }));
                break;
            default:
                break;
        }
        return actions;
    };
    ClientUIService.ctorParameters = function () { return [
        { type: undefined },
        { type: undefined },
        { type: String },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _shared_config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
        { type: _shared_fleio_api_client_user_client_clients_api_service__WEBPACK_IMPORTED_MODULE_8__["ClientsApiService"] }
    ]; };
    return ClientUIService;
}(_shared_ui_objects_view_object_ui_service_base__WEBPACK_IMPORTED_MODULE_2__["ObjectUIServiceBase"]));



/***/ }),

/***/ "./src/app/reseller/clients-users/clients/clients-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/clients-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ClientsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsRoutingModule", function() { return ClientsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-list/client-list.component */ "./src/app/reseller/clients-users/clients/client-list/client-list.component.ts");
/* harmony import */ var _shared_fleio_api_client_user_client_client_list_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/fleio-api/client-user/client/client-list.resolver */ "./src/app/shared/fleio-api/client-user/client/client-list.resolver.ts");
/* harmony import */ var _client_details_client_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-details/client-details.component */ "./src/app/reseller/clients-users/clients/client-details/client-details.component.ts");
/* harmony import */ var _shared_fleio_api_client_user_client_client_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/fleio-api/client-user/client/client.resolver */ "./src/app/shared/fleio-api/client-user/client/client.resolver.ts");
/* harmony import */ var _client_create_client_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client-create/client-create.component */ "./src/app/reseller/clients-users/clients/client-create/client-create.component.ts");
/* harmony import */ var _client_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client-edit/client-edit.component */ "./src/app/reseller/clients-users/clients/client-edit/client-edit.component.ts");
/* harmony import */ var _shared_fleio_api_client_user_client_client_create_options_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/fleio-api/client-user/client/client-create-options.resolver */ "./src/app/shared/fleio-api/client-user/client/client-create-options.resolver.ts");
/* harmony import */ var _shared_ui_api_interfaces_route_config_filter_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/ui-api/interfaces/route-config/filter-types */ "./src/app/shared/ui-api/interfaces/route-config/filter-types.ts");
/* harmony import */ var _shared_ui_api_interfaces_route_config_ordering_directions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/ui-api/interfaces/route-config/ordering-directions */ "./src/app/shared/ui-api/interfaces/route-config/ordering-directions.ts");
/* harmony import */ var _shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/auth/auth.guard */ "./src/app/shared/auth/auth.guard.ts");













var routes = [
    {
        path: '',
        component: _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_3__["ClientListComponent"],
        resolve: {
            clients: _shared_fleio_api_client_user_client_client_list_resolver__WEBPACK_IMPORTED_MODULE_4__["ClientListResolver"]
        },
        canActivate: [_shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
        data: {
            config: {
                feature: 'clients&users.clients',
                search: {
                    show: true,
                    placeholder: 'Search clients ...',
                },
                subheader: {
                    objectName: 'client',
                    objectNamePlural: 'clients',
                    objectList: function (data) {
                        return data.clients;
                    }
                },
                ordering: {
                    default: {
                        field: 'date_created',
                        direction: _shared_ui_api_interfaces_route_config_ordering_directions__WEBPACK_IMPORTED_MODULE_11__["OrderingDirection"].Descending,
                        display: 'Date created',
                    },
                    options: [
                        { display: 'Company', field: 'company' },
                        { display: 'Country', field: 'country' },
                        { display: 'State', field: 'state' },
                        { display: 'Date created', field: 'date_created' },
                        { display: 'Up to date credit', field: 'uptodate_credit' },
                        { display: 'Configuration name', field: 'configuration_name' },
                        { display: 'Group name', field: 'group_name' },
                    ]
                },
                filterOptions: [
                    {
                        field: 'date_created',
                        display: 'Date created',
                        type: _shared_ui_api_interfaces_route_config_filter_types__WEBPACK_IMPORTED_MODULE_10__["FilterTypes"].Date
                    },
                    {
                        field: 'has_billing_agreement',
                        display: 'Has billing agreement',
                        type: _shared_ui_api_interfaces_route_config_filter_types__WEBPACK_IMPORTED_MODULE_10__["FilterTypes"].Boolean
                    },
                    {
                        field: 'has_services',
                        display: 'Has services',
                        type: _shared_ui_api_interfaces_route_config_filter_types__WEBPACK_IMPORTED_MODULE_10__["FilterTypes"].Boolean
                    },
                    {
                        field: 'has_instances',
                        display: 'Has instances',
                        type: _shared_ui_api_interfaces_route_config_filter_types__WEBPACK_IMPORTED_MODULE_10__["FilterTypes"].Boolean
                    }
                ],
            },
        },
        runGuardsAndResolvers: 'always'
    },
    {
        path: 'create',
        component: _client_create_client_create_component__WEBPACK_IMPORTED_MODULE_7__["ClientCreateComponent"],
        resolve: {
            createOptions: _shared_fleio_api_client_user_client_client_create_options_resolver__WEBPACK_IMPORTED_MODULE_9__["ClientCreateOptionsResolver"]
        },
        data: {
            config: {
                getBreadCrumbDetail: function () {
                    return 'Create client';
                },
            },
        }
    },
    {
        path: ':id',
        component: _client_details_client_details_component__WEBPACK_IMPORTED_MODULE_5__["ClientDetailsComponent"],
        resolve: {
            client: _shared_fleio_api_client_user_client_client_resolver__WEBPACK_IMPORTED_MODULE_6__["ClientResolver"],
        },
        data: {
            config: {
                getBreadCrumbDetail: function (data) {
                    return data.client.name;
                },
            },
        }
    },
    {
        path: ':id/edit',
        component: _client_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_8__["ClientEditComponent"],
        resolve: {
            client: _shared_fleio_api_client_user_client_client_resolver__WEBPACK_IMPORTED_MODULE_6__["ClientResolver"],
            createOptions: _shared_fleio_api_client_user_client_client_create_options_resolver__WEBPACK_IMPORTED_MODULE_9__["ClientCreateOptionsResolver"]
        },
        data: {
            config: {
                getBreadCrumbDetail: function (data) {
                    return "Edit " + data.client.name;
                },
            },
        }
    },
];
var ClientsRoutingModule = /** @class */ (function () {
    function ClientsRoutingModule() {
    }
    ClientsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ClientsRoutingModule);
    return ClientsRoutingModule;
}());



/***/ }),

/***/ "./src/app/reseller/clients-users/clients/clients.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/clients.module.ts ***!
  \******************************************************************/
/*! exports provided: ClientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsModule", function() { return ClientsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-list/client-list.component */ "./src/app/reseller/clients-users/clients/client-list/client-list.component.ts");
/* harmony import */ var _clients_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clients-routing.module */ "./src/app/reseller/clients-users/clients/clients-routing.module.ts");
/* harmony import */ var _client_details_client_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-details/client-details.component */ "./src/app/reseller/clients-users/clients/client-details/client-details.component.ts");
/* harmony import */ var _tabs_client_details_overview_client_details_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs/client-details-overview/client-details-overview.component */ "./src/app/reseller/clients-users/clients/tabs/client-details-overview/client-details-overview.component.ts");
/* harmony import */ var _shared_ui_objects_view_objects_view_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/ui/objects-view/objects-view.module */ "./src/app/shared/ui/objects-view/objects-view.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _tabs_client_edit_form_client_edit_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs/client-edit-form/client-edit-form.component */ "./src/app/reseller/clients-users/clients/tabs/client-edit-form/client-edit-form.component.ts");
/* harmony import */ var _client_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./client-edit/client-edit.component */ "./src/app/reseller/clients-users/clients/client-edit/client-edit.component.ts");
/* harmony import */ var _client_create_client_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./client-create/client-create.component */ "./src/app/reseller/clients-users/clients/client-create/client-create.component.ts");
/* harmony import */ var _shared_error_handling_error_handling_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/error-handling/error-handling.module */ "./src/app/shared/error-handling/error-handling.module.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _shared_fleio_data_controls_fleio_data_controls_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/fleio-data-controls/fleio-data-controls.module */ "./src/app/shared/fleio-data-controls/fleio-data-controls.module.ts");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _tabs_client_details_invoices_client_details_invoices_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tabs/client-details-invoices/client-details-invoices.component */ "./src/app/reseller/clients-users/clients/tabs/client-details-invoices/client-details-invoices.component.ts");
/* harmony import */ var _tabs_client_details_journal_client_details_journal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tabs/client-details-journal/client-details-journal.component */ "./src/app/reseller/clients-users/clients/tabs/client-details-journal/client-details-journal.component.ts");
/* harmony import */ var _tabs_client_details_billing_client_details_billing_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tabs/client-details-billing/client-details-billing.component */ "./src/app/reseller/clients-users/clients/tabs/client-details-billing/client-details-billing.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _tabs_client_details_openstack_service_client_details_openstack_service_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./tabs/client-details-openstack-service/client-details-openstack-service.component */ "./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/client-details-openstack-service.component.ts");
/* harmony import */ var _tabs_client_details_users_client_details_users_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./tabs/client-details-users/client-details-users.component */ "./src/app/reseller/clients-users/clients/tabs/client-details-users/client-details-users.component.ts");
/* harmony import */ var _tabs_client_details_configurations_client_details_configurations_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./tabs/client-details-configurations/client-details-configurations.component */ "./src/app/reseller/clients-users/clients/tabs/client-details-configurations/client-details-configurations.component.ts");
/* harmony import */ var _tabs_client_details_services_client_details_services_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./tabs/client-details-services/client-details-services.component */ "./src/app/reseller/clients-users/clients/tabs/client-details-services/client-details-services.component.ts");
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../shared/ui/ui.module */ "./src/app/shared/ui/ui.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _tabs_client_details_users_dialogs_associate_user_dialog_associate_user_dialog_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./tabs/client-details-users/dialogs/associate-user-dialog/associate-user-dialog.component */ "./src/app/reseller/clients-users/clients/tabs/client-details-users/dialogs/associate-user-dialog/associate-user-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _tabs_client_details_configurations_dialogs_change_configuration_dialog_change_configuration_dialog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./tabs/client-details-configurations/dialogs/change-configuration-dialog/change-configuration-dialog.component */ "./src/app/reseller/clients-users/clients/tabs/client-details-configurations/dialogs/change-configuration-dialog/change-configuration-dialog.component.ts");
/* harmony import */ var _tabs_client_details_openstack_service_dialogs_change_pricing_plan_dialog_change_pricing_plan_dialog_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./tabs/client-details-openstack-service/dialogs/change-pricing-plan-dialog/change-pricing-plan-dialog.component */ "./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/dialogs/change-pricing-plan-dialog/change-pricing-plan-dialog.component.ts");
/* harmony import */ var _tabs_client_details_openstack_service_dialogs_create_openstack_service_dialog_create_openstack_service_dialog_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./tabs/client-details-openstack-service/dialogs/create-openstack-service-dialog/create-openstack-service-dialog.component */ "./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/dialogs/create-openstack-service-dialog/create-openstack-service-dialog.component.ts");






































var ClientsModule = /** @class */ (function () {
    function ClientsModule() {
    }
    ClientsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_3__["ClientListComponent"],
                _client_details_client_details_component__WEBPACK_IMPORTED_MODULE_5__["ClientDetailsComponent"],
                _tabs_client_details_overview_client_details_overview_component__WEBPACK_IMPORTED_MODULE_6__["ClientDetailsOverviewComponent"],
                _tabs_client_edit_form_client_edit_form_component__WEBPACK_IMPORTED_MODULE_9__["ClientEditFormComponent"],
                _client_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_10__["ClientEditComponent"],
                _client_create_client_create_component__WEBPACK_IMPORTED_MODULE_11__["ClientCreateComponent"],
                _tabs_client_details_invoices_client_details_invoices_component__WEBPACK_IMPORTED_MODULE_20__["ClientDetailsInvoicesComponent"],
                _tabs_client_details_journal_client_details_journal_component__WEBPACK_IMPORTED_MODULE_21__["ClientDetailsJournalComponent"],
                _tabs_client_details_billing_client_details_billing_component__WEBPACK_IMPORTED_MODULE_22__["ClientDetailsBillingComponent"],
                _tabs_client_details_openstack_service_client_details_openstack_service_component__WEBPACK_IMPORTED_MODULE_27__["ClientDetailsOpenstackServiceComponent"],
                _tabs_client_details_users_client_details_users_component__WEBPACK_IMPORTED_MODULE_28__["ClientDetailsUsersComponent"],
                _tabs_client_details_configurations_client_details_configurations_component__WEBPACK_IMPORTED_MODULE_29__["ClientDetailsConfigurationsComponent"],
                _tabs_client_details_services_client_details_services_component__WEBPACK_IMPORTED_MODULE_30__["ClientDetailsServicesComponent"],
                _tabs_client_details_users_dialogs_associate_user_dialog_associate_user_dialog_component__WEBPACK_IMPORTED_MODULE_33__["AssociateUserDialogComponent"],
                _tabs_client_details_configurations_dialogs_change_configuration_dialog_change_configuration_dialog_component__WEBPACK_IMPORTED_MODULE_35__["ChangeConfigurationDialogComponent"],
                _tabs_client_details_openstack_service_dialogs_change_pricing_plan_dialog_change_pricing_plan_dialog_component__WEBPACK_IMPORTED_MODULE_36__["ChangePricingPlanDialogComponent"],
                _tabs_client_details_openstack_service_dialogs_create_openstack_service_dialog_create_openstack_service_dialog_component__WEBPACK_IMPORTED_MODULE_37__["CreateOpenstackServiceDialogComponent"],
            ],
            entryComponents: [
                _tabs_client_details_overview_client_details_overview_component__WEBPACK_IMPORTED_MODULE_6__["ClientDetailsOverviewComponent"],
                _tabs_client_edit_form_client_edit_form_component__WEBPACK_IMPORTED_MODULE_9__["ClientEditFormComponent"],
                _tabs_client_details_invoices_client_details_invoices_component__WEBPACK_IMPORTED_MODULE_20__["ClientDetailsInvoicesComponent"],
                _tabs_client_details_journal_client_details_journal_component__WEBPACK_IMPORTED_MODULE_21__["ClientDetailsJournalComponent"],
                _tabs_client_details_billing_client_details_billing_component__WEBPACK_IMPORTED_MODULE_22__["ClientDetailsBillingComponent"],
                _tabs_client_details_openstack_service_client_details_openstack_service_component__WEBPACK_IMPORTED_MODULE_27__["ClientDetailsOpenstackServiceComponent"],
                _tabs_client_details_users_client_details_users_component__WEBPACK_IMPORTED_MODULE_28__["ClientDetailsUsersComponent"],
                _tabs_client_details_configurations_client_details_configurations_component__WEBPACK_IMPORTED_MODULE_29__["ClientDetailsConfigurationsComponent"],
                _tabs_client_details_services_client_details_services_component__WEBPACK_IMPORTED_MODULE_30__["ClientDetailsServicesComponent"],
                _tabs_client_details_users_dialogs_associate_user_dialog_associate_user_dialog_component__WEBPACK_IMPORTED_MODULE_33__["AssociateUserDialogComponent"],
                _tabs_client_details_configurations_dialogs_change_configuration_dialog_change_configuration_dialog_component__WEBPACK_IMPORTED_MODULE_35__["ChangeConfigurationDialogComponent"],
                _tabs_client_details_openstack_service_dialogs_change_pricing_plan_dialog_change_pricing_plan_dialog_component__WEBPACK_IMPORTED_MODULE_36__["ChangePricingPlanDialogComponent"],
                _tabs_client_details_openstack_service_dialogs_create_openstack_service_dialog_create_openstack_service_dialog_component__WEBPACK_IMPORTED_MODULE_37__["CreateOpenstackServiceDialogComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _clients_routing_module__WEBPACK_IMPORTED_MODULE_4__["ClientsRoutingModule"],
                _shared_ui_objects_view_objects_view_module__WEBPACK_IMPORTED_MODULE_7__["ObjectsViewModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _shared_error_handling_error_handling_module__WEBPACK_IMPORTED_MODULE_12__["ErrorHandlingModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                _shared_fleio_data_controls_fleio_data_controls_module__WEBPACK_IMPORTED_MODULE_17__["FleioDataControlsModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
                _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_31__["UiModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_32__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"],
            ]
        })
    ], ClientsModule);
    return ClientsModule;
}());



/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-details-billing/client-details-billing.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-details-billing/client-details-billing.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VsbGVyL2NsaWVudHMtdXNlcnMvY2xpZW50cy90YWJzL2NsaWVudC1kZXRhaWxzLWJpbGxpbmcvY2xpZW50LWRldGFpbHMtYmlsbGluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-details-billing/client-details-billing.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-details-billing/client-details-billing.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ClientDetailsBillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailsBillingComponent", function() { return ClientDetailsBillingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ui_objects_view_details_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/ui/objects-view/details-component-base */ "./src/app/shared/ui/objects-view/details-component-base.ts");
/* harmony import */ var _shared_fleio_api_billing_service_dynamic_usage_service_dynamic_usages_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/fleio-api/billing/service-dynamic-usage/service-dynamic-usages-api.service */ "./src/app/shared/fleio-api/billing/service-dynamic-usage/service-dynamic-usages-api.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");





var ClientDetailsBillingComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClientDetailsBillingComponent, _super);
    function ClientDetailsBillingComponent(serviceDynamicUsagesApiService) {
        var _this = _super.call(this) || this;
        _this.serviceDynamicUsagesApiService = serviceDynamicUsagesApiService;
        _this.serviceDynamicUsageList = null;
        _this.incomeSDUList = null;
        _this.costSDUList = null;
        _this.dynamicUsage = null;
        _this.dynamicUsageCost = null;
        return _this;
    }
    ClientDetailsBillingComponent.prototype.selectFirstServiceDynamicUsage = function () {
        this.dynamicUsage = this.incomeSDUList[0];
        this.dynamicUsageCost = this.costSDUList[0];
    };
    ClientDetailsBillingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceDynamicUsagesApiService.getForClient(this.object.id).subscribe(function (list) {
            var e_1, _a;
            _this.serviceDynamicUsageList = list;
            _this.incomeSDUList = [];
            _this.costSDUList = [];
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](list.objects), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var serviceDynamicUsage = _c.value;
                    if (serviceDynamicUsage.service) {
                        _this.incomeSDUList.push(serviceDynamicUsage);
                    }
                    else {
                        _this.costSDUList.push(serviceDynamicUsage);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.selectFirstServiceDynamicUsage();
        });
    };
    ClientDetailsBillingComponent.ctorParameters = function () { return [
        { type: _shared_fleio_api_billing_service_dynamic_usage_service_dynamic_usages_api_service__WEBPACK_IMPORTED_MODULE_3__["ServiceDynamicUsagesApiService"] }
    ]; };
    ClientDetailsBillingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-details-billing',
            template: __webpack_require__(/*! raw-loader!./client-details-billing.component.html */ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-details-billing/client-details-billing.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '0px', minHeight: '0' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
            styles: [__webpack_require__(/*! ./client-details-billing.component.scss */ "./src/app/reseller/clients-users/clients/tabs/client-details-billing/client-details-billing.component.scss")]
        })
    ], ClientDetailsBillingComponent);
    return ClientDetailsBillingComponent;
}(_shared_ui_objects_view_details_component_base__WEBPACK_IMPORTED_MODULE_2__["DetailsComponentBase"]));



/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-details-configurations/client-details-configurations.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-details-configurations/client-details-configurations.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VsbGVyL2NsaWVudHMtdXNlcnMvY2xpZW50cy90YWJzL2NsaWVudC1kZXRhaWxzLWNvbmZpZ3VyYXRpb25zL2NsaWVudC1kZXRhaWxzLWNvbmZpZ3VyYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-details-configurations/client-details-configurations.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-details-configurations/client-details-configurations.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: ClientDetailsConfigurationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailsConfigurationsComponent", function() { return ClientDetailsConfigurationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ui_objects_view_details_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/ui/objects-view/details-component-base */ "./src/app/shared/ui/objects-view/details-component-base.ts");
/* harmony import */ var _shared_fleio_api_client_user_client_clients_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/fleio-api/client-user/client/clients-api.service */ "./src/app/shared/fleio-api/client-user/client/clients-api.service.ts");
/* harmony import */ var _shared_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/config/config.service */ "./src/app/shared/config/config.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _dialogs_change_configuration_dialog_change_configuration_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialogs/change-configuration-dialog/change-configuration-dialog.component */ "./src/app/reseller/clients-users/clients/tabs/client-details-configurations/dialogs/change-configuration-dialog/change-configuration-dialog.component.ts");







var ClientDetailsConfigurationsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClientDetailsConfigurationsComponent, _super);
    function ClientDetailsConfigurationsComponent(clientsApi, config, matDialog) {
        var _this = _super.call(this) || this;
        _this.clientsApi = clientsApi;
        _this.config = config;
        _this.matDialog = matDialog;
        return _this;
    }
    ClientDetailsConfigurationsComponent.prototype.ngOnInit = function () {
        this.setupRefreshTimer(3000);
    };
    ClientDetailsConfigurationsComponent.prototype.refreshData = function () {
        var _this = this;
        this.clientsApi.objectGetAction(this.object.id, 'get_configuration').subscribe(function (configuration) {
            _this.configuration = configuration;
        });
    };
    ClientDetailsConfigurationsComponent.prototype.changeConfiguration = function () {
        var _this = this;
        this.matDialog.open(_dialogs_change_configuration_dialog_change_configuration_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ChangeConfigurationDialogComponent"], {
            data: {
                client: this.object,
                configuration: this.configuration,
            }
        }).afterClosed().subscribe(function (result) {
            if (result) {
                _this.refreshData();
            }
        });
    };
    ClientDetailsConfigurationsComponent.ctorParameters = function () { return [
        { type: _shared_fleio_api_client_user_client_clients_api_service__WEBPACK_IMPORTED_MODULE_3__["ClientsApiService"] },
        { type: _shared_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
    ]; };
    ClientDetailsConfigurationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-details-configurations',
            template: __webpack_require__(/*! raw-loader!./client-details-configurations.component.html */ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-details-configurations/client-details-configurations.component.html"),
            styles: [__webpack_require__(/*! ./client-details-configurations.component.scss */ "./src/app/reseller/clients-users/clients/tabs/client-details-configurations/client-details-configurations.component.scss")]
        })
    ], ClientDetailsConfigurationsComponent);
    return ClientDetailsConfigurationsComponent;
}(_shared_ui_objects_view_details_component_base__WEBPACK_IMPORTED_MODULE_2__["DetailsComponentBase"]));



/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-details-configurations/dialogs/change-configuration-dialog/change-configuration-dialog.component.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-details-configurations/dialogs/change-configuration-dialog/change-configuration-dialog.component.scss ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VsbGVyL2NsaWVudHMtdXNlcnMvY2xpZW50cy90YWJzL2NsaWVudC1kZXRhaWxzLWNvbmZpZ3VyYXRpb25zL2RpYWxvZ3MvY2hhbmdlLWNvbmZpZ3VyYXRpb24tZGlhbG9nL2NoYW5nZS1jb25maWd1cmF0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-details-configurations/dialogs/change-configuration-dialog/change-configuration-dialog.component.ts":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-details-configurations/dialogs/change-configuration-dialog/change-configuration-dialog.component.ts ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: ChangeConfigurationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeConfigurationDialogComponent", function() { return ChangeConfigurationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _shared_fleio_api_client_user_client_clients_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/fleio-api/client-user/client/clients-api.service */ "./src/app/shared/fleio-api/client-user/client/clients-api.service.ts");
/* harmony import */ var _shared_ui_api_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/ui-api/notification.service */ "./src/app/shared/ui-api/notification.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var ChangeConfigurationDialogComponent = /** @class */ (function () {
    function ChangeConfigurationDialogComponent(dialogRef, data, formBuilder, clientsApi, notificationService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.clientsApi = clientsApi;
        this.notificationService = notificationService;
        this.changeConfigurationFrom = this.formBuilder.group({
            selectedConfiguration: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.selectedConfiguration = this.changeConfigurationFrom.controls.selectedConfiguration;
    }
    ChangeConfigurationDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientsApi.objectGetAction(this.data.client.id, 'get_configurations_for_client').subscribe(function (availableConfigurations) {
            _this.availableConfigurations = availableConfigurations.configurations;
        });
    };
    ChangeConfigurationDialogComponent.prototype.close = function () {
        this.dialogRef.close(false);
    };
    ChangeConfigurationDialogComponent.prototype.changeConfiguration = function () {
        var _this = this;
        this.clientsApi.objectPostAction(this.data.client.id, 'change_configuration', {
            id: this.data.client.id,
            configuration: this.selectedConfiguration.value,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function () {
            _this.notificationService.showMessage('Failed to change configuration');
            return rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"];
        })).subscribe(function () {
            _this.dialogRef.close(true);
        });
    };
    ChangeConfigurationDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _shared_fleio_api_client_user_client_clients_api_service__WEBPACK_IMPORTED_MODULE_4__["ClientsApiService"] },
        { type: _shared_ui_api_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
    ]; };
    ChangeConfigurationDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-configuration-dialog',
            template: __webpack_require__(/*! raw-loader!./change-configuration-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-details-configurations/dialogs/change-configuration-dialog/change-configuration-dialog.component.html"),
            styles: [__webpack_require__(/*! ./change-configuration-dialog.component.scss */ "./src/app/reseller/clients-users/clients/tabs/client-details-configurations/dialogs/change-configuration-dialog/change-configuration-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
    ], ChangeConfigurationDialogComponent);
    return ChangeConfigurationDialogComponent;
}());



/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-details-invoices/client-details-invoices.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-details-invoices/client-details-invoices.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VsbGVyL2NsaWVudHMtdXNlcnMvY2xpZW50cy90YWJzL2NsaWVudC1kZXRhaWxzLWludm9pY2VzL2NsaWVudC1kZXRhaWxzLWludm9pY2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-details-invoices/client-details-invoices.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-details-invoices/client-details-invoices.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ClientDetailsInvoicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailsInvoicesComponent", function() { return ClientDetailsInvoicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ui_objects_view_details_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/ui/objects-view/details-component-base */ "./src/app/shared/ui/objects-view/details-component-base.ts");
/* harmony import */ var _shared_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/config/config.service */ "./src/app/shared/config/config.service.ts");
/* harmony import */ var _shared_fleio_api_client_user_client_clients_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/fleio-api/client-user/client/clients-api.service */ "./src/app/shared/fleio-api/client-user/client/clients-api.service.ts");
/* harmony import */ var _shared_fleio_api_billing_invoices_invoices_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/fleio-api/billing/invoices/invoices-api.service */ "./src/app/shared/fleio-api/billing/invoices/invoices-api.service.ts");






var ClientDetailsInvoicesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClientDetailsInvoicesComponent, _super);
    function ClientDetailsInvoicesComponent(clientsApi, invoicesApi, config) {
        var _this = _super.call(this) || this;
        _this.clientsApi = clientsApi;
        _this.invoicesApi = invoicesApi;
        _this.config = config;
        _this.displayedColumns = ['id', 'status', 'issue_date', 'total'];
        return _this;
    }
    ClientDetailsInvoicesComponent.prototype.ngOnInit = function () {
        this.setupRefreshTimer(3000);
    };
    ClientDetailsInvoicesComponent.prototype.refreshData = function () {
        var _this = this;
        this.invoicesApi.list({
            client: this.object.id,
            page_size: 20,
        }).subscribe(function (invoices) {
            _this.invoices = invoices.objects;
        });
    };
    ClientDetailsInvoicesComponent.ctorParameters = function () { return [
        { type: _shared_fleio_api_client_user_client_clients_api_service__WEBPACK_IMPORTED_MODULE_4__["ClientsApiService"] },
        { type: _shared_fleio_api_billing_invoices_invoices_api_service__WEBPACK_IMPORTED_MODULE_5__["InvoicesApiService"] },
        { type: _shared_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    ClientDetailsInvoicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-details-invoices',
            template: __webpack_require__(/*! raw-loader!./client-details-invoices.component.html */ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-details-invoices/client-details-invoices.component.html"),
            styles: [__webpack_require__(/*! ./client-details-invoices.component.scss */ "./src/app/reseller/clients-users/clients/tabs/client-details-invoices/client-details-invoices.component.scss")]
        })
    ], ClientDetailsInvoicesComponent);
    return ClientDetailsInvoicesComponent;
}(_shared_ui_objects_view_details_component_base__WEBPACK_IMPORTED_MODULE_2__["DetailsComponentBase"]));



/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-details-journal/client-details-journal.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-details-journal/client-details-journal.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VsbGVyL2NsaWVudHMtdXNlcnMvY2xpZW50cy90YWJzL2NsaWVudC1kZXRhaWxzLWpvdXJuYWwvY2xpZW50LWRldGFpbHMtam91cm5hbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-details-journal/client-details-journal.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-details-journal/client-details-journal.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ClientDetailsJournalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailsJournalComponent", function() { return ClientDetailsJournalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ui_objects_view_details_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/ui/objects-view/details-component-base */ "./src/app/shared/ui/objects-view/details-component-base.ts");
/* harmony import */ var _shared_fleio_api_client_user_client_clients_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/fleio-api/client-user/client/clients-api.service */ "./src/app/shared/fleio-api/client-user/client/clients-api.service.ts");
/* harmony import */ var _shared_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/config/config.service */ "./src/app/shared/config/config.service.ts");
/* harmony import */ var _shared_fleio_api_billing_journal_journal_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/fleio-api/billing/journal/journal-api.service */ "./src/app/shared/fleio-api/billing/journal/journal-api.service.ts");






var ClientDetailsJournalComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClientDetailsJournalComponent, _super);
    function ClientDetailsJournalComponent(clientsApi, journalsApiService, config) {
        var _this = _super.call(this) || this;
        _this.clientsApi = clientsApi;
        _this.journalsApiService = journalsApiService;
        _this.config = config;
        _this.displayedColumns = ['date', 'destination', 'source', 'amount'];
        return _this;
    }
    ClientDetailsJournalComponent.prototype.ngOnInit = function () {
        this.setupRefreshTimer(3000);
    };
    ClientDetailsJournalComponent.prototype.refreshData = function () {
        var _this = this;
        this.journalsApiService.list({
            client_id: this.object.id,
            page_size: 20,
        }).subscribe(function (journalEntries) {
            _this.journalEntries = journalEntries.objects;
        });
    };
    ClientDetailsJournalComponent.ctorParameters = function () { return [
        { type: _shared_fleio_api_client_user_client_clients_api_service__WEBPACK_IMPORTED_MODULE_3__["ClientsApiService"] },
        { type: _shared_fleio_api_billing_journal_journal_api_service__WEBPACK_IMPORTED_MODULE_5__["JournalsApiService"] },
        { type: _shared_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
    ]; };
    ClientDetailsJournalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-details-journal',
            template: __webpack_require__(/*! raw-loader!./client-details-journal.component.html */ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-details-journal/client-details-journal.component.html"),
            styles: [__webpack_require__(/*! ./client-details-journal.component.scss */ "./src/app/reseller/clients-users/clients/tabs/client-details-journal/client-details-journal.component.scss")]
        })
    ], ClientDetailsJournalComponent);
    return ClientDetailsJournalComponent;
}(_shared_ui_objects_view_details_component_base__WEBPACK_IMPORTED_MODULE_2__["DetailsComponentBase"]));



/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/client-details-openstack-service.component.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/client-details-openstack-service.component.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VsbGVyL2NsaWVudHMtdXNlcnMvY2xpZW50cy90YWJzL2NsaWVudC1kZXRhaWxzLW9wZW5zdGFjay1zZXJ2aWNlL2NsaWVudC1kZXRhaWxzLW9wZW5zdGFjay1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/client-details-openstack-service.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/client-details-openstack-service.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: ClientDetailsOpenstackServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailsOpenstackServiceComponent", function() { return ClientDetailsOpenstackServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ui_objects_view_details_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/ui/objects-view/details-component-base */ "./src/app/shared/ui/objects-view/details-component-base.ts");
/* harmony import */ var _shared_fleio_api_client_user_client_clients_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/fleio-api/client-user/client/clients-api.service */ "./src/app/shared/fleio-api/client-user/client/clients-api.service.ts");
/* harmony import */ var _shared_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/config/config.service */ "./src/app/shared/config/config.service.ts");
/* harmony import */ var _shared_fleio_api_cloud_clients_cloud_clients_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/fleio-api/cloud/clients/cloud-clients-api.service */ "./src/app/shared/fleio-api/cloud/clients/cloud-clients-api.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _dialogs_change_pricing_plan_dialog_change_pricing_plan_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialogs/change-pricing-plan-dialog/change-pricing-plan-dialog.component */ "./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/dialogs/change-pricing-plan-dialog/change-pricing-plan-dialog.component.ts");
/* harmony import */ var _shared_fleio_api_billing_services_service_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/fleio-api/billing/services/service-api.service */ "./src/app/shared/fleio-api/billing/services/service-api.service.ts");
/* harmony import */ var _shared_ui_api_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/ui-api/notification.service */ "./src/app/shared/ui-api/notification.service.ts");
/* harmony import */ var _dialogs_create_openstack_service_dialog_create_openstack_service_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialogs/create-openstack-service-dialog/create-openstack-service-dialog.component */ "./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/dialogs/create-openstack-service-dialog/create-openstack-service-dialog.component.ts");











var ClientDetailsOpenstackServiceComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClientDetailsOpenstackServiceComponent, _super);
    function ClientDetailsOpenstackServiceComponent(clientsApi, cloudClientsApi, config, matDialog, servicesApi, notificationService) {
        var _this = _super.call(this) || this;
        _this.clientsApi = clientsApi;
        _this.cloudClientsApi = cloudClientsApi;
        _this.config = config;
        _this.matDialog = matDialog;
        _this.servicesApi = servicesApi;
        _this.notificationService = notificationService;
        _this.displayedColumns = ['date', 'destination', 'source', 'amount'];
        return _this;
    }
    ClientDetailsOpenstackServiceComponent.prototype.ngOnInit = function () {
        this.setupRefreshTimer(3000);
    };
    ClientDetailsOpenstackServiceComponent.prototype.refreshData = function () {
        var _this = this;
        this.cloudClientsApi.objectGetAction(this.object.id, 'openstack_services').subscribe(function (openstackServices) {
            _this.openstackServices = openstackServices.services;
            _this.openstackProjects = openstackServices.projects;
        });
    };
    ClientDetailsOpenstackServiceComponent.prototype.changePricingPlan = function (service) {
        var _this = this;
        this.matDialog.open(_dialogs_change_pricing_plan_dialog_change_pricing_plan_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ChangePricingPlanDialogComponent"], {
            data: {
                client: this.object,
                service: service,
            }
        }).afterClosed().subscribe(function (result) {
            if (result) {
                _this.refreshData();
            }
        });
    };
    ClientDetailsOpenstackServiceComponent.prototype.terminateService = function (service) {
        var _this = this;
        this.notificationService.confirmDialog({
            title: "Terminate service " + service.id,
            message: 'Are you sure?',
            importantMessage: 'This will permanently delete data.',
        }).subscribe(function (dialogResult) {
            if (dialogResult === 'yes') {
                _this.servicesApi.objectPostAction(service.id, 'terminate', {
                    id: service.id
                }).subscribe(function () {
                    _this.notificationService.showMessage('Service termination scheduled');
                });
            }
        });
    };
    ClientDetailsOpenstackServiceComponent.prototype.createOpenstackService = function () {
        var _this = this;
        this.matDialog.open(_dialogs_create_openstack_service_dialog_create_openstack_service_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CreateOpenstackServiceDialogComponent"], {
            data: {
                client: this.object,
            }
        }).afterClosed().subscribe(function (result) {
            if (result) {
                _this.refreshData();
            }
        });
    };
    ClientDetailsOpenstackServiceComponent.ctorParameters = function () { return [
        { type: _shared_fleio_api_client_user_client_clients_api_service__WEBPACK_IMPORTED_MODULE_3__["ClientsApiService"] },
        { type: _shared_fleio_api_cloud_clients_cloud_clients_api_service__WEBPACK_IMPORTED_MODULE_5__["CloudClientsApiService"] },
        { type: _shared_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _shared_fleio_api_billing_services_service_api_service__WEBPACK_IMPORTED_MODULE_8__["ServicesApiService"] },
        { type: _shared_ui_api_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] }
    ]; };
    ClientDetailsOpenstackServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-details-openstack-service',
            template: __webpack_require__(/*! raw-loader!./client-details-openstack-service.component.html */ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/client-details-openstack-service.component.html"),
            styles: [__webpack_require__(/*! ./client-details-openstack-service.component.scss */ "./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/client-details-openstack-service.component.scss")]
        })
    ], ClientDetailsOpenstackServiceComponent);
    return ClientDetailsOpenstackServiceComponent;
}(_shared_ui_objects_view_details_component_base__WEBPACK_IMPORTED_MODULE_2__["DetailsComponentBase"]));



/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/dialogs/change-pricing-plan-dialog/change-pricing-plan-dialog.component.scss":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/dialogs/change-pricing-plan-dialog/change-pricing-plan-dialog.component.scss ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VsbGVyL2NsaWVudHMtdXNlcnMvY2xpZW50cy90YWJzL2NsaWVudC1kZXRhaWxzLW9wZW5zdGFjay1zZXJ2aWNlL2RpYWxvZ3MvY2hhbmdlLXByaWNpbmctcGxhbi1kaWFsb2cvY2hhbmdlLXByaWNpbmctcGxhbi1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/dialogs/change-pricing-plan-dialog/change-pricing-plan-dialog.component.ts":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/dialogs/change-pricing-plan-dialog/change-pricing-plan-dialog.component.ts ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: ChangePricingPlanDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePricingPlanDialogComponent", function() { return ChangePricingPlanDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _shared_ui_api_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/ui-api/notification.service */ "./src/app/shared/ui-api/notification.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_fleio_api_cloud_clients_cloud_clients_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/fleio-api/cloud/clients/cloud-clients-api.service */ "./src/app/shared/fleio-api/cloud/clients/cloud-clients-api.service.ts");
/* harmony import */ var _shared_fleio_api_cloud_pricing_plan_pricing_plans_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../shared/fleio-api/cloud/pricing-plan/pricing-plans-api.service */ "./src/app/shared/fleio-api/cloud/pricing-plan/pricing-plans-api.service.ts");
/* harmony import */ var _shared_fleio_api_billing_services_service_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../shared/fleio-api/billing/services/service-api.service */ "./src/app/shared/fleio-api/billing/services/service-api.service.ts");










var ChangePricingPlanDialogComponent = /** @class */ (function () {
    function ChangePricingPlanDialogComponent(dialogRef, data, formBuilder, cloudClientsApi, notificationService, pricingPlansApi, servicesApi) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.cloudClientsApi = cloudClientsApi;
        this.notificationService = notificationService;
        this.pricingPlansApi = pricingPlansApi;
        this.servicesApi = servicesApi;
        this.changePlanFrom = this.formBuilder.group({
            selectedPlan: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.selectedPlan = this.changePlanFrom.controls.selectedPlan;
        this.currentPlan = this.data.service.pricing_plan;
    }
    ChangePricingPlanDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pricingPlansApi.list().subscribe(function (availablePlans) {
            _this.availablePlans = availablePlans.objects;
        });
    };
    ChangePricingPlanDialogComponent.prototype.close = function () {
        this.dialogRef.close(false);
    };
    ChangePricingPlanDialogComponent.prototype.changePlan = function () {
        var _this = this;
        this.servicesApi.objectPostAction(this.data.service.id, 'update_billing_plan', {
            plan: this.selectedPlan.value,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () {
            _this.notificationService.showMessage('Failed to change pricing plan');
            return rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
        })).subscribe(function () {
            _this.dialogRef.close(true);
        });
    };
    ChangePricingPlanDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _shared_fleio_api_cloud_clients_cloud_clients_api_service__WEBPACK_IMPORTED_MODULE_7__["CloudClientsApiService"] },
        { type: _shared_ui_api_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
        { type: _shared_fleio_api_cloud_pricing_plan_pricing_plans_api_service__WEBPACK_IMPORTED_MODULE_8__["PricingPlansApiService"] },
        { type: _shared_fleio_api_billing_services_service_api_service__WEBPACK_IMPORTED_MODULE_9__["ServicesApiService"] }
    ]; };
    ChangePricingPlanDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-pricing-plan-dialog',
            template: __webpack_require__(/*! raw-loader!./change-pricing-plan-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/dialogs/change-pricing-plan-dialog/change-pricing-plan-dialog.component.html"),
            styles: [__webpack_require__(/*! ./change-pricing-plan-dialog.component.scss */ "./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/dialogs/change-pricing-plan-dialog/change-pricing-plan-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
    ], ChangePricingPlanDialogComponent);
    return ChangePricingPlanDialogComponent;
}());



/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/dialogs/create-openstack-service-dialog/create-openstack-service-dialog.component.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/dialogs/create-openstack-service-dialog/create-openstack-service-dialog.component.scss ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VsbGVyL2NsaWVudHMtdXNlcnMvY2xpZW50cy90YWJzL2NsaWVudC1kZXRhaWxzLW9wZW5zdGFjay1zZXJ2aWNlL2RpYWxvZ3MvY3JlYXRlLW9wZW5zdGFjay1zZXJ2aWNlLWRpYWxvZy9jcmVhdGUtb3BlbnN0YWNrLXNlcnZpY2UtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/dialogs/create-openstack-service-dialog/create-openstack-service-dialog.component.ts":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/dialogs/create-openstack-service-dialog/create-openstack-service-dialog.component.ts ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: CreateOpenstackServiceDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOpenstackServiceDialogComponent", function() { return CreateOpenstackServiceDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _shared_fleio_api_cloud_clients_cloud_clients_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/fleio-api/cloud/clients/cloud-clients-api.service */ "./src/app/shared/fleio-api/cloud/clients/cloud-clients-api.service.ts");
/* harmony import */ var _shared_ui_api_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/ui-api/notification.service */ "./src/app/shared/ui-api/notification.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_fleio_api_client_user_client_clients_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../shared/fleio-api/client-user/client/clients-api.service */ "./src/app/shared/fleio-api/client-user/client/clients-api.service.ts");









var CreateOpenstackServiceDialogComponent = /** @class */ (function () {
    function CreateOpenstackServiceDialogComponent(dialogRef, data, formBuilder, cloudClientsApi, notificationService, clientsApi) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.cloudClientsApi = cloudClientsApi;
        this.notificationService = notificationService;
        this.clientsApi = clientsApi;
        this.createOpenstackServiceForm = this.formBuilder.group({
            product_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            product_cycle_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            create_new_project: [false],
            project_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.project = this.createOpenstackServiceForm.controls.project_id;
    }
    CreateOpenstackServiceDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cloudClientsApi.objectGetAction(this.data.client.id, 'new_service_data').subscribe((function (newServiceData) {
            _this.availableProducts = newServiceData.products;
            if (_this.availableProducts.length > 0) {
                _this.createOpenstackServiceForm.patchValue({
                    product_id: _this.availableProducts[0].id,
                    product_cycle_id: _this.availableProducts[0].cycles[0].id,
                });
            }
        }));
        this.createOpenstackServiceForm.controls.product_id.valueChanges.subscribe(function (productId) {
            var e_1, _a;
            _this.selectedProductCycles = [];
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.availableProducts), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var product = _c.value;
                    if (product.id === productId) {
                        _this.selectedProductCycles = product.cycles;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
        this.createOpenstackServiceForm.controls.create_new_project.valueChanges.subscribe(function (createNewProject) {
            if (createNewProject) {
                _this.createOpenstackServiceForm.controls.project_id.disable();
            }
            else {
                _this.createOpenstackServiceForm.controls.project_id.enable();
            }
        });
        this.filteredProjects$ = this.project.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (value) {
            if (value) {
                return typeof value === 'string' ? value : value.project_id;
            }
            else {
                return null;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (value) {
            return _this.clientsApi.objectGetAction(_this.data.client.id, 'get_os_projects_for_os_service_creation', value ? { search: value } : null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (projectsList) { return projectsList.objects; }));
        }));
    };
    CreateOpenstackServiceDialogComponent.prototype.projectDisplay = function (project) {
        if (project) {
            return project.name;
        }
        else {
            return undefined;
        }
    };
    CreateOpenstackServiceDialogComponent.prototype.close = function () {
        this.dialogRef.close(false);
    };
    CreateOpenstackServiceDialogComponent.prototype.createOpenstackService = function () {
        var _this = this;
        var params = this.createOpenstackServiceForm.value;
        params.id = this.data.client.id;
        if (params.project_id) {
            params.project_id = params.project_id.project_id;
        }
        this.cloudClientsApi.objectPostAction(this.data.client.id, 'create_openstack_service', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (response) {
            _this.notificationService.showMessage(response.error.detail);
            return rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"];
        })).subscribe(function () {
            _this.dialogRef.close(true);
        });
    };
    CreateOpenstackServiceDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _shared_fleio_api_cloud_clients_cloud_clients_api_service__WEBPACK_IMPORTED_MODULE_4__["CloudClientsApiService"] },
        { type: _shared_ui_api_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
        { type: _shared_fleio_api_client_user_client_clients_api_service__WEBPACK_IMPORTED_MODULE_8__["ClientsApiService"] }
    ]; };
    CreateOpenstackServiceDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-openstack-service-dialog',
            template: __webpack_require__(/*! raw-loader!./create-openstack-service-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/dialogs/create-openstack-service-dialog/create-openstack-service-dialog.component.html"),
            styles: [__webpack_require__(/*! ./create-openstack-service-dialog.component.scss */ "./src/app/reseller/clients-users/clients/tabs/client-details-openstack-service/dialogs/create-openstack-service-dialog/create-openstack-service-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
    ], CreateOpenstackServiceDialogComponent);
    return CreateOpenstackServiceDialogComponent;
}());



/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-details-overview/client-details-overview.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-details-overview/client-details-overview.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VsbGVyL2NsaWVudHMtdXNlcnMvY2xpZW50cy90YWJzL2NsaWVudC1kZXRhaWxzLW92ZXJ2aWV3L2NsaWVudC1kZXRhaWxzLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-details-overview/client-details-overview.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-details-overview/client-details-overview.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ClientDetailsOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailsOverviewComponent", function() { return ClientDetailsOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ui_objects_view_details_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/ui/objects-view/details-component-base */ "./src/app/shared/ui/objects-view/details-component-base.ts");



var ClientDetailsOverviewComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClientDetailsOverviewComponent, _super);
    function ClientDetailsOverviewComponent() {
        return _super.call(this) || this;
    }
    ClientDetailsOverviewComponent.prototype.ngOnInit = function () {
    };
    ClientDetailsOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clients-details-overview',
            template: __webpack_require__(/*! raw-loader!./client-details-overview.component.html */ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-details-overview/client-details-overview.component.html"),
            styles: [__webpack_require__(/*! ./client-details-overview.component.scss */ "./src/app/reseller/clients-users/clients/tabs/client-details-overview/client-details-overview.component.scss")]
        })
    ], ClientDetailsOverviewComponent);
    return ClientDetailsOverviewComponent;
}(_shared_ui_objects_view_details_component_base__WEBPACK_IMPORTED_MODULE_2__["DetailsComponentBase"]));



/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-details-services/client-details-services.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-details-services/client-details-services.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VsbGVyL2NsaWVudHMtdXNlcnMvY2xpZW50cy90YWJzL2NsaWVudC1kZXRhaWxzLXNlcnZpY2VzL2NsaWVudC1kZXRhaWxzLXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-details-services/client-details-services.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-details-services/client-details-services.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ClientDetailsServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailsServicesComponent", function() { return ClientDetailsServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ui_objects_view_details_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/ui/objects-view/details-component-base */ "./src/app/shared/ui/objects-view/details-component-base.ts");



var ClientDetailsServicesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClientDetailsServicesComponent, _super);
    function ClientDetailsServicesComponent() {
        return _super.call(this) || this;
    }
    ClientDetailsServicesComponent.prototype.ngOnInit = function () {
    };
    ClientDetailsServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-details-services',
            template: __webpack_require__(/*! raw-loader!./client-details-services.component.html */ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-details-services/client-details-services.component.html"),
            styles: [__webpack_require__(/*! ./client-details-services.component.scss */ "./src/app/reseller/clients-users/clients/tabs/client-details-services/client-details-services.component.scss")]
        })
    ], ClientDetailsServicesComponent);
    return ClientDetailsServicesComponent;
}(_shared_ui_objects_view_details_component_base__WEBPACK_IMPORTED_MODULE_2__["DetailsComponentBase"]));



/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-details-users/client-details-users.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-details-users/client-details-users.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VsbGVyL2NsaWVudHMtdXNlcnMvY2xpZW50cy90YWJzL2NsaWVudC1kZXRhaWxzLXVzZXJzL2NsaWVudC1kZXRhaWxzLXVzZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-details-users/client-details-users.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-details-users/client-details-users.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ClientDetailsUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailsUsersComponent", function() { return ClientDetailsUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ui_objects_view_details_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/ui/objects-view/details-component-base */ "./src/app/shared/ui/objects-view/details-component-base.ts");
/* harmony import */ var _shared_fleio_api_client_user_client_clients_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/fleio-api/client-user/client/clients-api.service */ "./src/app/shared/fleio-api/client-user/client/clients-api.service.ts");
/* harmony import */ var _shared_ui_objects_view_actions_router_link_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/ui/objects-view/actions/router-link-action */ "./src/app/shared/ui/objects-view/actions/router-link-action.ts");
/* harmony import */ var _shared_config_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/config/config.service */ "./src/app/shared/config/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_ui_objects_view_actions_api_call_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/ui/objects-view/actions/api-call-action */ "./src/app/shared/ui/objects-view/actions/api-call-action.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _dialogs_associate_user_dialog_associate_user_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialogs/associate-user-dialog/associate-user-dialog.component */ "./src/app/reseller/clients-users/clients/tabs/client-details-users/dialogs/associate-user-dialog/associate-user-dialog.component.ts");










var ClientDetailsUsersComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClientDetailsUsersComponent, _super);
    function ClientDetailsUsersComponent(clientsApi, config, router, matDialog) {
        var _this = _super.call(this) || this;
        _this.clientsApi = clientsApi;
        _this.config = config;
        _this.router = router;
        _this.matDialog = matDialog;
        _this.displayedColumns = ['username', 'full_name', '(actions)'];
        return _this;
    }
    ClientDetailsUsersComponent.prototype.ngOnInit = function () {
        this.setupRefreshTimer(3000);
    };
    ClientDetailsUsersComponent.prototype.refreshData = function () {
        var _this = this;
        this.clientsApi.objectGetAction(this.object.id, 'get_users').subscribe(function (users) {
            _this.users = users.users;
        });
    };
    ClientDetailsUsersComponent.prototype.getUserActions = function (user) {
        return [
            new _shared_ui_objects_view_actions_router_link_action__WEBPACK_IMPORTED_MODULE_4__["RouterLinkAction"]({
                icon: { name: 'face' },
                name: 'Impersonate user',
                routerUrl: this.config.getPanelUrl("clients-users/users/" + user.id + "/impersonate"),
                router: this.router,
            }),
            new _shared_ui_objects_view_actions_api_call_action__WEBPACK_IMPORTED_MODULE_7__["ApiCallAction"]({
                icon: { name: 'link_off' },
                name: 'Dissociate user',
                confirmOptions: {
                    confirm: true,
                    title: 'Dissociate user',
                    message: "Are you sure you want to dissociate user " + user.full_name,
                },
                object: this.object,
                apiService: this.clientsApi,
                callType: _shared_ui_objects_view_actions_api_call_action__WEBPACK_IMPORTED_MODULE_7__["CallType"].Post,
                apiAction: 'dissociate_user',
                apiParams: {
                    id: this.object.id,
                    user_id: user.id,
                },
            }),
        ];
    };
    ClientDetailsUsersComponent.prototype.associateNewUser = function () {
        var _this = this;
        this.matDialog.open(_dialogs_associate_user_dialog_associate_user_dialog_component__WEBPACK_IMPORTED_MODULE_9__["AssociateUserDialogComponent"], {
            data: { client: this.object }
        }).afterClosed().subscribe(function (result) {
            if (result) {
                _this.refreshData();
            }
        });
    };
    ClientDetailsUsersComponent.ctorParameters = function () { return [
        { type: _shared_fleio_api_client_user_client_clients_api_service__WEBPACK_IMPORTED_MODULE_3__["ClientsApiService"] },
        { type: _shared_config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }
    ]; };
    ClientDetailsUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-details-users',
            template: __webpack_require__(/*! raw-loader!./client-details-users.component.html */ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-details-users/client-details-users.component.html"),
            styles: [__webpack_require__(/*! ./client-details-users.component.scss */ "./src/app/reseller/clients-users/clients/tabs/client-details-users/client-details-users.component.scss")]
        })
    ], ClientDetailsUsersComponent);
    return ClientDetailsUsersComponent;
}(_shared_ui_objects_view_details_component_base__WEBPACK_IMPORTED_MODULE_2__["DetailsComponentBase"]));



/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-details-users/dialogs/associate-user-dialog/associate-user-dialog.component.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-details-users/dialogs/associate-user-dialog/associate-user-dialog.component.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VsbGVyL2NsaWVudHMtdXNlcnMvY2xpZW50cy90YWJzL2NsaWVudC1kZXRhaWxzLXVzZXJzL2RpYWxvZ3MvYXNzb2NpYXRlLXVzZXItZGlhbG9nL2Fzc29jaWF0ZS11c2VyLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-details-users/dialogs/associate-user-dialog/associate-user-dialog.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-details-users/dialogs/associate-user-dialog/associate-user-dialog.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: AssociateUserDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociateUserDialogComponent", function() { return AssociateUserDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _shared_fleio_api_client_user_client_clients_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/fleio-api/client-user/client/clients-api.service */ "./src/app/shared/fleio-api/client-user/client/clients-api.service.ts");
/* harmony import */ var _shared_ui_api_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/ui-api/notification.service */ "./src/app/shared/ui-api/notification.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var AssociateUserDialogComponent = /** @class */ (function () {
    function AssociateUserDialogComponent(dialogRef, data, formBuilder, clientsApi, notificationService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.clientsApi = clientsApi;
        this.notificationService = notificationService;
        this.associateUserForm = this.formBuilder.group({
            selectedUser: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.selectedUser = this.associateUserForm.controls.selectedUser;
    }
    AssociateUserDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientsApi.objectGetAction(this.data.client.id, 'get_users_not_in_client').subscribe(function (users) {
            _this.availableUsers = users.users;
        });
    };
    AssociateUserDialogComponent.prototype.close = function () {
        this.dialogRef.close(false);
    };
    AssociateUserDialogComponent.prototype.associateUser = function () {
        var _this = this;
        this.clientsApi.objectPostAction(this.data.client.id, 'associate_user', {
            id: this.data.client.id,
            user_id: this.selectedUser.value,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function () {
            _this.notificationService.showMessage('Failed to associate user');
            return rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"];
        })).subscribe(function () {
            _this.dialogRef.close(true);
        });
    };
    AssociateUserDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _shared_fleio_api_client_user_client_clients_api_service__WEBPACK_IMPORTED_MODULE_4__["ClientsApiService"] },
        { type: _shared_ui_api_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
    ]; };
    AssociateUserDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-associate-user-dialog',
            template: __webpack_require__(/*! raw-loader!./associate-user-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-details-users/dialogs/associate-user-dialog/associate-user-dialog.component.html"),
            styles: [__webpack_require__(/*! ./associate-user-dialog.component.scss */ "./src/app/reseller/clients-users/clients/tabs/client-details-users/dialogs/associate-user-dialog/associate-user-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
    ], AssociateUserDialogComponent);
    return AssociateUserDialogComponent;
}());



/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-edit-form/client-edit-form.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-edit-form/client-edit-form.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VsbGVyL2NsaWVudHMtdXNlcnMvY2xpZW50cy90YWJzL2NsaWVudC1lZGl0LWZvcm0vY2xpZW50LWVkaXQtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/reseller/clients-users/clients/tabs/client-edit-form/client-edit-form.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/reseller/clients-users/clients/tabs/client-edit-form/client-edit-form.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ClientEditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientEditFormComponent", function() { return ClientEditFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_fleio_api_client_user_client_clients_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/fleio-api/client-user/client/clients-api.service */ "./src/app/shared/fleio-api/client-user/client/clients-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/config/config.service */ "./src/app/shared/config/config.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_ui_objects_view_details_form_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/ui/objects-view/details-form-base */ "./src/app/shared/ui/objects-view/details-form-base.ts");









var ClientEditFormComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClientEditFormComponent, _super);
    function ClientEditFormComponent(formBuilder, clientApi, router, config, activatedRoute) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.clientApi = clientApi;
        _this.router = router;
        _this.config = config;
        _this.activatedRoute = activatedRoute;
        _this.clientForm = _this.formBuilder.group({
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            company: [''],
            vat_id: [''],
            tax_exempt: [''],
            address1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address2: [''],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            zip_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            currency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        _this.country = _this.clientForm.controls.country;
        return _this;
    }
    ClientEditFormComponent.prototype.countryDisplay = function (country) {
        return country ? country.label : undefined;
    };
    ClientEditFormComponent.prototype.findCountry = function (code) {
        return this.createOptions.countries.filter(function (country) { return country.value === code; })[0];
    };
    ClientEditFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.objectController.actionCallback = function () { return _this.saveClient(); };
        this.createOptions = this.activatedRoute.snapshot.data.createOptions;
        this.clientForm.patchValue(this.object);
        if (!this.object.currency) {
            this.clientForm.controls.currency.setValue(this.createOptions.default_currency);
        }
        if (this.object.country) {
            this.country.setValue(this.findCountry(this.object.country));
        }
        this.filteredCountries$ = this.country.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (value) { return typeof value === 'string' ? value : value.label; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (value) {
            var lowerCaseValue = value.toLocaleLowerCase();
            return _this.createOptions.countries.filter(function (country) { return country.label.toLocaleLowerCase().includes(lowerCaseValue); });
        }));
    };
    ClientEditFormComponent.prototype.saveClient = function () {
        var _this = this;
        var value = this.clientForm.value;
        if (typeof value.country !== 'string') {
            value.country = value.country.value;
        }
        if (!value.custom_fields) {
            value.custom_fields = [];
        }
        var request;
        if (this.object.id) {
            value.id = this.object.id;
            request = this.clientApi.update(value.id, value);
        }
        else {
            request = this.clientApi.create(value);
        }
        request.subscribe(function () {
            _this.router.navigateByUrl(_this.config.getPrevUrl('clients-users/clients')).catch(function () {
            });
        }, function (error) {
            _this.setErrors(error.error);
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
    };
    ClientEditFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _shared_fleio_api_client_user_client_clients_api_service__WEBPACK_IMPORTED_MODULE_4__["ClientsApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _shared_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    ClientEditFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-edit-form',
            template: __webpack_require__(/*! raw-loader!./client-edit-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/reseller/clients-users/clients/tabs/client-edit-form/client-edit-form.component.html"),
            styles: [__webpack_require__(/*! ./client-edit-form.component.scss */ "./src/app/reseller/clients-users/clients/tabs/client-edit-form/client-edit-form.component.scss")]
        })
    ], ClientEditFormComponent);
    return ClientEditFormComponent;
}(_shared_ui_objects_view_details_form_base__WEBPACK_IMPORTED_MODULE_8__["DetailsFormBase"]));



/***/ }),

/***/ "./src/app/shared/fleio-api/billing/journal/journal-api.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/fleio-api/billing/journal/journal-api.service.ts ***!
  \*************************************************************************/
/*! exports provided: JournalsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournalsApiService", function() { return JournalsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/config.service */ "./src/app/shared/config/config.service.ts");
/* harmony import */ var _fleio_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../fleio-api.service */ "./src/app/shared/fleio-api/fleio-api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var JournalsApiService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](JournalsApiService, _super);
    // noinspection JSUnusedGlobalSymbols
    function JournalsApiService(httpClient, config) {
        var _this = _super.call(this, config.getPanelApiUrl('billing/journal')) || this;
        _this.httpClient = httpClient;
        _this.config = config;
        return _this;
    }
    JournalsApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
    ]; };
    JournalsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], JournalsApiService);
    return JournalsApiService;
}(_fleio_api_service__WEBPACK_IMPORTED_MODULE_3__["FleioApiService"]));



/***/ }),

/***/ "./src/app/shared/fleio-api/client-user/client/client-create-options.resolver.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/fleio-api/client-user/client/client-create-options.resolver.ts ***!
  \***************************************************************************************/
/*! exports provided: ClientCreateOptionsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCreateOptionsResolver", function() { return ClientCreateOptionsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _clients_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clients-api.service */ "./src/app/shared/fleio-api/client-user/client/clients-api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ClientCreateOptionsResolver = /** @class */ (function () {
    function ClientCreateOptionsResolver(clientsApi) {
        this.clientsApi = clientsApi;
    }
    ClientCreateOptionsResolver.prototype.resolve = function (route, state) {
        return this.clientsApi.createOptions()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null); }));
    };
    ClientCreateOptionsResolver.ctorParameters = function () { return [
        { type: _clients_api_service__WEBPACK_IMPORTED_MODULE_3__["ClientsApiService"] }
    ]; };
    ClientCreateOptionsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ClientCreateOptionsResolver);
    return ClientCreateOptionsResolver;
}());



/***/ }),

/***/ "./src/app/shared/fleio-api/client-user/client/client-list.resolver.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/fleio-api/client-user/client/client-list.resolver.ts ***!
  \*****************************************************************************/
/*! exports provided: ClientListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientListResolver", function() { return ClientListResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _clients_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clients-api.service */ "./src/app/shared/fleio-api/client-user/client/clients-api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ClientListResolver = /** @class */ (function () {
    function ClientListResolver(clientsApi) {
        this.clientsApi = clientsApi;
    }
    ClientListResolver.prototype.resolve = function (route, state) {
        return this.clientsApi.list(route.queryParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null); }));
    };
    ClientListResolver.ctorParameters = function () { return [
        { type: _clients_api_service__WEBPACK_IMPORTED_MODULE_3__["ClientsApiService"] }
    ]; };
    ClientListResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ClientListResolver);
    return ClientListResolver;
}());



/***/ }),

/***/ "./src/app/shared/fleio-api/client-user/client/client.resolver.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/fleio-api/client-user/client/client.resolver.ts ***!
  \************************************************************************/
/*! exports provided: ClientResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientResolver", function() { return ClientResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _clients_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clients-api.service */ "./src/app/shared/fleio-api/client-user/client/clients-api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ClientResolver = /** @class */ (function () {
    function ClientResolver(clientsApi) {
        this.clientsApi = clientsApi;
    }
    ClientResolver.prototype.resolve = function (route, state) {
        return this.clientsApi.get(route.params.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null); }));
    };
    ClientResolver.ctorParameters = function () { return [
        { type: _clients_api_service__WEBPACK_IMPORTED_MODULE_3__["ClientsApiService"] }
    ]; };
    ClientResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ClientResolver);
    return ClientResolver;
}());



/***/ }),

/***/ "./src/app/shared/fleio-api/cloud/clients/cloud-clients-api.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/fleio-api/cloud/clients/cloud-clients-api.service.ts ***!
  \*****************************************************************************/
/*! exports provided: CloudClientsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudClientsApiService", function() { return CloudClientsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/config.service */ "./src/app/shared/config/config.service.ts");
/* harmony import */ var _fleio_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../fleio-api.service */ "./src/app/shared/fleio-api/fleio-api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var CloudClientsApiService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CloudClientsApiService, _super);
    // noinspection JSUnusedGlobalSymbols
    function CloudClientsApiService(httpClient, config) {
        var _this = _super.call(this, config.getPanelApiUrl('openstack/clients')) || this;
        _this.httpClient = httpClient;
        _this.config = config;
        return _this;
    }
    CloudClientsApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
    ]; };
    CloudClientsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CloudClientsApiService);
    return CloudClientsApiService;
}(_fleio_api_service__WEBPACK_IMPORTED_MODULE_3__["FleioApiService"]));



/***/ })

}]);
//# sourceMappingURL=clients-clients-module-es5.js.map