webpackJsonp([1,5],{

/***/ 1000:
/***/ (function(module, exports) {

module.exports = "<div class=\"white frame p-3 ml-0\" style=\"height: 400px\">\n  <div layout=\"column\" style=\"height: 100%\">\n    <p class=\"bold light-gray\">{{title}}</p>\n    <p>Top Attachment Type</p>\n    <div id=\"graph-holder\" style=\"height: 100%; \">\n      <ngx-charts-pie-chart *ngIf=\"!selectedGraphHasNoData; else noDataTemplate\"\n                            [scheme]=\"colorScheme\"\n                            [results]=\"pieData\"\n                            [legend]=\"true\"\n                            [explodeSlices]=\"true\"\n                            [labels]=\"showLabels\"\n                            [doughnut]=\"true\"\n                            [gradient]=\"false\"\n                            [arcWidth]=\"0.1\">\n      </ngx-charts-pie-chart>\n      <ng-template #noDataTemplate>\n        <ngx-charts-pie-chart\n          [scheme]=\"NoDatacolorScheme\"\n          [results]=\"NoDatapieData\"\n          [legend]=\"true\"\n          [explodeSlices]=\"true\"\n          [labels]=\"false\"\n          [doughnut]=\"true\"\n          [gradient]=\"false\"\n          [arcWidth]=\"0.1\">\n        </ngx-charts-pie-chart>\n      </ng-template>\n    </div>\n  </div>\n</div>\n\n<style>\n\n</style>\n"

/***/ }),

/***/ 1001:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-align=\"space-between\" class=\"mb-4\">\n  <div flex=\"50\" class=\"p-5 white frame mr-3\" layout=\"row\" layout-align=\"center center\">\n    <p flex=\"66\" class=\"dashboard-top-titles text-center\">Total Emails Processed</p>\n    <p flex=\"33\" class=\"dashboard-top-figure\">{{totals.TotalEmailsProcessed}}</p>\n  </div>\n  <div flex=\"50\" class=\"p-5 white frame ml-3\" layout=\"row\" layout-align=\"center center\">\n    <p flex=\"66\" class=\"dashboard-top-titles text-center\">Total Hyperlinks Processed</p>\n    <p flex=\"33\" class=\"dashboard-top-figure\">{{totals.TotalUrls}}</p>\n  </div>\n</div>\n\n<div class=\"col-12 white frame pr-0 \" (click)=\"displayTotals('showTotals')\" style=\"cursor:pointer;\">\n  <div layout=\"row\" layout-align=\"end end\" flex=\"100\">\n    <div id=\"triangle-purple\"></div>\n  </div>\n  <div layout=\"row\" layout-align=\"center center\" class=\"pb-5 pt-3\">\n    <h4 class=\"dashboard-top-titles mr-3\">Total Attachments Processed</h4>\n    <h1 class=\" bold-dark-gray underlined-purple ml-3 dashboard-top-figure\">{{totals.TotalAttachmentProcessed.TotalResult}}</h1>\n  </div>\n</div>\n\n<style>\n  #triangle-purple {\n    width: 0;\n    height: 0;\n    border-top: 20px solid #9A1796;\n    border-left: 20px solid transparent;\n  }\n</style>\n"

/***/ }),

/***/ 1002:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 white frame pb-5\">\n  <div class=\"title-section\">\n    <h4 class=\"bold-dark-gray p-4\">WELCOME!</h4>\n  </div>\n  <div class=\"mt-5 mb-5 col-7\">\n    <small>This checklist will help you get started.</small>\n    <div class=\"row mt-5\">\n      <div col=\"3\">\n        <md-checkbox></md-checkbox>\n      </div>\n      <div class=\"col-9\">\n        <h5 class=\"bold-dark-gray mb-4\">Change your MX Record</h5>\n        <small>Access your account at your domain host and change the domain's MX record to SECUREMAIL.RE-SEC.COM.\n          Here's a directory of all domain hosts and hot to find your MX record.\n        </small>\n      </div>\n    </div>\n    <div class=\"row mt-5\">\n      <div col=\"3\">\n        <md-checkbox></md-checkbox>\n      </div>\n      <div class=\"col-9\">\n        <h5 class=\"bold-dark-gray mb-4\">Send a test email</h5>\n        <small>Make sure the MX record change was a success and that\n          we're up and running by sending a test email.\n        </small>\n        <div class=\"mt-3\">\n          <button class=\"btn btn-action-inverse ml-0\">Send Test Email</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"row mt-5\">\n      <div col=\"3\">\n        <md-checkbox></md-checkbox>\n      </div>\n      <div class=\"col-9\">\n        <h5 class=\"bold-dark-gray mb-4\">Customize Security Settings</h5>\n        <small>Create your company security policy by heading to the <a class=\"internal-link\">Security Settings</a>\n          section.\n        </small>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ 1003:
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"col-12 bg-white-shadow\">\n\n  <div class=\"mt-5 text-center\" *ngIf=\"!isEmailEmpty\">\n\n    <div class=\"title-section pt-4 pb-4\">\n      <p class=\"section-header pl-0\">BLOCKED EMAILS & ATTACHMENTS</p>\n    </div>\n    <p class=\"mail-result\">{{totalNumberOfMails}} Emails</p>\n    <td-data-table\n      #dataTable\n      [data]=\"emails\"\n      [columns]=\"columns\"\n      [sortable]=\"true\"\n      [selectable]=\"false\"\n      [sortBy]=\"query.sortField\"\n      [sortOrder]=\"query.sortOrder\"\n      (sortChange)=\"sort($event)\"\n      (rowSelect)=\"selectMail($event)\"\n      (selectAll)=\"selectAllMails($event)\">\n    </td-data-table>\n    <div class=\"md-padding\" *ngIf=\"!dataTable.hasData\" layout=\"row\" layout-align=\"center center\">\n      <h3>No results to display.</h3>\n    </div>\n    <td-paging-bar #pagingBar [pageSizes]=\"[5, 10, 15, 20]\" [total]=\"totalNumberOfMails\" (change)=\"page($event)\">\n      <span td-paging-bar-label hide-xs>Row per page:</span>\n      {{pagingBar.range}} <span hide-xs>of {{pagingBar.total}}</span>\n    </td-paging-bar>\n  </div>\n</div>\n\n\n<style>\n  .mail-result{\n    font-size: 18px;\n    color: #666666;\n    font-family: 'RobotoSlab-Light', 'Roboto Slab Light', 'Roboto Slab' !important;\n    font-weight: 500 !important;\n    font-style: normal !important;\n    text-align: left !important;\n    padding-top: 20px !important;\n    padding-bottom: 20px !important;\n  }\n</style>\n"

/***/ }),

/***/ 1004:
/***/ (function(module, exports) {

module.exports = "<div  id=\"reports-container\">\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 1005:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div *ngIf=\"!isFirstTime\" class=\"mb-5 mt-5\">\n    <div class=\"white frame\">\n      <div class=\"col-8 pl-0\">\n        <div layout=\"row\" class=\"search-container\" layout-align=\"start center\">\n          <label class=\"mr-5 mb-0 search-label\">ReSec Ticket ID</label>\n          <input type=\"text\" class=\"sob-input\" flex=\"50\" [(ngModel)]=\"query.ticketId\" (keyup.enter)=\"searchMails()\">\n          <button class=\"btn search-btn\" (click)=\"searchMails()\" [disabled]=\"!query.ticketId\" *ngIf=\"noSearchInitiated\">\n            <i class=\"fa fa-chevron-right\" aria-hidden=\"true\" style=\"font-size: 18px\"></i>\n          </button>\n          <button md-mini-fab (click)=\"emptyQuery()\" *ngIf=\"!noSearchInitiated\" class=\"ml-3\">X</button>\n        </div>\n        <!-- search result section -->\n        <div class=\"pb-5\" style=\"padding-left: 40px\">\n          <div *ngIf=\"!noResultFound && !noSearchInitiated\">\n            <div class=\"mt-5 mb-4\" *ngIf=\"!noResultFound\">\n              <div class=\"row mb-3\">\n                <p class=\"col-3\">Date</p>\n                <p class=\"bold-dark-gray col\">{{emails.SanitizationDate | date:'medium'}}</p>\n              </div>\n              <div class=\"row mb-3\">\n                <p class=\" col-3\">Reason</p>\n                <p class=\"bold-dark-gray col\">{{emails['Reason Blocked']}}</p>\n              </div>\n              <div class=\"row mb-3\">\n                <p class=\" col-3\">Recipient</p>\n                <p class=\"bold-dark-gray col\">{{emails.Recipient}}</p>\n              </div>\n              <div class=\"row mb-3\">\n                <p class=\"col-3\">Sender</p>\n                <p class=\"bold-dark-gray col\">{{emails.Sender}}</p>\n              </div>\n              <div class=\"row mb-3\">\n                <p class=\" col-3\">Subject</p>\n                <p class=\"bold-dark-gray col\">{{emails.Subject}}</p>\n              </div>\n              <div class=\"row mb-3\" *ngIf=\"!mailHasNoAttachments\">\n                <p class=\" col-3\">Attached Files</p>\n                <p class=\"bold-dark-gray col\">{{emails['Attached Files']}}</p>\n              </div>\n            </div>\n\n            <table class=\"table table-responsive mt-5\" *ngIf=\"!mailHasNoAttachments\" flex=\"85\">\n              <thead>\n              <th class=\"col-2\">Attachment</th>\n              <th>Reason</th>\n              </thead>\n              <tbody id=\"search-mail-body\">\n                <tr *ngFor=\"let attachment of emails['Attached Files Outcomes'] | DictionaryIteratorPipe: 'true'\">\n                  <td>{{attachment.key}}</td>\n                  <td>{{attachment.value}}</td>\n                </tr>\n              </tbody>\n            </table>\n\n            <div class=\"row mb-5\">\n              <button class=\"btn btn-neutral-yellow-hvr\" layout=\"row\" layout-align=\"center center\"\n                      (click)=\"performAction(emails.SanitizationId, 'ReleaseEmailToRecipient')\">\n                <md-icon class=\"center-icon mr-3\" svgIcon=\"releaseMail\"></md-icon>\n                Release to Recipient\n              </button>\n              <button class=\"btn btn-neutral-yellow-hvr\"\n                      (click)=\"performAction(emails.SanitizationId, 'ForwardToAdmin')\"\n                      layout=\"row\" layout-align=\"center center\">\n                <md-icon class=\"center-icon mr-3\" svgIcon=\"forwardMail\"></md-icon>\n                Forward To Admin\n              </button>\n            </div>\n          </div>\n          <div *ngIf=\"noResultFound && !noSearchInitiated\" class=\"mt-5 alert alert-warning\">\n            <p>no result found</p>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <div *ngIf=\"isFirstTime\" class=\"col text-center white frame\">\n    <div class=\"mt-5 mb-5 p-5\">\n      <p class=\"bold-dark-gray\">\n        0 email</p>\n      <p>No emails have been processed yet. Once they do, you'll see them listed here. Head to the dashboard, complete\n        your\n        checklist and make sure you're up and running with ReSecure Mail.</p>\n    </div>\n  </div>\n</div>\n\n\n<style>\n  .search-label {\n    font-weight: 500;\n    color: #666666;\n  }\n</style>\n"

/***/ }),

/***/ 1006:
/***/ (function(module, exports) {

module.exports = "<p>1-800-455-1234</p>\n<p>support@resec.com</p>\n"

/***/ }),

/***/ 1007:
/***/ (function(module, exports) {

module.exports = "<div class=\"outer\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFill>\n  <h3 *ngIf=\"wrongId\" color=\"accent\">Please enter valid credentials</h3>\n  <div class=\"frame white\" style=\"width: 40%\">\n    <div layout-margin layout=\"row\" layout-align=\"center center\" class=\"mt-5 mb-2\">\n      <md-icon style=\"height:60px; width: auto\" svgIcon=\"resecLoginLogo\"></md-icon>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <div [hidden]=\"submitted\" fxFlex=\"90\">\n        <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\" id=\"form-container\" fxLayout=\"column\" fxLayoutGap=\"20px\"\n              fxLayoutWrap>\n          <md-input-container class=\"full-width\" dividerColor=\"primary\" *ngIf=\"!urlHasServer\">\n            <input mdInput placeholder=\"Server\" type=\"text\" id=\"server\" required [(ngModel)]=\"user.server\" name=\"server\"\n                   #server=\"ngModel\">\n            <label [hidden]=\"server.valid || server.pristine\" class=\"wrong-input\">Server is required</label>\n          </md-input-container>\n          <md-input-container class=\"full-width\" dividerColor=\"primary\">\n            <input mdInput type=\"text\" placeholder=\"Username\" id=\"username\" required [(ngModel)]=\"user.username\"\n                   name=\"username\" #username=\"ngModel\">\n            <label [hidden]=\"username.valid || username.pristine\" class=\"wrong-input\">Username is required</label>\n          </md-input-container>\n          <md-input-container class=\"full-width\" dividerColor=\"primary\">\n            <input mdInput type=\"password\" placeholder=\"Password\" id=\"password\" required [(ngModel)]=\"user.password\"\n                   name=\"password\" #password=\"ngModel\">\n            <label [hidden]=\"password.valid || password.pristine\" class=\"wrong-input\">Password is incorrect</label>\n          </md-input-container>\n          <button type=\"submit\"  [disabled]=\"!loginForm.valid\" class=\"btn btn-action-yellow-big hvr-glow\">Sign in</button>\n        </form>\n      </div>\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <md-spinner *ngIf=\"checkingUser\" color=\"primary\"></md-spinner>\n      </div>\n    </div>\n  </div>\n</div>\n\n<style>\n  #login-btn{\n    background-color: purple;\n    color: white;\n  }\n</style>\n"

/***/ }),

/***/ 1008:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center center\">\n  <div class=\"white frame p-5\" style=\"width: 60%; margin-top: 10em\">\n    <div class=\"text-center m-3\">\n      <h4 class=\"mb-3 bold \">Change Password</h4>\n    </div>\n    <form #changePassword=\"ngForm\">\n      <div class=\"mb-4 mt-2\" layout=\"row\" layout-align=\"space-between center\" layout-margin>\n        <p flex=\"35\" class=\"reset-field ml-0\">Current Password</p>\n        <input #currentPassword=\"ngModel\" name=\"currentPassword\" minlength=\"6\" flex=\"50\" class=\"sob-input\" required\n               [(ngModel)]=\"passwordsToSend.CurrentPassword\" type=\"password\">\n        <div flex>\n          <i class=\"fa fa-check-circle-o fa-2x green-icon\" aria-hidden=\"true\"\n             *ngIf=\"oldPasswordIsValid(passwordsToSend.CurrentPassword)\"></i>\n        </div>\n      </div>\n      <div class=\"mb-4\" layout=\"row\" layout-align=\"space-between center\" layout-margin>\n        <p flex=\"35\" class=\"reset-field ml-0\">New Password</p>\n        <input #NewPassword='ngModel' flex=\"50\" class=\"sob-input\" required [(ngModel)]=\"passwordsToSend.NewPassword\"\n               type=\"password\" name=\"NewPassword\">\n        <div flex>\n          <i class=\"fa fa-check-circle-o fa-2x green-icon\" aria-hidden=\"true\"\n             *ngIf=\"fieldIsValid(passwordsToSend.NewPassword)\"></i>\n        </div>\n      </div>\n      <div class=\"mb-4\" layout=\"row\" layout-align=\"space-between center\" layout-margin>\n        <p flex=\"35\" class=\"reset-field ml-0\">Confirm New Password</p>\n        <input #ConfirmNewPassword=\"ngModel\" flex=\"50\" class=\"sob-input\" required\n               [(ngModel)]=\"passwordsToSend.ConfirmNewPassword\" type=\"password\" name=\"ConfirmNewPassword\">\n        <div flex>\n          <i class=\"fa fa-check-circle-o fa-2x green-icon\" aria-hidden=\"true\"\n             *ngIf=\"passwordsMatch(passwordsToSend.NewPassword, passwordsToSend.ConfirmNewPassword)\"></i>\n        </div>\n      </div>\n      <div class=\"row justify-content-center\">\n        <button type=\"button\" class=\"btn btn-action-yellow-big\"\n                [disabled]=\"!(passwordsAreValid(passwordsToSend.NewPassword, passwordsToSend.ConfirmNewPassword))\"\n                (click)=\"applyChangePassword()\">CHANGE\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n<style>\n  .green-icon {\n    color: #72B895 !important;\n  }\n\n  .reset-field {\n    margin-bottom: 0px !important;\n    color: #666666 !important;\n    font-weight: 600 !important;\n  }\n</style>\n"

/***/ }),

/***/ 1009:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" *ngIf=\"!dataIsLoading\">\n  <div layout=\"row\" flex=\"100\" style=\"margin-top: 3em;\">\n    <button class=\"btn btn-neutral-yellow-hvr\" (click)='newDptQuery(true)'>+ Add Department</button>\n  </div>\n  <div layout=\"row\" layout-margin>\n\n    <existing-exceptions flex=\"25\" id=\"exception-list\" [noSettingsExist]=\"noSettingsExist\"\n                         [exceptionsList]=\"exceptionsList\" [currentSettings]=\"settings\"\n                         [newDepartmentRequired]=\"newDepartment\"\n                         (onSelect)=\"selectDepartment($event)\" class=\"mt-0 mr-0\"></existing-exceptions>\n    <div flex class=\"mt-0\">\n      <div *ngIf=\"!noSettingsExist && !newDepartment\" flex>\n        <exception-settings\n          [settings]=\"settings\"\n          (onSave)='postNewSettings($event)' (onDelete)='deletePolicy($event)'>\n        </exception-settings>\n      </div>\n      <div *ngIf=\"newDepartment\" flex>\n        <new-exception (onCancel)=\"cancelCreation($event)\" (onSave)=\"postNewSettings($event)\"></new-exception>\n      </div>\n      <p *ngIf=\"!newDepartment && noSettingsExist\">No setting currently exist</p>\n    </div>\n  </div>\n\n\n</div>\n<!--\n<div layout=\"column\" layout-align=\"center center\" *ngIf=\"dataIsLoading\" style=\"min-height: 80vh\">\n  <md-spinner></md-spinner>\n</div>\n-->\n"

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmailComponent = (function () {
    function EmailComponent() {
        this.convertToDate = function (rawDate) {
            var date = new Date(rawDate);
            return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
        };
    }
    EmailComponent.prototype.ngOnInit = function () {
    };
    ;
    return EmailComponent;
}());
EmailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-email',
        template: __webpack_require__(1004),
        styles: [__webpack_require__(433)]
    }),
    __metadata("design:paramtypes", [])
], EmailComponent);

//# sourceMappingURL=email.component.js.map

/***/ }),

/***/ 1010:
/***/ (function(module, exports) {

module.exports = "\n<div layout=\"column\">\n  <md-list *ngIf=\"!noSettingsExist\" class=\"pt-0\">\n    <md-list-item *ngIf=\"newDepartmentRequired\" class=\"selectedPolicy dpt-name\">New Department</md-list-item>\n    <md-list-item *ngFor=\"let exception of exceptionsList | DictionaryIteratorPipe\" class=\"dpt-list\"\n                  (click)=\"selectDepartment(exception.policyName)\"\n                  [ngClass]=\"{'selectedPolicy': isCurrentPolicy(exception.policyName) && !newDepartmentRequired}\">\n      <p class=\"dpt-name fs-13\" md-line>{{exception.policyName}}</p>\n      <p md-line class=\"fs-13 dpt-users\">{{exception.exceptions | ArrayLength}} users</p>\n    </md-list-item>\n  </md-list>\n</div>\n"

/***/ }),

/***/ 1011:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\">\n  <div id=\"actionCenter\" class=\"white frame margin-top\">\n    <div class=\"title-section\" layout=\"row\" layout-align=\"space-between center\" layout-margin>\n      <div flex=\"70\" layout=\"row\" layout-align=\"space-between center\">\n        <p class=\"mini-heading\" flex=\"30\">Department Name</p>\n        <input class=\"sob-input\" [(ngModel)]=\"settings.policyName\" flex>\n      </div>\n      <p class=\"inner-link\" style=\"text-align: right !important\" (click)=\"cancelCreation(false)\" flex>Cancel new\n        department</p>\n    </div>\n\n    <div layout=\"row\" layout-align=\"space-between start\" layout-margin class=\"mt-5 mb-5 ml-2 mr-3\">\n      <div layout=\"column\" layout-align=\"start space-between \" flex=\"70\">\n        <div layout=\"row\" layout-align=\"space-between start\" class=\"mb-4\">\n          <p class=\"mini-heading\" flex=\"30\">Department Users </p>\n          <div layout=\"column\" flex>\n          <textarea [(ngModel)]=\"addedUsers\" class=\"custom-textarea\" rows=\"7\"\n                    placeholder=\"Copy and past email addresses separated by a comma (,)\"></textarea>\n            <div layout=\"row\" layout-align=\"start\" class=\"mt-3\">\n              <p class=\"inner-link fs-11\">Upload .csv</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n\n  <div class=\"white frame mt-4\" id=\"withCdr\">\n    <div class=\"title-section\" layout-padding>\n      <h4 class=\"sob-title\">ATTACHMENTS PROCESSED WITH CDR</h4>\n    </div>\n    <div class=\"content-holder pb-42px\" layout=\"row\">\n      <div layout=\"column\" flex>\n        <div id=\"explanation\">\n          <p class=\"fs-13\">CDR (Content Disarm and Reconstruction) means that a secure version of<br> the\n            file is created and the email is received seamlessly to the end user.</p>\n        </div>\n        <div layout=\"row\" class=\"mt-30px\">\n          <div layout=\"column\" flex=\"30\">\n            <p class=\"fs-16\">Documents</p>\n            <p class=\"fs-11\">.doc, .docx, .pdf, .pages, .gdoc</p>\n          </div>\n          <div layout-align=\"space-between start\" flex=\"55\" layout=\"row\">\n            <div flex=\"45\" flex-gt-lg=\"25\" class=\"text-center\" layout=\"column\">\n              <p class=\"fs-16 mb-12px\">High</p>\n              <p class=\"fs-11\">Active content & <br>macros NOT removed</p>\n            </div>\n            <div flex>\n              <md-slider [(ngModel)]=\"settings.AttachmentsProcessedLevels.documents\"\n                         [max]=\"1\"\n                         style=\"width: 100%\"\n                         [min]=\"0\"\n                         [step]=\"1\"\n                         [value]=\"1\"\n                         [vertical]=\"vertical\"\n                         color=\"accent\">\n              </md-slider>\n            </div>\n            <div flex=\"35\" layout=\"column\" class=\"ml-19px\">\n              <p class=\"fs-16 mb-12px\">Highest</p>\n              <p class=\"fs-11\">Active content & <br>macros removed</p>\n            </div>\n          </div>\n        </div>\n        <div layout=\"row\" class=\"mt-30px\">\n          <div layout=\"column\" flex=\"30\">\n            <p class=\"fs-16\">Spreadsheets</p>\n            <p class=\"fs-11\">.csv, .xls, .xlsx, .gsheet</p>\n          </div>\n          <div flex=\"55\" layout-align=\"space-between center\" layout=\"row\">\n            <div flex=\"45\" flex-gt-lg=\"25\">\n              <p class=\"fs-16 text-center\">High</p>\n            </div>\n            <div flex>\n              <md-slider [(ngModel)]=\"settings.AttachmentsProcessedLevels.spreadsheets\"\n                         [max]=\"1\"\n                         style=\"width: 100%\"\n                         [min]=\"0\"\n                         [step]=\"1\"\n                         [value]=\"1\"\n                         [vertical]=\"vertical\"\n                         color=\"accent\">\n              </md-slider>\n            </div>\n            <div flex=\"35\" class=\"ml-19px\">\n              <p class=\"fs-16\">Highest</p>\n            </div>\n          </div>\n        </div>\n        <div layout=\"row\" class=\"mt-30px\">\n          <div layout=\"column\" flex=\"30\">\n            <p class=\"fs-16\">Images</p>\n            <p class=\"fs-11\">.png, .jpeg, .jpg, .gif</p>\n          </div>\n          <div flex=\"55\" layout-align=\"space-between center\" layout=\"row\">\n            <div flex=\"45\" flex-gt-lg=\"25\">\n              <p class=\"fs-16 text-center\">High</p>\n            </div>\n            <div flex>\n              <md-slider [(ngModel)]=\"settings.AttachmentsProcessedLevels.images\"\n                         [max]=\"1\"\n                         style=\"width: 100%\"\n                         [min]=\"0\"\n                         [step]=\"1\"\n                         [value]=\"1\"\n                         [vertical]=\"vertical\"\n                         color=\"accent\">\n              </md-slider>\n            </div>\n            <div flex=\"35\" class=\"ml-19px\">\n              <p class=\"fs-16\">Highest</p>\n            </div>\n          </div>\n        </div>\n        <div layout=\"row\" class=\"mt-30px\">\n          <div layout=\"column\" flex=\"30\">\n            <p class=\"fs-16\">Presentations</p>\n            <p class=\"fs-11\">.ppt, .pptx, .keynote, .gslides</p>\n          </div>\n          <div flex=\"55\" layout-align=\"space-between center\" layout=\"row\">\n            <div flex=\"45\" flex-gt-lg=\"25\">\n              <p class=\"fs-16 text-center\">High</p>\n            </div>\n            <div flex>\n              <md-slider [(ngModel)]=\"settings.AttachmentsProcessedLevels.presentations\"\n                         [max]=\"1\"\n                         style=\"width: 100%\"\n                         [min]=\"0\"\n                         [step]=\"1\"\n                         [value]=\"1\"\n                         [vertical]=\"vertical\"\n                         color=\"accent\">\n              </md-slider>\n            </div>\n            <div flex=\"35\" class=\"ml-19px\">\n              <p class=\"fs-16\">Highest</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"white frame mt-4\" id=\"specialAttachments\">\n    <div class=\"title-section\" layout-padding>\n      <h4 class=\"sob-title\">SPECIAL ATTACHMENTS</h4>\n    </div>\n    <div class=\"content-holder pb-42px\" layout=\"row\">\n      <div layout=\"column\" flex>\n        <div layout=\"row\" class=\"mt-30px\">\n          <div layout=\"column\" flex=\"30\">\n            <p class=\"fs-16\">Signed Documents</p>\n          </div>\n          <div layout-align=\"space-between start\" flex=\"55\" layout=\"row\">\n            <div flex=\"45\" flex-gt-lg=\"25\" class=\"text-center\" layout=\"column\">\n              <p class=\"fs-16 mb-12px\">Signature intact</p>\n              <p class=\"fs-11\">Document is not processed with CDR</p>\n            </div>\n            <div flex>\n              <md-slider [(ngModel)]=\"settings.SpecialAttachments.signedDocuments\"\n                         [max]=\"1\"\n                         style=\"width: 100%\"\n                         [min]=\"0\"\n                         [step]=\"1\"\n                         [value]=\"1\"\n                         [vertical]=\"vertical\"\n                         color=\"accent\">\n              </md-slider>\n            </div>\n            <div flex=\"35\" layout=\"column\" class=\"ml-19px\">\n              <p class=\"fs-16 mb-12px\">Signature is not recreated</p>\n              <p class=\"fs-11\">CDR is processed accordingly to existing policy</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"white frame mt-4\" id=\"general\">\n    <div class=\"title-section\" layout-padding>\n      <h4 class=\"sob-title\">GENERAL</h4>\n    </div>\n    <div class=\"content-holder pb-42px\" layout=\"row\">\n      <div layout=\"column\" flex>\n        <div layout=\"row\" class=\"mt-30px\">\n          <div layout=\"column\" flex=\"30\">\n            <p class=\"fs-16 mb-3\">Hyperlinks</p>\n            <p class=\"fs-11\">This includes links in the body <br>of an email and\n              in<br> any documents attached</p>\n          </div>\n          <div layout-align=\"space-between start\" flex=\"55\" layout=\"row\">\n            <div flex=\"45\" flex-gt-lg=\"25\" class=\"text-center\" layout=\"column\">\n              <p class=\"fs-16 mb-12px\">High</p>\n              <p class=\"fs-11\">Fix and disabled based on URL reputation</p>\n            </div>\n            <div flex>\n              <md-slider [(ngModel)]=\"settings.selectedSafeLinksOperation\"\n                         [max]=\"1\"\n                         style=\"width: 100%\"\n                         [min]=\"0\"\n                         [step]=\"1\"\n                         [value]=\"1\"\n                         [vertical]=\"vertical\"\n                         color=\"accent\">\n              </md-slider>\n            </div>\n            <div flex=\"35\" layout=\"column\" class=\"ml-19px\">\n              <p class=\"fs-16 mb-12px\">Highest</p>\n              <p class=\"fs-11\">Disabled hyperlinks</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n\n  <div class=\"white frame mt-4\" id=\"withCdr\">\n    <div class=\"title-section\" layout-padding>\n      <h4 class=\"sob-title\">ATTACHMENTS WITHOUT CDR</h4>\n    </div>\n    <div class=\"content-holder pb-42px\" layout=\"row\">\n      <div layout=\"column\" flex>\n        <div layout=\"row\" class=\"mt-30px\">\n          <div layout=\"column\" flex=\"30\">\n            <p class=\"fs-16\">Videos/Sound</p>\n            <p class=\"fs-11\">.mp4, .mp3</p>\n          </div>\n          <div layout-align=\"space-between center\" flex=\"55\" layout=\"row\">\n            <div flex=\"45\" flex-gt-lg=\"25\" class=\"text-center\" layout=\"column\">\n              <p class=\"fs-16\">Allow</p>\n            </div>\n            <div flex>\n              <md-slider [(ngModel)]=\"settings.AttachmentsWithoutCdr.videoSound\"\n                         [max]=\"1\"\n                         style=\"width: 100%\"\n                         [min]=\"0\"\n                         [step]=\"1\"\n                         [value]=\"1\"\n                         [vertical]=\"vertical\"\n                         color=\"accent\">\n              </md-slider>\n            </div>\n            <div flex=\"35\" layout=\"column\" class=\"ml-19px\">\n              <p class=\"fs-16\">Block</p>\n            </div>\n          </div>\n        </div>\n        <div layout=\"row\" class=\"mt-30px\">\n          <div layout=\"column\" flex=\"30\">\n            <p class=\"fs-16\">Applications/Scripts</p>\n            <p class=\"fs-11\">.dmg, .exe</p>\n          </div>\n          <div layout-align=\"space-between center\" flex=\"55\" layout=\"row\">\n            <div flex=\"45\" flex-gt-lg=\"25\" class=\"text-center\" layout=\"column\">\n              <p class=\"fs-16 \">Allow</p>\n            </div>\n            <div flex>\n              <md-slider [(ngModel)]=\"settings.AttachmentsWithoutCdr.applicationsScripts\"\n                         [max]=\"1\"\n                         style=\"width: 100%\"\n                         [min]=\"0\"\n                         [step]=\"1\"\n                         [vertical]=\"vertical\"\n                         color=\"accent\">\n              </md-slider>\n            </div>\n            <div flex=\"35\" layout=\"column\" class=\"ml-19px\">\n              <p class=\"fs-16\">Block</p>\n            </div>\n          </div>\n        </div>\n        <div layout=\"row\" class=\"mt-30px\">\n          <div layout=\"column\" flex=\"30\">\n            <p class=\"fs-16\">Unrecognized Files</p>\n          </div>\n          <div layout-align=\"space-between center\" flex=\"55\" layout=\"row\">\n            <div flex=\"45\" flex-gt-lg=\"25\" class=\"text-center\" layout=\"column\">\n              <p class=\"fs-16 mb-12px\">Allow</p>\n            </div>\n            <div flex>\n              <md-slider [(ngModel)]=\"settings.AttachmentsWithoutCdr.unrecognizedFiles\"\n                         [max]=\"1\"\n                         style=\"width: 100%\"\n                         [min]=\"0\"\n                         [step]=\"1\"\n                         [value]=\"1\"\n                         [vertical]=\"vertical\"\n                         color=\"accent\">\n              </md-slider>\n            </div>\n            <div flex=\"35\" layout=\"column\" class=\"ml-19px\">\n              <p class=\"fs-16 mb-12px\">Block</p>\n            </div>\n          </div>\n        </div>\n        <div layout=\"row\" class=\"mt-30px\">\n          <div layout=\"column\" flex=\"30\">\n            <p class=\"fs-16\">Password Protected</p>\n            <p class=\"fs-11\">A secure version of an attachment can't be made when it is password protected.</p>\n          </div>\n          <div layout-align=\"space-between center\" flex=\"55\" layout=\"row\">\n            <div flex=\"45\" flex-gt-lg=\"25\" class=\"text-center\" layout=\"column\">\n              <p class=\"fs-16 \">Allow</p>\n            </div>\n            <div flex>\n              <md-slider [(ngModel)]=\"settings.SpecialAttachments.passwordProtected\"\n                         [max]=\"1\"\n                         style=\"width: 100%\"\n                         [min]=\"0\"\n                         [step]=\"1\"\n                         [value]=\"1\"\n                         [vertical]=\"vertical\"\n                         color=\"accent\">\n              </md-slider>\n            </div>\n            <div flex=\"35\" layout=\"column\" class=\"ml-19px\">\n              <p class=\"fs-16 \">Block</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n\n  <div id=\"save-settings-exception\" layout=\"row\" layout-align=\"center center\" class=\"mt-4 mb-5\">\n    <button [disabled]=\"newExceptionHasEmail()\" class=\"btn btn-action-yellow-big hvr-glow\"\n            (click)=\"saveSettings(settings)\">APPLY\n    </button>\n  </div>\n\n</div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ 1012:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\">\n  <div id=\"actionCenter\" class=\"white frame margin-top\">\n    <div class=\"title-section\" layout-padding layout=\"row\" layout-align=\"space-between start\" layout-margin>\n      <h4>{{settings.policyName}}</h4>\n      <p class=\"inner-link\" (click)=\"deletePolicy(settings)\">Delete this department</p>\n    </div>\n\n    <div layout=\"row\" layout-align=\"space-between start\" layout-margin class=\"mt-5 mb-5 ml-2 mr-3\">\n      <div layout=\"column\" layout-align=\"start space-between \" flex=\"80\">\n        <div *ngIf=\"addingUsers\" layout=\"row\" layout-align=\"space-between start\" flex=\"80\" class=\"mb-4\">\n          <p class=\"mini-heading\" flex=\"30\">Department Users </p>\n          <div layout=\"column\" flex>\n          <textarea [(ngModel)]=\"addedUsers\" class=\"custom-textarea\" rows=\"7\"\n                    placeholder=\"Copy and past email addresses separated by a comma (,)\"></textarea>\n            <div layout=\"row\" layout-align=\"start\" class=\"mt-3\">\n              <td-file-upload #singleFileUpload (upload)=\"uploadEvent($event)\"\n                              (cancel)=\"cancelEvent()\" accept=\".csv\">\n                <md-icon>file_upload</md-icon>\n                <span>{{ singleFileUpload.files?.name }}</span>\n                <ng-template td-file-input-label>\n                  <md-icon>attach_file</md-icon>\n                  <span>Upload .csv</span>\n                </ng-template>\n              </td-file-upload>\n            </div>\n          </div>\n        </div>\n        <div layout=\"row\" layout-align=\"space-between start\" flex=\"80\">\n          <div layout-wrap layout=\"row\" flex=\"80\">\n            <p *ngFor=\"let user of settings.exceptions |slice:0:numberOfMaxItems\" layout=\"row\"\n               layout-align=\"space-between center\" class=\"user-chips m-2\">\n              {{user}} <span (click)=\"deleteUser(user)\" class=\"ml-2\">x</span>\n            </p>\n          </div>\n          <div style=\"margin-top: 0.4em\" *ngIf=\"!notEnoughUsers()\">\n            <p class=\"inner-link\" (click)='displayRemainingItems()'\n               *ngIf=\"moreItemsToDisplay()\">\n              see {{settings.exceptions | RemainingItems: numberOfMaxItems}} more</p>\n            <p class=\"inner-link\" (click)='displayLessItems()'\n               *ngIf=\"!moreItemsToDisplay()\">\n              see less</p>\n          </div>\n        </div>\n      </div>\n      <button class=\"btn btn-neutral-yellow-hvr\" flex=\"15\" (click)=\"addUsers(true)\" *ngIf=\"!addingUsers\">Add users\n      </button>\n      <button class=\"btn btn-action\" flex=\"15\" (click)=\"addUsers(false)\" *ngIf=\"addingUsers\">Done</button>\n\n    </div>\n\n  </div>\n\n\n  <div class=\"white frame mt-4\" id=\"withCdr\">\n    <div class=\"title-section\" layout-padding>\n      <h4 class=\"sob-title\">ATTACHMENTS PROCESSED WITH CDR</h4>\n    </div>\n    <div class=\"content-holder pb-42px\" layout=\"row\">\n      <div layout=\"column\" flex>\n        <div id=\"explanation\">\n          <p class=\"fs-13\">CDR (Content Disarm and Reconstruction) means that a secure version of<br> the\n            file is created and the email is received seamlessly to the end user.</p>\n        </div>\n        <div layout=\"row\" class=\"mt-30px\">\n          <div layout=\"column\" flex=\"30\">\n            <p class=\"fs-16\">Documents</p>\n            <p class=\"fs-11\">.doc, .docx, .pdf, .pages, .gdoc</p>\n          </div>\n          <div layout-align=\"space-between start\" flex=\"55\" layout=\"row\">\n            <div flex=\"45\" flex-gt-lg=\"25\" class=\"text-center\" layout=\"column\">\n              <p class=\"fs-16 mb-12px\">High</p>\n              <p class=\"fs-11\">Active content & <br>macros NOT removed</p>\n            </div>\n            <div flex>\n              <md-slider [(ngModel)]=\"settings.AttachmentsProcessedLevels.documents\"\n                         [max]=\"1\"\n                         style=\"width: 100%\"\n                         [min]=\"0\"\n                         [step]=\"1\"\n                         [value]=\"1\"\n                         [vertical]=\"vertical\"\n                         color=\"accent\">\n              </md-slider>\n            </div>\n            <div flex=\"35\" layout=\"column\" class=\"ml-19px\">\n              <p class=\"fs-16 mb-12px\">Highest</p>\n              <p class=\"fs-11\">Active content & <br>macros removed</p>\n            </div>\n          </div>\n        </div>\n        <div layout=\"row\" class=\"mt-30px\">\n          <div layout=\"column\" flex=\"30\">\n            <p class=\"fs-16\">Spreadsheets</p>\n            <p class=\"fs-11\">.csv, .xls, .xlsx, .gsheet</p>\n          </div>\n          <div flex=\"55\" layout-align=\"space-between center\" layout=\"row\">\n            <div flex=\"45\" flex-gt-lg=\"25\">\n              <p class=\"fs-16 text-center\">High</p>\n            </div>\n            <div flex>\n              <md-slider [(ngModel)]=\"settings.AttachmentsProcessedLevels.spreadsheets\"\n                         [max]=\"1\"\n                         style=\"width: 100%\"\n                         [min]=\"0\"\n                         [step]=\"1\"\n                         [value]=\"1\"\n                         [vertical]=\"vertical\"\n                         color=\"accent\">\n              </md-slider>\n            </div>\n            <div flex=\"35\" class=\"ml-19px\">\n              <p class=\"fs-16\">Highest</p>\n            </div>\n          </div>\n        </div>\n        <div layout=\"row\" class=\"mt-30px\">\n          <div layout=\"column\" flex=\"30\">\n            <p class=\"fs-16\">Images</p>\n            <p class=\"fs-11\">.png, .jpeg, .jpg, .gif</p>\n          </div>\n          <div flex=\"55\" layout-align=\"space-between center\" layout=\"row\">\n            <div flex=\"45\" flex-gt-lg=\"25\">\n              <p class=\"fs-16 text-center\">High</p>\n            </div>\n            <div flex>\n              <md-slider [(ngModel)]=\"settings.AttachmentsProcessedLevels.images\"\n                         [max]=\"1\"\n                         style=\"width: 100%\"\n                         [min]=\"0\"\n                         [step]=\"1\"\n                         [value]=\"1\"\n                         [vertical]=\"vertical\"\n                         color=\"accent\">\n              </md-slider>\n            </div>\n            <div flex=\"35\" class=\"ml-19px\">\n              <p class=\"fs-16\">Highest</p>\n            </div>\n          </div>\n        </div>\n        <div layout=\"row\" class=\"mt-30px\">\n          <div layout=\"column\" flex=\"30\">\n            <p class=\"fs-16\">Presentations</p>\n            <p class=\"fs-11\">.ppt, .pptx, .keynote, .gslides</p>\n          </div>\n          <div flex=\"55\" layout-align=\"space-between center\" layout=\"row\">\n            <div flex=\"45\" flex-gt-lg=\"25\">\n              <p class=\"fs-16 text-center\">High</p>\n            </div>\n            <div flex>\n              <md-slider [(ngModel)]=\"settings.AttachmentsProcessedLevels.presentations\"\n                         [max]=\"1\"\n                         style=\"width: 100%\"\n                         [min]=\"0\"\n                         [step]=\"1\"\n                         [value]=\"1\"\n                         [vertical]=\"vertical\"\n                         color=\"accent\">\n              </md-slider>\n            </div>\n            <div flex=\"35\" class=\"ml-19px\">\n              <p class=\"fs-16\">Highest</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"white frame mt-4\" id=\"specialAttachments\">\n    <div class=\"title-section\" layout-padding>\n      <h4 class=\"sob-title\">SPECIAL ATTACHMENTS</h4>\n    </div>\n    <div class=\"content-holder pb-42px\" layout=\"row\">\n      <div layout=\"column\" flex>\n        <div layout=\"row\" class=\"mt-30px\">\n          <div layout=\"column\" flex=\"30\">\n            <p class=\"fs-16\">Signed Documents</p>\n          </div>\n          <div layout-align=\"space-between start\" flex=\"55\" layout=\"row\">\n            <div flex=\"45\" flex-gt-lg=\"25\" class=\"text-center\" layout=\"column\">\n              <p class=\"fs-16 mb-12px\">Signature intact</p>\n              <p class=\"fs-11\">Document is not processed with CDR</p>\n            </div>\n            <div flex>\n              <md-slider [(ngModel)]=\"settings.SpecialAttachments.signedDocuments\"\n                         [max]=\"1\"\n                         style=\"width: 100%\"\n                         [min]=\"0\"\n                         [step]=\"1\"\n                         [value]=\"1\"\n                         [vertical]=\"vertical\"\n                         color=\"accent\">\n              </md-slider>\n            </div>\n            <div flex=\"35\" layout=\"column\" class=\"ml-19px\">\n              <p class=\"fs-16 mb-12px\">Signature is not recreated</p>\n              <p class=\"fs-11\">CDR is processed accordingly to existing policy</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"white frame mt-4\" id=\"general\">\n    <div class=\"title-section\" layout-padding>\n      <h4 class=\"sob-title\">GENERAL</h4>\n    </div>\n    <div class=\"content-holder pb-42px\" layout=\"row\">\n      <div layout=\"column\" flex>\n        <div layout=\"row\" class=\"mt-30px\">\n          <div layout=\"column\" flex=\"30\">\n            <p class=\"fs-16 mb-3\">Hyperlinks</p>\n            <p class=\"fs-11\">This includes links in the body <br>of an email and\n              in<br> any documents attached</p>\n          </div>\n          <div layout-align=\"space-between start\" flex=\"55\" layout=\"row\">\n            <div flex=\"45\" flex-gt-lg=\"25\" class=\"text-center\" layout=\"column\">\n              <p class=\"fs-16 mb-12px\">High</p>\n              <p class=\"fs-11\">Fix and disabled based on URL reputation</p>\n            </div>\n            <div flex>\n              <md-slider [(ngModel)]=\"settings.handleLinks\"\n                         [max]=\"1\"\n                         style=\"width: 100%\"\n                         [min]=\"0\"\n                         [step]=\"1\"\n                         [value]=\"1\"\n                         [vertical]=\"vertical\"\n                         color=\"accent\">\n              </md-slider>\n            </div>\n            <div flex=\"35\" layout=\"column\" class=\"ml-19px\">\n              <p class=\"fs-16 mb-12px\">Highest</p>\n              <p class=\"fs-11\">Disabled hyperlinks</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n\n  <div class=\"white frame mt-4\" id=\"withCdr\">\n    <div class=\"title-section\" layout-padding>\n      <h4 class=\"sob-title\">ATTACHMENTS WITHOUT CDR</h4>\n    </div>\n    <div class=\"content-holder pb-42px\" layout=\"row\">\n      <div layout=\"column\" flex>\n        <div layout=\"row\" class=\"mt-30px\">\n          <div layout=\"column\" flex=\"30\">\n            <p class=\"fs-16\">Videos/Sound</p>\n            <p class=\"fs-11\">.mp4, .mp3</p>\n          </div>\n          <div layout-align=\"space-between center\" flex=\"55\" layout=\"row\">\n            <div flex=\"45\" flex-gt-lg=\"25\" class=\"text-center\" layout=\"column\">\n              <p class=\"fs-16\">Allow</p>\n            </div>\n            <div flex>\n              <md-slider [(ngModel)]=\"settings.AttachmentsWithoutCdr.videoSound\"\n                         [max]=\"1\"\n                         style=\"width: 100%\"\n                         [min]=\"0\"\n                         [step]=\"1\"\n                         [value]=\"1\"\n                         [vertical]=\"vertical\"\n                         color=\"accent\">\n              </md-slider>\n            </div>\n            <div flex=\"35\" layout=\"column\" class=\"ml-19px\">\n              <p class=\"fs-16\">Block</p>\n            </div>\n          </div>\n        </div>\n        <div layout=\"row\" class=\"mt-30px\">\n          <div layout=\"column\" flex=\"30\">\n            <p class=\"fs-16\">Applications/Scripts</p>\n            <p class=\"fs-11\">.dmg, .exe</p>\n          </div>\n          <div layout-align=\"space-between center\" flex=\"55\" layout=\"row\">\n            <div flex=\"45\" flex-gt-lg=\"25\" class=\"text-center\" layout=\"column\">\n              <p class=\"fs-16 \">Allow</p>\n            </div>\n            <div flex>\n              <md-slider [(ngModel)]=\"settings.AttachmentsWithoutCdr.applicationsScripts\"\n                         [max]=\"1\"\n                         style=\"width: 100%\"\n                         [min]=\"0\"\n                         [step]=\"1\"\n                         [value]=\"1\"\n                         [vertical]=\"vertical\"\n                         color=\"accent\">\n              </md-slider>\n            </div>\n            <div flex=\"35\" layout=\"column\" class=\"ml-19px\">\n              <p class=\"fs-16\">Block</p>\n            </div>\n          </div>\n        </div>\n        <div layout=\"row\" class=\"mt-30px\">\n          <div layout=\"column\" flex=\"30\">\n            <p class=\"fs-16\">Unrecognized Files</p>\n          </div>\n          <div layout-align=\"space-between center\" flex=\"55\" layout=\"row\">\n            <div flex=\"45\" flex-gt-lg=\"25\" class=\"text-center\" layout=\"column\">\n              <p class=\"fs-16 mb-12px\">Allow</p>\n            </div>\n            <div flex>\n              <md-slider [(ngModel)]=\"settings.AttachmentsWithoutCdr.unrecognizedFiles\"\n                         [max]=\"1\"\n                         style=\"width: 100%\"\n                         [min]=\"0\"\n                         [step]=\"1\"\n                         [value]=\"1\"\n                         [vertical]=\"vertical\"\n                         color=\"accent\">\n              </md-slider>\n            </div>\n            <div flex=\"35\" layout=\"column\" class=\"ml-19px\">\n              <p class=\"fs-16 mb-12px\">Block</p>\n            </div>\n          </div>\n        </div>\n        <div layout=\"row\" class=\"mt-30px\">\n          <div layout=\"column\" flex=\"30\">\n            <p class=\"fs-16\">Password Protected</p>\n            <p class=\"fs-11\">A secure version of an attachment can't be made when it is password protected.</p>\n          </div>\n          <div layout-align=\"space-between center\" flex=\"55\" layout=\"row\">\n            <div flex=\"45\" flex-gt-lg=\"25\" class=\"text-center\" layout=\"column\">\n              <p class=\"fs-16 \">Allow</p>\n            </div>\n            <div flex>\n              <md-slider [(ngModel)]=\"settings.SpecialAttachments.passwordProtected\"\n                         [max]=\"1\"\n                         style=\"width: 100%\"\n                         [min]=\"0\"\n                         [step]=\"1\"\n                         [value]=\"1\"\n                         [vertical]=\"vertical\"\n                         color=\"accent\">\n              </md-slider>\n            </div>\n            <div flex=\"35\" layout=\"column\" class=\"ml-19px\">\n              <p class=\"fs-16 \">Block</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n\n  <div id=\"save-settings-exception\" layout=\"row\" layout-align=\"center center\" class=\"mt-4 mb-5\">\n    <button class=\"btn btn-action-yellow-big hvr-glow\" (click)=\"saveSettings(settings)\">APPLY</button>\n  </div>\n\n</div>\n\n\n\n\n"

/***/ }),

/***/ 1013:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-2\"  layout=\"column\">\n  <div layout=\"row\" layout-align=\"space-between start\" class=\"mb-4\">\n    <small class=\"mb-4\">The Company policy is applied to all email addresses under the domain name.</small>\n  <button class=\"btn btn-link\" (click)=\"resetToDefaultValues()\">Restore All Recommended Settings</button>\n  </div>\n  <general-with-cdr class=\"mb-3\"\n    [generalSettings]=\"mainPolicySettings\"></general-with-cdr>\n  <special-attachments class=\"mb-3\" [generalSettings]=\"mainPolicySettings\"></special-attachments>\n  <general-settings class=\"mb-3\" [generalSettings]=\"mainPolicySettings\"></general-settings>\n  <general-without-cdr [generalSettings]=\"mainPolicySettings\"></general-without-cdr>\n  <div layout=\"row\" layout-margin layout-align=\"center center\" class=\"mt-5\">\n    <button class=\"btn btn-action-yellow-big hvr-glow\" layout-padding (click)=\"saveSettings()\">APPLY</button>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ 1014:
/***/ (function(module, exports) {

module.exports = "<div class=\"white frame\">\n  <div class=\"title-section\" layout-padding>\n    <h4 class=\"sob-title\">GENERAL</h4>\n  </div>\n  <div class=\"content-holder pb-42px\" layout=\"row\">\n    <div layout=\"column\" flex=\"60\">\n      <div layout=\"row\" layout-align=\"space-between start\" class=\"mt-53px\">\n        <p class=\"fs-16\" flex=\"50\">Hyperlinks<br>\n          <span class=\"fs-11\">This includes links in the body of an email\n          <br>and in any documents attached.</span>\n        </p>\n        <div flex=\"50\" layout-align=\"space-between start\" layout=\"row\">\n          <div flex=\"40\" class=\"text-center\" layout=\"column\">\n            <p class=\"fs-16 mb-12px\">High</p>\n            <p class=\"fs-11\">Fix and disable based on URL reputation</p>\n          </div>\n          <div flex>\n            <md-slider #hyperlink\n                       [max]=\"1\"\n                       style=\"width: 100%\"\n                       [min]=\"0\"\n                       [step]=\"1\"\n                       [vertical]=\"vertical\"\n                       color=\"accent\">\n            </md-slider>\n          </div>\n          <div flex=\"35\" layout=\"column\" class=\"ml-19px\">\n            <p class=\"fs-16 mb-12px\">Highest</p>\n            <p class=\"fs-11\">Disable hyperlink</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ 1015:
/***/ (function(module, exports) {

module.exports = "<!--Model is not well defined-->\n\n\n<div class=\"white frame\">\n  <div class=\"title-section\" layout-padding>\n    <h4 class=\"sob-title\">SPECIAL ATTACHMENTS</h4>\n  </div>\n  <div class=\"content-holder pb-42px\" layout=\"row\">\n    <div layout=\"column\" flex=\"60\">\n      <div layout=\"row\" layout-align=\"space-between start\" class=\"mt-30px\">\n        <p class=\"fs-16\" flex=\"50\">Signed Documents</p>\n        <div flex=\"50\" layout-align=\"space-between start\" layout=\"row\">\n          <div flex=\"40\" class=\"text-center\" layout=\"column\">\n            <p class=\"fs-16 mb-12px\">Signature intact</p>\n            <p class=\"fs-11\">Documents is not processed with CDR</p>\n          </div>\n          <div flex>\n            <md-slider #specialAttachmentSlider\n                       [max]=\"1\"\n                       style=\"width: 100%\"\n                       [min]=\"0\"\n                       [step]=\"1\"\n                       [vertical]=\"vertical\"\n                       color=\"accent\">\n            </md-slider>\n          </div>\n          <div flex=\"35\" layout=\"column\" class=\"ml-19px\">\n            <p class=\"fs-16 mb-12px\">Signature is not recreated</p>\n            <p class=\"fs-11\">CDR is processed according to existing policy</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ 1016:
/***/ (function(module, exports) {

module.exports = "<div class=\"white frame\">\n  <div class=\"title-section\" layout-padding>\n    <h4 class=\"sob-title\">ATTACHMENTS PROCESSED WITH CDR</h4>\n  </div>\n  <div class=\"content-holder pb-42px\" layout=\"row\">\n    <div layout=\"column\" flex=\"60\">\n      <div id=\"explanation\">\n        <p class=\"fs-13\">CDR (Content Disarm and Reconstruction) means that a secure version of<br> the\n          file is created and the email is received seamlessly to the end user.</p>\n        <p class=\"fs-13 mt-5\">If you would like to make file type-specific changes,\n          head to <span class=\"inner-link\" routerLink=\"../exceptions\">exception</span>\n        </p>\n      </div>\n      <div layout=\"row\" layout-align=\"space-between start\" class=\"mt-30px\">\n        <p class=\"fs-16\" flex=\"50\">Applied to documents, <br>spreadsheets, images <br>and presentations</p>\n        <div flex=\"50\" layout-align=\"space-between start\" layout=\"row\">\n          <div flex=\"40\" class=\"text-center\" layout=\"column\">\n            <p class=\"fs-16 mb-12px\">High</p>\n            <p class=\"fs-11\">Active content & <br>macros NOT removed</p>\n          </div>\n          <div flex>\n            <md-slider #CDRSliderComponent\n                       [max]=\"1\"\n                       style=\"width: 100%\"\n                       [min]=\"0\"\n                       [step]=\"1\"\n                       [value]=\"1\"\n                       [vertical]=\"vertical\"\n                       color=\"accent\">\n            </md-slider>\n          </div>\n          <div flex=\"35\" layout=\"column\" class=\"ml-19px\">\n            <p class=\"fs-16 mb-12px\">Highest</p>\n            <p class=\"fs-11\">Active content & <br>macros removed</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ 1017:
/***/ (function(module, exports) {

module.exports = "<div class=\"white frame\">\n  <div class=\"title-section\" layout-padding>\n    <h4 class=\"sob-title\">ATTACHMENTS WITHOUT CDR</h4>\n  </div>\n  <div class=\"content-holder pb-42px\" layout=\"row\">\n    <div layout=\"column\" flex=\"60\">\n      <div layout=\"row\" layout-align=\"space-between start\" class=\"mt-30px\">\n        <p class=\"fs-16\" flex=\"50\">Videos/Sound<br>\n          <span class=\"fs-11\">.mp4, .mp3</span>\n        </p>\n        <div flex=\"50\" layout-align=\"space-between center\" layout=\"row\">\n          <div flex=\"40\" class=\"text-center\">\n            <p class=\"fs-16\">Allow</p>\n          </div>\n          <div flex>\n            <md-slider #videoSound\n                       [max]=\"1\"\n                       style=\"width: 100%\"\n                       [min]=\"0\"\n                       [step]=\"1\"\n                       [vertical]=\"vertical\"\n                       color=\"accent\">\n            </md-slider>\n          </div>\n          <div flex=\"35\" class=\"ml-19px\">\n            <p class=\"fs-16\">Block</p>\n          </div>\n        </div>\n      </div>\n      <div layout=\"row\" layout-align=\"space-between start\" class=\"mt-30px\">\n        <p class=\"fs-16\" flex=\"50\">Applications/Scripts<br>\n          <span class=\"fs-11\">.exe, .dmg</span>\n        </p>\n        <div flex=\"50\" layout-align=\"space-between center\" layout=\"row\">\n          <div flex=\"40\" class=\"text-center\">\n            <p class=\"fs-16\">Allow</p>\n          </div>\n          <div flex>\n            <md-slider #applicationsScripts\n                       [max]=\"1\"\n                       style=\"width: 100%\"\n                       [min]=\"0\"\n                       [step]=\"1\"\n                       [vertical]=\"vertical\"\n                       color=\"accent\">\n            </md-slider>\n          </div>\n          <div flex=\"35\" class=\"ml-19px\">\n            <p class=\"fs-16\">Block</p>\n          </div>\n        </div>\n      </div>\n      <div layout=\"row\" layout-align=\"space-between start\" class=\"mt-30px\">\n        <p class=\"fs-16\" flex=\"50\">Unrecognized Files</p>\n        <div flex=\"50\" layout-align=\"space-between center\" layout=\"row\">\n          <div flex=\"40\" class=\"text-center\">\n            <p class=\"fs-16\">Allow</p>\n          </div>\n          <div flex>\n            <md-slider #unrecognizedFiles\n                       [max]=\"1\"\n                       style=\"width: 100%\"\n                       [min]=\"0\"\n                       [step]=\"1\"\n                       [vertical]=\"vertical\"\n                       color=\"accent\">\n            </md-slider>\n          </div>\n          <div flex=\"35\" class=\"ml-19px\">\n            <p class=\"fs-16\">Block</p>\n          </div>\n        </div>\n      </div>\n      <div layout=\"row\" layout-align=\"space-between start\" class=\"mt-30px\">\n        <p class=\"fs-16\" flex=\"50\">Password Protected<br>\n          <span class=\"fs-11\">A secure version of an attachment can't be made when\n            it is password protected.</span>\n        </p>\n        <div flex=\"50\" layout-align=\"space-between center\" layout=\"row\">\n          <div flex=\"40\" class=\"text-center\">\n            <p class=\"fs-16\">Allow</p>\n          </div>\n          <div flex>\n            <md-slider #passwordProtected\n                       [max]=\"1\"\n                       style=\"width: 100%\"\n                       [min]=\"0\"\n                       [step]=\"1\"\n                       [vertical]=\"vertical\"\n                       color=\"accent\">\n            </md-slider>\n          </div>\n          <div flex=\"35\" class=\"ml-19px\">\n            <p class=\"fs-16\">Block</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ 1018:
/***/ (function(module, exports) {

module.exports = "<div id=\"settings-container\">\n\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ 1019:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-end mb-4\">\n    <button class=\"btn btn-circle\" md-dialog-close>x</button>\n  </div>\n  <div *ngIf=\"changePassword\">\n    <div class=\"text-center m-3\">\n      <h4 class=\"mb-3 bold \">Change Password</h4>\n      <button class=\"btn btn-link\" (click)=\"switchToForgotPassword()\">Forgot Password ?</button>\n    </div>\n    <form #changePassword=\"ngForm\">\n      <div class=\"mb-4 mt-2\" layout=\"row\" layout-align=\"space-between center\" layout-margin>\n        <p flex=\"35\" class=\"reset-field ml-0\">Current Password</p>\n        <input #currentPassword=\"ngModel\" name=\"currentPassword\" minlength=\"6\" flex=\"50\" class=\"sob-input\" required [(ngModel)]=\"passwordsToSend.CurrentPassword\" type=\"password\">\n        <div flex>\n          <i class=\"fa fa-check-circle-o fa-2x green-icon\" aria-hidden=\"true\"\n             *ngIf=\"oldPasswordIsValid(passwordsToSend.CurrentPassword)\"></i>\n        </div>\n      </div>\n      <div class=\"mb-4\" layout=\"row\" layout-align=\"space-between center\" layout-margin>\n        <p flex=\"35\" class=\"reset-field ml-0\">New Password</p>\n        <input #NewPassword='ngModel' flex=\"50\" class=\"sob-input\" required [(ngModel)]=\"passwordsToSend.NewPassword\" type=\"password\" name=\"NewPassword\">\n        <div flex>\n          <i class=\"fa fa-check-circle-o fa-2x green-icon\" aria-hidden=\"true\"\n             *ngIf=\"fieldIsValid(passwordsToSend.NewPassword)\"></i>\n        </div>\n      </div>\n      <div class=\"mb-4\" layout=\"row\" layout-align=\"space-between center\" layout-margin>\n        <p flex=\"35\" class=\"reset-field ml-0\">Confirm New Password</p>\n        <input #ConfirmNewPassword = \"ngModel\" flex=\"50\" class=\"sob-input\" required [(ngModel)]=\"passwordsToSend.ConfirmNewPassword\" type=\"password\" name=\"ConfirmNewPassword\">\n        <div flex>\n          <i class=\"fa fa-check-circle-o fa-2x green-icon\" aria-hidden=\"true\"\n             *ngIf=\"passwordsMatch(passwordsToSend.NewPassword, passwordsToSend.ConfirmNewPassword)\"></i>\n        </div>\n      </div>\n      <div class=\"row justify-content-center\">\n        <button type=\"button\" class=\"btn btn-action-yellow-big\"\n                [disabled]=\"!(passwordsAreValid(passwordsToSend.NewPassword, passwordsToSend.ConfirmNewPassword))\"\n                (click)=\"applyChangePassword()\">CHANGE\n        </button>\n      </div>\n    </form>\n  </div>\n  <div *ngIf=\"forgotPassword\">\n    <div class=\"col text-center\">\n      <h4 class=\"mb-3 bold\">Forgot Password ?</h4>\n      <p class=\"mb-3\">We'll send you a link to reset your password.</p>\n      <button type=\"button\" class=\"btn btn-action-yellow-big\" md-dialog-close>RESET PASSWORD\n      </button>\n    </div>\n  </div>\n</div>\n\n\n<style>\n  .green-icon {\n    color: #72B895 !important;\n  }\n\n  .reset-field {\n    margin-bottom: 0px !important;\n    color: #666666 !important;\n    font-weight: 600 !important;\n  }\n</style>\n"

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AttachmentsProcessedLevels */
/* unused harmony export AttachmentsWithoutCdr */
/* unused harmony export SpecialAttachments */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Policy; });
var AttachmentsProcessedLevels = (function () {
    function AttachmentsProcessedLevels() {
    }
    return AttachmentsProcessedLevels;
}());

var AttachmentsWithoutCdr = (function () {
    function AttachmentsWithoutCdr() {
    }
    return AttachmentsWithoutCdr;
}());

var SpecialAttachments = (function () {
    function SpecialAttachments() {
    }
    return SpecialAttachments;
}());

var Policy = (function () {
    function Policy() {
        this.defaultAttachmentsWithoutCdr = {
            videoSound: Severity.Highest,
            applicationsScripts: Severity.Highest,
            unrecognizedFiles: Severity.Highest,
        };
        this.defaultAttachmentsProcessedLevels = {
            documents: Severity.Highest,
            spreadsheets: Severity.Highest,
            images: Severity.Highest,
            presentations: Severity.Highest
        };
        this.defaultSpecialAttachments = {
            passwordProtected: Severity.High,
            signedDocuments: Severity.Highest
        };
        this.AttachmentsWithoutCdr = new AttachmentsWithoutCdr();
        this.AttachmentsProcessedLevels = new AttachmentsProcessedLevels();
        this.SpecialAttachments = new SpecialAttachments();
        this.resetToDefault();
    }
    Policy.prototype.resetToDefault = function () {
        this.selectedSafeLinksOperation = HyperLinks.TestHyperlinks;
        this.AttachmentsWithoutCdr = JSON.parse(JSON.stringify(this.defaultAttachmentsWithoutCdr)); //Object.assign({}, this.defaultAttachmentsWithoutCdr);
        this.AttachmentsProcessedLevels = JSON.parse(JSON.stringify(this.defaultAttachmentsProcessedLevels)); //Object.assign({}, this.defaultAttachmentsProcessedLevels);
        this.SpecialAttachments = JSON.parse(JSON.stringify(this.defaultSpecialAttachments)); //Object.assign({}, this.defaultSpecialAttachments);
        this.handleLinks = 1;
    };
    return Policy;
}());

var HyperLinks;
(function (HyperLinks) {
    HyperLinks[HyperLinks["FixHyperlinks"] = 1] = "FixHyperlinks";
    HyperLinks[HyperLinks["TestHyperlinks"] = 2] = "TestHyperlinks";
    HyperLinks[HyperLinks["KillHyperlinks"] = 3] = "KillHyperlinks";
})(HyperLinks || (HyperLinks = {}));
var Severity;
(function (Severity) {
    Severity[Severity["High"] = 0] = "High";
    Severity[Severity["Highest"] = 1] = "Highest";
})(Severity || (Severity = {}));
//# sourceMappingURL=company-policy.js.map

/***/ }),

/***/ 1020:
/***/ (function(module, exports) {

module.exports = "<!-- nesting level: 2 entry inside the app -->\n\n<md-sidenav-container style=\"height: 100vh\">\n  <md-sidenav #sidenav opened=\"true\" id=\"smb-sidenav\" mode=\"side\" style=\"width: 60px !important; min-width: unset\"\n              [opened]=\"!isFirstTimeUser\">\n    <ul style=\"height: 15%\">\n      <li class=\"text-center mt-3 pt-3 pb-3 mb-3 noHoverEffect\" routerLink=\"/user/dashboard\">\n        <md-icon class=\"center-icon\" svgIcon=\"resecLogo\"></md-icon>\n      </li>\n    </ul>\n    <nav>\n      <ul>\n        <li mdTooltip=\"Dashboard\" mdTooltipPosition=\"right\" class=\"text-center pt-3 pb-3 mb-3\"\n            routerLink=\"/user/dashboard\" routerLinkActive=\"active\">\n          <md-icon class=\"center-icon\" svgIcon=\"dashboard\"></md-icon>\n        </li>\n        <li mdTooltip=\"Processed Emails\" mdTooltipPosition=\"right\" class=\"text-center pt-3 pb-3 mb-3\"\n            routerLink=\"/user/emails\"\n            routerLinkActive=\"active\">\n          <md-icon class=\"center-icon\" svgIcon=\"mails\"></md-icon>\n        </li>\n        <li mdTooltip=\"Security Settings\" mdTooltipPosition=\"right\" class=\"text-center pt-3 pb-3 mb-3\"\n            routerLink=\"/user/security\" routerLinkActive=\"active\">\n          <md-icon class=\"center-icon\" svgIcon=\"security\"></md-icon>\n        </li>\n        <li mdTooltip=\"Account Settings\" mdTooltipPosition=\"right\" class=\"text-center pt-3 pb-3 mb-3\"\n            routerLink=\"/user/account\" routerLinkActive=\"active\">\n          <md-icon class=\"center-icon\" svgIcon=\"settings\"></md-icon>\n        </li>\n        <li mdTooltip=\"Help\" mdTooltipPosition=\"right\" class=\"text-center pt-3 pb-3 mb-3\"\n            routerLink=\"/user/help\" routerLinkActive=\"active\">\n          <md-icon class=\"center-icon\" svgIcon=\"help\"></md-icon>\n        </li>\n      </ul>\n    </nav>\n  </md-sidenav>\n  <div layout-fill style=\"background-color: #F7F8F8\">\n    <md-progress-bar *ngIf=\"showLoader\" mode=\"indeterminate\"></md-progress-bar>\n    <nav class=\"navbar sticky-top bg-white-shadow mb-0\">\n      <div class=\"container-fluid row\">\n        <div class=\"nav navbar-nav mr-auto  justify-content-center\">\n          <!-- nav here -->\n          <div layout=\"row\" *ngIf=\"testRoute('account')\">\n            <a class=\"sob-page-link ml-3 mr-3\" routerLink=\"account/notifications\" routerLinkActive=\"page-active\">Notifications</a>\n            <a class=\"sob-page-link ml-2 mr-4\" routerLink=\"account/account\" routerLinkActive=\"page-active\">Account</a>\n            <a class=\"sob-page-link ml-2\" routerLink=\"account/billing\" routerLinkActive=\"page-active\"\n               *ngIf=\"isStripeUser\">Billing</a><!---->\n          </div>\n          <div layout=\"row\" *ngIf=\"testRoute('emails')\">\n            <a class=\"sob-page-link ml-3 mr-3\" routerLink=\"emails/search\" routerLinkActive=\"page-active\">Search</a>\n            <a class=\"sob-page-link\" routerLink=\"emails/browse\" routerLinkActive=\"page-active\">Browse</a>\n          </div>\n          <div layout=\"row\" *ngIf=\"testRoute('security')\">\n            <a class=\"sob-page-link ml-3 mr-3\" routerLink=\"security/general\" routerLinkActive=\"page-active\">Company\n              Policy</a>\n            <a class=\"sob-page-link\" routerLink=\"security/exceptions\" routerLinkActive=\"page-active\">Exceptions</a>\n          </div>\n        </div>\n        <div class=\"nav navbar-nav ml-auto  justify-content-center\">\n\n          <div class=\"dropdown\">\n            <button class=\"btn  dropdown-toggle\"\n                    type=\"button\" id=\"dropdownMenu1\"\n                    data-toggle=\"dropdown\"\n                    aria-haspopup=\"true\" aria-expanded=\"true\">\n              {{username}}\n            </button>\n            <ul class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenu1\">\n              <li><a class=\"sob-menu-item\" (click)=\"openChangePassword()\">Change Password</a></li>\n              <li role=\"separator\" class=\"divider\"></li>\n              <li><a class=\"sob-menu-item\" (click)=\"logout()\">Logout</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </nav>\n    <div *tdLoading=\"'overlayStarSyntax'; mode:'indeterminate'; type:'circle'; strategy:'overlay'; color:'accent'\">\n      <div [attr.id]=\"conditionalId\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</md-sidenav-container>\n\n\n"

/***/ }),

/***/ 1021:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center center\" style=\"height: 100vh\" layout-margin>\n  <p style=\"font-size: 4em\" class=\"text-center\">Oops, we only support chrome</p>\n  <md-icon style=\"height:25em; width: auto\" svgIcon=\"chromeLogo\" class=\"mt-5 mb-5\"></md-icon>\n  <button md-button (click)=\"downloadChrome()\" [color]=\"'primary'\" class=\"mt-5\" id=\"downloadChromeButton\">Download Chrome</button>\n</div>\n\n"

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".cta{\n  color: #189cd5;\n  font-weight: 600;\n  font-size: 0.8em;\n}\n.selectedPolicy{\n  background-color: white;\n  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n  transition: box-shadow 280ms cubic-bezier(.4,0,.2,1);\n  will-change: box-shadow;\n  display: block;\n  position: relative;\n}\n\n.dpt-list:hover {\n  background-color: white;\n}\n.dpt-list{\n  border-bottom: solid 1px white;\n  height: 53px;\n}\n\n#exception-list{\n  /*width: 27% !important;*/\n}\n\n\n\n.dpt-name{\n  color: #666666 !important;\n  font-weight: 500 !important;\n}\n.dpt-users{\n  color: #999999 !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1260:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(606);


/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_custom_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardService = (function () {
    function DashboardService(http, regularHttp) {
        this.http = http;
        this.regularHttp = regularHttp;
        this.server = localStorage.getItem('serverName');
    }
    DashboardService.prototype.getDashboardData = function (timeFrame) {
        var servername = localStorage.getItem('serverName');
        var dashboardUrl = 'http://' + servername + ':4580/sob/api/dashboard?timeFrame=' + timeFrame;
        return this.http.get(dashboardUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not retrieve the  dashboard data'); });
    };
    DashboardService.prototype.GetFeed = function () {
        var header = new Headers();
        header.append('Access-Control-Request-Headers', 'Content-Type');
        var feedUrl = 'https://cyber-news-scrapr.herokuapp.com/news';
        return this.regularHttp.get(feedUrl, header)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Sorry we could not fetch the news'); });
    };
    return DashboardService;
}());
DashboardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_custom_http__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_custom_http__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === "function" && _b || Object])
], DashboardService);

var _a, _b;
//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_company_policy__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__security_service__ = __webpack_require__(163);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ExistingExceptionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DeleteExceptionDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExceptionSettingsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NewExceptionComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var BaseComponent = (function () {
    function BaseComponent() {
        this.validators = [this.isEmail];
        this.errorMessages = {
            'mustbeEmail': 'Please enter valid email addresses'
        };
    }
    BaseComponent.prototype.isEmail = function (control) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(control.value)) {
            return {
                'mustbeEmail': true
            };
        }
        return null;
    };
    ;
    BaseComponent.prototype.stringIsEmail = function (email) {
        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(email);
    };
    return BaseComponent;
}());
var ExistingExceptionsComponent = (function () {
    function ExistingExceptionsComponent() {
        var _this = this;
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectDepartment = function (departmentName) {
            _this.selectedPolicyName = departmentName;
            _this.onSelect.emit(departmentName);
        };
        this.isCurrentPolicy = function (selectedPolicy) {
            var isCurrentPolicy = false;
            if (selectedPolicy === _this.currentSettings.policyName) {
                isCurrentPolicy = true;
            }
            else {
                isCurrentPolicy = false;
            }
            return isCurrentPolicy;
        };
    }
    ;
    return ExistingExceptionsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ExistingExceptionsComponent.prototype, "exceptionsList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ExistingExceptionsComponent.prototype, "currentSettings", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ExistingExceptionsComponent.prototype, "noSettingsExist", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ExistingExceptionsComponent.prototype, "newDepartmentRequired", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ExistingExceptionsComponent.prototype, "onSelect", void 0);
ExistingExceptionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'existing-exceptions',
        template: __webpack_require__(1010),
        styles: [__webpack_require__(118)]
    }),
    __metadata("design:paramtypes", [])
], ExistingExceptionsComponent);

var DeleteExceptionDialog = (function () {
    function DeleteExceptionDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    return DeleteExceptionDialog;
}());
DeleteExceptionDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-confirm-exception-deletion',
        template: " <h3 md-dialog-title>Delete {{data}} ?</h3>\n  <md-dialog-content>This action is irreversible</md-dialog-content>\n  <md-dialog-actions>\n    <button md-button md-dialog-close (click)=\"dialogRef.close(false)\">Don't Delete</button>\n    <!-- Can optionally provide a result for the closing dialog. -->\n    <button md-button [style.color]=\"'red'\" (click)=\"dialogRef.close(true)\">Delete</button>\n  </md-dialog-actions>\n  ",
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["Q" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MdDialogRef */]) === "function" && _a || Object, Object])
], DeleteExceptionDialog);

var ExceptionSettingsComponent = (function (_super) {
    __extends(ExceptionSettingsComponent, _super);
    function ExceptionSettingsComponent(dialog) {
        var _this = _super.call(this) || this;
        _this.dialog = dialog;
        _this.onSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.numberOfMaxItems = 5;
        _this.deletePolicy = function (policy) {
            var dialogRef = _this.dialog.open(DeleteExceptionDialog, {
                data: policy.policyName
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result) {
                    _this.onDelete.emit(policy);
                }
            });
        };
        _this.saveSettings = function (settings) {
            _this.onSave.emit(settings);
        };
        _this.addingUsers = false;
        return _this;
    }
    ;
    ExceptionSettingsComponent.prototype.addUsers = function (value) {
        this.addingUsers = value;
        if (!value && this.addedUsers) {
            // adding the users
            var splittedEmails = this.addedUsers.split(',');
            for (var _i = 0, splittedEmails_1 = splittedEmails; _i < splittedEmails_1.length; _i++) {
                var email = splittedEmails_1[_i];
                var noSpaceEmail = email.replace(/\s+/g, '');
                if (this.stringIsEmail(noSpaceEmail)) {
                    if (!this.settings.exceptions.includes(noSpaceEmail)) {
                        this.settings.exceptions.push(noSpaceEmail);
                    }
                }
            }
        }
    };
    ExceptionSettingsComponent.prototype.moreItemsToDisplay = function () {
        return (this.settings.exceptions.length > this.numberOfMaxItems);
    };
    ExceptionSettingsComponent.prototype.notEnoughUsers = function () {
        var userLength = this.settings.exceptions.length;
        return userLength < this.numberOfMaxItems;
    };
    ExceptionSettingsComponent.prototype.deleteUser = function (user) {
        var userIndex = this.settings.exceptions.indexOf(user);
        this.settings.exceptions.splice(userIndex, 1);
        return this.settings.exceptions;
    };
    ExceptionSettingsComponent.prototype.displayRemainingItems = function () {
        var userLength = this.settings.exceptions.length;
        this.numberOfMaxItems = userLength;
    };
    ExceptionSettingsComponent.prototype.displayLessItems = function () {
        this.numberOfMaxItems = 5;
    };
    ;
    ExceptionSettingsComponent.prototype.uploadEvent = function (file) {
        var stam = file.msDetachStream;
        var fileName = file.name;
        var fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
        var readingState = fileReader.readyState;
        // fileReader.onloadend(event);
        var result = fileReader.result;
    };
    ;
    return ExceptionSettingsComponent;
}(BaseComponent));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__model_company_policy__["a" /* Policy */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__model_company_policy__["a" /* Policy */]) === "function" && _b || Object)
], ExceptionSettingsComponent.prototype, "settings", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ExceptionSettingsComponent.prototype, "onSave", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ExceptionSettingsComponent.prototype, "onDelete", void 0);
ExceptionSettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'exception-settings',
        template: __webpack_require__(1012),
        styles: [__webpack_require__(118)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__covalent_core__["c" /* TdFileService */]],
        entryComponents: [DeleteExceptionDialog]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdDialog */]) === "function" && _c || Object])
], ExceptionSettingsComponent);

var NewExceptionComponent = (function (_super) {
    __extends(NewExceptionComponent, _super);
    function NewExceptionComponent(securityService) {
        var _this = _super.call(this) || this;
        _this.securityService = securityService;
        _this.settings = new __WEBPACK_IMPORTED_MODULE_2__model_company_policy__["a" /* Policy */]();
        _this.addedUsers = '';
        _this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.cancelCreation = function (cancel) {
            _this.onCancel.emit(cancel);
        };
        _this.saveSettings = function (newSettings) {
            _this.settings.exceptions = [];
            var splittedEmails = _this.addedUsers.split(',');
            for (var _i = 0, splittedEmails_2 = splittedEmails; _i < splittedEmails_2.length; _i++) {
                var email = splittedEmails_2[_i];
                var noSpaceEmail = email.replace(/\s+/g, '');
                if (_this.stringIsEmail(noSpaceEmail)) {
                    _this.settings.exceptions.push(noSpaceEmail);
                }
            }
            _this.onSave.emit(newSettings);
        };
        _this.loadGeneralSettings();
        return _this;
    }
    ;
    NewExceptionComponent.prototype.loadGeneralSettings = function () {
        var _this = this;
        console.log(this.settings);
        this.securityService.getSettings().subscribe(function (result) {
            _this.settings = result;
            console.log(result);
            console.log("second time " + _this.settings);
        }, function (error) {
            console.log(error);
        });
    };
    NewExceptionComponent.prototype.newExceptionHasEmail = function () {
        return this.addedUsers.length < 5;
    };
    return NewExceptionComponent;
}(BaseComponent));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NewExceptionComponent.prototype, "onCancel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NewExceptionComponent.prototype, "onSave", void 0);
NewExceptionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'new-exception',
        template: __webpack_require__(1011),
        styles: [__webpack_require__(118)],
        providers: [__WEBPACK_IMPORTED_MODULE_4__security_service__["a" /* SecurityService */]]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__security_service__["a" /* SecurityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__security_service__["a" /* SecurityService */]) === "function" && _d || Object])
], NewExceptionComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=templates.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_custom_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_company_policy__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var serializePolicyToJson = function (policy) {
    var json = {
        'AttachementsProcessedLevels': {
            'Documents': policy.AttachmentsProcessedLevels.documents,
            'Spreadsheets': policy.AttachmentsProcessedLevels.spreadsheets,
            'Images': policy.AttachmentsProcessedLevels.images,
            'Presentations': policy.AttachmentsProcessedLevels.presentations
        },
        'AttachementsWithoutCdr': {
            'Video/Sound': policy.AttachmentsWithoutCdr.videoSound,
            'Applications/Scripts': policy.AttachmentsWithoutCdr.applicationsScripts,
            'Unrecognized Files': policy.AttachmentsWithoutCdr.unrecognizedFiles
        },
        'SpecialAttachments': {
            'Password Protected': policy.SpecialAttachments.passwordProtected,
            'Signed Documents': policy.SpecialAttachments.signedDocuments
        },
        'SelectedSafeLinksOperation': policy.selectedSafeLinksOperation,
        'Exceptions': policy.exceptions,
        'HandleLinks': policy.handleLinks ? true : false,
        'PolicyId': policy.policyId,
        'PolicyName': policy.policyName,
        'UseAntiviruses': policy.useAntiviruses
    };
    return json;
};
var SecurityService = (function () {
    function SecurityService(http) {
        this.http = http;
        this.server = localStorage.getItem('serverName');
    }
    SecurityService.prototype.getSettings = function () {
        var _this = this;
        var settingsUrl = 'http://' + this.server + ':4580/sob/api/securitySettings/policy?q=1';
        return this.http.get(settingsUrl)
            .map(function (res) {
            var json = res.json();
            return _this.getMappedPolicy(json);
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not get shared'); });
    };
    SecurityService.prototype.getMappedPolicy = function (json) {
        var policy = new __WEBPACK_IMPORTED_MODULE_3__model_company_policy__["a" /* Policy */]();
        policy.AttachmentsProcessedLevels =
            {
                documents: json.AttachementsProcessedLevels['Documents'],
                spreadsheets: json.AttachementsProcessedLevels['Spreadsheets'],
                images: json.AttachementsProcessedLevels['Images'],
                presentations: json.AttachementsProcessedLevels['Presentations']
            };
        policy.AttachmentsWithoutCdr =
            {
                videoSound: json.AttachementsWithoutCdr['Video/Sound'],
                applicationsScripts: json.AttachementsWithoutCdr['Applications/Scripts'],
                unrecognizedFiles: json.AttachementsWithoutCdr['Unrecognized Files']
            };
        policy.selectedSafeLinksOperation = json.SelectedSafeLinksOperation;
        policy.exceptions = json.Exceptions;
        policy.handleLinks = json.HandleLinks ? 1 : 0;
        policy.policyId = json.PolicyId;
        policy.policyName = json.PolicyName;
        policy.useAntiviruses = json.UseAntiviruses;
        policy.SpecialAttachments.signedDocuments = json.SpecialAttachments['Signed Documents'];
        policy.SpecialAttachments.passwordProtected = json.SpecialAttachments['Password Protected'];
        return policy;
    };
    SecurityService.prototype.saveSettings = function (policy) {
        var json = serializePolicyToJson(policy);
        var saveSettings = 'http://' + this.server + ':4580/sob/api/securitySettings/savepolicy';
        return this.http.post(saveSettings, json)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not save settings'); });
    };
    SecurityService.prototype.getPolicyExceptionsSettings = function () {
        var _this = this;
        var settingsUrl = 'http://' + this.server + ':4580/sob/api/securitySettings/policyExceptions?q=1';
        return this.http.get(settingsUrl)
            .map(function (res) {
            var json = res.json();
            var ExceptionsDictionary = {};
            for (var _i = 0, _a = Object.keys(json); _i < _a.length; _i++) {
                var key = _a[_i];
                ExceptionsDictionary[key] = _this.getMappedPolicy(json[key]);
            }
            // return this.getMappedPolicy(json, Policy);
            return ExceptionsDictionary;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not get shared'); });
    };
    SecurityService.prototype.deletePolicyExceptionSettings = function (settings) {
        var deleteSettings = 'http://' + this.server + ':4580/sob/api/securitySettings/deletepolicyexceptions';
        return this.http.post(deleteSettings, settings)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not save settings'); });
    };
    SecurityService.prototype.savePolicyExceptionSettings = function (settings) {
        var _this = this;
        var serializedException = serializePolicyToJson(settings);
        console.log(serializedException);
        var url = 'http://' + this.server + ':4580/sob/api/securitySettings/savepolicyexceptions';
        return this.http.post(url, serializedException)
            .map(function (res) {
            var json = res.json();
            // return this.getMappedPolicy(json, Policy);
            return _this.getMappedPolicy(json);
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not save settings'); });
    };
    return SecurityService;
}());
SecurityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_custom_http__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_custom_http__["a" /* HttpService */]) === "function" && _a || Object])
], SecurityService);

var _a;
//# sourceMappingURL=security.service.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardActions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { TagActions } from '../actions';
//import { TagService } from '../../services'
var DashboardActions = DashboardActions_1 = (function () {
    function DashboardActions() {
    }
    DashboardActions.prototype.loadDashboardData = function (timeFrame) {
        return {
            type: DashboardActions_1.LOAD_DASHBOARD_DATA,
            payload: timeFrame
        };
    };
    DashboardActions.prototype.loadDashboardDataSuccess = function (dashboardData) {
        return {
            type: DashboardActions_1.LOAD_DASHBOARD_DATA_SUCCESS,
            payload: dashboardData
        };
    };
    DashboardActions.prototype.loadDashboardGraph = function () {
        return {
            type: DashboardActions_1.LOAD_DASHBOARD_GRAPH
        };
    };
    DashboardActions.prototype.loadDashboardGraphSuccess = function (dashboardGraph) {
        return {
            type: DashboardActions_1.LOAD_DASHBOARD_GRAPH_SUCCESS,
            payload: dashboardGraph
        };
    };
    return DashboardActions;
}());
DashboardActions.LOAD_DASHBOARD_DATA_SUCCESS = 'LOAD_DASHBOARD_DATA_SUCCESS';
DashboardActions.LOAD_DASHBOARD_GRAPH = 'LOAD_DASHBOARD_GRAPH';
DashboardActions.LOAD_DASHBOARD_GRAPH_SUCCESS = 'LOAD_DASHBOARD_GRAPH_SUCCESS';
DashboardActions = DashboardActions_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], DashboardActions);

var DashboardActions_1;
//# sourceMappingURL=dashboard.actions.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AccountGeneralComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePasswordModalComponent = (function () {
    function ChangePasswordModalComponent(dialogRef, accountService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.accountService = accountService;
        this.resetPassword = false;
        this.forgotPassword = true;
        this.passwordsToSend = {};
        this.switchToForgotPassword = function () {
            _this.resetPassword = true;
            _this.forgotPassword = false;
        };
        this.changePassword = function () {
            _this.accountService.ChangePassword(_this.passwordsToSend).subscribe(function (result) {
                console.log(result);
                var newToken = 'Bearer ' + result.AccessToken;
                localStorage.setItem('token', newToken);
            }, function (error) {
                console.log(error);
            });
        };
    }
    return ChangePasswordModalComponent;
}());
ChangePasswordModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'change-password-modal-component',
        template: __webpack_require__(989),
        styles: [__webpack_require__(431)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */]) === "function" && _b || Object])
], ChangePasswordModalComponent);

var AccountOwnerData = (function () {
    function AccountOwnerData() {
    }
    return AccountOwnerData;
}());
;
var CompanyData = (function () {
    function CompanyData() {
    }
    return CompanyData;
}());
var AccountGeneralComponent = (function () {
    function AccountGeneralComponent(accountService, dialog) {
        var _this = this;
        this.accountService = accountService;
        this.dialog = dialog;
        this.testEmailSent = false;
        this.isAdmin = false;
        // scroll down to see class SettingsForm
        this.accountOwnerData = new AccountOwnerData;
        this.adminData = new AccountOwnerData;
        this.companyData = new CompanyData;
        this.sendTestEmail = function () {
            _this.testEmailSent = true;
            setTimeout(function () {
                _this.testEmailSent = !_this.testEmailSent;
            }, 2500);
        };
    }
    AccountGeneralComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getAccountGeneralSettings().subscribe(function (result) {
            if (result == null) {
                return;
            }
            _this.currentAccount = result;
            // account data
            _this.accountOwnerData.phone = result.AccountOwnerPhone;
            _this.accountOwnerData.email = result.AccountOwnerEmail;
            _this.accountOwnerData.name = result.AccountOwnerName;
            // admin data
            _this.adminData.phone = result.AccountAdminPhone;
            _this.adminData.email = result.AccountAdminEmail;
            _this.adminData.name = result.AccountAdminName;
            // company data
            _this.companyData.name = result.CompanyName;
            _this.companyData.domain = result.CompanyDomain;
            _this.companyData.mxRecord = result.MxRecord;
            _this.isAdmin = result.AccountOwnerIsAdmin;
        }, function (error) {
            console.log(error);
        });
    };
    AccountGeneralComponent.prototype.openChangePassword = function () {
        this.dialogRef = this.dialog.open(ChangePasswordModalComponent, { width: '40%' });
        this.dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
        });
    };
    AccountGeneralComponent.prototype.saveAccountData = function () {
        // add validation on data if needed
        var blobDataToSend = this.currentAccount;
        // update the form data
        blobDataToSend.AccountOwnerPhone = this.accountOwnerData.phone;
        blobDataToSend.AccountOwnerEmail = this.accountOwnerData.email;
        blobDataToSend.AccountOwnerName = this.accountOwnerData.name;
        blobDataToSend.AccountAdminPhone = this.adminData.phone;
        blobDataToSend.AccountAdminEmail = this.adminData.email;
        blobDataToSend.AccountAdminName = this.adminData.name;
        this.accountService.postAccountGeneralSettings(blobDataToSend).subscribe(function () {
            // TODO:: show success dialog
        }, function (error) { return console.log(error); });
    };
    return AccountGeneralComponent;
}());
AccountGeneralComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-account-general',
        template: __webpack_require__(988),
        styles: [__webpack_require__(431)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */]],
        entryComponents: [ChangePasswordModalComponent]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MdDialog */]) === "function" && _d || Object])
], AccountGeneralComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=account-general.component.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**/
var AccountComponent = (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () { };
    ;
    return AccountComponent;
}());
AccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-account',
        template: __webpack_require__(990),
        styles: [__webpack_require__(965)]
    }),
    __metadata("design:paramtypes", [])
], AccountComponent);

//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_service__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePlanComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BillingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdatePlanComponent = (function () {
    function UpdatePlanComponent(dialogRef, rd, accountService) {
        this.dialogRef = dialogRef;
        this.rd = rd;
        this.accountService = accountService;
        this.changePassword = true;
        this.forgotPassword = false;
        this.currentRd = rd;
        this.config = this.dialogRef._containerInstance.dialogConfig.data;
        this.currentPlan = this.config.accountData.CurrentPlan;
        this.selectedPlan = this.currentPlan;
        this.stripeSubscriptionToken = this.config.accountData.StripeSubscriptionToken;
    }
    ;
    UpdatePlanComponent.prototype.selected = function (event) {
        console.log(event);
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        this.selectedPlan = value;
        console.log(target);
    };
    UpdatePlanComponent.prototype.getCSSClasses = function (str) {
        if (str.toLocaleLowerCase() === this.selectedPlan.toLocaleLowerCase()) {
            return 'btn btn-upgrade-selected';
        }
        return 'btn btn-upgrade-unselected';
    };
    UpdatePlanComponent.prototype.isButtonDisabled = function () {
        return this.selectedPlan !== this.currentPlan;
    };
    UpdatePlanComponent.prototype.saveAccountPlan = function () {
        var _this = this;
        // return;
        this.accountService.updateBillingData(this.stripeSubscriptionToken, this.selectedPlan.toLocaleLowerCase()).subscribe(function () {
            var blobDataToSend = _this.config.accountData;
            blobDataToSend.CurrentPlan = _this.selectedPlan.toLocaleLowerCase();
            // update the server with new plan
            // TODO:: check with the server if he can update this data automatically by himself
            _this.accountService.postAccountGeneralSettings(blobDataToSend).subscribe(function () {
            }, function (error) { return console.log(error); });
            _this.dialogRef.close(true);
            // update the blob
        }, function (error) {
            // TODO:: throw error message to user.
            console.log(error);
        });
    };
    return UpdatePlanComponent;
}());
UpdatePlanComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-update-plan',
        template: __webpack_require__(992),
        styles: [__webpack_require__(432)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */]) === "function" && _c || Object])
], UpdatePlanComponent);

var BillingData = (function () {
    function BillingData() {
    }
    return BillingData;
}());
var BillingComponent = (function () {
    function BillingComponent(dialog, accountService) {
        this.dialog = dialog;
        this.accountService = accountService;
        this.billingData = new BillingData();
    }
    BillingComponent.prototype.ngOnInit = function () {
        this.loadBillingData();
    };
    ;
    BillingComponent.prototype.loadBillingData = function () {
        var _this = this;
        this.accountService.getAccountGeneralSettings().subscribe(function (result) {
            if (result == null) {
                return;
            }
            _this.accountData = result;
            _this.billingData.companyName = _this.accountData.CompanyName;
            _this.billingData.companyNumber = _this.accountData.CompanyNumber;
            _this.billingData.address = _this.accountData.CompanyAddress;
            if (!_this.accountData.StripeSubscriptionToken) {
                return;
            }
            // fetch the relevant billing info
            _this.accountService.getBillingData(_this.accountData.StripeSubscriptionToken).subscribe(function (billingResult) {
                if (billingResult == null) {
                    return;
                }
                _this.billingData.fee = billingResult.FeeDesc;
                _this.billingData.numOfUsers = billingResult.UsersQuantity;
                _this.billingData.planName = billingResult.PlanName;
                _this.currentNumberOfUsers = billingResult.UsersQuantity;
            }),
                function (error) {
                    console.log(error);
                };
        });
    };
    BillingComponent.prototype.openUpgradePlan = function () {
        var _this = this;
        // the upgrade window should not be opened if the StripeToken
        if (!this.accountData.StripeSubscriptionToken) {
            return;
        }
        this.dialogRef = this.dialog.open(UpdatePlanComponent, {
            width: '50%',
            data: { accountData: this.accountData, billingData: this.billingData }
        });
        this.dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result)
                _this.loadBillingData();
        });
    };
    ;
    BillingComponent.prototype.saveAccountData = function () {
        // add validation on data if needed
        var blobDataToSend = this.accountData;
        // update the form data
        blobDataToSend.CompanyName = this.billingData.companyName;
        blobDataToSend.CompanyAddress = this.billingData.address;
        var newNumOfUsers = +this.billingData.numOfUsers;
        if (+this.currentNumberOfUsers !== newNumOfUsers && newNumOfUsers >= 0) {
        }
        // update stripe with new users number
        this.accountService.updateUsersNumber(this.accountData.StripeSubscriptionToken, this.billingData.numOfUsers).subscribe(function () {
        });
        this.accountService.postAccountGeneralSettings(blobDataToSend).subscribe(function () {
            // TODO:: show success dialog
        }, function (error) { return console.log(error); });
    };
    return BillingComponent;
}());
BillingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-billing',
        template: __webpack_require__(991),
        styles: [__webpack_require__(432)],
        entryComponents: [UpdatePlanComponent],
        providers: [__WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */]]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */]) === "function" && _e || Object])
], BillingComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=billing.component.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_service__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsComponent = (function () {
    function NotificationsComponent(accountService) {
        var _this = this;
        this.accountService = accountService;
        this.adminSettings = {};
        this.loadSettings = function () {
            _this.accountService.GetAccountNotificationsSettings().subscribe(function (result) {
                _this.adminSettings = result;
            }, function (error) {
                console.log(error);
            });
        };
        this.postSettings = function () {
            _this.accountService.PostAccountNotificationsSettings(_this.adminSettings).subscribe(function (result) { console.log(result); }, function (error) { console.log(error); });
        };
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        this.loadSettings();
    };
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notifications',
        template: __webpack_require__(993),
        styles: [__webpack_require__(966)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */]) === "function" && _a || Object])
], NotificationsComponent);

var _a;
//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_dashboard_dashboard_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(982);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_dashboard_templates_dashboard_templates_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_actions_dashboard_actions__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_models__ = __webpack_require__(675);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = (function () {
    function DashboardComponent(dashboardService, store, dashboardActions) {
        // this.getDashboardData = store.select(s => s.dashboardData).subscribe(
        var _this = this;
        this.dashboardService = dashboardService;
        this.store = store;
        this.dashboardActions = dashboardActions;
        this.recipientValueColor = '#9A1796';
        this.totals = {};
        this.dataHasLoaded = false;
        this.allData = {};
        this.pieData = {};
        this.colorScheme = { domain: ['#326491', '#4D9CE3', '#234768', '#6CAEE8', '#ADD2F2'] };
        this.graphColor = {
            domain: ['#9A1796', '#EE5F12', '#7BBDEE', '#F9C453']
        };
        this.pieChartTitle = 'Clean Replica By CDR';
        this.timeFrame = 30;
        this.changeTimeFrame = function (newTime) {
            _this.timeFrame = newTime;
            _this.loadDashboardData(newTime);
        };
        this.dictionaryToObject = function (dictionary) {
            var arr = [];
            __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.each(dictionary, function (value, key) {
                var newObject = {
                    'name': key,
                    'value': value
                };
                arr.push(newObject);
            });
            return arr.slice(0, 5);
        };
        this.GetFeed = function () {
            _this.dashboardService.GetFeed().subscribe(function (res) {
                var feed = res;
                _this.feeds = _this.makeArrayOfRandomFeeds(feed);
                console.log(_this.feeds);
            }, function (error) { return console.log(error); });
        };
        this.showAllGraphs = function (event) {
            _this.graphData = _this.currGraphData;
            _this.colorScheme = { domain: ['#582662', '#893D99', '#3F1D45', '#9E5FAB', '#C9A6D1'] };
            _this.graphColor = {
                domain: ['#9A1796', '#EE5F12', '#7BBDEE', '#F9C453']
            };
            _this.recipientValueColor = '#9A1796';
            _this.pieChartTitle = 'Total Passed Files';
            _this.senders = _this.topSenders.AllAttachments;
            _this.recipients = _this.topRecipients.AllAttachments;
        };
        // now actually calling for the store
        //  this.store.dispatch(this.dashboardActions.loadDashboardData(this.timeFrame));
    }
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        this.GetFeed();
        this.loadDashboardData(this.timeFrame);
        // this.store.dispatch(this.dashboardActions.loadDashboardData(this.timeFrame));
    };
    ;
    DashboardComponent.prototype.generateThreeDifferentRandomNumbers = function () {
        var arr = [];
        while (arr.length < 3) {
            var randomnumber = Math.ceil(Math.random() * 9);
            if (arr.indexOf(randomnumber) > -1)
                continue;
            arr[arr.length] = randomnumber;
        }
        return arr;
    };
    DashboardComponent.prototype.makeArrayOfRandomFeeds = function (arrayOfFeeds) {
        var randomFeeds = [];
        var randomNumbers = this.generateThreeDifferentRandomNumbers();
        for (var _i = 0, randomNumbers_1 = randomNumbers; _i < randomNumbers_1.length; _i++) {
            var i = randomNumbers_1[_i];
            randomFeeds.push(arrayOfFeeds[i]);
        }
        ;
        return randomFeeds;
    };
    DashboardComponent.prototype.selectedGraphChanged = function (event) {
        switch (event) {
            case 'totals.totalCleanReplicaByCdr':
                this.graphData = [this.cleanReplica];
                this.colorScheme = { domain: ['#326491', '#4D9CE3', '#234768', '#6CAEE8', '#ADD2F2'] };
                this.graphColor = { domain: ['#326491'] };
                this.pieChartTitle = 'Clean Replica By CDR';
                this.recipientValueColor = '#A5CDED';
                this.senders = this.topSenders.TotalModified;
                this.recipients = this.topRecipients.TotalModified;
                if (this.allData.TotalModified.TotalResult > 0) {
                    this.selectedGraphHasNoData = false;
                    this.pieData = this.dictionaryToObject(this.allData.TotalModified.TopFiveFileTypes);
                }
                else {
                    this.selectedGraphHasNoData = true;
                }
                break;
            case 'totals.attachmentOk':
                this.graphData = [this.attachmentOk];
                this.colorScheme.domain = ['#33796C', '#4FBDAA', '#25574E', '#429B8B', '#AFE1D8'];
                this.graphColor = { domain: ['#33796C'] };
                this.pieChartTitle = 'Original Attachment OK';
                this.recipientValueColor = '#A4DCD2';
                this.senders = this.topSenders.TotalPassed;
                this.recipients = this.topRecipients.TotalPassed;
                if (this.allData.TotalPassed.TotalResult > 0) {
                    this.pieData = this.dictionaryToObject(this.allData.TotalPassed.TopFiveFileTypes);
                    this.selectedGraphHasNoData = false;
                }
                else {
                    this.selectedGraphHasNoData = false;
                }
                break;
            case 'totals.blockedByPolicy':
                this.graphData = [this.blockedByPolicy];
                this.graphColor = { domain: ['#C98F20'] };
                this.colorScheme.domain = ['#C98F20', '#F4AE29', '#6F500D', '#F8CA72', '#FBE7C2'];
                this.pieChartTitle = 'Attachment Blocked by Policy';
                this.recipientValueColor = '#F7D399';
                this.senders = this.topSenders.TotalBlockedByPolicy;
                this.recipients = this.topRecipients.TotalBlockedByPolicy;
                if (this.allData.TotalBlockedByPolicy.TotalResult > 0) {
                    this.pieData = this.dictionaryToObject(this.allData.TotalBlockedByPolicy.TopFiveFileTypes);
                    this.selectedGraphHasNoData = false;
                }
                else {
                    this.selectedGraphHasNoData = true;
                }
                break;
            case 'totals.attachmentBlockedByAntivirus':
                this.graphData = [this.attachmentBlockedByAntivirus];
                this.colorScheme.domain = ['#994110', '#EF661F', '#6D2F08', '#F1813C', '#F8B994'];
                this.graphColor = { domain: ['#994110'] };
                this.pieChartTitle = 'Attachment Blocked By Antivirus';
                this.recipientValueColor = '#F5AF91';
                this.senders = this.topSenders.TotalBlockedByAntivirus;
                this.recipients = this.topRecipients.TotalBlockedByAntivirus;
                if (this.allData.TotalBlockedByAntivirus.TotalResult > 0) {
                    this.pieData = this.dictionaryToObject(this.allData.TotalBlockedByAntivirus.TopFiveFileTypes);
                    this.selectedGraphHasNoData = false;
                }
                else {
                    this.selectedGraphHasNoData = true;
                }
                break;
        }
    };
    DashboardComponent.prototype.makeDataGraphReadable = function (objectName, data) {
        var graphObject = new __WEBPACK_IMPORTED_MODULE_6__dashboard_models__["a" /* GraphDataModel */](objectName);
        var serializedData = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var measurement = data_1[_i];
            var object = {};
            object.name = new Date(measurement.Key);
            object.value = measurement.Value;
            serializedData.push(object);
        }
        graphObject.series = serializedData;
        return graphObject;
    };
    DashboardComponent.prototype.loadDashboardData = function (timeFrame) {
        var _this = this;
        this.dashboardService.getDashboardData(timeFrame).subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.allData = res;
            _this.totals.TotalEmailsProcessed = res.TotalEmailsProcessed;
            _this.pieData = _this.dictionaryToObject(res.TotalBlockedByPolicy);
            _this.totals.TotalUrls = res.TotalUrls;
            _this.totals.TotalAttachmentProcessed = res.TotalAttachmentProcessed;
            _this.topRecipients = res.TopSendersRecipientsAddresses.TopRecipients;
            _this.topSenders = res.TopSendersRecipientsAddresses.TopSenders;
            _this.recipients = _this.topRecipients.AllAttachments;
            _this.senders = _this.topSenders.AllAttachments;
            // this.store.dispatch(this.dashboardActions.loadDashboardData());
            _this.cleanReplica = _this.makeDataGraphReadable('Clean Replica By CDR', _this.allData.TotalSanitizationsPerDate.TotalCdrGraphList);
            _this.attachmentOk = _this.makeDataGraphReadable('Attachments Passed OK', _this.allData.TotalSanitizationsPerDate.TotalPassedGraphList);
            _this.blockedByPolicy = _this.makeDataGraphReadable('Blocked By Policy', _this.allData.TotalSanitizationsPerDate.TotalBlockedByPolicyGraphList);
            _this.attachmentBlockedByAntivirus = _this.makeDataGraphReadable('Blocked By Antivirus', _this.allData.TotalSanitizationsPerDate.TotalBlockedByAvGraphList);
            _this.currGraphData =
                [
                    _this.cleanReplica, _this.attachmentBlockedByAntivirus, _this.attachmentOk, _this.blockedByPolicy
                ];
            _this.graphData = _this.currGraphData;
            // GraphComponent.Multi =
        }, function (error) {
            console.log(error);
        }, function () {
            _this.dataHasLoaded = true;
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        if (this.getDashboardData) {
            this.getDashboardData.unsubscribe();
        }
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(995),
        styles: [__webpack_require__(968)],
        providers: [__WEBPACK_IMPORTED_MODULE_1_app_dashboard_dashboard_service__["a" /* DashboardService */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__templates_dashboard_templates_dashboard_templates_component__["c" /* TotalsTopComponent */], __WEBPACK_IMPORTED_MODULE_3__templates_dashboard_templates_dashboard_templates_component__["d" /* GraphSelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_3__templates_dashboard_templates_dashboard_templates_component__["e" /* GraphComponent */], __WEBPACK_IMPORTED_MODULE_3__templates_dashboard_templates_dashboard_templates_component__["f" /* PieChartsComponent */], __WEBPACK_IMPORTED_MODULE_3__templates_dashboard_templates_dashboard_templates_component__["a" /* EmailSectionComponent */], __WEBPACK_IMPORTED_MODULE_3__templates_dashboard_templates_dashboard_templates_component__["b" /* NewsFeedComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_dashboard_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_dashboard_dashboard_service__["a" /* DashboardService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__store_actions_dashboard_actions__["a" /* DashboardActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__store_actions_dashboard_actions__["a" /* DashboardActions */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TotalsTopComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GraphSelectorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GraphComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PieChartsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailSectionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NewsFeedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TotalsTopComponent = (function () {
    function TotalsTopComponent() {
        var _this = this;
        this.onTotalSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.displayTotals = function (event) {
            console.log(event);
            _this.onTotalSelected.emit(event);
        };
    }
    return TotalsTopComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TotalsTopComponent.prototype, "totals", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TotalsTopComponent.prototype, "onTotalSelected", void 0);
TotalsTopComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-top-totals',
        template: __webpack_require__(1001),
        styles: [__webpack_require__(66)]
    }),
    __metadata("design:paramtypes", [])
], TotalsTopComponent);

var GraphSelectorComponent = (function () {
    function GraphSelectorComponent() {
        this.onGraphChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.colorScheme = {
            domain: ['#1565C0', '#03A9F4', '#FFA726', '#FFCC80'],
        };
    }
    GraphSelectorComponent.prototype.changeTheCurrentLine = function (event) {
        if (arguments[1]) {
            this.onGraphChanged.emit(arguments[1]);
        }
        ;
    };
    ;
    return GraphSelectorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GraphSelectorComponent.prototype, "totals", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], GraphSelectorComponent.prototype, "onGraphChanged", void 0);
GraphSelectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-graph-selector',
        template: __webpack_require__(997),
        styles: [__webpack_require__(66)]
    }),
    __metadata("design:paramtypes", [])
], GraphSelectorComponent);

var GraphComponent = (function () {
    // lie, area
    function GraphComponent() {
        this.showXAxis = true;
        this.showYAxis = false;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = '';
        this.showYAxisLabel = false;
        this.yAxisLabel = 'Month';
        this.showGridLines = true;
        this.schemeType = 'ordinal';
        this.colorScheme = {
            domain: ['#9A1796', '#EE5F12', '#7BBDEE', '#F9C453']
        };
        this.curving = __WEBPACK_IMPORTED_MODULE_1_d3__["curveCardinal"];
        this.view = undefined;
    }
    GraphComponent.prototype.ngOnInit = function () {
    };
    return GraphComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GraphComponent.prototype, "graphData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], GraphComponent.prototype, "graphColor", void 0);
GraphComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-graph',
        template: __webpack_require__(998),
        styles: [__webpack_require__(66)]
    }),
    __metadata("design:paramtypes", [])
], GraphComponent);

var PieChartsComponent = (function () {
    function PieChartsComponent() {
        this.view = [400, 300];
        this.NoDatacolorScheme = { domain: ['#999'] };
        this.NoDatapieData = [{ 'name': 'No Data', 'value': 10 }];
    }
    return PieChartsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PieChartsComponent.prototype, "pieData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PieChartsComponent.prototype, "selectedGraphHasNoData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PieChartsComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PieChartsComponent.prototype, "colorScheme", void 0);
PieChartsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-pie-charts',
        template: __webpack_require__(1000),
        styles: [__webpack_require__(66)]
    })
], PieChartsComponent);

var EmailSectionComponent = (function () {
    function EmailSectionComponent(router) {
        this.router = router;
        this.displayingSenders = false;
        this.displayingRecipients = true;
    }
    EmailSectionComponent.prototype.displaySenders = function () {
        this.displayingRecipients = false;
        this.displayingSenders = true;
    };
    EmailSectionComponent.prototype.displayRecipients = function () {
        this.displayingRecipients = true;
        this.displayingSenders = false;
    };
    EmailSectionComponent.prototype.seeAllRelatedMails = function (type, mail) {
        switch (type) {
            case 'sender':
                console.log('sender');
                this.router.navigate(['user/emails/browse'], { queryParams: { sender: mail } });
                break;
            case 'recipient':
                console.log('recipient');
                this.router.navigate(['user/emails/browse'], { queryParams: { recipient: mail } });
                break;
        }
    };
    return EmailSectionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EmailSectionComponent.prototype, "senders", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EmailSectionComponent.prototype, "recipients", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], EmailSectionComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], EmailSectionComponent.prototype, "recipientValueColor", void 0);
EmailSectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-email-section',
        template: __webpack_require__(996),
        styles: [__webpack_require__(66)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object])
], EmailSectionComponent);

var NewsFeedComponent = (function () {
    function NewsFeedComponent() {
    }
    return NewsFeedComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NewsFeedComponent.prototype, "feeds", void 0);
NewsFeedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-news-feed',
        template: __webpack_require__(999),
        styles: [__webpack_require__(66)]
    })
], NewsFeedComponent);

var _a;
//# sourceMappingURL=dashboard-templates.component.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstTimeUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirstTimeUserComponent = (function () {
    function FirstTimeUserComponent() {
    }
    FirstTimeUserComponent.prototype.ngOnInit = function () {
    };
    return FirstTimeUserComponent;
}());
FirstTimeUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-first-time-user',
        template: __webpack_require__(1002),
        styles: [__webpack_require__(969)]
    }),
    __metadata("design:paramtypes", [])
], FirstTimeUserComponent);

//# sourceMappingURL=first-time-user.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_service__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_component__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BrowseComponent = (function (_super) {
    __extends(BrowseComponent, _super);
    function BrowseComponent(_mailService, route, router) {
        var _this = _super.call(this) || this;
        _this._mailService = _mailService;
        _this.route = route;
        _this.router = router;
        _this.emails = [];
        _this.isEmailEmpty = true;
        _this.selectedMails = [];
        _this.columns = [
            { name: 'SanitizationDate', label: 'Date', format: function (rawDate) { return _this.convertToDate(rawDate); } },
            { name: 'Reason Blocked', label: 'Reason' },
            { name: 'Recipient', label: 'Recipient' },
            { name: 'Attached Files', label: 'Attached File(s)' },
        ];
        _this.query = {
            sortField: 'SanitizationDate',
            PageSize: 5,
            PageIndex: 1,
            sortOrder: 'Asc',
            Stage: 'All'
        };
        _this.BrowseMails = function () {
            _this._mailService.searchMails(_this.query).subscribe(function (result) {
                console.log(result);
                _this.emails = result.List;
                _this.totalNumberOfMails = result.Total;
                _this.isEmailEmpty = false;
            }, function (error) {
                console.log(error);
            });
        };
        _this.performAction = function (action) {
            _this._mailService.performAction(_this.selectedMails, action).subscribe(function (success) {
                console.log(success);
            }, function (error) {
                console.log(error);
            });
        };
        _this.filterBy = function (filter) {
            _this.query.Stage = filter;
            console.log(_this.query);
            _this.BrowseMails();
        };
        return _this;
    }
    ;
    BrowseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .queryParams
            .subscribe(function (params) {
            if (params['sender']) {
                _this.query = {};
                _this.query.Sender = params.sender;
                _this.BrowseMails();
            }
            else if (params['recipient']) {
                _this.query = {};
                _this.query.Recipient = params.recipient;
                _this.BrowseMails();
            }
            else {
                _this.BrowseMails();
            }
        });
    };
    ;
    BrowseComponent.prototype.sort = function (sortEvent) {
        console.log(sortEvent);
        this.query.sortField = sortEvent.name;
        this.query.sortOrder = sortEvent.order;
        this.BrowseMails();
    };
    ;
    BrowseComponent.prototype.page = function (pagingEvent) {
        console.log(pagingEvent);
        this.query.PageSize = pagingEvent.pageSize;
        this.query.PageIndex = pagingEvent.page;
        this.BrowseMails();
    };
    ;
    BrowseComponent.prototype.selectMail = function (selectEvent) {
        console.log(selectEvent);
        if (selectEvent.selected) {
            this.selectedMails.push(selectEvent.row.SanitizationId);
            console.log(this.selectedMails);
        }
        else {
            var idx = this.selectedMails.indexOf(selectEvent.row.SanitizationId);
            this.selectedMails.splice(idx, 1);
            console.log(this.selectedMails);
        }
    };
    BrowseComponent.prototype.selectAllMails = function (selection) {
        console.log(selection);
        if (!selection.selected) {
            this.selectedMails = [];
            console.log(this.selectedMails);
        }
        else {
            this.selectedMails = [];
            for (var _i = 0, _a = selection.rows; _i < _a.length; _i++) {
                var row = _a[_i];
                this.selectedMails.push(row.SanitizationId);
                console.log(this.selectedMails);
            }
        }
    };
    BrowseComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return BrowseComponent;
}(__WEBPACK_IMPORTED_MODULE_3__email_component__["a" /* EmailComponent */]));
BrowseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-browse',
        template: __webpack_require__(1003),
        styles: [__webpack_require__(970)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* MailService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* MailService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], BrowseComponent);

var _a, _b, _c;
//# sourceMappingURL=browse.component.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_custom_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailService; });
/**
 * Created by if_found_call_0586288454 on 24/04/2017 ap. J.-C..
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MailService = (function () {
    function MailService(http) {
        this.http = http;
        this.server = localStorage.getItem('serverName');
        this.token = localStorage.getItem('token');
    }
    MailService.prototype.searchMails = function (query) {
        var searchUrl = 'http://' + this.server + ':4580/sob/api/emails/search?q=1';
        return this.http.get(searchUrl, { search: query })
            .map(function (res) {
            console.log(res);
            return (res.json());
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not retrieve mails'); });
    };
    MailService.prototype.performAction = function (selection, action) {
        var actionUrl = 'http://' + this.server + ':4580/sob/api/emails/performAction/?actionName=' + action;
        return this.http.post(actionUrl, selection)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error, could not perform the action'); });
    };
    return MailService;
}());
MailService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_custom_http__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_custom_http__["a" /* HttpService */]) === "function" && _a || Object])
], MailService);

var _a;
//# sourceMappingURL=email.service.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_service__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_component__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Query = (function () {
    function Query() {
    }
    return Query;
}());
var SearchComponent = (function (_super) {
    __extends(SearchComponent, _super);
    function SearchComponent(mailService) {
        var _this = _super.call(this) || this;
        _this.mailService = mailService;
        _this.emails = {};
        _this.query = new Query();
        _this.noSearchInitiated = true;
        _this.pullingData = false;
        _this.noResultFound = false;
        _this.performAction = function (sanitizationId, action) {
            var id = [sanitizationId];
            _this.mailService.performAction(id, action).subscribe(function (success) {
                console.log(success);
            }, function (error) {
                console.log(error);
            });
        };
        return _this;
    }
    ;
    SearchComponent.prototype.ngOnInit = function () {
        this.mycolor = "red";
        this.fs = 60;
        this.isFirstTime = false;
        console.log(this.isFirstTime);
    };
    SearchComponent.prototype.emptyQuery = function () {
        this.noSearchInitiated = true;
        this.query = new Query();
    };
    SearchComponent.prototype.searchMails = function () {
        var _this = this;
        this.pullingData = true;
        var noWhiteSpaceTicketId = this.query.ticketId.replace(/ /g, '');
        this.query.ticketId = noWhiteSpaceTicketId;
        this.mailService.searchMails(this.query).subscribe(function (success) {
            console.log(success);
            _this.emails = success.List.pop();
            _this.mailHasNoAttachments = (Object.keys(_this.emails['Attached Files Outcomes']).length === 0) ? true : false;
            _this.totalNumberOfMails = success.Total;
            _this.noResultFound = (_this.totalNumberOfMails > 0) ? false : true;
            _this.pullingData = false;
            _this.noSearchInitiated = false;
        }, function (error) {
            console.log(error);
        });
    };
    return SearchComponent;
}(__WEBPACK_IMPORTED_MODULE_2__email_component__["a" /* EmailComponent */]));
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(1005),
        styles: [__webpack_require__(433)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* MailService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* MailService */]) === "function" && _a || Object])
], SearchComponent);

var _a;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    return HelpComponent;
}());
HelpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-help',
        template: __webpack_require__(1006),
        styles: [__webpack_require__(971)]
    }),
    __metadata("design:paramtypes", [])
], HelpComponent);

//# sourceMappingURL=help.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_users_service__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_account_account_service__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(userService, accountService, router, sanitizer, iconReg) {
        this.userService = userService;
        this.accountService = accountService;
        this.router = router;
        this.user = {};
        this.wrongId = false;
        this.submitted = false;
        this.checkingUser = false;
        iconReg.addSvgIcon('resecLoginLogo', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/resecLogoLogin.svg'));
    }
    LoginComponent.prototype.checkServerInUrl = function () {
        var serverInUrl = window.location.href.split("?s=")[1];
        this.urlHasServer = (serverInUrl) ? true : false;
        localStorage.setItem('urlHasServer', this.urlHasServer.toString());
        this.user.server = (this.urlHasServer) ? serverInUrl : '';
    };
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.clear();
        // this.detectBrowser();
        // console.log(window.location.href);
        this.checkServerInUrl();
    };
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.checkLogin();
    };
    LoginComponent.prototype.checkState = function () {
        var servername = localStorage.getItem('serverName');
        var token = localStorage.getItem('token');
        console.log('here it is ', servername);
        console.log('token', token);
        if (servername && token.length > 14) {
            return true;
        }
        return false;
    };
    LoginComponent.prototype.checkLogin = function () {
        var _this = this;
        this.checkingUser = true;
        this.wrongId = false;
        this.userService.login(this.user.server, this.user.username, this.user.password)
            .subscribe(function (success) {
            if (success.UserRole !== 'SelfOnBoard') {
                _this.wrongId = true;
                _this.submitted = false;
                _this.checkingUser = false;
            }
            else {
                localStorage.setItem('serverName', _this.user.server);
                localStorage.setItem('userRole', success.UserRole);
                localStorage.setItem('currentPassword', _this.user.password);
                var token = 'Bearer ' + success['access_token'];
                var isFirstTime_1 = success.IsFirstTime;
                localStorage.setItem('token', token);
                localStorage.setItem('username', _this.user.username);
                _this.checkingUser = false;
                _this.accountService.getAccountGeneralSettingsWithServerAddress(_this.user.server).subscribe(function (result) {
                    if (result == null) {
                        return;
                    }
                    _this.currentAccount = result;
                    var isFistLogin = result.IsFirstTime;
                    localStorage.setItem('isFirstTime', isFirstTime_1);
                    if (_this.checkState()) {
                        if (isFistLogin) {
                            _this.router.navigate(['user/firstTimeChangePassword']);
                        }
                        else {
                            _this.router.navigate(['/user/dashboard']);
                        }
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }, function (error) {
            console.log(error);
            _this.wrongId = true;
            _this.submitted = false;
            _this.checkingUser = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(1007),
        styles: [__webpack_require__(972)],
        providers: [__WEBPACK_IMPORTED_MODULE_1_app_shared_users_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5_app_account_account_service__["a" /* AccountService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_users_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_users_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_app_account_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_account_account_service__["a" /* AccountService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["P" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["P" /* MdIconRegistry */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PasswordMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordModel; });
/**
 * Created by if_found_call_0586288454 on 11/06/2017 ap. J.-C..
 */
var PasswordMethods = (function () {
    function PasswordMethods() {
        this.passwordsMatch = function (password1, password2) {
            return (password1 === password2 && password2 !== undefined);
        };
        this.hasUpperCase = function (password) {
            return (/[A-Z]/.test(password));
        };
        this.hasLowerCase = function (password) {
            return (/[a-z]/.test(password));
        };
        this.hasNumber = function (password) {
            return (/[0-9]/.test(password));
        };
        this.hasSpecialChars = function (password) {
            return (/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(password));
        };
    }
    PasswordMethods.prototype.currentPasswordIsValid = function (currentPassword) {
        var currentPasswordFromLocalStorage = localStorage.getItem('currentPassword');
        console.log(currentPasswordFromLocalStorage);
        console.log(currentPassword);
        return currentPasswordFromLocalStorage === currentPassword;
    };
    PasswordMethods.prototype.passwordIsValid = function (password) {
        return (this.hasUpperCase(password) && this.hasLowerCase(password) && this.hasNumber(password) && this.hasSpecialChars(password));
    };
    PasswordMethods.prototype.bothPasswordsAreValidAndMatch = function (newPassword, newPasswordConfirm) {
        return (this.passwordsMatch(newPassword, newPasswordConfirm) && this.passwordIsValid(newPassword));
    };
    return PasswordMethods;
}());

var PasswordModel = (function () {
    function PasswordModel() {
    }
    return PasswordModel;
}());

//# sourceMappingURL=passwords.model.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_account_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_passwords_model__ = __webpack_require__(349);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUserPasswordComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewUserPasswordComponent = (function (_super) {
    __extends(NewUserPasswordComponent, _super);
    function NewUserPasswordComponent(accountService, router) {
        var _this = _super.call(this) || this;
        _this.accountService = accountService;
        _this.router = router;
        _this.passwordsToSend = new __WEBPACK_IMPORTED_MODULE_3__model_passwords_model__["a" /* PasswordModel */]();
        _this.changePassword = function () {
            var thisObject = _this;
            _this.accountService.ChangePassword(_this.passwordsToSend).subscribe(function (result) {
                var updatedBlob = thisObject.currentAccount;
                updatedBlob.IsFirstLogin = false;
                thisObject.accountService.postAccountGeneralSettings(updatedBlob).subscribe(function () {
                    _this.router.navigate(['user/dashboard']);
                }, function (error) { return console.log(error); });
            }),
                function (error) { return console.log(error); };
        };
        _this.accountService.getAccountGeneralSettings().subscribe(function (result) {
            if (result == null) {
                return;
            }
            _this.currentAccount = result;
        });
        return _this;
    }
    NewUserPasswordComponent.prototype.fieldIsValid = function (password) {
        return this.passwordIsValid(password);
    };
    NewUserPasswordComponent.prototype.oldPasswordIsValid = function (currentPassword) {
        return this.currentPasswordIsValid(currentPassword);
    };
    NewUserPasswordComponent.prototype.passwordsAreValid = function (newPassword, confirmNewPassword) {
        return this.bothPasswordsAreValidAndMatch(newPassword, confirmNewPassword);
    };
    return NewUserPasswordComponent;
}(__WEBPACK_IMPORTED_MODULE_3__model_passwords_model__["b" /* PasswordMethods */]));
NewUserPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-user-password',
        template: __webpack_require__(1008),
        styles: [__webpack_require__(973)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__account_account_service__["a" /* AccountService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__account_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__account_account_service__["a" /* AccountService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], NewUserPasswordComponent);

var _a, _b;
//# sourceMappingURL=new-user-password.component.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__templates_templates_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__security_service__ = __webpack_require__(163);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExceptionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExceptionComponent = (function () {
    function ExceptionComponent(securityService) {
        var _this = this;
        this.securityService = securityService;
        this.newDepartment = false;
        this.dataIsLoading = true;
        this.exceptionsList = {};
        this.loadSettings = function () {
            _this.securityService.getPolicyExceptionsSettings().subscribe(function (result) {
                if (Object.keys(result).length === 0 && result.constructor === Object) {
                    _this.noSettingsExist = true;
                }
                else {
                    _this.noSettingsExist = false;
                    _this.settings = result[Object.keys(result)[0]];
                    _this.allSettingsBackUp = _this.settings;
                    _this.exceptionsList = result;
                }
            }, function (error) {
                console.log('an error occurred');
            }, function () {
                _this.dataIsLoading = false;
            });
        };
        this.selectDepartment = function (departmentName) {
            _this.settings = _this.exceptionsList[departmentName];
        };
        this.deletePolicy = function (policy) {
            _this.securityService.deletePolicyExceptionSettings(policy).subscribe(function (result) {
                var policyName = policy.policyName;
                delete _this.exceptionsList[policyName];
                if (Object.keys(_this.exceptionsList).length === 0) {
                    _this.noSettingsExist = true;
                }
                else {
                    _this.settings = _this.exceptionsList[Object.keys(_this.exceptionsList)[0]];
                }
            }, function (error) {
                console.log(error);
            });
        };
        this.cancelCreation = function (cancel) {
            _this.newDepartment = cancel;
            _this.settings = _this.allSettingsBackUp;
            _this.noSettingsExist = (Object.keys(_this.settings).length === 0 && _this.settings.constructor === Object) ? true : false;
        };
        this.newDptQuery = function (newDpt) {
            _this.newDepartment = newDpt;
            if (newDpt) {
                // this.loadGeneralSettings();
            }
        };
        this.postNewSettings = function (settings) {
            _this.securityService.savePolicyExceptionSettings(settings).subscribe(function (success) {
                var policyName = settings.policyName;
                _this.exceptionsList[policyName] = success;
                _this.newDepartment = false;
                _this.allSettingsBackUp[policyName] = success;
                _this.settings = _this.allSettingsBackUp;
                _this.noSettingsExist = false;
            }, function (error) { return console.log(error); });
        };
        this.loadSettings();
    }
    ;
    return ExceptionComponent;
}());
ExceptionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-exception',
        template: __webpack_require__(1009),
        styles: [__webpack_require__(118)],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_1__templates_templates_component__["a" /* ExceptionSettingsComponent */], __WEBPACK_IMPORTED_MODULE_1__templates_templates_component__["b" /* ExistingExceptionsComponent */], __WEBPACK_IMPORTED_MODULE_1__templates_templates_component__["c" /* NewExceptionComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_2__security_service__["a" /* SecurityService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__security_service__["a" /* SecurityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__security_service__["a" /* SecurityService */]) === "function" && _a || Object])
], ExceptionComponent);

var _a;
//# sourceMappingURL=exception.component.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__security_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_templates_components__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_company_policy__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GeneralComponent = (function () {
    function GeneralComponent(securityService, changeDetection) {
        var _this = this;
        this.securityService = securityService;
        this.changeDetection = changeDetection;
        this.mainPolicySettings = new __WEBPACK_IMPORTED_MODULE_3__model_company_policy__["a" /* Policy */]();
        this.saveSettings = function () {
            // setting all values on cdr to be the same
            // for (const setting in this.mainPolicySettings.AttachmentsProcessedLevels) {
            //   this.mainPolicySettings.AttachmentsProcessedLevels[setting] = this.mainPolicySettings.AttachmentsProcessedLevels['documents'];
            // }
            _this.securityService.saveSettings(_this.mainPolicySettings).subscribe(function (success) {
                console.log(success);
            }, function (error) {
                console.log(error);
            });
        };
    }
    GeneralComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.securityService.getSettings().subscribe(function (result) {
            _this.mainPolicySettings = result;
            console.log(_this.mainPolicySettings);
        }, function (error) {
            console.log('an error occurred');
        });
    };
    GeneralComponent.prototype.resetToDefaultValues = function () {
        this.mainPolicySettings = new __WEBPACK_IMPORTED_MODULE_3__model_company_policy__["a" /* Policy */]();
    };
    return GeneralComponent;
}());
GeneralComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-general',
        template: __webpack_require__(1013),
        styles: [__webpack_require__(87)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__security_service__["a" /* SecurityService */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__templates_templates_components__["a" /* GeneralSettingsComponent */], __WEBPACK_IMPORTED_MODULE_2__templates_templates_components__["b" /* GeneralSettingsWithCDRComponent */], __WEBPACK_IMPORTED_MODULE_2__templates_templates_components__["d" /* GeneralSettingsWithoutCDRComponent */], __WEBPACK_IMPORTED_MODULE_2__templates_templates_components__["c" /* SpecialAttachmentsComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__security_service__["a" /* SecurityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__security_service__["a" /* SecurityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object])
], GeneralComponent);

var _a, _b;
//# sourceMappingURL=general.component.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_company_policy__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralSettingsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GeneralSettingsWithCDRComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GeneralSettingsWithoutCDRComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SpecialAttachmentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeneralSettingsComponent = (function () {
    function GeneralSettingsComponent() {
    }
    Object.defineProperty(GeneralSettingsComponent.prototype, "generalSettings", {
        get: function () {
            return this._generalSettings;
        },
        set: function (policy) {
            this._generalSettings = policy;
            this.hyperlinkSlider.writeValue(policy.handleLinks);
        },
        enumerable: true,
        configurable: true
    });
    GeneralSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hyperlinkSlider.registerOnChange(function (value) {
            _this._generalSettings.handleLinks = value;
        });
    };
    return GeneralSettingsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('hyperlink'),
    __metadata("design:type", Object)
], GeneralSettingsComponent.prototype, "hyperlinkSlider", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_company_policy__["a" /* Policy */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_company_policy__["a" /* Policy */]) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__model_company_policy__["a" /* Policy */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_company_policy__["a" /* Policy */]) === "function" && _b || Object])
], GeneralSettingsComponent.prototype, "generalSettings", null);
GeneralSettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'general-settings',
        template: __webpack_require__(1014),
        styles: [__webpack_require__(87)]
    }),
    __metadata("design:paramtypes", [])
], GeneralSettingsComponent);

var GeneralSettingsWithCDRComponent = (function () {
    function GeneralSettingsWithCDRComponent() {
    }
    Object.defineProperty(GeneralSettingsWithCDRComponent.prototype, "generalSettings", {
        get: function () {
            return this._generalSettings;
        },
        set: function (policy) {
            this._generalSettings = policy;
            this.cdrSlider.writeValue(policy.AttachmentsProcessedLevels.images);
        },
        enumerable: true,
        configurable: true
    });
    GeneralSettingsWithCDRComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cdrSlider.registerOnChange(function (value) {
            _this._generalSettings.AttachmentsProcessedLevels.images = value;
            _this._generalSettings.AttachmentsProcessedLevels.presentations = value;
            _this._generalSettings.AttachmentsProcessedLevels.spreadsheets = value;
            _this._generalSettings.AttachmentsProcessedLevels.documents = value;
        });
    };
    return GeneralSettingsWithCDRComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('CDRSliderComponent'),
    __metadata("design:type", Object)
], GeneralSettingsWithCDRComponent.prototype, "cdrSlider", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__model_company_policy__["a" /* Policy */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_company_policy__["a" /* Policy */]) === "function" && _c || Object),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__model_company_policy__["a" /* Policy */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_company_policy__["a" /* Policy */]) === "function" && _d || Object])
], GeneralSettingsWithCDRComponent.prototype, "generalSettings", null);
GeneralSettingsWithCDRComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'general-with-cdr',
        template: __webpack_require__(1016),
        styles: [__webpack_require__(87)]
    })
], GeneralSettingsWithCDRComponent);

var GeneralSettingsWithoutCDRComponent = (function () {
    function GeneralSettingsWithoutCDRComponent(changeDetection) {
        this.changeDetection = changeDetection;
    }
    Object.defineProperty(GeneralSettingsWithoutCDRComponent.prototype, "generalSettings", {
        get: function () {
            return this._generalSettings;
        },
        set: function (policy) {
            this._generalSettings = policy;
            this.videoSoundSlider.writeValue(policy.AttachmentsWithoutCdr.videoSound);
            this.applicationsScriptsSlider.writeValue(policy.AttachmentsWithoutCdr.applicationsScripts);
            this.unrecognizedFilesSlider.writeValue(policy.AttachmentsWithoutCdr.unrecognizedFiles);
            this.passwordProtectedSlider.writeValue(policy.SpecialAttachments.passwordProtected);
        },
        enumerable: true,
        configurable: true
    });
    GeneralSettingsWithoutCDRComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.videoSoundSlider.registerOnChange(function (value) {
            _this._generalSettings.AttachmentsWithoutCdr.videoSound = value;
        });
        this.applicationsScriptsSlider.registerOnChange(function (value) {
            _this._generalSettings.AttachmentsWithoutCdr.applicationsScripts = value;
        });
        this.unrecognizedFilesSlider.registerOnChange(function (value) {
            _this._generalSettings.AttachmentsWithoutCdr.unrecognizedFiles = value;
        });
        this.passwordProtectedSlider.registerOnChange(function (value) {
            _this._generalSettings.SpecialAttachments.passwordProtected = value;
        });
    };
    return GeneralSettingsWithoutCDRComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('videoSound'),
    __metadata("design:type", Object)
], GeneralSettingsWithoutCDRComponent.prototype, "videoSoundSlider", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('applicationsScripts'),
    __metadata("design:type", Object)
], GeneralSettingsWithoutCDRComponent.prototype, "applicationsScriptsSlider", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('unrecognizedFiles'),
    __metadata("design:type", Object)
], GeneralSettingsWithoutCDRComponent.prototype, "unrecognizedFilesSlider", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('passwordProtected'),
    __metadata("design:type", Object)
], GeneralSettingsWithoutCDRComponent.prototype, "passwordProtectedSlider", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__model_company_policy__["a" /* Policy */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_company_policy__["a" /* Policy */]) === "function" && _e || Object),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__model_company_policy__["a" /* Policy */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_company_policy__["a" /* Policy */]) === "function" && _f || Object])
], GeneralSettingsWithoutCDRComponent.prototype, "generalSettings", null);
GeneralSettingsWithoutCDRComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'general-without-cdr',
        template: __webpack_require__(1017),
        styles: [__webpack_require__(87)]
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _g || Object])
], GeneralSettingsWithoutCDRComponent);

var SpecialAttachmentsComponent = (function () {
    function SpecialAttachmentsComponent() {
    }
    Object.defineProperty(SpecialAttachmentsComponent.prototype, "generalSettings", {
        get: function () {
            return this._generalSettings;
        },
        set: function (policy) {
            this._generalSettings = policy;
            this.specialAttachmentSlider.writeValue(policy.SpecialAttachments.signedDocuments);
        },
        enumerable: true,
        configurable: true
    });
    SpecialAttachmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.specialAttachmentSlider.registerOnChange(function (value) {
            _this._generalSettings.SpecialAttachments.signedDocuments = value;
        });
    };
    return SpecialAttachmentsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('specialAttachmentSlider'),
    __metadata("design:type", Object)
], SpecialAttachmentsComponent.prototype, "specialAttachmentSlider", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__model_company_policy__["a" /* Policy */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_company_policy__["a" /* Policy */]) === "function" && _h || Object),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__model_company_policy__["a" /* Policy */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_company_policy__["a" /* Policy */]) === "function" && _j || Object])
], SpecialAttachmentsComponent.prototype, "generalSettings", null);
SpecialAttachmentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'special-attachments',
        template: __webpack_require__(1015),
        styles: [__webpack_require__(87)]
    }),
    __metadata("design:paramtypes", [])
], SpecialAttachmentsComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=templates.components.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SecurityComponent = (function () {
    function SecurityComponent() {
    }
    SecurityComponent.prototype.ngOnInit = function () {
    };
    return SecurityComponent;
}());
SecurityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-security',
        template: __webpack_require__(1018),
        styles: [__webpack_require__(974)]
    }),
    __metadata("design:paramtypes", [])
], SecurityComponent);

//# sourceMappingURL=security.component.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDialog = (function () {
    function ConfirmDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return ConfirmDialog;
}());
ConfirmDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'confirm-dialog',
        template: "\n    <p class=\"text-center bold-dark-gray\">{{ title }}</p>\n    <p class=\"text-center\">{{ message }}</p>\n    <div class=\"text-center mt-4 mb-4\">\n      <button type=\"button\" class=\" btn btn-action\"\n              (click)=\"dialogRef.close(true)\">Logout\n      </button>\n    </div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["m" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["m" /* MdDialogRef */]) === "function" && _a || Object])
], ConfirmDialog);

var DialogsService = (function () {
    function DialogsService(dialog) {
        this.dialog = dialog;
    }
    DialogsService.prototype.Logout = function (title, message) {
        var dialogRef;
        dialogRef = this.dialog.open(ConfirmDialog, { disableClose: true });
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    };
    return DialogsService;
}());
DialogsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["n" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["n" /* MdDialog */]) === "function" && _b || Object])
], DialogsService);

var _a, _b;
//# sourceMappingURL=dialogs.service.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialogs_service__ = __webpack_require__(355);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseHandlerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResponseHandlerService = (function () {
    function ResponseHandlerService(router, dialogs) {
        var _this = this;
        this.router = router;
        this.dialogs = dialogs;
        this.handle401Error = function () {
            console.log('navigating back to login');
            _this.dialogs.Logout('Session Expired', 'Your session has expired, you will be logged out in ').subscribe(function (res) {
                if (_this.defineUserOrigin()) {
                    _this.router.navigate(['login'], { queryParams: { s: _this.server } });
                }
                else {
                    _this.router.navigate(['login']);
                }
                ;
                localStorage.clear();
            });
        };
        this.server = localStorage.getItem('serverName');
    }
    ResponseHandlerService.prototype.defineUserOrigin = function () {
        var hasLoggedWithParamInUrl;
        var lsValue = localStorage.getItem('urlHasServer');
        hasLoggedWithParamInUrl = (lsValue === 'true') ? true : false;
        return hasLoggedWithParamInUrl;
    };
    return ResponseHandlerService;
}());
ResponseHandlerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__dialogs_service__["b" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dialogs_service__["b" /* DialogsService */]) === "function" && _b || Object])
], ResponseHandlerService);

var _a, _b;
//# sourceMappingURL=response-handler.service.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserIsSobAndHasToken; });
/**
 * Created by if_found_call_0586288454 on 11/05/2017 ap. J.-C..
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserIsSobAndHasToken = (function () {
    function UserIsSobAndHasToken() {
    }
    UserIsSobAndHasToken.prototype.canActivate = function () {
        var userRole = localStorage.getItem('userRole');
        var token = localStorage.getItem('token') || ' ';
        console.log(userRole);
        console.log(token.length);
        this.answer = (userRole === 'SelfOnBoard' && token.length > 16) ? true : false;
        console.log('service says :' + this.answer);
        return this.answer;
    };
    return UserIsSobAndHasToken;
}());
UserIsSobAndHasToken = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UserIsSobAndHasToken);

//# sourceMappingURL=route-activators.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ErrorGetDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ErrorPostDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by if_found_call_0586288454 on 13/06/2017 ap. J.-C..
 */


var SuccessDialog = (function () {
    function SuccessDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return SuccessDialog;
}());
SuccessDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-system-dialog',
        template: " \n    <h3 md-dialog-title class=\"text-center\"> \n    <md-icon id=\"success-icon-modal\" svgIcon=\"successIcon\"></md-icon>\n  </h3>\n  <md-dialog-content>Your changes were successfully saved</md-dialog-content>\n  <md-dialog-actions layout=\"row\" layout-align=\"center center\">\n    <button md-button md-dialog-close (click)=\"dialogRef.close(false)\">OK</button>\n  </md-dialog-actions>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdDialogRef */]) === "function" && _a || Object])
], SuccessDialog);

var ErrorGetDialog = (function () {
    function ErrorGetDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return ErrorGetDialog;
}());
ErrorGetDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-error-get-dialog',
        template: "\n    <h3 md-dialog-title class=\"text-center\">\n      <md-icon id=\"success-icon-modal\" svgIcon=\"serverError\"></md-icon>\n    </h3>\n    <md-dialog-content>We could not reach our servers</md-dialog-content>\n    <md-dialog-actions layout=\"row\" layout-align=\"space-between center\">\n      <button md-button md-dialog-close>OK</button>\n      <button md-button md-dialog-close (click)=\"dialogRef.close(true)\">Try Again</button>\n    </md-dialog-actions>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdDialogRef */]) === "function" && _b || Object])
], ErrorGetDialog);

var ErrorPostDialog = (function () {
    function ErrorPostDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return ErrorPostDialog;
}());
ErrorPostDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-error-post-dialog',
        template: "\n    <h3 md-dialog-title class=\"text-center\">\n      <md-icon id=\"success-icon-modal\" svgIcon=\"serverError\"></md-icon>\n    </h3>\n    <md-dialog-content>We could not save your settings</md-dialog-content>\n    <md-dialog-actions layout=\"row\" layout-align=\"center center\">\n      <button md-button md-dialog-close>OK</button>\n    </md-dialog-actions>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdDialogRef */]) === "function" && _c || Object])
], ErrorPostDialog);

var _a, _b, _c;
//# sourceMappingURL=system.dialogs.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_actions__ = __webpack_require__(164);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_actions__["a"]; });


/* unused harmony default export */ var _unused_webpack_default_export = [
    __WEBPACK_IMPORTED_MODULE_0__dashboard_actions__["a" /* DashboardActions */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_custom_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__covalent_core__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_passwords_model__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_system_dialogs__ = __webpack_require__(358);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserChangePasswordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UserChangePasswordComponent = (function (_super) {
    __extends(UserChangePasswordComponent, _super);
    function UserChangePasswordComponent(dialogRef, accountService, router) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.accountService = accountService;
        _this.router = router;
        _this.changePassword = true;
        _this.forgotPassword = false;
        _this.passwordsToSend = new __WEBPACK_IMPORTED_MODULE_7__model_passwords_model__["a" /* PasswordModel */]();
        _this.switchToForgotPassword = function () {
            _this.changePassword = false;
            _this.forgotPassword = true;
        };
        return _this;
    }
    UserChangePasswordComponent.prototype.fieldIsValid = function (password) {
        return this.passwordIsValid(password);
    };
    UserChangePasswordComponent.prototype.oldPasswordIsValid = function (currentPassword) {
        return this.currentPasswordIsValid(currentPassword);
    };
    UserChangePasswordComponent.prototype.passwordsAreValid = function (newPassword, confirmNewPassword) {
        return this.bothPasswordsAreValidAndMatch(newPassword, confirmNewPassword);
    };
    UserChangePasswordComponent.prototype.applyChangePassword = function () {
        var _this = this;
        this.accountService.ChangePassword(this.passwordsToSend).subscribe(function (result) {
            console.log(result);
            localStorage.clear();
            _this.dialogRef.close();
            _this.router.navigate(['login']);
        }, function (error) {
            console.log(error);
        });
    };
    return UserChangePasswordComponent;
}(__WEBPACK_IMPORTED_MODULE_7__model_passwords_model__["b" /* PasswordMethods */]));
UserChangePasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-change-password',
        template: __webpack_require__(1019),
        providers: [__WEBPACK_IMPORTED_MODULE_4__account_account_service__["a" /* AccountService */]],
        styles: [__webpack_require__(975)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__account_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__account_account_service__["a" /* AccountService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], UserChangePasswordComponent);

var UserComponent = (function () {
    function UserComponent(router, iconReg, sanitizer, dialog, accountService, httpState, _loadingService) {
        var _this = this;
        this.router = router;
        this.dialog = dialog;
        this.accountService = accountService;
        this.httpState = httpState;
        this._loadingService = _loadingService;
        this.showLoader = false;
        this.showPostLoader = false;
        this.overlayStarSyntax = false;
        // TODO:: change the value from the service
        this.isStripeUser = false;
        this.logout = function () {
            if (_this.defineUserOrigin()) {
                _this.router.navigate(['login'], { queryParams: { s: _this.servername } });
            }
            else {
                _this.router.navigate(['login']);
            }
            ;
            localStorage.clear();
        };
        this.testRoute = function (parent) {
            if (_this.currentUrl) {
                return _this.currentUrl.indexOf(parent) >= 0;
            }
        };
        this.isFirstTimeUser = (localStorage.getItem('isFirstTime') === 'true');
        console.log(this.isFirstTimeUser);
        this.getStateSubscription = this.httpState.getProtocolState$.subscribe(function (state) {
            console.log('get state is => ', state);
            _this.showLoader = state;
        });
        this.getErrorStateSubscription = this.httpState.getErrorState$.subscribe(function (error) {
            console.log('get error state is => ', error);
            _this.showLoader = !_this.showLoader;
            _this.showGetErrorDialog();
        });
        this.postErrorStateSubscription = this.httpState.postErrorState$.subscribe(function (state) {
            console.log('post error state is => ', state);
            _this.showPostErrorDialog();
        });
        this.postRequestHasStarted = this.httpState.postStartState$.subscribe(function (state) {
            console.log('post request started status =>', state);
            _this.showPostLoader = state;
            _this.togglePostSpinner();
        });
        this.postStateSubscription = this.httpState.postProtocolState$.subscribe(function (state) {
            console.log('POST state is ', state);
            if (state) {
                console.log('no error occurred');
                _this.showSuccessDialog();
            }
            ;
            // this.togglePostSpinner();
        });
        this.postRequestOutcome = this.httpState.postOutcomeState$.subscribe(function (success) {
            if (success) {
                _this.showSuccessDialog();
            }
        });
        this.servername = localStorage.getItem('serverName');
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]) {
                _this.currentUrl = event.url;
                _this.setConditionalIdForAppContainer(event.url);
            }
            var user = localStorage.getItem('username');
            if (user) {
                _this.username = user.charAt(0).toUpperCase() + user.slice(1);
            }
        });
        this.accountService.getAccountGeneralSettings().subscribe(function (result) {
            if (result == null) {
                return;
            }
            _this.isStripeUser = result.StripeSubscriptionToken ? true : false;
        }, function (error) {
            console.log(error);
        });
        iconReg.addSvgIcon('dashboard', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dashboard.svg'))
            .addSvgIcon('security', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/security_settings.svg'))
            .addSvgIcon('mails', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/mails.svg'))
            .addSvgIcon('settings', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/settings.svg'))
            .addSvgIcon('loginLogo', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/loginLogo'))
            .addSvgIcon('resecLogo', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/resecLogo.svg'))
            .addSvgIcon('help', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/info.svg'))
            .addSvgIcon('releaseMail', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/releaseMail.svg'))
            .addSvgIcon('forwardMail', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/forwardMail.svg'))
            .addSvgIcon('successIcon', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/success.svg'))
            .addSvgIcon('serverError', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/serverError.svg'));
    }
    UserComponent.prototype.showSuccessDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__shared_system_dialogs__["a" /* SuccessDialog */]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                console.log(result);
            }
        });
    };
    UserComponent.prototype.showGetErrorDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__shared_system_dialogs__["b" /* ErrorGetDialog */]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                console.log(result);
            }
        });
    };
    UserComponent.prototype.showPostErrorDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__shared_system_dialogs__["c" /* ErrorPostDialog */]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                console.log(result);
            }
        });
    };
    UserComponent.prototype.togglePostSpinner = function () {
        if (!this.showPostLoader) {
            this._loadingService.resolve('overlayStarSyntax');
        }
        else {
            this._loadingService.register('overlayStarSyntax');
        }
        this.overlayStarSyntax = !this.overlayStarSyntax;
    };
    UserComponent.prototype.setConditionalIdForAppContainer = function (currentRoute) {
        this.conditionalId = (currentRoute === '/user/security/exceptions') ? 'securityId' : 'userAppContainer';
    };
    UserComponent.prototype.defineUserOrigin = function () {
        var hasLoggedWithParamInUrl;
        var lsValue = localStorage.getItem('urlHasServer');
        hasLoggedWithParamInUrl = (lsValue === 'true') ? true : false;
        return hasLoggedWithParamInUrl;
    };
    UserComponent.prototype.openChangePassword = function () {
        this.dialogRef = this.dialog.open(UserChangePasswordComponent, { width: '40%' });
    };
    ;
    UserComponent.prototype.ngOnDestroy = function () {
        this.getStateSubscription.unsubscribe();
        this.postStateSubscription.unsubscribe();
        this.getErrorStateSubscription.unsubscribe();
        this.postErrorStateSubscription.unsubscribe();
        this.postRequestHasStarted.unsubscribe();
        this.postRequestOutcome.unsubscribe();
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(1020),
        styles: [__webpack_require__(976)],
        entryComponents: [UserChangePasswordComponent, __WEBPACK_IMPORTED_MODULE_8__shared_system_dialogs__["a" /* SuccessDialog */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__account_account_service__["a" /* AccountService */]]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["P" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["P" /* MdIconRegistry */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdDialog */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__account_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__account_account_service__["a" /* AccountService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5__shared_custom_http__["b" /* HTTPStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_custom_http__["b" /* HTTPStateService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_6__covalent_core__["d" /* TdLoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__covalent_core__["d" /* TdLoadingService */]) === "function" && _k || Object])
], UserComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WrongBrowserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WrongBrowserComponent = (function () {
    function WrongBrowserComponent(sanitizer, iconReg) {
        iconReg.addSvgIcon('chromeLogo', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/chrome.svg'));
    }
    WrongBrowserComponent.prototype.ngOnInit = function () {
    };
    WrongBrowserComponent.prototype.downloadChrome = function () {
        window.location.href = 'https://www.google.fr/chrome/browser/desktop/index.html';
    };
    return WrongBrowserComponent;
}());
WrongBrowserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-wrong-browser',
        template: __webpack_require__(1021),
        styles: [__webpack_require__(977)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["P" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["P" /* MdIconRegistry */]) === "function" && _b || Object])
], WrongBrowserComponent);

var _a, _b;
//# sourceMappingURL=wrong-browser.component.js.map

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".section-title {\n  border-bottom: solid 1px #F7F8F8;\n}\n\n.textBold {\n  font-weight: 700 !important;\n}\n.textBold-gray{\n  color: #999999 !important;\n  font-weight: 700 !important;\n}\n\np, small, label {\n  color: #666670 !important\n}\n\nsmall {\n  font-weight: 500;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".section-title {\n  border-bottom: solid 1px #F7F8F8;\n}\n.textBold {\n  font-weight: 700 !important;\n}\n.textBold-gray{\n  color: #999999 !important;\n  font-weight: 700 !important;\n}\np, small, label {\n  color: #666670 !important\n}\nsmall {\n  font-weight: 500;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "#reports-container{\n  margin-top: 3em !important;\n  margin-left: 1.7em !important;\n  margin-right: 1.7em !important;\n\n}\n.active{\n  background-image: linear-gradient(-180deg, #00E5FF 0%, #0091EA 100%);\n  color: white;\n}\n\n.search-form{\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n\n.btn-action{\n  margin-top: 3em !important;\n  margin-bottom: 2em !important;\n}\n.search-btn {\n  width: 40px;\n  height: 40px;\n  padding: 0px 16px;\n  background-color: #F7AE2B;\n  font-size: 18px;\n  line-height: 1.33;\n  border-radius: 25px;\n}\n.search-container{\n  padding-left: 40px;\n  padding-top: 40px;\n  padding-bottom: 40px;\n}\n#search-mail-body > tr > td{\n  border-bottom: solid 0px white !important;\n  border-top: solid 0px white !important;\n}\n#search-mail-body > tr:hover{\n  background-color: rgba(125 , 114, 187, 0.149) !important;\n}\nthead > th {\n  border-top: solid 0px white !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 605:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 605;


/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__(683);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_custom_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
        this.server = localStorage.getItem('serverName');
    }
    AccountService.prototype.GetAccountBillingSettings = function () {
        var urlGetAccountBillingSettings = 'http://' + this.server + ':4580/sob/api/GetAccountBillingSettings';
        return this.http.get(urlGetAccountBillingSettings)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not verify login'); });
    };
    AccountService.prototype.PostAccountBillingSettings = function () {
        var urlPostAccountBillingSettings = 'http://' + this.server + ':4580/sob/api/PostAccountBillingSettings';
        return this.http.post(urlPostAccountBillingSettings, {})
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not post billing settings'); });
    };
    AccountService.prototype.GetAccountNotificationsSettings = function () {
        var urlGetAccountNotificationsSettings = 'http://' + this.server + ':4580/sob/api/GetAccountNotificationsSettings';
        return this.http.get(urlGetAccountNotificationsSettings)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not get notification settings'); });
    };
    AccountService.prototype.PostAccountNotificationsSettings = function (newSettings) {
        var urlPostAccountNotificationsSettings = 'http://' + this.server + ':4580/sob/api/PostAccountNotificationsSettings';
        return this.http.post(urlPostAccountNotificationsSettings, newSettings)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not get notification settings'); });
    };
    AccountService.prototype.getAccountGeneralSettings = function () {
        var urlGetAccountGeneralSettings = 'http://' + this.server + ':4580/sob/api/GetAccountGeneralSettings';
        return this.http.get(urlGetAccountGeneralSettings)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not get account general settings'); });
    };
    AccountService.prototype.getAccountGeneralSettingsWithServerAddress = function (serverAddress) {
        var urlGetAccountGeneralSettings = 'http://' + serverAddress + ':4580/sob/api/GetAccountGeneralSettings';
        return this.http.get(urlGetAccountGeneralSettings)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not get account general settings'); });
    };
    AccountService.prototype.postAccountGeneralSettings = function (settings) {
        var urlPostAccountGeneralSettings = 'http://' + this.server + ':4580/sob/api/PostAccountGeneralSettings';
        return this.http.post(urlPostAccountGeneralSettings, settings)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not post account general settings'); });
    };
    AccountService.prototype.postAccountGeneralSettingsWithServerAddress = function (serverAddress, settings) {
        var urlPostAccountGeneralSettings = 'http://' + serverAddress + ':4580/sob/api/PostAccountGeneralSettings';
        return this.http.post(urlPostAccountGeneralSettings, settings)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not post account general settings'); });
    };
    AccountService.prototype.getBillingData = function (subscriptionId) {
        var urlGetSubscriptionInfo = 'http://' + this.server + ':4580/sob/api/stripe/subscriptionInfo';
        return this.http.get(urlGetSubscriptionInfo, { search: { subscriptionId: subscriptionId } })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not get account billing settings'); });
    };
    AccountService.prototype.updateBillingData = function (subscriptionId, updatedPlan) {
        var urlGetSubscriptionInfo = 'http://' + this.server + ':4580/sob/api/stripe/updatePlan?subscriptionId=' + subscriptionId + '&planId=' + updatedPlan;
        return this.http.post(urlGetSubscriptionInfo, { subscriptionId: subscriptionId })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not update account billing settings'); });
    };
    AccountService.prototype.updateUsersNumber = function (subscriptionId, usersNumbers) {
        var urlGetSubscriptionInfo = 'http://' + this.server + ':4580/sob/api/stripe/updateUsersNo?subscriptionId=' + subscriptionId + '&usersNo=' + usersNumbers;
        return this.http.post(urlGetSubscriptionInfo, { subscriptionId: subscriptionId })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not update account billing settings'); });
    };
    AccountService.prototype.ChangePassword = function (passwords) {
        var changePasswordUrl = 'http://' + this.server + ':4580/sob/api/users/changepassword';
        return this.http.post(changePasswordUrl, passwords)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not post account general settings'); });
    };
    return AccountService;
}());
AccountService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_custom_http__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_custom_http__["a" /* HttpService */]) === "function" && _a || Object])
], AccountService);

var _a;
//# sourceMappingURL=account.service.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__response_handler_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HTTPStateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HTTPStateService = (function () {
    function HTTPStateService() {
        this.getProtocolStateSource = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.getErrorStateSource = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.postProtocolStateSource = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.postProtocolStartSource = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.postErrorStateSource = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.postOutcomeSource = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.getProtocolState$ = this.getProtocolStateSource.asObservable();
        this.getErrorState$ = this.getErrorStateSource.asObservable();
        this.postProtocolState$ = this.postProtocolStateSource.asObservable();
        this.postErrorState$ = this.postErrorStateSource.asObservable();
        this.postStartState$ = this.postProtocolStartSource.asObservable();
        this.postOutcomeState$ = this.postOutcomeSource.asObservable();
    }
    HTTPStateService.prototype.setGetState = function (inProcess) {
        this.getProtocolStateSource.next(inProcess);
    };
    HTTPStateService.prototype.setGetError = function (error) {
        this.getErrorStateSource.next(error);
    };
    HTTPStateService.prototype.setPostState = function (inProcess) {
        this.postProtocolStateSource.next(inProcess);
    };
    HTTPStateService.prototype.setPostError = function (error) {
        this.postErrorStateSource.next(error);
    };
    HTTPStateService.prototype.setPostProtocolStart = function (started) {
        this.postProtocolStartSource.next(started);
    };
    HTTPStateService.prototype.setPostOutcome = function (success) {
        this.postOutcomeSource.next(success);
    };
    return HTTPStateService;
}());
HTTPStateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], HTTPStateService);

;
var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, options, responseHandler, httpState) {
        var _this = _super.call(this, backend, options) || this;
        _this.responseHandler = responseHandler;
        _this.httpState = httpState;
        _this.token = localStorage.getItem('token');
        _this.GetCallInProcess = false;
        var token = localStorage.getItem('token'); // your custom token getter function here
        // options.headers.set('Authorization', token);
        _this.subscription = httpState.getProtocolState$.subscribe(function (state) {
            _this.GetCallInProcess = state;
        });
        return _this;
    }
    HttpService.prototype.showGetLoader = function () {
        this.httpState.setGetState(true);
    };
    // methods to intercept get calls
    HttpService.prototype.onGetCatch = function (error, caught) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    HttpService.prototype.onPostCatch = function (error, caught) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    HttpService.prototype.onPostSuccess = function (res) {
        this.hidePostLoader();
        this.httpState.setPostOutcome(true);
        return res;
    };
    HttpService.prototype.onGetSuccess = function (res) {
        this.hideGetLoader();
        return res;
    };
    HttpService.prototype.onGetError = function (error) {
        console.log('server error on get ', error);
        this.httpState.setGetError(true);
        this.httpState.setGetState(false);
        // make something special on error
    };
    HttpService.prototype.onPostError = function (error) {
        console.log('post service error ', error);
        this.httpState.setPostError(true);
        this.httpState.setPostState(false);
        // make something special on error
    };
    HttpService.prototype.hideGetLoader = function () {
        this.httpState.setGetState(false);
    };
    HttpService.prototype.get = function (url, options) {
        var _this = this;
        this.showGetLoader();
        return _super.prototype.get.call(this, url, options)
            .catch(this.onGetCatch)
            .do(function (res) {
            _this.onGetSuccess(res);
        }, function (error) {
            _this.onGetError(error);
        })
            .finally(function () {
            //   this.hideGetLoader();
            console.log('finished get request');
        });
    };
    HttpService.prototype.hidePostLoader = function () {
        this.httpState.setPostState(false);
    };
    HttpService.prototype.post = function (url, data, options) {
        var _this = this;
        this.httpState.setPostProtocolStart(true);
        return _super.prototype.post.call(this, url, data, options)
            .catch(this.onPostCatch)
            .do(function (res) {
            _this.onPostSuccess(res);
        }, function (error) {
            _this.onPostError(error);
        })
            .finally(function () {
            console.log('finished post request');
            _this.httpState.setPostProtocolStart(false);
            // this.hidePostLoader();
        });
    };
    HttpService.prototype.request = function (url, options) {
        var token = localStorage.getItem('token');
        if (typeof url === 'string') {
            if (!options) {
                // let's make option object
                options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]() };
            }
            options.headers.set('Authorization', token);
        }
        else {
            // we have to add the token to the url object
            url.headers.set('Authorization', token);
        }
        return _super.prototype.request.call(this, url, options).catch(this.catchAuthError(this));
    };
    HttpService.prototype.catchAuthError = function (self) {
        var _this = this;
        // we have to pass HttpService's own instance here as `self`
        return function (res) {
            console.log(res);
            if (res.status === 401 || res.status === 403) {
                // if not authenticated => token has gone;
                console.log(self);
                _this.responseHandler.handle401Error();
                console.log(res);
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(res);
        };
    };
    return HttpService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]));
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* XHRBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* XHRBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__response_handler_service__["a" /* ResponseHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__response_handler_service__["a" /* ResponseHandlerService */]) === "function" && _c || Object, HTTPStateService])
], HttpService);

var _a, _b, _c;
//# sourceMappingURL=custom-http.js.map

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".spaced-line{\n  line-height: 1.9em !important;\n}\n.section-number > p{\n  font-size: 1.5em;\n}\n.section-number > h3{\n  font-size: 2.5rem;\n}\n\n.dashboard-top-titles{\n  color: #666666;\n  font-style: normal;\n  text-align: right;\n}\n.dashboard-top-figure{\n  color: #666666;\n  font-weight: 600;\n}\n.graph-selector-line {\n  height: 110px !important;\n}\n\n.total-top {\n  font-size: 16px;\n}\n\n.selector-totals {\n  font-size: 40px !important;\n}\n\n.graph-selector-box {\n  height: 100%;\n  cursor:pointer;\n}\n\n.graph-selector-title {\n  line-height: 1.7;\n  color: #999999 !important;\n  font-weight: 600 !important;\n}\n.selectedTimeFrame {\n  background-color: white !important;\n  color: #333333;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.detectBrowser();
    };
    AppComponent.prototype.detectBrowser = function () {
        var isChrome = (navigator.userAgent.toLowerCase().includes('chrome')) ? true : false;
        if (!isChrome) {
            this.router.navigate(['wrong-browser']);
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(994),
        styles: [__webpack_require__(967)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_custom_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_dialogs_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__email_email_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__email_search_search_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__email_browse_browse_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__security_security_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__security_exception_exception_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__security_exception_templates_templates_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__security_general_general_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__account_account_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_user_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngrx_effects__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ngrx_store_devtools__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__security_general_templates_templates_components__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__account_account_general_account_general_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_attributes_directives__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_routes__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_response_handler_service__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_route_activators__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_flex_layout__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_platform_browser_animations__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_datepicker__ = __webpack_require__(984);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__swimlane_ngx_datatable__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__covalent_core__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng2_tag_input__ = __webpack_require__(985);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng2_tag_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_ng2_tag_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ng_bootstrap_ng_bootstrap__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__swimlane_ngx_charts__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__store_app_store__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__shared_pipes__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__account_notifications_notifications_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__account_billing_billing_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_hammerjs__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__shared_system_dialogs__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__dashboard_templates_dashboard_templates_dashboard_templates_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__dashboard_templates_first_time_user_first_time_user_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__new_user_password_new_user_password_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__store_effects_dashboard_effects__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__store_actions_dashboard_actions__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__dashboard_dashboard_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__help_help_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__wrong_browser_wrong_browser_component__ = __webpack_require__(361);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export httpFactory */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























// routing



// 3rd libraries











// custom pipes





// dashboard components









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_42__dashboard_templates_dashboard_templates_dashboard_templates_component__["a" /* EmailSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_9__email_email_component__["a" /* EmailComponent */],
            __WEBPACK_IMPORTED_MODULE_10__email_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_11__email_browse_browse_component__["a" /* BrowseComponent */],
            __WEBPACK_IMPORTED_MODULE_42__dashboard_templates_dashboard_templates_dashboard_templates_component__["b" /* NewsFeedComponent */],
            __WEBPACK_IMPORTED_MODULE_12__security_security_component__["a" /* SecurityComponent */],
            __WEBPACK_IMPORTED_MODULE_13__security_exception_exception_component__["a" /* ExceptionComponent */],
            __WEBPACK_IMPORTED_MODULE_15__security_general_general_component__["a" /* GeneralComponent */],
            __WEBPACK_IMPORTED_MODULE_16__account_account_component__["a" /* AccountComponent */],
            __WEBPACK_IMPORTED_MODULE_39__account_billing_billing_component__["a" /* UpdatePlanComponent */],
            __WEBPACK_IMPORTED_MODULE_22__account_account_general_account_general_component__["a" /* ChangePasswordModalComponent */],
            __WEBPACK_IMPORTED_MODULE_17__user_user_component__["a" /* UserChangePasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_41__shared_system_dialogs__["a" /* SuccessDialog */],
            __WEBPACK_IMPORTED_MODULE_41__shared_system_dialogs__["b" /* ErrorGetDialog */],
            __WEBPACK_IMPORTED_MODULE_41__shared_system_dialogs__["c" /* ErrorPostDialog */],
            __WEBPACK_IMPORTED_MODULE_17__user_user_component__["b" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_21__security_general_templates_templates_components__["a" /* GeneralSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__security_general_templates_templates_components__["b" /* GeneralSettingsWithCDRComponent */],
            __WEBPACK_IMPORTED_MODULE_21__security_general_templates_templates_components__["c" /* SpecialAttachmentsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__security_general_templates_templates_components__["d" /* GeneralSettingsWithoutCDRComponent */],
            __WEBPACK_IMPORTED_MODULE_22__account_account_general_account_general_component__["b" /* AccountGeneralComponent */],
            __WEBPACK_IMPORTED_MODULE_14__security_exception_templates_templates_component__["a" /* ExceptionSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__security_exception_templates_templates_component__["b" /* ExistingExceptionsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__security_exception_templates_templates_component__["c" /* NewExceptionComponent */],
            __WEBPACK_IMPORTED_MODULE_37__shared_pipes__["a" /* DictionaryIteratorPipe */],
            __WEBPACK_IMPORTED_MODULE_37__shared_pipes__["b" /* ArrayLengthPipe */],
            __WEBPACK_IMPORTED_MODULE_37__shared_pipes__["c" /* RemainingItemsInArrayPipe */],
            __WEBPACK_IMPORTED_MODULE_38__account_notifications_notifications_component__["a" /* NotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_39__account_billing_billing_component__["b" /* BillingComponent */],
            __WEBPACK_IMPORTED_MODULE_42__dashboard_templates_dashboard_templates_dashboard_templates_component__["c" /* TotalsTopComponent */],
            __WEBPACK_IMPORTED_MODULE_42__dashboard_templates_dashboard_templates_dashboard_templates_component__["d" /* GraphSelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_42__dashboard_templates_dashboard_templates_dashboard_templates_component__["e" /* GraphComponent */],
            __WEBPACK_IMPORTED_MODULE_42__dashboard_templates_dashboard_templates_dashboard_templates_component__["f" /* PieChartsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__shared_dialogs_service__["a" /* ConfirmDialog */],
            __WEBPACK_IMPORTED_MODULE_14__security_exception_templates_templates_component__["d" /* DeleteExceptionDialog */],
            __WEBPACK_IMPORTED_MODULE_43__dashboard_templates_first_time_user_first_time_user_component__["a" /* FirstTimeUserComponent */],
            __WEBPACK_IMPORTED_MODULE_37__shared_pipes__["d" /* GetPercentagePipe */],
            __WEBPACK_IMPORTED_MODULE_37__shared_pipes__["e" /* LimitLinesDirective */],
            __WEBPACK_IMPORTED_MODULE_44__new_user_password_new_user_password_component__["a" /* NewUserPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_49__help_help_component__["a" /* HelpComponent */],
            __WEBPACK_IMPORTED_MODULE_50__wrong_browser_wrong_browser_component__["a" /* WrongBrowserComponent */],
            __WEBPACK_IMPORTED_MODULE_23__shared_attributes_directives__["a" /* HighlightDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_24__app_routes__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_27__angular_material__["a" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_27__angular_material__["b" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_27__angular_material__["c" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_27__angular_material__["d" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_27__angular_material__["e" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_27__angular_material__["f" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_27__angular_material__["g" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_27__angular_material__["h" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_27__angular_material__["i" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_27__angular_material__["j" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_27__angular_material__["k" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_27__angular_material__["l" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_28__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_32__covalent_core__["a" /* CovalentDataTableModule */],
            __WEBPACK_IMPORTED_MODULE_29__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_32__covalent_core__["b" /* CovalentCoreModule */],
            __WEBPACK_IMPORTED_MODULE_30_ng2_datepicker__["a" /* DatePickerModule */],
            __WEBPACK_IMPORTED_MODULE_31__swimlane_ngx_datatable__["NgxDatatableModule"],
            __WEBPACK_IMPORTED_MODULE_34__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_33_ng2_tag_input__["TagInputModule"],
            __WEBPACK_IMPORTED_MODULE_35__swimlane_ngx_charts__["NgxChartsModule"],
            __WEBPACK_IMPORTED_MODULE_18__ngrx_store__["a" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_36__store_app_store__["a" /* default */]),
            __WEBPACK_IMPORTED_MODULE_20__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension({
                maxAge: 20
            }),
            __WEBPACK_IMPORTED_MODULE_19__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_46__store_effects_dashboard_effects__["a" /* DashboardEffects */]),
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_4__shared_custom_http__["a" /* HttpService */],
                useFactory: httpFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_25__shared_response_handler_service__["a" /* ResponseHandlerService */], __WEBPACK_IMPORTED_MODULE_4__shared_custom_http__["b" /* HTTPStateService */]]
            }, __WEBPACK_IMPORTED_MODULE_25__shared_response_handler_service__["a" /* ResponseHandlerService */], __WEBPACK_IMPORTED_MODULE_5__shared_dialogs_service__["b" /* DialogsService */],
            __WEBPACK_IMPORTED_MODULE_26__shared_route_activators__["a" /* UserIsSobAndHasToken */], __WEBPACK_IMPORTED_MODULE_48__dashboard_dashboard_service__["a" /* DashboardService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_custom_http__["b" /* HTTPStateService */], __WEBPACK_IMPORTED_MODULE_47__store_actions_dashboard_actions__["a" /* DashboardActions */],
            { provide: __WEBPACK_IMPORTED_MODULE_45__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_45__angular_common__["HashLocationStrategy"] }
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_22__account_account_general_account_general_component__["a" /* ChangePasswordModalComponent */], __WEBPACK_IMPORTED_MODULE_5__shared_dialogs_service__["a" /* ConfirmDialog */],
            __WEBPACK_IMPORTED_MODULE_17__user_user_component__["a" /* UserChangePasswordComponent */], __WEBPACK_IMPORTED_MODULE_39__account_billing_billing_component__["a" /* UpdatePlanComponent */], __WEBPACK_IMPORTED_MODULE_14__security_exception_templates_templates_component__["d" /* DeleteExceptionDialog */], __WEBPACK_IMPORTED_MODULE_41__shared_system_dialogs__["a" /* SuccessDialog */], __WEBPACK_IMPORTED_MODULE_41__shared_system_dialogs__["b" /* ErrorGetDialog */], __WEBPACK_IMPORTED_MODULE_41__shared_system_dialogs__["c" /* ErrorPostDialog */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

function httpFactory(backend, options, responseHandler, httpState) {
    return new __WEBPACK_IMPORTED_MODULE_4__shared_custom_http__["a" /* HttpService */](backend, options, responseHandler, httpState);
}
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_user_password_new_user_password_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__security_security_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__email_email_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_account_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_account_general_account_general_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__account_notifications_notifications_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__account_billing_billing_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__security_general_general_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__security_exception_exception_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__email_search_search_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__email_browse_browse_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboard_templates_first_time_user_first_time_user_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_route_activators__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__help_help_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__wrong_browser_wrong_browser_component__ = __webpack_require__(361);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by if_found_call_0586288454 on 24/04/2017 ap. J.-C..
 */




















var appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'wrong-browser', component: __WEBPACK_IMPORTED_MODULE_19__wrong_browser_wrong_browser_component__["a" /* WrongBrowserComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    {
        path: 'user',
        component: __WEBPACK_IMPORTED_MODULE_4__user_user_component__["b" /* UserComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_17__shared_route_activators__["a" /* UserIsSobAndHasToken */]],
        children: [
            { path: 'firstTimeChangePassword', component: __WEBPACK_IMPORTED_MODULE_3__new_user_password_new_user_password_component__["a" /* NewUserPasswordComponent */] },
            { path: 'firstTime', component: __WEBPACK_IMPORTED_MODULE_16__dashboard_templates_first_time_user_first_time_user_component__["a" /* FirstTimeUserComponent */] },
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */] },
            {
                path: 'security', component: __WEBPACK_IMPORTED_MODULE_5__security_security_component__["a" /* SecurityComponent */],
                children: [
                    { path: '', redirectTo: 'general', pathMatch: 'full' },
                    { path: 'general', component: __WEBPACK_IMPORTED_MODULE_12__security_general_general_component__["a" /* GeneralComponent */] },
                    { path: 'exceptions', component: __WEBPACK_IMPORTED_MODULE_13__security_exception_exception_component__["a" /* ExceptionComponent */] }
                ]
            },
            {
                path: 'emails', component: __WEBPACK_IMPORTED_MODULE_7__email_email_component__["a" /* EmailComponent */],
                children: [
                    { path: '', redirectTo: 'search', pathMatch: 'full' },
                    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_14__email_search_search_component__["a" /* SearchComponent */] },
                    { path: 'browse', component: __WEBPACK_IMPORTED_MODULE_15__email_browse_browse_component__["a" /* BrowseComponent */] }
                ]
            },
            {
                path: 'account', component: __WEBPACK_IMPORTED_MODULE_8__account_account_component__["a" /* AccountComponent */],
                children: [
                    { path: '', redirectTo: 'notifications', pathMatch: 'full' },
                    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_9__account_account_general_account_general_component__["b" /* AccountGeneralComponent */] },
                    { path: 'notifications', component: __WEBPACK_IMPORTED_MODULE_10__account_notifications_notifications_component__["a" /* NotificationsComponent */] },
                    { path: 'billing', component: __WEBPACK_IMPORTED_MODULE_11__account_billing_billing_component__["b" /* BillingComponent */] },
                ]
            },
            { path: 'help', component: __WEBPACK_IMPORTED_MODULE_18__help_help_component__["a" /* HelpComponent */] }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SeriesModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphDataModel; });
/**
 * Created by if_found_call_0586288454 on 08/06/2017 ap. J.-C..
 */
var SeriesModel = (function () {
    function SeriesModel() {
    }
    return SeriesModel;
}());

var GraphDataModel = (function () {
    function GraphDataModel(name) {
        this.name = name;
    }
    return GraphDataModel;
}());

//# sourceMappingURL=dashboard.models.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightDirective; });
/**
 * Created by if_found_call_0586288454 on 18/06/2017 ap. J.-C..
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = (function () {
    function HighlightDirective(el) {
        this.el = el;
        this.originalSize = this.el.nativeElement.style.fontSize;
        console.log(this.originalSize);
    }
    HighlightDirective.prototype.onMouseEnter = function () {
        this.highlight(this.highlightColor || 'purple');
        this.biggerFont(this.fontSize);
    };
    HighlightDirective.prototype.onMouseLeave = function () {
        this.highlight('transparent');
    };
    HighlightDirective.prototype.highlight = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    HighlightDirective.prototype.biggerFont = function (size) {
        this.el.nativeElement.style.fontSize = size + 'px';
    };
    return HighlightDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('myHighlight'),
    __metadata("design:type", String)
], HighlightDirective.prototype, "highlightColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fontSize'),
    __metadata("design:type", Number)
], HighlightDirective.prototype, "fontSize", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HighlightDirective.prototype, "onMouseEnter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HighlightDirective.prototype, "onMouseLeave", null);
HighlightDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[myHighlight]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], HighlightDirective);

var _a;
//# sourceMappingURL=attributes.directives.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DictionaryIteratorPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GetPercentagePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ArrayLengthPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RemainingItemsInArrayPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LimitLinesDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by if_found_call_0586288454 on 27/04/2017 ap. J.-C..
 */

var DictionaryIteratorPipe = (function () {
    function DictionaryIteratorPipe() {
    }
    DictionaryIteratorPipe.prototype.transform = function (value, showKeyAndValue) {
        if (showKeyAndValue) {
            var arr = [];
            for (var key in value) {
                arr.push({ 'key': key, 'value': value[key] });
            }
            return arr;
        }
        else {
            return Object.keys(value).map(function (key) { return value[key]; });
        }
    };
    return DictionaryIteratorPipe;
}());
DictionaryIteratorPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'DictionaryIteratorPipe', pure: false })
], DictionaryIteratorPipe);

var GetPercentagePipe = (function () {
    function GetPercentagePipe() {
    }
    GetPercentagePipe.prototype.transform = function (value, total, args) {
        if (!value || total < 1) {
            return value;
        }
        ;
        return Math.round((value / total) * 100);
    };
    return GetPercentagePipe;
}());
GetPercentagePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'getPercentage' })
], GetPercentagePipe);

var ArrayLengthPipe = (function () {
    function ArrayLengthPipe() {
    }
    ArrayLengthPipe.prototype.transform = function (arr) {
        if (!arr) {
            return 0;
        }
        return arr.length;
    };
    return ArrayLengthPipe;
}());
ArrayLengthPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'ArrayLength' })
], ArrayLengthPipe);

var RemainingItemsInArrayPipe = (function () {
    function RemainingItemsInArrayPipe() {
    }
    RemainingItemsInArrayPipe.prototype.transform = function (arr, substractor) {
        if (!(arr && substractor)) {
            return 0;
        }
        return (arr.length - substractor);
    };
    return RemainingItemsInArrayPipe;
}());
RemainingItemsInArrayPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'RemainingItems' })
], RemainingItemsInArrayPipe);

var LimitLinesDirective = (function () {
    function LimitLinesDirective(elRef) {
        this.elRef = elRef;
    }
    LimitLinesDirective.prototype.ngAfterViewInit = function () {
        // are there any other better cycles ? when is the content associated to the model gets initiated ?
        var element = this.elRef.nativeElement;
        var divHeight = element.offsetHeight;
        var lineHeight = parseInt(window.getComputedStyle(element).getPropertyValue('line-height'));
        var NumOfLines = divHeight / lineHeight;
        // TODO: reverse the formula to only display the number of lines we want + '...'
        // password: !P04531418p
        element.style['-webkit-line-clamp'] = this.limit;
        console.log(NumOfLines);
    };
    return LimitLinesDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], LimitLinesDirective.prototype, "limit", void 0);
LimitLinesDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[limitNumberOfLines]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], LimitLinesDirective);

var _a;
//# sourceMappingURL=pipes.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by if_found_call_0586288454 on 24/04/2017 ap. J.-C..
 */



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.clientId = "ResecApp";
        this.clientSecret = "ResecSecret";
    }
    UserService.prototype.login = function (server, username, password) {
        var LoginUrl = 'http://' + server + ':4580/api/users/login';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers }); // Create a request option
        var data = "grant_type=password&username=" + username + "&password=" + password;
        data = data + "&client_id=" + this.clientId + "&client_secret=" + this.clientSecret;
        return this.http.post(LoginUrl, data, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not verify login'); });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_core_compose__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_core_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ngrx_core_compose__);



/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_core_compose__["compose"])(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* combineReducers */])({
    dashboardGraph: __WEBPACK_IMPORTED_MODULE_0__reducers__["a" /* dashboardGraphReducer */],
    dashboardData: __WEBPACK_IMPORTED_MODULE_0__reducers__["b" /* dashboardDataReducer */],
});
//# sourceMappingURL=app-store.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_service__ = __webpack_require__(161);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardEffects = (function () {
    function DashboardEffects(actions$, categoryActions, svc) {
        var _this = this;
        this.actions$ = actions$;
        this.categoryActions = categoryActions;
        this.svc = svc;
        this.loadDashboardData$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__actions__["a" /* DashboardActions */].LOAD_DASHBOARD_DATA)
            .switchMap(function (action) { return _this.svc.getDashboardData(action.payload); })
            .map(function (dashboardData) { return _this.categoryActions.loadDashboardDataSuccess(dashboardData); });
        this.loadDashboardGraph$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__actions__["a" /* DashboardActions */].LOAD_DASHBOARD_GRAPH)
            .switchMap(function (action) { return _this.svc.getDashboardData(action.payload); })
            .map(function (categories) { return _this.categoryActions.loadDashboardGraphSuccess(categories); });
    }
    return DashboardEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], DashboardEffects.prototype, "loadDashboardData$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], DashboardEffects.prototype, "loadDashboardGraph$", void 0);
DashboardEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* DashboardActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* DashboardActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_service__["a" /* DashboardService */]) === "function" && _c || Object])
], DashboardEffects);

var _a, _b, _c;
//# sourceMappingURL=dashboard.effects.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(359);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dashboardGraphReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dashboardDataReducer; });

var dashboardGraphReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* DashboardActions */].LOAD_DASHBOARD_GRAPH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
var dashboardDataReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* DashboardActions */].LOAD_DASHBOARD_DATA_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
//# sourceMappingURL=dashboard.reducer.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_reducer__ = __webpack_require__(681);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_reducer__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_reducer__["b"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.prod.js.map

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".margin-top{\n  margin-top: 1em;\n}\n\n.item{\n  font-weight: 600;\n  color: #666670;\n\n}\n.cta{\n  color: #189cd5;\n  font-weight: 600;\n  font-size: 0.8em;\n  margin-top: 1.7em !important;\n}\n.inner-section{\n  margin-bottom: 1em;\n}\n.bold{\n  font-weight: 700;\n}\nmd-radio-button{\n  font-size: 0.8em !important;\n}\n\ntd, th{\n  padding: 0.5em;\n}\nth > small{\n  font-weight: 300;\n}\n.sob-table-security-td{\n  width: 250px !important;\n}\ntable{\n  width: 65% !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".section-title {\n  border-bottom: solid 1px #F7F8F8;\n}\n\n.textBold {\n  font-weight: 700 !important;\n  font-size: 16px !important;\n}\n\np, small, label {\n  color: #666670 !important\n}\n\nsmall {\n  font-weight: 500;\n}\n\n.coming-soon-notification > p {\n  padding: 0.4em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 967:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".graph-container{\n  margin-top: 10px !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 969:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".outer {\n  background-color: #F7F8F8;\n}\n\n#form-container {\n  margin-top: 2em;\n  padding-bottom: 2em;\n}\n\n.form-title {\n  background-color: #673AB7;\n  color: white;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(/node_modules/@covalent/core/common/platform.css);", ""]);

// module
exports.push([module.i, "#sidenav-toggler {\n  margin-left: 1em;\n  background-color: whitesmoke;\n}\n\nmd-sidenav {\n  background-color: #0C0E47;\n  width: 240px;\n}\n\nli {\n  display: list-item;\n  text-align: left;\n}\n\nli > a {\n  box-sizing: border-box;\n  display: block;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 47px;\n  text-decoration: none;\n  transition: all .3s;\n  padding: 0 16px;\n  position: relative;\n  color: white;\n}\n\nli:hover {\n  background-color: #342B62;\n}\n\n.noHoverEffect:hover {\n  background-color: transparent !important;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.active {\n  background-color: #342B62;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);\n  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1);\n  will-change: box-shadow;\n  display: block;\n  position: relative;\n}\n\n#top-bar {\n  padding: 1em;\n  background-color: white;\n\n}\n\n#top-bar > p {\n  margin: 0px;\n  font-weight: 600;\n  /* Rectangle: */\n  color: #333;\n}\n\n.center-icon {\n  vertical-align: middle !important;\n}\n\n.sob-page-link {\n  position: relative;\n  display: block;\n  padding: .5rem .75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  font-size: 16px !important;\n  color: #757575 !important;\n}\n\n.sob-page-link:hover {\n  color: #14123F !important;\n  border-bottom: solid 0px white !important;\n  text-decoration: none !important;\n}\n\n.page-active {\n  position: relative;\n  display: block;\n  padding: .5rem .75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  font-size: 1.2em !important;\n  color: #14123F !important;\n  text-decoration: none !important;\n}\n\n#dropdownMenu1 {\n  background-color: transparent;\n  color: #666666;\n  font-weight: 600;\n}\n\n#dropdownMenu1:hover {\n  background-color: rgba(228, 228, 228, 1);\n  border-color: solid 1px #666666 !important;\n}\n\n.sob-menu-item {\n  color: #666666 !important;\n}\n\n.sob-menu-item:hover {\n  color: rgb(0, 153, 255) !important;\n}\n\n#dropdownMenu1:focus {\n  outline: 0 !important;\n}\n\n.loader {\n  color: #fff;\n  font-family: Consolas, Menlo, Monaco, monospace;\n  font-weight: bold;\n  font-size: 30vh;\n  opacity: 0.8;\n}\n.loader span {\n  display: inline-block;\n  -webkit-animation: pulse 0.4s alternate infinite ease-in-out;\n  animation: pulse 0.4s alternate infinite ease-in-out;\n}\n.loader span:nth-child(odd) {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n@-webkit-keyframes pulse {\n  to {\n    -webkit-transform: scale(0.8);\n    transform: scale(0.8);\n    opacity: 0.5;\n  }\n}\n@keyframes pulse {\n  to {\n    -webkit-transform: scale(0.8);\n    transform: scale(0.8);\n    opacity: 0.5;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(/node_modules/@covalent/core/common/platform.css);", ""]);

// module
exports.push([module.i, "#sidenav-toggler {\n  margin-left: 1em;\n  background-color: whitesmoke;\n}\n\nmd-sidenav {\n  background-color: #0C0E47;\n  width: 240px;\n}\n\nli {\n  display: list-item;\n  text-align: left;\n}\n\nli > a {\n  box-sizing: border-box;\n  display: block;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 47px;\n  text-decoration: none;\n  transition: all .3s;\n  padding: 0 16px;\n  position: relative;\n  color: white;\n}\n\nli:hover {\n  background-color: #342B62;\n}\n\n.noHoverEffect:hover {\n  background-color: transparent !important;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.active {\n  background-color: #342B62;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);\n  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1);\n  will-change: box-shadow;\n  display: block;\n  position: relative;\n}\n\n#top-bar {\n  padding: 1em;\n  background-color: white;\n\n}\n\n#top-bar > p {\n  margin: 0px;\n  font-weight: 600;\n  /* Rectangle: */\n  color: #333;\n}\n\n.center-icon {\n  vertical-align: middle !important;\n}\n\n.sob-page-link {\n  position: relative;\n  display: block;\n  padding: .5rem .75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  font-size: 16px !important;\n  color: #757575 !important;\n}\n\n.sob-page-link:hover {\n  color: #14123F !important;\n  border-bottom: solid 0px white !important;\n  text-decoration: none !important;\n}\n\n.page-active {\n  position: relative;\n  display: block;\n  padding: .5rem .75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  font-size: 1.2em !important;\n  color: #14123F !important;\n  text-decoration: none !important;\n}\n\n#dropdownMenu1 {\n  background-color: transparent;\n  color: #666666;\n  font-weight: 600;\n}\n\n#dropdownMenu1:hover {\n  background-color: rgba(228, 228, 228, 1);\n  border-color: solid 1px #666666 !important;\n}\n\n.sob-menu-item {\n  color: #666666 !important;\n}\n\n.sob-menu-item:hover {\n  color: rgb(0, 153, 255) !important;\n}\n\n#dropdownMenu1:focus {\n  outline: 0 !important;\n}\n\n.loader {\n  color: #fff;\n  font-family: Consolas, Menlo, Monaco, monospace;\n  font-weight: bold;\n  font-size: 30vh;\n  opacity: 0.8;\n}\n.loader span {\n  display: inline-block;\n  -webkit-animation: pulse 0.4s alternate infinite ease-in-out;\n  animation: pulse 0.4s alternate infinite ease-in-out;\n}\n.loader span:nth-child(odd) {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n@-webkit-keyframes pulse {\n  to {\n    -webkit-transform: scale(0.8);\n    transform: scale(0.8);\n    opacity: 0.5;\n  }\n}\n@keyframes pulse {\n  to {\n    -webkit-transform: scale(0.8);\n    transform: scale(0.8);\n    opacity: 0.5;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 977:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "#downloadChromeButton{\n  font-size: 1.5em !important;\n  background-color: #188FD1;\n  color: white;\n  padding: 0.4em;\n}\n#downloadChromeButton:hover{\n  background-color: #EA3939;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 983:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 434,
	"./af.js": 434,
	"./ar": 441,
	"./ar-dz": 435,
	"./ar-dz.js": 435,
	"./ar-kw": 436,
	"./ar-kw.js": 436,
	"./ar-ly": 437,
	"./ar-ly.js": 437,
	"./ar-ma": 438,
	"./ar-ma.js": 438,
	"./ar-sa": 439,
	"./ar-sa.js": 439,
	"./ar-tn": 440,
	"./ar-tn.js": 440,
	"./ar.js": 441,
	"./az": 442,
	"./az.js": 442,
	"./be": 443,
	"./be.js": 443,
	"./bg": 444,
	"./bg.js": 444,
	"./bn": 445,
	"./bn.js": 445,
	"./bo": 446,
	"./bo.js": 446,
	"./br": 447,
	"./br.js": 447,
	"./bs": 448,
	"./bs.js": 448,
	"./ca": 449,
	"./ca.js": 449,
	"./cs": 450,
	"./cs.js": 450,
	"./cv": 451,
	"./cv.js": 451,
	"./cy": 452,
	"./cy.js": 452,
	"./da": 453,
	"./da.js": 453,
	"./de": 456,
	"./de-at": 454,
	"./de-at.js": 454,
	"./de-ch": 455,
	"./de-ch.js": 455,
	"./de.js": 456,
	"./dv": 457,
	"./dv.js": 457,
	"./el": 458,
	"./el.js": 458,
	"./en-au": 459,
	"./en-au.js": 459,
	"./en-ca": 460,
	"./en-ca.js": 460,
	"./en-gb": 461,
	"./en-gb.js": 461,
	"./en-ie": 462,
	"./en-ie.js": 462,
	"./en-nz": 463,
	"./en-nz.js": 463,
	"./eo": 464,
	"./eo.js": 464,
	"./es": 466,
	"./es-do": 465,
	"./es-do.js": 465,
	"./es.js": 466,
	"./et": 467,
	"./et.js": 467,
	"./eu": 468,
	"./eu.js": 468,
	"./fa": 469,
	"./fa.js": 469,
	"./fi": 470,
	"./fi.js": 470,
	"./fo": 471,
	"./fo.js": 471,
	"./fr": 474,
	"./fr-ca": 472,
	"./fr-ca.js": 472,
	"./fr-ch": 473,
	"./fr-ch.js": 473,
	"./fr.js": 474,
	"./fy": 475,
	"./fy.js": 475,
	"./gd": 476,
	"./gd.js": 476,
	"./gl": 477,
	"./gl.js": 477,
	"./gom-latn": 478,
	"./gom-latn.js": 478,
	"./he": 479,
	"./he.js": 479,
	"./hi": 480,
	"./hi.js": 480,
	"./hr": 481,
	"./hr.js": 481,
	"./hu": 482,
	"./hu.js": 482,
	"./hy-am": 483,
	"./hy-am.js": 483,
	"./id": 484,
	"./id.js": 484,
	"./is": 485,
	"./is.js": 485,
	"./it": 486,
	"./it.js": 486,
	"./ja": 487,
	"./ja.js": 487,
	"./jv": 488,
	"./jv.js": 488,
	"./ka": 489,
	"./ka.js": 489,
	"./kk": 490,
	"./kk.js": 490,
	"./km": 491,
	"./km.js": 491,
	"./kn": 492,
	"./kn.js": 492,
	"./ko": 493,
	"./ko.js": 493,
	"./ky": 494,
	"./ky.js": 494,
	"./lb": 495,
	"./lb.js": 495,
	"./lo": 496,
	"./lo.js": 496,
	"./lt": 497,
	"./lt.js": 497,
	"./lv": 498,
	"./lv.js": 498,
	"./me": 499,
	"./me.js": 499,
	"./mi": 500,
	"./mi.js": 500,
	"./mk": 501,
	"./mk.js": 501,
	"./ml": 502,
	"./ml.js": 502,
	"./mr": 503,
	"./mr.js": 503,
	"./ms": 505,
	"./ms-my": 504,
	"./ms-my.js": 504,
	"./ms.js": 505,
	"./my": 506,
	"./my.js": 506,
	"./nb": 507,
	"./nb.js": 507,
	"./ne": 508,
	"./ne.js": 508,
	"./nl": 510,
	"./nl-be": 509,
	"./nl-be.js": 509,
	"./nl.js": 510,
	"./nn": 511,
	"./nn.js": 511,
	"./pa-in": 512,
	"./pa-in.js": 512,
	"./pl": 513,
	"./pl.js": 513,
	"./pt": 515,
	"./pt-br": 514,
	"./pt-br.js": 514,
	"./pt.js": 515,
	"./ro": 516,
	"./ro.js": 516,
	"./ru": 517,
	"./ru.js": 517,
	"./sd": 518,
	"./sd.js": 518,
	"./se": 519,
	"./se.js": 519,
	"./si": 520,
	"./si.js": 520,
	"./sk": 521,
	"./sk.js": 521,
	"./sl": 522,
	"./sl.js": 522,
	"./sq": 523,
	"./sq.js": 523,
	"./sr": 525,
	"./sr-cyrl": 524,
	"./sr-cyrl.js": 524,
	"./sr.js": 525,
	"./ss": 526,
	"./ss.js": 526,
	"./sv": 527,
	"./sv.js": 527,
	"./sw": 528,
	"./sw.js": 528,
	"./ta": 529,
	"./ta.js": 529,
	"./te": 530,
	"./te.js": 530,
	"./tet": 531,
	"./tet.js": 531,
	"./th": 532,
	"./th.js": 532,
	"./tl-ph": 533,
	"./tl-ph.js": 533,
	"./tlh": 534,
	"./tlh.js": 534,
	"./tr": 535,
	"./tr.js": 535,
	"./tzl": 536,
	"./tzl.js": 536,
	"./tzm": 538,
	"./tzm-latn": 537,
	"./tzm-latn.js": 537,
	"./tzm.js": 538,
	"./uk": 539,
	"./uk.js": 539,
	"./ur": 540,
	"./ur.js": 540,
	"./uz": 542,
	"./uz-latn": 541,
	"./uz-latn.js": 541,
	"./uz.js": 542,
	"./vi": 543,
	"./vi.js": 543,
	"./x-pseudo": 544,
	"./x-pseudo.js": 544,
	"./yo": 545,
	"./yo.js": 545,
	"./zh-cn": 546,
	"./zh-cn.js": 546,
	"./zh-hk": 547,
	"./zh-hk.js": 547,
	"./zh-tw": 548,
	"./zh-tw.js": 548
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 983;


/***/ }),

/***/ 988:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 \">\n\n  <div id=\"company\" class=\"white frame col mb-2\">\n    <div class=\"section-title\">\n      <p class=\"pt-4 pb-4 section-header\">COMPANY</p>\n    </div>\n    <div class=\"pt-4 pb-3\">\n      <div class=\"row mb-4\">\n        <p class=\"textBold-gray col-3\">Company Name</p>\n        <p class=\"bold-gray col-3\">{{companyData.name}}</p>\n      </div>\n      <div class=\"row mb-4\">\n        <p class=\"textBold-gray col-3\">Domain</p>\n        <p class=\"bold-gray col-3\">{{companyData.domain}}</p>\n      </div>\n      <div class=\"row mb-4\">\n        <p class=\"textBold-gray col-3\">MX Record</p>\n        <p class=\"bold-gray col-3\">{{companyData.mxRecord}}</p>\n       <!-- <button class=\"btn btn-neutral-yellow-hvr\" type=\"button\" (click)=\"sendTestEmail()\">Send Test Email</button>\n        <small *ngIf=\"testEmailSent\">Test email sent, please wait 1-2 min for confirmation.</small>-->\n      </div>\n    </div>\n  </div>\n\n  <div id=\"accountOwner\" class=\"white frame col mb-2\">\n    <div class=\"section-title\">\n      <p class=\"pt-4 pb-4 section-header\">ACCOUNT OWNER</p>\n    </div>\n    <div class=\"pt-4 pb-3 mt-3\">\n      <div class=\"row mb-4\">\n        <p class=\"textBold-gray col-3\">Name</p>\n        <input class=\"col-3 sob-input bold-gray\" [(ngModel)]=\"accountOwnerData.name\" type=\"text\">\n      </div>\n      <div class=\"row  mb-4\">\n        <p class=\"textBold-gray col-3\">Email</p>\n        <input class=\"col-3 sob-input bold-gray\" type=\"email\" [(ngModel)]=\"accountOwnerData.email\">\n      </div>\n      <div class=\"row  mb-4\">\n        <p class=\"textBold-gray col-3\">Phone</p>\n        <input class=\"col-3 sob-input bold-gray\" type=\"number\" [(ngModel)]=\"accountOwnerData.phone\">\n      </div>\n      <div class=\"row  mb-4\" [hidden]=\"true\">\n        <p class=\"textBold-gray col-3\">Password</p>\n        <input class=\"col-3 sob-input bold-gray\" type=\"password\" [(ngModel)]=\"accountOwnerData.password\">\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"openChangePassword()\">change</button>\n      </div>\n\n        <label class=\"checkbox-inline\">\n          <input type=\"checkbox\" [(ngModel)]=\"isAdmin\">I am the administrator</label>\n\n    </div>\n  </div>\n\n  <div *ngIf=\"!isAdmin\" id=\"isNotAdmin\" class=\"white frame col mb-2\">\n    <div class=\"section-title\">\n      <p class=\"pt-3 pb-3 section-header\">ADMINISTRATOR</p>\n    </div>\n    <div class=\"pt-4 pb-5 mt-3 mb-5\">\n      <div class=\"row mb-4\">\n        <p class=\"textBold-gray col-3\">Name</p>\n        <input class=\"col-3 sob-input bold-gray\" [(ngModel)]=\"adminData.name\" type=\"text\">\n      </div>\n      <div class=\"row  mb-4\">\n        <p class=\"textBold-gray col-3\">Email</p>\n        <input class=\"col-3 sob-input bold-gray\" type=\"email\" [(ngModel)]=\"adminData.email\">\n      </div>\n      <div class=\"row  pb-5\">\n        <p class=\"textBold-gray col-3\">Phone</p>\n        <input class=\"col-3 sob-input bold-gray\" type=\"number\" [(ngModel)]=\"adminData.phone\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row justify-content-center mt-5 pt-4\">\n    <button class=\"btn btn-action-yellow-big hvr-glow\" (click)=\"saveAccountData()\">APPLY</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 989:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-end mb-4\">\n    <button class=\"btn btn-circle\" md-dialog-close>x</button>\n  </div>\n  <div *ngIf=\"forgotPassword\">\n    <div class=\"text-center m-3\">\n      <h4 class=\"mb-3\">Change Password</h4>\n      <button class=\"btn btn-link\" (click)=\"switchToForgotPassword()\">Forgot Password?</button>\n    </div>\n    <div class=\"row mb-4\">\n      <p class=\"col-6\">Current Password</p>\n      <input class=\"col-6 form-control\" [(ngModel)]=\"passwordsToSend.CurrentPassword\">\n    </div>\n    <div class=\"row mb-4\">\n      <p class=\"col-6\">New Password</p>\n      <input class=\"col-6 form-control\" [(ngModel)]=\"passwordsToSend.NewPassword\">\n    </div>\n    <div class=\"row mb-4\">\n      <p class=\"col-6\">Confirm New Password</p>\n      <input class=\"col-6 form-control\" [(ngModel)]=\"passwordsToSend.ConfirmNewPassword\">\n    </div>\n    <div class=\"row justify-content-center\">\n      <button type=\"button\" class=\"btn btn-action\" (click)=\"changePassword()\" [disabled]=\"!(passwordsToSend.NewPassword && (passwordsToSend.NewPassword === passwordsToSend.ConfirmNewPassword))\">APPLY\n      </button>\n    </div>\n  </div>\n  <div *ngIf=\"resetPassword\">\n    <div class=\"col text-center\">\n      <h4 class=\"mb-3\">Forgot Password ?</h4>\n      <p class=\"mb-3\">We'll send you a link to reset your password.</p>\n      <button type=\"button\" class=\"btn btn-action\">RESET PASSWORD\n      </button>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 990:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 991:
/***/ (function(module, exports) {

module.exports = "<div class=\" col-12\">\n  <div id=\"company\" class=\"white frame col mb-2\">\n    <div class=\"section-title pt-3 pb-3\" layout=\"row\" layout-align=\"space-between center\">\n      <p class=\"section-header pl-0\" flex=\"70\">PLAN</p>\n      <div flex layout=\"row\" layout-align=\"end center\">\n        <button class=\"btn btn-purple\" (click)=\"openUpgradePlan()\">Upgrade My Plan</button>\n        <!--<button class=\"btn btn-neutral-yellow-hvr\">Cancel Plan</button>-->\n      </div>\n    </div>\n    <div class=\"pt-3 pb-5\">\n      <div class=\"row mb-4 mt-4\">\n        <p class=\"textBold-gray col-3\">Name</p>\n        <p class=\"bold-gray col-3\">{{billingData.planName}}</p>\n      </div>\n      <div class=\"row mt-5\">\n        <p class=\"textBold-gray col-3\">Fee</p>\n        <p class=\"bold-gray col-3\">{{billingData.fee}}</p>\n        <!--<p class=\"textBold col-3\">$1.99/user/Month</p>-->\n      </div>\n      <div class=\"row mt-5 pb-5\">\n        <p class=\"textBold-gray col-3\">Users</p>\n        <div class=\"col-3\">\n          <input class=\"sob-input col-4 bold-gray\" type=\"number\" [(ngModel)]=\"billingData.numOfUsers\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div id=\"billingDetails\" class=\"white frame col mb-2 pb-5\">\n    <div class=\"section-title pt-3 pb-3\">\n      <p class=\"section-header pl-0\">BILLING DETAILS</p>\n    </div>\n    <div class=\"pt-3 pb-3\">\n      <div class=\"form-group row mt-4\">\n        <label for=\"name\" class=\"textBold-gray col-3 col-form-label\">Company Name</label>\n        <div class=\"col-5\">\n          <input class=\"sob-input col-12 bold-gray\" type=\"text\" [(ngModel)]=\"billingData.companyName\" id=\"name\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"address\" class=\"textBold-gray col-3 col-form-label\">Billing Address</label>\n        <div class=\"col-5\">\n          <input class=\"sob-input col-12 bold-gray\" type=\"text\" [(ngModel)]=\"billingData.address\" id=\"address\">\n        </div>\n      </div>\n      <!--<div class=\"form-group row\">-->\n      <!--<label for=\"number\" class=\"textBold-gray col-3 col-form-label\">Company Number</label>-->\n      <!--<div class=\"col-5\">-->\n      <!--<input class=\"sob-input col-12\" type=\"number\" [(ngModel)]=\"billingData.companyNumber\" id=\"number\">-->\n      <!--</div>-->\n      <!--</div>-->\n\n      <!--<div class=\"form-group row pb-5\" [hidden]=\"true\">-->\n      <!--<label for=\"ccNumber\" class=\"textBold-gray col-3 col-form-label\">Payment</label>-->\n      <!--<div class=\"col-3\">-->\n      <!--<input class=\"sob-input col-12\" type=\"number\" [(ngModel)]=\"billing.ccNumber\" id=\"ccNumber\">-->\n      <!--</div>-->\n      <!--<div class=\"col-2\">-->\n      <!--<input class=\"sob-input col-12\" type=\"Month\" [(ngModel)]=\"billing.ccExp\" id=\"address\">-->\n      <!--</div>-->\n      <!--</div>-->\n    </div>\n  </div>\n\n\n  <div class=\"row justify-content-center mt-5\">\n    <button class=\"btn btn-action-yellow-big hvr-glow\" (click)=\"saveAccountData()\">APPLY</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 992:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-align=\"start center\">\n  <div layout=\"column\" flex=\"100\" layout-align=\"center center\" class=\"pl-4 pb-4 pr-4\">\n    <div class=\"section-border\">\n      <div layout=\"row\" layout-align=\"end center\">\n        <button class=\"btn btn-circle\" md-dialog-close>x</button>\n      </div>\n      <h3 class=\"text-center bold-dark-gray mt-4 mb-4\">ReSec Cloud Email Protection</h3>\n    </div>\n    <div layout=\"column\" id=\"plan-container\" class=\"mt-4\">\n      <p class=\"mb-3\">Your current plan.</p>\n      <div layout=\"row\" layout-align=\"space-between start\" class=\"ml-0 mr-0\">\n        <div layout=\"column\" layout-align=\"center center\" flex=\"33\" layout-margin>\n          <!--<button #standardBtn class=\"btn btn-upgrade-selected\" (click)=\"selected($event)\">Standard</button>-->\n          <button #standardBtn  (click)=\"selected($event)\" id=\"Standard\" [ngClass]=\"getCSSClasses('Standard')\">Standard</button>\n          <small class=\"mt-4\">$0.99/User/Month</small>\n        </div>\n        <div layout=\"column\" layout-align=\"center center\" flex=\"33\" layout-margin>\n          <!--<button #professionalBtn class=\"btn btn-upgrade-unselected\" (click)=\"selected($event)\">Professional</button>-->\n          <button #professionalBtn  (click)=\"selected($event)\" id=\"Professional\" [ngClass]=\"getCSSClasses('Professional')\">Professional</button>\n          <small class=\"mt-4\">$1.99/User/Month</small>\n        </div>\n        <div layout=\"column\" layout-align=\"center center\" flex=\"33\" layout-margin>\n          <!--<button #premiumBtn class=\"btn btn-upgrade-unselected\" (click)=\"selected($event)\">Premium</button>-->\n          <button #premiumBtn (click)=\"selected($event)\" id=\"Premium\" [ngClass]=\"getCSSClasses('Premium')\">Premium</button>\n          <small class=\"mt-4\">$2.99/User/Month</small>\n        </div>\n      </div>\n    </div>\n    <div class=\"mt-5\" layout=\"row\" layout-align=\"space-between start\">\n      <div flex=\"33\" layout-align=\"start start\" class=\"plan-list\">\n        <ul>\n          <li>Unlimited users</li>\n          <li>Full file blocking functionality</li>\n          <li>Full URL processing</li>\n          <li>Single company policy</li>\n          <li>Single antivirus engine</li>\n          <li>Reconstruction of Word, Excel, Powerpoint, PDF, Visio & Images</li>\n          <li>48 hour original archiving</li>\n        </ul>\n      </div>\n      <div flex=\"33\" layout-align=\"start start\"  class=\"plan-list\">\n        <ul>\n          <li>Unlimited users</li>\n          <li>Full file blocking functionality</li>\n          <li>Full URL processing</li>\n          <li>Up to 5 departmental policies</li>\n          <li>3 antivirus engines</li>\n          <li>Reconstruction of Word, Excel, Powerpoint, PDF, Visio & Images</li>\n          <li>7 day original archiving</li>\n          <li>Customizable end user notifications</li>\n        </ul>\n      </div>\n      <div flex=\"33\" layout-align=\"start start\"  class=\"plan-list\">\n        <ul>\n          <li>Unlimited users</li>\n          <li>Full file blocking functionality</li>\n          <li>Full URL processing</li>\n          <li>Unlimited policies</li>\n          <li>5 antivirus engines</li>\n          <li>Reconstruction of Word, Excel, Powerpoint, PDF, Visio & Images</li>\n          <li>30 day original archiving</li>\n          <li>Customizable end user notifications</li>\n          <li>Self-serve end-user portal</li>\n          <li>Full AD integration</li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"row justify-content-center mt-5 pt-4\">\n      <button class=\"btn btn-action-yellow-big hvr-glow\" (click)=\"saveAccountPlan()\">UPDATE MY PLAN</button>\n    </div>\n  </div>\n</div>\n\n\n<style>\n  .section-border {\n    border-bottom: solid 1px #B3B3B3;\n    width: 100%;\n  }\n  #plan-container{\n    width: 100%;\n  }\n  .plan-list > ul {\n    font-size: 13px !important;\n    color: #666666 !important;\n  }\n\n</style>\n"

/***/ }),

/***/ 993:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 \">\n  <div id=\"admin\" class=\"white frame col mb-2\">\n    <div class=\"title-section\">\n      <p class=\"pt-3 pb-3 section-header\">ADMINISTRATOR NOTIFICATIONS</p>\n    </div>\n    <div class=\"pt-3 pb-5 mt-3 \">\n      <div class=\"row mb-3\">\n        <div class=\"col-3 mr-3\">\n          <p class=\"textBold\">Blocked Emails</p>\n          <small class=\"notification-small\">We'll send an email in lieu of the email that was meant to be sent, when the\n            email is blocked.\n          </small>\n        </div>\n        <md-slide-toggle [(ngModel)]=\"adminSettings.AdminBlockedEmailNotification\"></md-slide-toggle>\n      </div>\n      <div class=\"row mb-3\">\n        <div class=\"col-3 mr-3\">\n          <p class=\"textBold\">Blocked Attachments</p>\n          <small class=\"notification-small\">We'll send an email notifying the users that an attachment has been blocked\n            with a reason.\n          </small>\n        </div>\n        <!-- <md-slide-toggle [(ngModel)]=\"adminSettings.AdminAttachedEmailNotification\"></md-slide-toggle>-->\n        <div id=\"coming-soon\" layout=\"column\" layout-align=\"center center\" class=\"coming-soon-notification\">\n          <p>Coming<br> Soon</p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div id=\"accountOwner\" class=\"white frame col mb-2\">\n    <div class=\"title-section\">\n      <p class=\"pt-3 pb-3 section-header\">WEEKLY STATUS REPORT</p>\n    </div>\n    <div class=\"pt-3 pb-5 mt-3 \">\n\n      <div class=\"row\">\n        <div class=\"col-3 mr-3\">\n          <p class=\"textBold\">Sent Report To</p>\n          <small class=\"notification-small\">Once a week, we'll send you a summary of the activity taking place.</small>\n        </div>\n        <div id=\"coming-soon\" layout=\"column\" layout-align=\"center center\" class=\"coming-soon-notification\">\n          <p>Coming<br> Soon</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"emailStamp\" class=\"white frame col mb-2\">\n    <div class=\"title-section\">\n      <p class=\"pt-3 pb-3 section-header\">SECURITY EMAIL STAMP</p>\n    </div>\n    <div class=\"pt-3 pb-5 mt-3\">\n      <small class=\"cust-not-small col-3 mb-3 pl-0\">To make change to this section,<br> please update your plan here.\n      </small>\n\n      <div class=\"row mt-3 mb-4\">\n        <div class=\"col-3\">\n          <label for=\"coming-soon\" class=\"pl-0 col-12 col-form-label textBold\">\n            Display Stamp</label><br>\n          <small>The stamp will appear at the bottom of each email.</small>\n        </div>\n        <div id=\"coming-soon\" layout=\"column\" layout-align=\"center center\" class=\"coming-soon-notification ml-3\">\n          <p>Coming<br> Soon</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"m-5 d-flex justify-content-center\">\n    <button class=\"btn btn-action-yellow-big hvr-glow\" (click)=\"postSettings()\">APPLY</button>\n  </div>\n</div>\n\n<style>\n  .notification-small {\n    font-size: 11px !important;\n  }\n\n  .cust-not-small {\n    font-size: 13px !important;\n    color: #666666 !important;\n  }\n</style>\n\n"

/***/ }),

/***/ 994:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 995:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 animated fadeInRight pl-0 pr-0\" *ngIf=\"dataHasLoaded\">\n  <div class=\"row justify-content-end mb-5 mt-5\">\n    <button class=\"btn btn-transparent hvr-glow\" (click)=\"changeTimeFrame(7)\"\n            [ngClass]=\"{'selectedTimeFrame': timeFrame==7}\">Last 7 Days\n    </button>\n    <button class=\"btn btn-transparent hvr-glow\" (click)=\"changeTimeFrame(30)\"\n            [ngClass]=\"{'selectedTimeFrame': timeFrame==30}\">Last 30 Days\n    </button>\n    <button class=\"btn btn-transparent hvr-glow\" (click)=\"changeTimeFrame(90)\"\n            [ngClass]=\"{'selectedTimeFrame': timeFrame==90}\">Last 90 Days\n    </button>\n  </div>\n  <div>\n    <app-dashboard-top-totals [totals]=\"totals\" (onTotalSelected)='showAllGraphs($event)'></app-dashboard-top-totals>\n    <div>\n      <div class=\"graph-container ml-0 mr-0\" layout=\"row\" layout-md=\"column\" layout-sm=\"column\" layout-margin\n           layout-align=\"space-between start\">\n        <div class=\"ml-0 mt-0 mr-0\" style=\"height: 229px\" id=\"graph-selector\">\n          <app-dashboard-graph-selector [totals]=\"allData\"\n                                        (onGraphChanged)=\"selectedGraphChanged($event)\">\n          </app-dashboard-graph-selector>\n        </div>\n        <div class=\"mr-0 mt-0 ml-3 white frame\" flex style=\"height: 229px\">\n          <app-dashboard-graph [graphData]='graphData' [graphColor]=\"graphColor\"></app-dashboard-graph>\n        </div>\n      </div>\n    </div>\n    <div class=\"ml-0 mr-0\" layout=\"row\" layout-align=\"space-between start\" layout-margin>\n      <app-dashboard-pie-charts [pieData]='pieData' [colorScheme]='colorScheme' flex=\"50\"\n                                [title]='pieChartTitle' class=\"ml-0\"\n                                [selectedGraphHasNoData]=\"selectedGraphHasNoData\"></app-dashboard-pie-charts>\n      <app-email-section flex [recipients]='recipients' [senders]=\"senders\"\n                         [title]='pieChartTitle' [recipientValueColor]=\"recipientValueColor\"\n                         class='mr-0'></app-email-section>\n    </div>\n  </div>\n</div>\n<div>\n  <app-dashboard-news-feed [feeds]=\"feeds\"></app-dashboard-news-feed>\n</div>\n<style>\n  .selectedTimeFrame {\n    background-color: white !important;\n    color: #333333;\n  }\n</style>\n<!--\n<style>\n  @media screen and (min-width: 1000px) and (max-width: 1150px) {\n    #graph-selector {\n      width: 55%;\n    }\n  }\n  @media screen and (min-width: 1151px) and (max-width: 1250px) {\n    #graph-selector {\n      width: 45%;\n    }\n  }\n  @media screen and (min-width: 1251px) and (max-width: 1375px) {\n    #graph-selector {\n      width: 40%;\n    }\n  }\n  @media screen and (min-width: 1376px) and (max-width: 2000px) {\n    #graph-selector {\n      width: 35%;\n    }\n  }\n</style>\n-->\n"

/***/ }),

/***/ 996:
/***/ (function(module, exports) {

module.exports = "<div class=\"white frame \" style=\"height: 400px\">\n  <div layout=\"column\" class=\"p-3\">\n    <div layout=\"row\" id=\"top-section\" layout-align=\"space-between center\">\n      <div layout=\"column\" flex=\"60\">\n        <p class=\"bold light-gray\">{{title}}</p>\n        <p>Top End Users</p>\n      </div>\n      <div layout=\"row\">\n        <button class=\"btn btn-transparent\" [ngClass]=\"{'selectedTimeFrame': displayingRecipients}\"\n                (click)=\"displayRecipients()\">Recipients\n        </button>\n        <button class=\"btn btn-transparent\" [ngClass]=\"{'selectedTimeFrame': displayingSenders}\"\n                (click)=\"displaySenders()\">Senders\n        </button>\n      </div>\n    </div>\n    <div id=\"emails\" layout=\"column\" layout-align=\"start center\"\n         style=\"overflow: auto;  height: 310px\" layout-margin>\n      <md-list *ngIf=\"displayingSenders\" style=\"width: 70%\">\n        <md-list-item *ngFor='let sender of senders' (click)=\"seeAllRelatedMails('sender', sender.Key)\"\n                      style=\"cursor:pointer\">\n          <p md-line style=\"color: #666666; font-size: 13px\">{{sender.Key}}</p>\n          <p [style.color]=\"recipientValueColor\">{{sender.Value}}</p>\n        </md-list-item>\n      </md-list>\n      <md-list *ngIf=\"displayingRecipients\" style=\"width: 70%\">\n        <md-list-item *ngFor='let recipient of recipients' (click)=\"seeAllRelatedMails('recipient', recipient.Key)\"\n                      style=\"cursor:pointer\">\n          <p md-line style=\"color: #666666; font-size: 13px\">{{recipient.Key}}</p>\n          <p [style.color]=\"recipientValueColor\">{{recipient.Value}}</p>\n        </md-list-item>\n      </md-list>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 997:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" flex=\"100\" layout-align=\"space-between start\" class=\"ml-0 mr-0 graph-selector-line\">\n  <div  (click)=\"changeTheCurrentLine($event, 'totals.totalCleanReplicaByCdr')\" class=\"white frame graph-selector-box hvr-glow graph-id\"\n        layout-align=\"space-between center\">\n    <div layout=\"row\" layout-align=\"end start\" flex=\"100\">\n      <div id=\"triangle-blue\">\n      </div>\n    </div>\n    <div style=\"height: 67%\" layout=\"row\" class=\"pl-3 pr-3\">\n      <p class=\"graph-selector-title\" flex=\"55\">Clean<br> Replica<br> By CDR</p>\n      <div flex=\"45\" layout=\"column\">\n        <p class=\"total-top\">{{totals.TotalModified.TotalResult}}</p>\n        <p class=\"selector-totals\">\n          {{totals.TotalModified.TotalResult | getPercentage : totals.TotalAttachmentProcessed.TotalResult}}\n          <span class=\"percentage\">%</span></p>\n      </div>\n    </div>\n  </div>\n  <div  (click)=\"changeTheCurrentLine($event, 'totals.attachmentOk')\" class=\"white frame graph-selector-box hvr-glow graph-id\"\n       layout-align=\"space-between center\">\n    <div layout=\"row\" layout-align=\"end start\" flex=\"100\">\n      <div id=\"triangle-green\">\n      </div>\n    </div>\n    <div style=\"height: 67%\" layout=\"row\" class=\"pl-3 pr-3\">\n      <p class=\"graph-selector-title\" flex=\"55\">Original<br> Attachment<br> OK</p>\n      <div flex=\"45\" layout=\"column\">\n        <p class=\"total-top\">{{totals.TotalPassed.TotalResult}}</p>\n        <p class=\"selector-totals\">\n          {{totals.TotalPassed.TotalResult | getPercentage : totals.TotalAttachmentProcessed.TotalResult}}\n          <span class=\"percentage\">%</span></p>\n      </div>\n    </div>\n  </div>\n</div>\n<div layout=\"row\" flex=\"100\" layout-align=\"space-between start\" class=\"ml-0 mr-0 mt-3 graph-selector-line\">\n  <div  (click)=\"changeTheCurrentLine($event, 'totals.blockedByPolicy')\"\n       class=\"white frame graph-selector-box mr-3 hvr-glow graph-id\" layout-align=\"space-between center\">\n    <div layout=\"row\" layout-align=\"end start\" flex=\"100\">\n      <div id=\"triangle-yellow\"></div>\n    </div>\n    <div style=\"height: 67%\" layout=\"row\" class=\"pl-3 pr-3\">\n      <p class=\"graph-selector-title\" flex=\"55\">Attachment<br> Blocked <br>by Policy</p>\n      <div flex=\"45\" layout=\"column\">\n        <p class=\"total-top\">{{totals.TotalBlockedByPolicy.TotalResult}}</p>\n        <p class=\"selector-totals\">\n          {{totals.TotalBlockedByPolicy.TotalResult | getPercentage : totals.TotalAttachmentProcessed.TotalResult}}\n          <span class=\"percentage\">%</span></p>\n      </div>\n\n    </div>\n  </div>\n  <div  (click)=\"changeTheCurrentLine($event, 'totals.attachmentBlockedByAntivirus')\"\n       class=\"white frame graph-selector-box hvr-glow graph-id\" layout-align=\"space-between center\">\n    <div layout=\"row\" layout-align=\"end start\" flex=\"100\">\n      <div id=\"triangle-orange\"></div>\n    </div>\n    <div style=\"height: 67%\" layout=\"row\" class=\"pl-3 pr-3\">\n      <p class=\"graph-selector-title\" flex=\"55\">Attachment<br> Blocked <br>by Antivirus</p>\n      <div flex=\"45\" layout=\"column\">\n        <p class=\"total-top\">{{totals.TotalBlockedByAntivirus.TotalResult}}</p>\n        <p class=\"selector-totals\">\n          {{totals.TotalBlockedByAntivirus.TotalResult | getPercentage : totals.TotalAttachmentProcessed.TotalResult}}\n          <span class=\"percentage\">%</span></p>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<style>\n  #triangle-blue {\n    width: 0;\n    height: 0;\n    border-top: 20px solid #A5CDED;\n    border-left: 20px solid transparent;\n  }\n\n  #triangle-green {\n    width: 0;\n    height: 0;\n    border-top: 20px solid #A4DCD2;\n    border-left: 20px solid transparent;\n  }\n\n  #triangle-yellow {\n    width: 0;\n    height: 0;\n    border-top: 20px solid #F7D399;\n    border-left: 20px solid transparent;\n  }\n\n  #triangle-orange {\n    width: 0;\n    height: 0;\n    border-top: 20px solid #F5AF91;\n    border-left: 20px solid transparent;\n  }\n  .graph-id{\n    width: 196px !important;\n  }\n\n\n</style>\n"

/***/ }),

/***/ 998:
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 229px\" flex>\n  <ngx-charts-line-chart\n    [scheme]=\"graphColor\"\n    [schemeType]=\"schemeType\"\n    [results]=\"graphData\"\n    [gradient]=\"false\"\n    [xAxis]=\"showXAxis\"\n    [yAxis]=\"showYAxis\"\n    [legend]=\"showLegend\"\n    [showGridLines]=\"showGridLines\"\n    [showXAxisLabel]=\"showXAxisLabel\"\n    [showYAxisLabel]=\"showYAxisLabel\"\n    [xAxisLabel]=\"xAxisLabel\"\n    [yAxisLabel]=\"yAxisLabel\"\n    [schemeType]='schemeType'\n    [curve]=\"curving\"\n    [autoScale]=\"true\"\n  >\n  </ngx-charts-line-chart>\n\n</div>\n"

/***/ }),

/***/ 999:
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5 mb-5 white frame ml-0 mr-0\" layout=\"column\" layout-margin>\n  <div class=\"news-header\">\n    <h4 class=\"section-title\">\n      NEWS\n    </h4>\n  </div>\n  <div layout=\"row\" layout-align=\"space-between start\" layout-margin>\n    <div *ngIf=\"!feeds\" flex=\"100\" layout=\"row\" class=\"mt-4\">\n      <p class=\"mr-3\">Loading News... </p>\n      <div class=\"ld ld-hourglass ld-spin-fast\" style=\"font-size:30px;color:#8da\"></div>\n    </div>\n    <div *ngFor=\"let feed of feeds\" layout-padding layout=\"column\">\n      <div style=\"width: 70%\">\n        <p class=\"feed-title\">{{feed.title}}</p>\n        <p class=\"mt-3 subtitle\">Posted: {{feed.date}}</p>\n        <p style=\"font-size: 13px\" limitNumberOfLines limit=\"5\" id=\"lim\">{{feed.description}}</p>\n        <a href=\"{{feed.url}}\" target=\"_blank\" class=\"link-btn\" role=\"button\">Read Full Article</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<style>\n  .feed-title {\n    font-size: 20px !important;\n    color: #666666;\n  }\n\n\n  .subtitle {\n    color: #999999 !important;\n  }\n  .news-header{\n    border-bottom: solid 1px lightsteelblue;\n  }\n  .section-title{\n    color: #666666;\n    font-weight: 600;\n    padding: 1em;\n  }\n</style>\n"

/***/ })

},[1260]);
//# sourceMappingURL=main.bundle.js.map