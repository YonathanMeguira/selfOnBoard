webpackJsonp([1,4],{

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".cta{\n  color: #189cd5;\n  font-weight: 600;\n  font-size: 0.8em;\n}\n.selectedPolicy{\n  background-color: white;\n  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n  transition: box-shadow 280ms cubic-bezier(.4,0,.2,1);\n  will-change: box-shadow;\n  display: block;\n  position: relative;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1200:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(573);


/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_token_injector__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(85);
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
    AccountService.prototype.GetAccountGeneralSettings = function () {
        var urlGetAccountGeneralSettings = 'http://' + this.server + ':4580/sob/api/GetAccountGeneralSettings';
        return this.http.get(urlGetAccountGeneralSettings)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not get account general settings'); });
    };
    AccountService.prototype.PostAccountGeneralSettings = function (settings) {
        var urlPostAccountGeneralSettings = 'http://' + this.server + ':4580/sob/api/PostAccountGeneralSettings';
        return this.http.post(urlPostAccountGeneralSettings, settings)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not post account general settings'); });
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_token_injector__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_token_injector__["a" /* HttpService */]) === "function" && _a || Object])
], AccountService);

var _a;
//# sourceMappingURL=account.service.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(7);
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
        template: __webpack_require__(927),
        styles: [__webpack_require__(398)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */]) === "function" && _b || Object])
], ChangePasswordModalComponent);

var SettingsForm = (function () {
    function SettingsForm() {
    }
    return SettingsForm;
}());
;
var AccountGeneralComponent = (function () {
    function AccountGeneralComponent(accountService, dialog) {
        var _this = this;
        this.accountService = accountService;
        this.dialog = dialog;
        this.testEmailSent = false;
        this.isAdmin = true;
        // scroll down to see class SettingsForm
        this.settings = new SettingsForm;
        this.admin = new SettingsForm;
        this.sendTestEmail = function () {
            _this.testEmailSent = true;
            setTimeout(function () {
                _this.testEmailSent = !_this.testEmailSent;
            }, 2500);
        };
    }
    AccountGeneralComponent.prototype.ngOnInit = function () {
        this.accountService.GetAccountGeneralSettings().subscribe(function (result) {
            console.log(result);
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
    return AccountGeneralComponent;
}());
AccountGeneralComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-account-general',
        template: __webpack_require__(926),
        styles: [__webpack_require__(398)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */]],
        entryComponents: [ChangePasswordModalComponent]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdDialog */]) === "function" && _d || Object])
], AccountGeneralComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=account-general.component.js.map

/***/ }),

/***/ 309:
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
        template: __webpack_require__(928),
        styles: [__webpack_require__(909)]
    }),
    __metadata("design:paramtypes", [])
], AccountComponent);

//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BillingComponent = (function () {
    function BillingComponent() {
        this.users = [139, 140, 141, 142, 143, 144, 145];
        this.billing = {};
    }
    BillingComponent.prototype.ngOnInit = function () {
    };
    ;
    return BillingComponent;
}());
BillingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-billing',
        template: __webpack_require__(929),
        styles: [__webpack_require__(910)]
    }),
    __metadata("design:paramtypes", [])
], BillingComponent);

//# sourceMappingURL=billing.component.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_service__ = __webpack_require__(149);
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
        template: __webpack_require__(930),
        styles: [__webpack_require__(911)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */]) === "function" && _a || Object])
], NotificationsComponent);

var _a;
//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_dashboard_dashboard_service__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_dashboard_templates_dashboard_templates_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
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
    function DashboardComponent(dashboardService) {
        var _this = this;
        this.dashboardService = dashboardService;
        this.totals = {};
        this.dataHasLoaded = false;
        this.allData = {};
        this.pieData = {};
        this.displayingSenders = false;
        this.displayingRecipients = true;
        this.cdrGradient = ['#1A237E', '#1D2A87', '#203291', '#233A9B', '#2642A5', '#2A4AAF', '#2D52B9',
            '#305AC3', '#3362CD', '#376AD7', '#3A72E1', '#3D7AEB', '#4082F5', '#448AFF'];
        this.colorScheme = { domain: this.cdrGradient };
        this.cdrFigureColor = '#ADE1D8';
        this.figureColor = this.cdrFigureColor;
        this.loadData = function () {
            _this.dashboardService.GetDashboardData().subscribe(function (res) {
                console.log(res);
                _this.allData = res;
                _this.totals.TotalEmailsProcessed = res.TotalEmailsProcessed;
                _this.totals.TotalUrls = res.TotalUrls;
                _this.totals.totalCleanReplicaByCdr = _this.addNumbersUp(res.TotalProcessedByCdr);
                _this.pieData = _this.dictionaryToObject(res.TotalBlockedByPolicy);
                _this.totals.TotalAttachmentProcessed = res.TotalAttachmentProcessed;
                _this.totals.totalPassedOk = _this.addNumbersUp(res.TotalPassed);
                _this.totals.BlockedByPolicy = _this.addNumbersUp(res.TotalBlockedByPolicy);
                _this.totals.TotalBlockedByAntivirus = _this.addNumbersUp(res.TotalBlockedByAntivirus);
                _this.dataHasLoaded = true;
            }, function (error) {
                console.log(error);
            });
        };
        this.dictionaryToObject = function (dictionary) {
            var arr = [];
            __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.each(dictionary, function (value, key) {
                var newObject = {
                    'name': key,
                    'value': value
                };
                arr.push(newObject);
            });
            return arr;
        };
        this.addNumbersUp = function (collection) {
            var i = 0;
            __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.forEach(collection, function (key, value) {
                i += key;
            });
            return i;
        };
        this.GetRandomRecipients = function () {
            _this.displayingSenders = false;
            _this.displayingRecipients = true;
            _this.dashboardService.GetRandomRecipients().subscribe(function (result) { return _this.randomUsers = result; }, function (error) { return console.log(error); });
        };
        this.GetRandomSenders = function () {
            _this.displayingSenders = true;
            _this.displayingRecipients = false;
            _this.dashboardService.GetRandomSenders().subscribe(function (result) { return _this.randomUsers = result; }, function (error) { return console.log(error); });
        };
    }
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.GetRandomRecipients();
    };
    ;
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(932),
        styles: [__webpack_require__(913)],
        providers: [__WEBPACK_IMPORTED_MODULE_1_app_dashboard_dashboard_service__["a" /* DashboardService */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__templates_dashboard_templates_dashboard_templates_component__["b" /* TotalsTopComponent */], __WEBPACK_IMPORTED_MODULE_2__templates_dashboard_templates_dashboard_templates_component__["c" /* GraphSelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_2__templates_dashboard_templates_dashboard_templates_component__["d" /* GraphComponent */], __WEBPACK_IMPORTED_MODULE_2__templates_dashboard_templates_dashboard_templates_component__["e" /* PieChartsComponent */], __WEBPACK_IMPORTED_MODULE_2__templates_dashboard_templates_dashboard_templates_component__["a" /* EmailSectionComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_dashboard_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_dashboard_dashboard_service__["a" /* DashboardService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TotalsTopComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GraphSelectorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GraphComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PieChartsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailSectionComponent; });
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
    }
    return TotalsTopComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TotalsTopComponent.prototype, "totals", void 0);
TotalsTopComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-top-totals',
        template: __webpack_require__(937),
        styles: [__webpack_require__(81)]
    }),
    __metadata("design:paramtypes", [])
], TotalsTopComponent);

var GraphSelectorComponent = (function () {
    function GraphSelectorComponent() {
        this.colorScheme = {
            domain: ['#1565C0', '#03A9F4', '#FFA726', '#FFCC80'],
        };
    }
    return GraphSelectorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GraphSelectorComponent.prototype, "totals", void 0);
GraphSelectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-graph-selector',
        template: __webpack_require__(934),
        styles: [__webpack_require__(81)]
    }),
    __metadata("design:paramtypes", [])
], GraphSelectorComponent);

var GraphComponent = (function () {
    // lie, area
    function GraphComponent() {
        this.multi = [
            {
                'name': 'Clean Replica by CDR',
                'series': [
                    {
                        'name': 'April',
                        'value': 41
                    },
                    {
                        'name': 'May',
                        'value': 54
                    },
                    {
                        'name': 'June',
                        'value': 60
                    }
                ]
            },
            {
                'name': 'Original Attachment OK',
                'series': [
                    {
                        'name': 'April',
                        'value': 70
                    },
                    {
                        'name': 'May',
                        'value': 20
                    },
                    {
                        'name': 'June',
                        'value': 13
                    },
                ]
            },
            {
                'name': 'Attachment Blocked By CDR',
                'series': [
                    {
                        'name': 'April',
                        'value': 30
                    },
                    {
                        'name': 'May',
                        'value': 45
                    },
                    {
                        'name': 'June',
                        'value': 90
                    },
                ]
            },
            {
                'name': 'Attachment Blocked By Antivirus',
                'series': [
                    {
                        'name': 'April',
                        'value': 23
                    },
                    {
                        'name': 'May',
                        'value': 15
                    },
                    {
                        'name': 'June',
                        'value': 34
                    },
                ]
            }
        ];
        this.view = [700, 400];
        this.showXAxis = true;
        this.showYAxis = false;
        this.gradient = true;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = '';
        this.showYAxisLabel = false;
        this.yAxisLabel = 'Month';
        this.showGridLines = false;
        this.schemeType = 'linear';
        this.colorScheme = {
            domain: ['#9A1796', '#EE5F12', '#7BBDEE', '#F9C453']
        };
    }
    GraphComponent.prototype.ngOnInit = function () {
    };
    return GraphComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GraphComponent.prototype, "GraphObject", void 0);
GraphComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-graph',
        template: __webpack_require__(935),
        styles: [__webpack_require__(81)]
    }),
    __metadata("design:paramtypes", [])
], GraphComponent);

var PieChartsComponent = (function () {
    function PieChartsComponent() {
        this.view = [500, 400];
    }
    return PieChartsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PieChartsComponent.prototype, "pieData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PieChartsComponent.prototype, "colorScheme", void 0);
PieChartsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-pie-charts',
        template: __webpack_require__(936),
        styles: [__webpack_require__(81)]
    })
], PieChartsComponent);

var EmailSectionComponent = (function () {
    function EmailSectionComponent() {
        this.userValues = [{ 'name': 'April', 'value': 20 }, { 'name': 'May', 'value': 40 }, {
                'name': 'June',
                'value': 30
            }, { 'name': 'July', 'value': 67 }];
        this.colorScheme = { domain: ['#ADE1D8'] };
    }
    return EmailSectionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EmailSectionComponent.prototype, "figureColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EmailSectionComponent.prototype, "users", void 0);
EmailSectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-email-section',
        template: __webpack_require__(933),
        styles: [__webpack_require__(81)]
    })
], EmailSectionComponent);

//# sourceMappingURL=dashboard-templates.component.js.map

/***/ }),

/***/ 314:
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
        template: __webpack_require__(938),
        styles: [__webpack_require__(914)]
    }),
    __metadata("design:paramtypes", [])
], FirstTimeUserComponent);

//# sourceMappingURL=first-time-user.component.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_service__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_component__ = __webpack_require__(95);
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
    function BrowseComponent(_mailService) {
        var _this = _super.call(this) || this;
        _this._mailService = _mailService;
        _this.emails = [];
        _this.isEmailEmpty = true;
        _this.selectedMails = [];
        _this.columns = [{ name: 'Reason Blocked', label: 'Reason Blocked' },
            { name: 'SanitizationDate', label: 'Date', format: function (rawDate) { return _this.convertToDate(rawDate); } },
            { name: 'Recipient', label: 'Recipient' },
            { name: 'Sender', label: 'Sender' },
            { name: 'Subject', label: 'Subject' },
            { name: 'AttachedFiles', label: 'Attached File(s)' },
        ];
        _this.query = {
            sortField: 'SanitizationDate',
            PageSize: 10,
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
        this.BrowseMails();
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
    return BrowseComponent;
}(__WEBPACK_IMPORTED_MODULE_2__email_component__["a" /* EmailComponent */]));
BrowseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-browse',
        template: __webpack_require__(939),
        styles: [__webpack_require__(915)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* MailService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* MailService */]) === "function" && _a || Object])
], BrowseComponent);

var _a;
//# sourceMappingURL=browse.component.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_token_injector__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(85);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_token_injector__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_token_injector__["a" /* HttpService */]) === "function" && _a || Object])
], MailService);

var _a;
//# sourceMappingURL=email.service.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_service__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_component__ = __webpack_require__(95);
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



var SearchComponent = (function (_super) {
    __extends(SearchComponent, _super);
    function SearchComponent(mailService) {
        var _this = _super.call(this) || this;
        _this.mailService = mailService;
        _this.emails = {};
        _this.query = {};
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
        _this.actionsAvailable = function (selectionLength) {
            if (selectionLength > 0) {
                return true;
            }
            else {
                return false;
            }
        };
        return _this;
    }
    ;
    SearchComponent.prototype.ngOnInit = function () {
        this.isFirstTime = false;
        console.log(this.isFirstTime);
    };
    SearchComponent.prototype.searchMails = function () {
        var _this = this;
        this.pullingData = true;
        this.mailService.searchMails(this.query).subscribe(function (success) {
            console.log(success);
            _this.emails = success.List[0];
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
        template: __webpack_require__(941),
        styles: [__webpack_require__(399)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* MailService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* MailService */]) === "function" && _a || Object])
], SearchComponent);

var _a;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_users_service__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(48);
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
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = {};
        this.wrongId = false;
        this.submitted = false;
        this.checkingUser = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.CheckLogin();
    };
    LoginComponent.prototype.CheckLogin = function () {
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
                localStorage.setItem('userRole', success.UserRole);
                var token = 'Bearer ' + success.AccessToken;
                var isFirstTime = success.UserAdditionalData.IsFirstTime;
                // Local storage only accepts string and not booleans, thus i convert this value to boolean to decide where to send user
                var isFirstTimeBool = (success.UserAdditionalData.IsFirstTime === 'true') ? true : false;
                localStorage.setItem('isFirstTime', isFirstTime);
                localStorage.setItem('token', token);
                localStorage.setItem('serverName', _this.user.server);
                localStorage.setItem('username', _this.user.username);
                _this.checkingUser = false;
                if (!isFirstTimeBool) {
                    _this.router.navigate(['user/firstTimeChangePassword']);
                }
                else {
                    _this.router.navigate(['/user/dashboard']);
                }
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
        template: __webpack_require__(942),
        styles: [__webpack_require__(916)],
        providers: [__WEBPACK_IMPORTED_MODULE_1_app_shared_users_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_users_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_users_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_account_service__ = __webpack_require__(149);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUserPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewUserPasswordComponent = (function () {
    function NewUserPasswordComponent(accountService, router) {
        var _this = this;
        this.accountService = accountService;
        this.router = router;
        this.passwords = {
            CurrentPassword: '',
            NewPassword: '',
            ConfirmNewPassword: ''
        };
        this.changePassword = function () {
            _this.accountService.ChangePassword(_this.passwords).subscribe(function (result) { return _this.router.navigate(['user/firstTime']); }, function (error) { return console.log(error); });
        };
    }
    ;
    return NewUserPasswordComponent;
}());
NewUserPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-user-password',
        template: __webpack_require__(943),
        styles: [__webpack_require__(917)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__account_account_service__["a" /* AccountService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__account_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__account_account_service__["a" /* AccountService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], NewUserPasswordComponent);

var _a, _b;
//# sourceMappingURL=new-user-password.component.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__templates_templates_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__security_service__ = __webpack_require__(325);
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
        this.settings = { 'AttachementsProcessedLevels': {}, 'AttachementsWithoutCdr': {} };
        this.exceptionsList = {};
        this.noSettingsExist = true;
        this.selectDepartment = function (departmentName) {
            _this.settings = _this.exceptionsList[departmentName];
            console.log(_this.settings);
        };
        this.deletePolicy = function (policy) {
            console.log('deleting');
            _this.securityService.deletePolicyExceptionSettings(policy).subscribe(function (result) {
                console.log(result);
                var policyName = policy.PolicyName;
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
            console.log(_this.settings);
            _this.noSettingsExist = (Object.keys(_this.settings).length === 0 && _this.settings.constructor === Object) ? true : false;
        };
        this.newDptQuery = function (newDpt) {
            _this.newDepartment = newDpt;
        };
        this.loadSettings = function () {
            _this.dataIsLoading = true;
            _this.securityService.GetPolicyExceptionsSettings().subscribe(function (result) {
                if (Object.keys(result).length === 0 && result.constructor === Object) {
                    _this.noSettingsExist = true;
                    _this.dataIsLoading = false;
                }
                else {
                    _this.noSettingsExist = false;
                    _this.settings = result[Object.keys(result)[0]];
                    _this.exceptionsList = result;
                    console.log(_this.exceptionsList);
                    _this.dataIsLoading = false;
                }
            }, function (error) {
                console.log('an error occurred');
                _this.dataIsLoading = false;
            });
        };
        this.postNewSettings = function (settings) {
            console.log(settings);
            _this.securityService.savePolicyExceptionSettings(settings).subscribe(function (success) {
                console.log(success);
                var policyName = settings.PolicyName;
                _this.exceptionsList[policyName] = success;
                _this.newDepartment = false;
                _this.settings = success;
                _this.noSettingsExist = false;
            }, function (error) { return console.log(error); });
        };
        this.loadSettings();
    }
    ;
    ExceptionComponent.prototype.ngOnInit = function () {
    };
    ;
    return ExceptionComponent;
}());
ExceptionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-exception',
        template: __webpack_require__(944),
        styles: [__webpack_require__(112)],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_1__templates_templates_component__["a" /* ExceptionSettingsComponent */], __WEBPACK_IMPORTED_MODULE_1__templates_templates_component__["b" /* ExistingExceptionsComponent */], __WEBPACK_IMPORTED_MODULE_1__templates_templates_component__["c" /* NewExceptionComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_2__security_service__["a" /* SecurityService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__security_service__["a" /* SecurityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__security_service__["a" /* SecurityService */]) === "function" && _a || Object])
], ExceptionComponent);

var _a;
//# sourceMappingURL=exception.component.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Models__ = __webpack_require__(628);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ExistingExceptionsComponent; });
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
    return BaseComponent;
}());
;
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
            if (selectedPolicy === _this.currentSettings.PolicyName) {
                isCurrentPolicy = true;
            }
            else {
                isCurrentPolicy = false;
            }
            return isCurrentPolicy;
        };
    }
    ;
    ExistingExceptionsComponent.prototype.ngOnInit = function () {
    };
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ExistingExceptionsComponent.prototype, "onSelect", void 0);
ExistingExceptionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'existing-exceptions',
        template: __webpack_require__(945),
        styles: [__webpack_require__(112)]
    }),
    __metadata("design:paramtypes", [])
], ExistingExceptionsComponent);

;
var ExceptionSettingsComponent = (function (_super) {
    __extends(ExceptionSettingsComponent, _super);
    function ExceptionSettingsComponent() {
        var _this = _super.call(this) || this;
        _this.onSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.restoreDefaultCdr = function () {
            _this.settings.AttachementsProcessedLevels.Documents = 2;
            _this.settings.AttachementsProcessedLevels.Images = 2;
            _this.settings.AttachementsProcessedLevels.Presentations = 2;
            _this.settings.AttachementsProcessedLevels.Spreadsheets = 2;
        };
        _this.restoreDefaultNoCdr = function () {
            _this.settings.AttachementsWithoutCdr['Unrecognized Files'] = 0;
            _this.settings.AttachementsWithoutCdr['Video/Sound'] = 0;
            _this.settings.AttachementsWithoutCdr['Applications/Scripts'] = 0;
        };
        _this.deletePolicy = function (policy) {
            _this.onDelete.emit(policy);
        };
        _this.restoreDefaultSpecial = function () {
            console.log('service not ready yet..');
        };
        _this.saveSettings = function (settings) {
            var users = settings.Exceptions;
            console.log(settings);
            var extractedUsers = [];
            users.forEach(function (user) {
                if (user !== null && typeof user === 'object') {
                    extractedUsers.push(user.value);
                }
                else {
                    extractedUsers.push(user);
                }
            });
            settings.Exceptions = extractedUsers;
            _this.onSave.emit(settings);
        };
        return _this;
    }
    ;
    ExceptionSettingsComponent.prototype.ngOnInit = function () {
    };
    ;
    return ExceptionSettingsComponent;
}(BaseComponent));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Models__["a" /* ExistingSettingsModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Models__["a" /* ExistingSettingsModel */]) === "function" && _a || Object)
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
        template: __webpack_require__(947),
        styles: [__webpack_require__(112)]
    }),
    __metadata("design:paramtypes", [])
], ExceptionSettingsComponent);

;
var NewExceptionComponent = (function (_super) {
    __extends(NewExceptionComponent, _super);
    function NewExceptionComponent() {
        var _this = _super.call(this) || this;
        _this.settings = { 'AttachementsProcessedLevels': {}, 'AttachementsWithoutCdr': {} };
        _this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.cancelCreation = function (cancel) {
            _this.onCancel.emit(cancel);
        };
        _this.saveSettings = function (newSettings) {
            var users = newSettings.Exceptions;
            var extractedUsers = [];
            users.forEach(function (user) {
                extractedUsers.push(user.value);
            });
            delete newSettings.Exceptions;
            newSettings.Exceptions = extractedUsers;
            _this.onSave.emit(newSettings);
        };
        _this.settings.AttachementsProcessedLevels.Documents = 2;
        _this.settings.AttachementsProcessedLevels.Images = 2;
        _this.settings.AttachementsProcessedLevels.Presentations = 2;
        _this.settings.AttachementsProcessedLevels.Spreadsheets = 2;
        _this.settings.AttachementsWithoutCdr['Unrecognized Files'] = 0;
        _this.settings.AttachementsWithoutCdr['Video/Sound'] = 0;
        _this.settings.AttachementsWithoutCdr['Applications/Scripts'] = 0;
        return _this;
    }
    ;
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
        template: __webpack_require__(946),
        styles: [__webpack_require__(112)]
    }),
    __metadata("design:paramtypes", [])
], NewExceptionComponent);

var _a;
//# sourceMappingURL=templates.component.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__security_service__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_templates_components__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(7);
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
    // to do => check if model has changed and if API Call to post was made before changing view
    function GeneralComponent(securityService, snackBar) {
        var _this = this;
        this.securityService = securityService;
        this.snackBar = snackBar;
        this.mainPolicySettings = { 'AttachementsProcessedLevels': {}, 'AttachementsWithoutCdr': {}, 'SpecialAttachments': {} };
        this.numberOfMaliciousLinks = 4;
        this.saveSettings = function () {
            _this.snackBar.open('Changes Successfully saved');
            _this.securityService.saveSettings(_this.mainPolicySettings).subscribe(function (success) {
                _this.snackBar.open('Changes Successfully saved');
            }, function (error) {
                _this.snackBar.open('Changes could not be saved');
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
    return GeneralComponent;
}());
GeneralComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-general',
        template: __webpack_require__(948),
        styles: [__webpack_require__(82)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__security_service__["a" /* SecurityService */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__templates_templates_components__["a" /* GeneralSettingsComponent */], __WEBPACK_IMPORTED_MODULE_2__templates_templates_components__["b" /* GeneralSettingsWithCDRComponent */], __WEBPACK_IMPORTED_MODULE_2__templates_templates_components__["d" /* GeneralSettingsWithoutCDRComponent */], __WEBPACK_IMPORTED_MODULE_2__templates_templates_components__["c" /* SpecialAttachmentsComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__security_service__["a" /* SecurityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__security_service__["a" /* SecurityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["N" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["N" /* MdSnackBar */]) === "function" && _b || Object])
], GeneralComponent);

var _a, _b;
//# sourceMappingURL=general.component.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__(1198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
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
        var _this = this;
        this.restoreDefaultGeneralSettings = function () {
            _this.generalSettings.UseAntiviruses = true;
            _this.generalSettings.HandleLinks = true;
        };
    }
    GeneralSettingsComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes['generalSettings'].currentValue);
    };
    return GeneralSettingsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GeneralSettingsComponent.prototype, "generalSettings", void 0);
GeneralSettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'general-settings',
        template: __webpack_require__(949),
        styles: [__webpack_require__(82)]
    }),
    __metadata("design:paramtypes", [])
], GeneralSettingsComponent);

var GeneralSettingsWithCDRComponent = (function () {
    function GeneralSettingsWithCDRComponent() {
        var _this = this;
        this.oldCdr = this.cdrSettings;
        this.modelHasChanged = false;
        this.isUndefined = function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(_this.oldCdr);
        };
        this.restoreDefaultCdr = function () {
            _this.cdrSettings.Documents = 2;
            _this.cdrSettings.Images = 2;
            _this.cdrSettings.Presentations = 2;
            _this.cdrSettings.Spreadsheets = 2;
        };
    }
    GeneralSettingsWithCDRComponent.prototype.ngDoCheck = function () {
        if (!(this.isUndefined()) && (this.oldCdr !== this.cdrSettings)) {
            console.log('had changed');
            console.log(this.isUndefined());
        }
    };
    return GeneralSettingsWithCDRComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GeneralSettingsWithCDRComponent.prototype, "cdrSettings", void 0);
GeneralSettingsWithCDRComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'general-with-cdr',
        template: __webpack_require__(951),
        styles: [__webpack_require__(82)]
    }),
    __metadata("design:paramtypes", [])
], GeneralSettingsWithCDRComponent);

var GeneralSettingsWithoutCDRComponent = (function () {
    function GeneralSettingsWithoutCDRComponent() {
        var _this = this;
        this.restoreDefaultNoCdr = function () {
            _this.noCdrSettings['Unrecognized Files'] = 0;
            _this.noCdrSettings['Video/Sound'] = 0;
            _this.noCdrSettings['Applications/Scripts'] = 0;
        };
    }
    return GeneralSettingsWithoutCDRComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GeneralSettingsWithoutCDRComponent.prototype, "noCdrSettings", void 0);
GeneralSettingsWithoutCDRComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'general-without-cdr',
        template: __webpack_require__(952),
        styles: [__webpack_require__(82)]
    }),
    __metadata("design:paramtypes", [])
], GeneralSettingsWithoutCDRComponent);

var SpecialAttachmentsComponent = (function () {
    function SpecialAttachmentsComponent() {
        var _this = this;
        this.restoreDefaultSpecial = function () {
            _this.specialAttachmentSettings['Password Protected'] = 0;
            _this.specialAttachmentSettings['Signed Documents'] = 0;
        };
    }
    return SpecialAttachmentsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SpecialAttachmentsComponent.prototype, "specialAttachmentSettings", void 0);
SpecialAttachmentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-special-attachments',
        template: __webpack_require__(950),
        styles: [__webpack_require__(82)]
    }),
    __metadata("design:paramtypes", [])
], SpecialAttachmentsComponent);

//# sourceMappingURL=templates.components.js.map

/***/ }),

/***/ 324:
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
        template: __webpack_require__(953),
        styles: [__webpack_require__(918)]
    }),
    __metadata("design:paramtypes", [])
], SecurityComponent);

//# sourceMappingURL=security.component.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_token_injector__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
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



var SecurityService = (function () {
    function SecurityService(http) {
        this.http = http;
        this.server = localStorage.getItem('serverName');
    }
    SecurityService.prototype.getSettings = function () {
        var settingsUrl = 'http://' + this.server + ':4580/sob/api/securitySettings/policy?q=1';
        return this.http.get(settingsUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not get shared'); });
    };
    SecurityService.prototype.saveSettings = function (settings) {
        var saveSettings = 'http://' + this.server + ':4580/sob/api/securitySettings/savepolicy';
        return this.http.post(saveSettings, settings)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not save settings'); });
    };
    SecurityService.prototype.GetPolicyExceptionsSettings = function () {
        var settingsUrl = 'http://' + this.server + ':4580/sob/api/securitySettings/policyExceptions?q=1';
        return this.http.get(settingsUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not get shared'); });
    };
    SecurityService.prototype.deletePolicyExceptionSettings = function (settings) {
        var deleteSettings = 'http://' + this.server + ':4580/sob/api/securitySettings/deletepolicyexceptions';
        return this.http.post(deleteSettings, settings)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not save settings'); });
    };
    SecurityService.prototype.savePolicyExceptionSettings = function (settings) {
        var url = 'http://' + this.server + ':4580/sob/api/securitySettings/savepolicyexceptions';
        return this.http.post(url, settings)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not save settings'); });
    };
    return SecurityService;
}());
SecurityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_token_injector__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_token_injector__["a" /* HttpService */]) === "function" && _a || Object])
], SecurityService);

var _a;
//# sourceMappingURL=security.service.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(7);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object])
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["c" /* MdDialog */]) === "function" && _b || Object])
], DialogsService);

var _a, _b;
//# sourceMappingURL=dialogs.service.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialogs_service__ = __webpack_require__(326);
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
                localStorage.clear();
                _this.router.navigate(['']);
            });
        };
    }
    return ResponseHandlerService;
}());
ResponseHandlerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__dialogs_service__["b" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dialogs_service__["b" /* DialogsService */]) === "function" && _b || Object])
], ResponseHandlerService);

var _a, _b;
//# sourceMappingURL=response-handler.service.js.map

/***/ }),

/***/ 328:
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

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserChangePasswordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserChangePasswordComponent = (function () {
    function UserChangePasswordComponent(dialogRef) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.changePassword = true;
        this.forgotPassword = false;
        this.switchToForgotPassword = function () {
            _this.changePassword = false;
            _this.forgotPassword = true;
        };
    }
    return UserChangePasswordComponent;
}());
UserChangePasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-change-password',
        template: __webpack_require__(954),
        styles: [__webpack_require__(400)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object])
], UserChangePasswordComponent);

var UserComponent = (function () {
    function UserComponent(router, iconReg, sanitizer, activatedRoute, dialog) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.logout = function () {
            localStorage.clear();
            // goes to default route which is login
            _this.router.navigate(['']);
        };
        this.testRoute = function (parent) {
            if (_this.currentUrl) {
                return _this.currentUrl.indexOf(parent) >= 0;
            }
        };
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]) {
                _this.currentUrl = event.url;
            }
            var user = localStorage.getItem('username');
            if (user) {
                _this.username = user.charAt(0).toUpperCase() + user.slice(1);
                console.log(_this.username);
            }
        });
        iconReg.addSvgIcon('dashboard', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dashboard.svg'))
            .addSvgIcon('security', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/security_settings.svg'))
            .addSvgIcon('mails', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/mails.svg'))
            .addSvgIcon('settings', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/settings.svg'))
            .addSvgIcon('resecLogo', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/resecLogo.svg'));
    }
    UserComponent.prototype.openChangePassword = function () {
        this.dialogRef = this.dialog.open(UserChangePasswordComponent, { width: '40%' });
    };
    ;
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(955),
        styles: [__webpack_require__(400)],
        entryComponents: [UserChangePasswordComponent]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["M" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["M" /* MdIconRegistry */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdDialog */]) === "function" && _f || Object])
], UserComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".section-title {\n  border-bottom: solid 1px #F7F8F8;\n}\n\n.textBold {\n  font-weight: 700 !important;\n}\n.textBold-gray{\n  color: #999999 !important;\n  font-weight: 700 !important;\n}\n\np, small, label {\n  color: #666670 !important\n}\n\nsmall {\n  font-weight: 500;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "#reports-container{\n  margin-top: 3em !important;\n  margin-left: 1.7em !important;\n  margin-right: 1.7em !important;\n\n}\n.active{\n  background-image: linear-gradient(-180deg, #00E5FF 0%, #0091EA 100%);\n  color: white;\n}\n\n.search-form{\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n\n.btn-action{\n  margin-top: 3em !important;\n  margin-bottom: 2em !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(/node_modules/@covalent/core/common/platform.css);", ""]);

// module
exports.push([module.i, "#sidenav-toggler{\n  margin-left: 1em;\n  background-color: whitesmoke;\n}\nmd-sidenav{\n  background-color: #0C0E47;\n  width: 240px;\n}\nli{\n  display: list-item;\n  text-align: left;\n}\nli > a {\n  box-sizing: border-box;\n  display: block;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 47px;\n  text-decoration: none;\n  transition: all .3s;\n  padding: 0 16px;\n  position: relative;\n  color: white;\n}\nli:hover{\n  background-color: #342B62;\n}\n.noHoverEffect:hover{\n  background-color: transparent !important;\n}\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n.active{\n  background-color: #342B62;\n  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n  transition: box-shadow 280ms cubic-bezier(.4,0,.2,1);\n  will-change: box-shadow;\n  display: block;\n  position: relative;\n}\n#top-bar {\n  padding: 1em;\n  background-color: white;\n\n}\n\n#top-bar > p {\n  margin: 0px;\n  font-weight: 600;\n  /* Rectangle: */\n  color: #333;\n}\n\n.center-icon {\n  vertical-align: middle !important;\n}\n\n.sob-page-link{\n  position: relative;\n  display: block;\n  padding: .5rem .75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  font-size: 1.2em !important;\n  color: #757575 !important;\n  font-weight: 600 !important;\n\n}\n.sob-page-link:hover{\n  color: #14123F !important;\n  border-bottom: solid 0px white !important;\n  text-decoration: none !important;\n}\n.page-active{\n  position: relative;\n  display: block;\n  padding: .5rem .75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  font-size: 1.2em !important;\n  color: #14123F !important;\n  font-weight: 600 !important;\n  text-decoration: none !important;\n}\n#dropdownMenu1 {\n  background-color: transparent;\n  color: #666666;\n  font-weight: 600;\n}\n\n#dropdownMenu1:hover {\n  background-color: rgba(228, 228, 228, 1);\n  border-color: solid 1px #666666 !important;\n}\n\n.sob-menu-item {\n  color: #666666 !important;\n}\n\n.sob-menu-item:hover {\n  color: rgb(0, 153, 255) !important;\n}\n\n#dropdownMenu1:focus {\n  outline: 0 !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 572:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 572;


/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(631);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(931),
        styles: [__webpack_require__(912)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_token_injector__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_dialogs_service__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__email_email_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__email_search_search_component__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__email_browse_browse_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__security_security_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__security_exception_exception_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__security_general_general_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__account_account_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_user_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__security_general_templates_templates_components__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__account_account_general_account_general_component__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__security_exception_templates_templates_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_routes__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_response_handler_service__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_route_activators__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_flex_layout__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_datepicker__ = __webpack_require__(924);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__swimlane_ngx_datatable__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__covalent_core__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_tag_input__ = __webpack_require__(925);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_tag_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_ng2_tag_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ng_bootstrap_ng_bootstrap__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__swimlane_ngx_charts__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_pipes__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__account_notifications_notifications_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__account_billing_billing_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__dashboard_templates_dashboard_templates_dashboard_templates_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__dashboard_templates_first_time_user_first_time_user_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__new_user_password_new_user_password_component__ = __webpack_require__(319);
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
            __WEBPACK_IMPORTED_MODULE_35__dashboard_templates_dashboard_templates_dashboard_templates_component__["a" /* EmailSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_9__email_email_component__["a" /* EmailComponent */],
            __WEBPACK_IMPORTED_MODULE_10__email_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_11__email_browse_browse_component__["a" /* BrowseComponent */],
            __WEBPACK_IMPORTED_MODULE_12__security_security_component__["a" /* SecurityComponent */],
            __WEBPACK_IMPORTED_MODULE_13__security_exception_exception_component__["a" /* ExceptionComponent */],
            __WEBPACK_IMPORTED_MODULE_14__security_general_general_component__["a" /* GeneralComponent */],
            __WEBPACK_IMPORTED_MODULE_15__account_account_component__["a" /* AccountComponent */],
            __WEBPACK_IMPORTED_MODULE_18__account_account_general_account_general_component__["a" /* ChangePasswordModalComponent */],
            __WEBPACK_IMPORTED_MODULE_16__user_user_component__["a" /* UserChangePasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_16__user_user_component__["b" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_17__security_general_templates_templates_components__["a" /* GeneralSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__security_general_templates_templates_components__["b" /* GeneralSettingsWithCDRComponent */],
            __WEBPACK_IMPORTED_MODULE_17__security_general_templates_templates_components__["c" /* SpecialAttachmentsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__security_general_templates_templates_components__["d" /* GeneralSettingsWithoutCDRComponent */],
            __WEBPACK_IMPORTED_MODULE_18__account_account_general_account_general_component__["b" /* AccountGeneralComponent */],
            __WEBPACK_IMPORTED_MODULE_19__security_exception_templates_templates_component__["a" /* ExceptionSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__security_exception_templates_templates_component__["b" /* ExistingExceptionsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__security_exception_templates_templates_component__["c" /* NewExceptionComponent */],
            __WEBPACK_IMPORTED_MODULE_32__shared_pipes__["a" /* DictionaryIteratorPipe */],
            __WEBPACK_IMPORTED_MODULE_33__account_notifications_notifications_component__["a" /* NotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_34__account_billing_billing_component__["a" /* BillingComponent */],
            __WEBPACK_IMPORTED_MODULE_35__dashboard_templates_dashboard_templates_dashboard_templates_component__["b" /* TotalsTopComponent */],
            __WEBPACK_IMPORTED_MODULE_35__dashboard_templates_dashboard_templates_dashboard_templates_component__["c" /* GraphSelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_35__dashboard_templates_dashboard_templates_dashboard_templates_component__["d" /* GraphComponent */],
            __WEBPACK_IMPORTED_MODULE_35__dashboard_templates_dashboard_templates_dashboard_templates_component__["e" /* PieChartsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__shared_dialogs_service__["a" /* ConfirmDialog */],
            __WEBPACK_IMPORTED_MODULE_36__dashboard_templates_first_time_user_first_time_user_component__["a" /* FirstTimeUserComponent */],
            __WEBPACK_IMPORTED_MODULE_32__shared_pipes__["b" /* GetPercentagePipe */],
            __WEBPACK_IMPORTED_MODULE_37__new_user_password_new_user_password_component__["a" /* NewUserPasswordComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_20__app_routes__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_23__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_28__covalent_core__["a" /* CovalentDataTableModule */],
            __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_28__covalent_core__["b" /* CovalentCoreModule */],
            __WEBPACK_IMPORTED_MODULE_26_ng2_datepicker__["a" /* DatePickerModule */],
            __WEBPACK_IMPORTED_MODULE_27__swimlane_ngx_datatable__["NgxDatatableModule"],
            __WEBPACK_IMPORTED_MODULE_30__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_29_ng2_tag_input__["TagInputModule"],
            __WEBPACK_IMPORTED_MODULE_31__swimlane_ngx_charts__["NgxChartsModule"]
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_4__shared_token_injector__["a" /* HttpService */],
                useFactory: httpFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_21__shared_response_handler_service__["a" /* ResponseHandlerService */]]
            }, __WEBPACK_IMPORTED_MODULE_21__shared_response_handler_service__["a" /* ResponseHandlerService */], __WEBPACK_IMPORTED_MODULE_5__shared_dialogs_service__["b" /* DialogsService */], __WEBPACK_IMPORTED_MODULE_22__shared_route_activators__["a" /* UserIsSobAndHasToken */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_18__account_account_general_account_general_component__["a" /* ChangePasswordModalComponent */], __WEBPACK_IMPORTED_MODULE_5__shared_dialogs_service__["a" /* ConfirmDialog */], __WEBPACK_IMPORTED_MODULE_16__user_user_component__["a" /* UserChangePasswordComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

function httpFactory(backend, options, responseHandler) {
    return new __WEBPACK_IMPORTED_MODULE_4__shared_token_injector__["a" /* HttpService */](backend, options, responseHandler);
}
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_user_password_new_user_password_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__security_security_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__email_email_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_account_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_account_general_account_general_component__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__account_notifications_notifications_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__account_billing_billing_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__security_general_general_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__security_exception_exception_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__email_search_search_component__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__email_browse_browse_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboard_templates_first_time_user_first_time_user_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_route_activators__ = __webpack_require__(328);
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
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
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
                    { path: 'billing', component: __WEBPACK_IMPORTED_MODULE_11__account_billing_billing_component__["a" /* BillingComponent */] },
                ]
            }
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

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_token_injector__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
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
    function DashboardService(http) {
        this.http = http;
        this.server = localStorage.getItem('serverName');
    }
    DashboardService.prototype.GetDashboardData = function () {
        var dashboardUrl = 'http://' + this.server + ':4580/sob/api/dashboard';
        return this.http.get(dashboardUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error, could not retrieve the  dashboard data'); });
    };
    DashboardService.prototype.GetRandomSenders = function () {
        var randomSenders = 'https://api.myjson.com/bins/11ccy1';
        return this.http.get(randomSenders)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Sorry we could not fetch the fake data for senders'); });
    };
    DashboardService.prototype.GetRandomRecipients = function () {
        var randomRecipients = 'https://api.myjson.com/bins/seuvd';
        return this.http.get(randomRecipients)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Sorry we could not fetch the fake data for senders'); });
    };
    return DashboardService;
}());
DashboardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_token_injector__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_token_injector__["a" /* HttpService */]) === "function" && _a || Object])
], DashboardService);

var _a;
//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NewSettingsModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExistingSettingsModel; });
/**
 * Created by if_found_call_0586288454 on 27/04/2017 ap. J.-C..
 */
var Cdr = (function () {
    function Cdr() {
    }
    return Cdr;
}());
var NewSettingsModel = (function () {
    function NewSettingsModel() {
    }
    return NewSettingsModel;
}());

var ExistingSettingsModel = (function () {
    function ExistingSettingsModel() {
    }
    return ExistingSettingsModel;
}());

//# sourceMappingURL=Models.js.map

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DictionaryIteratorPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GetPercentagePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by if_found_call_0586288454 on 27/04/2017 ap. J.-C..
 */

var DictionaryIteratorPipe = (function () {
    function DictionaryIteratorPipe() {
    }
    DictionaryIteratorPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return Object.keys(value).map(function (key) { return value[key]; });
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
        if (!value) {
            return value;
        }
        ;
        return (value / total) * 100 + ' %';
    };
    return GetPercentagePipe;
}());
GetPercentagePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'GetPercentage' })
], GetPercentagePipe);

//# sourceMappingURL=pipes.js.map

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(85);
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
    }
    UserService.prototype.login = function (server, username, password) {
        var LoginUrl = 'http://' + server + ':4580/api/users/login';
        return this.http.post(LoginUrl, { username: username, password: password })
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

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__response_handler_service__ = __webpack_require__(327);
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
/**
 * Created by if_found_call_0586288454 on 08/05/2017 ap. J.-C..
 */






var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, options, responseHandler) {
        var _this = _super.call(this, backend, options) || this;
        _this.responseHandler = responseHandler;
        var token = localStorage.getItem('token'); // your custom token getter function here
        options.headers.set('Authorization', token);
        return _this;
    }
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* XHRBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* XHRBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__response_handler_service__["a" /* ResponseHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__response_handler_service__["a" /* ResponseHandlerService */]) === "function" && _c || Object])
], HttpService);

var _a, _b, _c;
//# sourceMappingURL=token.injector.js.map

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".spaced-line{\n  line-height: 1.9em !important;\n}\n.section-number > p{\n  font-size: 1.5em;\n}\n.section-number > h3{\n  font-size: 2.2em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".margin-top{\n  margin-top: 1em;\n}\n\n.item{\n  font-weight: 600;\n  color: #666670;\n\n}\n.cta{\n  color: #189cd5;\n  font-weight: 600;\n  font-size: 0.8em;\n  margin-top: 1.7em !important;\n}\n.inner-section{\n  margin-bottom: 1em;\n}\n.bold{\n  font-weight: 700;\n}\nmd-radio-button{\n  font-size: 0.8em !important;\n}\n\ntd, th{\n  padding: 0.5em;\n}\nth > small{\n  font-weight: 300;\n}\n.sob-table-security-td{\n  max-width: 200px !important;\n}\ntable{\n  width: 65% !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".section-title {\n  border-bottom: solid 1px #F7F8F8;\n}\n.textBold {\n  font-weight: 700 !important;\n}\n.textBold-gray{\n  color: #999999 !important;\n  font-weight: 700 !important;\n}\np, small, label {\n  color: #666670 !important\n}\nsmall {\n  font-weight: 500;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".section-title {\n  border-bottom: solid 1px #F7F8F8;\n}\n\n.textBold {\n  font-weight: 700 !important;\n}\n\np, small, label {\n  color: #666670 !important\n}\n\nsmall {\n  font-weight: 500;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".outer {\n  background-color: #F7F8F8;\n}\n\n#form-container {\n  margin-top: 2em;\n  padding-bottom: 2em;\n}\n\n.form-title {\n  background-color: #673AB7;\n  color: white;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 917:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 918:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 401,
	"./af.js": 401,
	"./ar": 408,
	"./ar-dz": 402,
	"./ar-dz.js": 402,
	"./ar-kw": 403,
	"./ar-kw.js": 403,
	"./ar-ly": 404,
	"./ar-ly.js": 404,
	"./ar-ma": 405,
	"./ar-ma.js": 405,
	"./ar-sa": 406,
	"./ar-sa.js": 406,
	"./ar-tn": 407,
	"./ar-tn.js": 407,
	"./ar.js": 408,
	"./az": 409,
	"./az.js": 409,
	"./be": 410,
	"./be.js": 410,
	"./bg": 411,
	"./bg.js": 411,
	"./bn": 412,
	"./bn.js": 412,
	"./bo": 413,
	"./bo.js": 413,
	"./br": 414,
	"./br.js": 414,
	"./bs": 415,
	"./bs.js": 415,
	"./ca": 416,
	"./ca.js": 416,
	"./cs": 417,
	"./cs.js": 417,
	"./cv": 418,
	"./cv.js": 418,
	"./cy": 419,
	"./cy.js": 419,
	"./da": 420,
	"./da.js": 420,
	"./de": 423,
	"./de-at": 421,
	"./de-at.js": 421,
	"./de-ch": 422,
	"./de-ch.js": 422,
	"./de.js": 423,
	"./dv": 424,
	"./dv.js": 424,
	"./el": 425,
	"./el.js": 425,
	"./en-au": 426,
	"./en-au.js": 426,
	"./en-ca": 427,
	"./en-ca.js": 427,
	"./en-gb": 428,
	"./en-gb.js": 428,
	"./en-ie": 429,
	"./en-ie.js": 429,
	"./en-nz": 430,
	"./en-nz.js": 430,
	"./eo": 431,
	"./eo.js": 431,
	"./es": 433,
	"./es-do": 432,
	"./es-do.js": 432,
	"./es.js": 433,
	"./et": 434,
	"./et.js": 434,
	"./eu": 435,
	"./eu.js": 435,
	"./fa": 436,
	"./fa.js": 436,
	"./fi": 437,
	"./fi.js": 437,
	"./fo": 438,
	"./fo.js": 438,
	"./fr": 441,
	"./fr-ca": 439,
	"./fr-ca.js": 439,
	"./fr-ch": 440,
	"./fr-ch.js": 440,
	"./fr.js": 441,
	"./fy": 442,
	"./fy.js": 442,
	"./gd": 443,
	"./gd.js": 443,
	"./gl": 444,
	"./gl.js": 444,
	"./gom-latn": 445,
	"./gom-latn.js": 445,
	"./he": 446,
	"./he.js": 446,
	"./hi": 447,
	"./hi.js": 447,
	"./hr": 448,
	"./hr.js": 448,
	"./hu": 449,
	"./hu.js": 449,
	"./hy-am": 450,
	"./hy-am.js": 450,
	"./id": 451,
	"./id.js": 451,
	"./is": 452,
	"./is.js": 452,
	"./it": 453,
	"./it.js": 453,
	"./ja": 454,
	"./ja.js": 454,
	"./jv": 455,
	"./jv.js": 455,
	"./ka": 456,
	"./ka.js": 456,
	"./kk": 457,
	"./kk.js": 457,
	"./km": 458,
	"./km.js": 458,
	"./kn": 459,
	"./kn.js": 459,
	"./ko": 460,
	"./ko.js": 460,
	"./ky": 461,
	"./ky.js": 461,
	"./lb": 462,
	"./lb.js": 462,
	"./lo": 463,
	"./lo.js": 463,
	"./lt": 464,
	"./lt.js": 464,
	"./lv": 465,
	"./lv.js": 465,
	"./me": 466,
	"./me.js": 466,
	"./mi": 467,
	"./mi.js": 467,
	"./mk": 468,
	"./mk.js": 468,
	"./ml": 469,
	"./ml.js": 469,
	"./mr": 470,
	"./mr.js": 470,
	"./ms": 472,
	"./ms-my": 471,
	"./ms-my.js": 471,
	"./ms.js": 472,
	"./my": 473,
	"./my.js": 473,
	"./nb": 474,
	"./nb.js": 474,
	"./ne": 475,
	"./ne.js": 475,
	"./nl": 477,
	"./nl-be": 476,
	"./nl-be.js": 476,
	"./nl.js": 477,
	"./nn": 478,
	"./nn.js": 478,
	"./pa-in": 479,
	"./pa-in.js": 479,
	"./pl": 480,
	"./pl.js": 480,
	"./pt": 482,
	"./pt-br": 481,
	"./pt-br.js": 481,
	"./pt.js": 482,
	"./ro": 483,
	"./ro.js": 483,
	"./ru": 484,
	"./ru.js": 484,
	"./sd": 485,
	"./sd.js": 485,
	"./se": 486,
	"./se.js": 486,
	"./si": 487,
	"./si.js": 487,
	"./sk": 488,
	"./sk.js": 488,
	"./sl": 489,
	"./sl.js": 489,
	"./sq": 490,
	"./sq.js": 490,
	"./sr": 492,
	"./sr-cyrl": 491,
	"./sr-cyrl.js": 491,
	"./sr.js": 492,
	"./ss": 493,
	"./ss.js": 493,
	"./sv": 494,
	"./sv.js": 494,
	"./sw": 495,
	"./sw.js": 495,
	"./ta": 496,
	"./ta.js": 496,
	"./te": 497,
	"./te.js": 497,
	"./tet": 498,
	"./tet.js": 498,
	"./th": 499,
	"./th.js": 499,
	"./tl-ph": 500,
	"./tl-ph.js": 500,
	"./tlh": 501,
	"./tlh.js": 501,
	"./tr": 502,
	"./tr.js": 502,
	"./tzl": 503,
	"./tzl.js": 503,
	"./tzm": 505,
	"./tzm-latn": 504,
	"./tzm-latn.js": 504,
	"./tzm.js": 505,
	"./uk": 506,
	"./uk.js": 506,
	"./ur": 507,
	"./ur.js": 507,
	"./uz": 509,
	"./uz-latn": 508,
	"./uz-latn.js": 508,
	"./uz.js": 509,
	"./vi": 510,
	"./vi.js": 510,
	"./x-pseudo": 511,
	"./x-pseudo.js": 511,
	"./yo": 512,
	"./yo.js": 512,
	"./zh-cn": 513,
	"./zh-cn.js": 513,
	"./zh-hk": 514,
	"./zh-hk.js": 514,
	"./zh-tw": 515,
	"./zh-tw.js": 515
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
webpackContext.id = 923;


/***/ }),

/***/ 926:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 \">\n\n  <div id=\"company\" class=\"white frame col mb-2\">\n    <div class=\"section-title\">\n      <h5 class=\"pt-3 pb-3 textBold\">COMPANY</h5>\n    </div>\n    <div class=\"pt-3 pb-3\">\n      <div class=\"row mb-3\">\n        <p class=\"textBold-gray col-3\">Company Name</p>\n        <p class=\"textBold col-3\">Avocado Partner</p>\n      </div>\n      <div class=\"row\">\n        <p class=\"textBold-gray col-3\">Blocked Attachments</p>\n        <p class=\"textBold col-3\">We'll send an email notifying the users that an attachment has been blocked with a\n          reason.</p>\n        <button class=\"btn btn-action-inverse h-50\" type=\"button\" (click)=\"sendTestEmail()\">Send test email</button>\n        <small *ngIf=\"testEmailSent\">Test email sent, please wait 1-2 min for confirmation.</small>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"accountOwner\" class=\"white frame col mb-2\">\n    <div class=\"section-title\">\n      <h5 class=\"pt-3 pb-3 textBold\">ACCOUNT OWNER</h5>\n    </div>\n    <div class=\"pt-3 pb-3\">\n      <div class=\"row mb-3\">\n        <p class=\"textBold-gray col-3\">Name</p>\n        <input class=\"col-3 form-control\" [(ngModel)]=\"settings.name\" type=\"text\">\n      </div>\n      <div class=\"row  mb-3\">\n        <p class=\"textBold-gray col-3\">Email</p>\n        <input class=\"col-3 form-control\" type=\"email\" [(ngModel)]=\"settings.email\">\n      </div>\n      <div class=\"row  mb-3\">\n        <p class=\"textBold-gray col-3\">Phone</p>\n        <input class=\"col-3 form-control\" type=\"number\" [(ngModel)]=\"settings.phone\">\n      </div>\n      <div class=\"row  mb-3\">\n        <p class=\"textBold-gray col-3\">Password</p>\n        <input class=\"col-3 form-control\" type=\"password\" [(ngModel)]=\"settings.password\">\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"openChangePassword()\">change</button>\n      </div>\n      <label class=\"checkbox-inline\"> <input type=\"checkbox\" [(ngModel)]=\"isAdmin\">I am the administrator</label>\n    </div>\n  </div>\n\n  <div *ngIf=\"!isAdmin\" id=\"isNotAdmin\" class=\"white frame col mb-2\">\n    <div class=\"section-title\">\n      <h5 class=\"pt-3 pb-3 textBold\">ADMINISTRATOR</h5>\n    </div>\n    <div class=\"pt-3 pb-3\">\n      <div class=\"row mb-3\">\n        <p class=\"textBold-gray col-3\">Name</p>\n        <input class=\"col-3 form-control\" [(ngModel)]=\"admin.name\" type=\"text\">\n      </div>\n      <div class=\"row  mb-3\">\n        <p class=\"textBold-gray col-3\">Email</p>\n        <input class=\"col-3 form-control\" type=\"email\" [(ngModel)]=\"admin.email\">\n      </div>\n      <div class=\"row  mb-3\">\n        <p class=\"textBold-gray col-3\">Phone</p>\n        <input class=\"col-3 form-control\" type=\"number\" [(ngModel)]=\"admin.phone\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row justify-content-center mt-5\">\n    <button class=\"btn btn-action\">APPLY</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 927:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-end mb-4\">\n    <button class=\"btn btn-circle\" md-dialog-close>x</button>\n  </div>\n  <div *ngIf=\"forgotPassword\">\n    <div class=\"text-center m-3\">\n      <h4 class=\"mb-3\">Change Password</h4>\n      <button class=\"btn btn-link\" (click)=\"switchToForgotPassword()\">Forgot Password?</button>\n    </div>\n    <div class=\"row mb-4\">\n      <p class=\"col-6\">Current Password</p>\n      <input class=\"col-6 form-control\" [(ngModel)]=\"passwordsToSend.CurrentPassword\">\n    </div>\n    <div class=\"row mb-4\">\n      <p class=\"col-6\">New Password</p>\n      <input class=\"col-6 form-control\" [(ngModel)]=\"passwordsToSend.NewPassword\">\n    </div>\n    <div class=\"row mb-4\">\n      <p class=\"col-6\">Confirm New Password</p>\n      <input class=\"col-6 form-control\" [(ngModel)]=\"passwordsToSend.ConfirmNewPassword\">\n    </div>\n    <div class=\"row justify-content-center\">\n      <button type=\"button\" class=\"btn btn-action\" (click)=\"changePassword()\" [disabled]=\"!(passwordsToSend.NewPassword && (passwordsToSend.NewPassword === passwordsToSend.ConfirmNewPassword))\">APPLY\n      </button>\n    </div>\n  </div>\n  <div *ngIf=\"resetPassword\">\n    <div class=\"col text-center\">\n      <h4 class=\"mb-3\">Forgot Password ?</h4>\n      <p class=\"mb-3\">We'll send you a link to reset your password.</p>\n      <button type=\"button\" class=\"btn btn-action\">RESET PASSWORD\n      </button>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 928:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 929:
/***/ (function(module, exports) {

module.exports = "<div class=\" col-12\">\n  <div id=\"company\" class=\"white frame col mb-2\">\n    <div class=\"section-title\" layout=\"row\" layout-align=\"space-between center\" layout-padding>\n      <h5 class=\"textBold pl-0\" flex=\"70\">PLAN</h5>\n      <div flex layout=\"row\" layout-align=\"end center\">\n        <button class=\"btn btn-purple\">Update My Plan</button>\n        <button class=\"btn btn-neutral-yellow-hvr\">Cancel Plan</button>\n      </div>\n    </div>\n    <div class=\"pt-3 pb-3\">\n      <div class=\"row mb-3\">\n        <p class=\"textBold-gray col-3\">Name</p>\n        <p class=\"textBold col-3\">ReSecSMB</p>\n      </div>\n      <div class=\"row mb-3\">\n        <p class=\"textBold-gray col-3\">Fee</p>\n        <p class=\"textBold col-3\">$1.99/user/Month</p>\n      </div>\n      <div class=\"row\">\n        <p class=\"textBold-gray col-3\">Users</p>\n        <div class=\"col-3\">\n          <md-select placeholder=\"Number of Users\" floatPlaceholder=\"never\">\n            <md-option *ngFor=\"let user of users\" [value]=\"user\">\n              {{ user }}\n            </md-option>\n          </md-select>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div id=\"billingDetails\" class=\"white frame col mb-2\">\n    <div class=\"section-title\">\n      <h5 class=\"pt-5 pb-3 textBold\">BILLING DETAILS</h5>\n    </div>\n    <div class=\"pt-3 pb-3\">\n      <div class=\"form-group row\">\n        <label for=\"name\" class=\"textBold-gray col-3 col-form-label\">Company Name</label>\n        <div class=\"col-5\">\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"billing.name\" id=\"name\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"number\" class=\"textBold-gray col-3 col-form-label\">Company Number</label>\n        <div class=\"col-5\">\n          <input class=\"form-control\" type=\"number\" [(ngModel)]=\"billing.number\" id=\"number\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"address\" class=\"textBold-gray col-3 col-form-label\">Billing Address</label>\n        <div class=\"col-5\">\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"billing.address\" id=\"address\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"ccNumber\" class=\"textBold-gray col-3 col-form-label\">Payment</label>\n        <div class=\"col-3\">\n          <input class=\"form-control\" type=\"number\" [(ngModel)]=\"billing.ccNumber\" id=\"ccNumber\">\n        </div>\n        <div class=\"col-2\">\n          <input class=\"form-control\" type=\"Month\" [(ngModel)]=\"billing.ccExp\" id=\"address\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"row justify-content-center mt-5\">\n    <button class=\"btn btn-action\">APPLY</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 930:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 \">\n  <div id=\"admin\" class=\"white frame col mb-2\">\n    <div class=\"section-title\">\n      <h5 class=\"pt-3 pb-3 textBold\">ADMINISTRATOR NOTIFICATIONS</h5>\n    </div>\n    <div class=\"pt-3 pb-3\">\n      <div class=\"row mb-3\">\n        <div class=\"col-6\">\n          <p class=\"textBold\">Blocked Emails</p>\n          <small>We'll send an email in lieu of the email that was meant to be sent, when the email is blocked.</small>\n        </div>\n        <md-slide-toggle [(ngModel)]=\"adminSettings.AdminBlockedEmailNotification\"></md-slide-toggle>\n      </div>\n      <div class=\"row mb-3\">\n        <div class=\"col-6\">\n          <p class=\"textBold\">Blocked Attachments</p>\n          <small>We'll send an email notifying the users that an attachment has been blocked with a reason.</small>\n        </div>\n        <md-slide-toggle [(ngModel)]=\"adminSettings.AdminAttachedEmailNotification\"></md-slide-toggle>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <p class=\"textBold\">Weekly Status Reports</p>\n          <small>Once a week, we'll send you a summary of the activity taking place.</small>\n        </div>\n        <md-slide-toggle [(ngModel)]=\"adminSettings.WeeklyStatusReport\"></md-slide-toggle>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"accountOwner\" class=\"white frame col mb-2\">\n    <div class=\"section-title\">\n      <h5 class=\"pt-3 pb-3 textBold\">ACCOUNT OWNER NOTIFICATIONS</h5>\n    </div>\n    <div class=\"pt-3 pb-3\">\n      <div class=\"row mb-3\">\n        <div class=\"col-6\">\n          <p class=\"textBold\">Monthly Invoices</p>\n          <small>Once a month, we will send you an invoice.</small>\n        </div>\n        <md-slide-toggle></md-slide-toggle>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <p class=\"textBold\">Weekly Status Report</p>\n          <small>Once a week, we'll send you a summary of the activity taking place.</small>\n        </div>\n        <md-slide-toggle></md-slide-toggle>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"emailStamp\" class=\"white frame col mb-2\">\n    <div class=\"section-title\">\n      <h5 class=\"pt-3 pb-3 textBold\">SECURITY EMAIL STAMP</h5>\n    </div>\n    <div class=\"pt-3 pb-3\">\n      <small>To make change to this section, please update your plan here.</small>\n      <div class=\"row mb-3\">\n        <div class=\"col-6\">\n          <p class=\"textBold\">Display Stamp</p>\n          <small>The stamp will appear at the bottom of each email.</small>\n        </div>\n        <md-slide-toggle></md-slide-toggle>\n      </div>\n      <div class=\"row\">\n        <label for=\"stamp-content\" class=\"col-3 col-form-label textBold\">Stamp Content</label>\n        <div class=\"col-9\">\n          <input class=\"form-control\" type=\"text\" id=\"stamp-content\"\n                 placeholder=\"This email has been secured by ReSec.\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"m-5 d-flex justify-content-center\">\n    <button class=\"w-25 btn btn-action\" (click)=\"postSettings()\">APPLY</button>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ 931:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 932:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\n  <div class=\"row justify-content-end mb-5 mt-5\">\n    <button class=\"btn btn-transparent hvr-glow\">Last 7 Days</button>\n    <button class=\"btn btn-transparent hvr-glow\">Last 30 Days</button>\n    <button class=\"btn btn-transparent hvr-glow\">Last 90 Days</button>\n  </div>\n  <div *ngIf=\"dataHasLoaded\">\n    <app-dashboard-top-totals [totals]=\"totals\"></app-dashboard-top-totals>\n    <div>\n      <div class=\"mt-5 ml-0 mr-0\" layout=\"row\" layout-md=\"column\" layout-sm=\"column\" layout-margin\n           layout-align=\"space-between start\">\n        <div flex-lg=\"45\" flex-gt-lg=\"40\" flex-md=\"100\" flex-sm=\"100\" flex-xs=\"100\" class=\"ml-0\" >\n          <app-dashboard-graph-selector [totals]=\"totals\"></app-dashboard-graph-selector>\n        </div>\n        <div flex>\n          <app-dashboard-graph [GraphObject]='GraphObject'></app-dashboard-graph>\n        </div>\n      </div>\n    </div>\n    <div class=\"mt-5 ml-0 mr-0\" layout=\"row\" layout-align=\"space-between start\" layout-margin>\n      <app-dashboard-pie-charts [pieData] = 'pieData' [colorScheme] = 'colorScheme' flex=\"50\"></app-dashboard-pie-charts>\n      <app-email-section flex [figureColor] = 'figureColor' [users] = 'randomUsers'></app-email-section>\n    </div>\n  </div>\n</div>\n\n\n<style>\n\n</style>\n"

/***/ }),

/***/ 933:
/***/ (function(module, exports) {

module.exports = "<div class=\"white frame hvr-glow\" style=\"height: 400px\">\n  <div layout=\"column\" class=\"p-3\">\n    <div layout=\"row\" id=\"top-section\" layout-align=\"space-between center\">\n      <div layout=\"column\" flex=\"60\">\n        <p class=\"bold light-gray\">Clean Replica Delivered by CDR</p>\n        <p>Top End Users</p>\n      </div>\n      <div layout=\"row\">\n        <button class=\"btn btn-primary\">Recipients</button>\n        <button class=\"btn btn-primary\">Senders</button>\n      </div>\n    </div>\n    <div id=\"emails\" layout=\"column\" layout-align=\"start center\"\n         style=\"overflow: auto;  height: 310px\" layout-margin>\n      <md-list>\n        <md-list-item *ngFor='let user of users'>\n          <p md-line class=\"bold-dark-gray\">{{user.name}}</p>\n          <p [style.color]=\"figureColor\" class=\"bold mb-0\">{{user.score}}</p>\n        </md-list-item>\n      </md-list>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 934:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-align=\"space-between center\" layout-margin class=\"ml-0 mt-0\" style=\"height: 140px\">\n  <div flex=\"50\" class=\"white frame mt-0 hvr-glow \" style=\"height: 100%\">\n    <div layout=\"row\" layout-align=\"space-between center\" class=\"ml-0\" layout-padding\n         style=\"height: 100%; vertical-align: middle\">\n      <h5 flex=\"60\" class=\"bold light-gray spaced-line\">Clean Replica by CDR</h5>\n      <div flex class=\"section-number\">\n        <p>{{totals.totalCleanReplicaByCdr}}</p>\n        <h3 class=\"bold\">{{totals.totalCleanReplicaByCdr | GetPercentage : totals.TotalAttachmentProcessed}}</h3>\n      </div>\n    </div>\n  </div>\n  <div flex=\"50\" class=\"white frame mt-0 hvr-glow\" style=\"height: 100%\">\n    <div layout=\"row\" layout-align=\"space-between center\" class=\"ml-0\" layout-padding\n         style=\"height: 100%; vertical-align: middle\">\n      <h5 flex=\"60\" class=\"bold light-gray spaced-line\">Original Attachments OK</h5>\n      <div flex class=\"section-number\">\n        <p>{{totals.totalPassedOk}}</p>\n        <h3 class=\"bold\">{{totals.totalPassedOk | GetPercentage : totals.TotalAttachmentProcessed}}</h3>\n      </div>\n    </div>\n  </div>\n</div>\n<div layout=\"row\" layout-align=\"space-between center\" layout-margin class=\"ml-0 mt-3\" style=\"height: 140px\">\n  <div flex=\"50\" class=\"white frame mb-0 hvr-glow\" style=\"height: 100%\">\n    <div layout=\"row\" layout-align=\"space-between center\" class=\"ml-0\" layout-padding\n         style=\"height: 100%; vertical-align: middle\">\n      <h5 flex=\"60\" class=\"bold light-gray spaced-line\">Attachment Blocked by Policy</h5>\n      <div flex class=\"section-number\">\n        <p>{{totals.totalCleanReplicaByCdr}}</p>\n        <h3 class=\"bold\">{{totals.totalCleanReplicaByCdr | GetPercentage : totals.TotalAttachmentProcessed}}</h3>\n      </div>\n    </div>\n  </div>\n  <div flex=\"50\" class=\"white frame mb-0 hvr-glow\" style=\"height: 100%\">\n    <div layout=\"row\" layout-align=\"space-between center\" class=\"ml-0\" layout-padding\n         style=\"height: 100%; vertical-align: middle\">\n      <h5 flex=\"60\" class=\"bold light-gray spaced-line\">Attachment Blocked by Antivirus</h5>\n      <div flex class=\"section-number\">\n        <p>{{totals.TotalBlockedByAntivirus}}</p>\n        <h3 class=\"bold\">{{totals.TotalBlockedByAntivirus | GetPercentage : totals.TotalAttachmentProcessed}}</h3>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ 935:
/***/ (function(module, exports) {

module.exports = "<div class=\"white frame\" style=\"height: 300px\">\n  <ngx-charts-line-chart\n    [scheme]=\"colorScheme\"\n    [results]=\"multi\"\n    [gradient]=\"gradient\"\n    [xAxis]=\"showXAxis\"\n    [yAxis]=\"showYAxis\"\n    [legend]=\"showLegend\"\n    [showGridLines]=\"showGridLines\"\n    [showXAxisLabel]=\"showXAxisLabel\"\n    [showYAxisLabel]=\"showYAxisLabel\"\n    [xAxisLabel]=\"xAxisLabel\"\n    [yAxisLabel]=\"yAxisLabel\"\n    [schemeType]='schemeType'\n    [autoScale]=\"true\">\n  </ngx-charts-line-chart>\n</div>\n"

/***/ }),

/***/ 936:
/***/ (function(module, exports) {

module.exports = "<div class=\"white frame hvr-glow mr-3 p-3\" style=\"height: 400px\">\n  <div layout=\"column\" style=\"height: 100%\">\n    <p class=\"bold light-gray\">Clean Replica Delivered by CDR</p>\n    <p>Top Attachment Type</p>\n    <div id=\"graph-holder\" style=\"height: 100%; \">\n      <ngx-charts-pie-chart\n        [scheme]=\"colorScheme\"\n        [results]=\"pieData\"\n        [legend]=\"true\"\n        [explodeSlices]=\"explodeSlices\"\n        [labels]=\"showLabels\"\n        [doughnut]=\"true\"\n        [gradient]=\"true\"\n        [arcWidth]=\"0.2\">\n      </ngx-charts-pie-chart>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 937:
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-5\">\n  <div class=\"col-6\">\n    <div class=\"col-12 white frame p-5\">\n      <div class=\"row vertical-align\">\n        <h4 class=\"col-6 bold-dark-gray\">Total Emails Processed</h4>\n        <h1 class=\"col-3 bold-dark-gray\">{{totals.TotalEmailsProcessed}}</h1>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-6\">\n    <div class=\"col-12 white frame p-5\">\n      <div class=\"row vertical-align\">\n        <h4 class=\"col-6 bold-dark-gray\">Total URLs Processed</h4>\n        <h1 class=\"col-3 bold-dark-gray\">{{totals.TotalUrls}}</h1>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"col-12 white frame p-5 \">\n  <div class=\"row  vertical-align justify-content-center\">\n    <h4 class=\"mr-3 bold-dark-gray\">Total Attachments Processed</h4>\n    <h1 class=\"ml-3 bold-dark-gray underlined-purple\">{{totals.TotalAttachmentProcessed}}</h1>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ 938:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 white frame pb-5\">\n  <div class=\"title-section\">\n    <h4 class=\"bold-dark-gray p-4\">WELCOME!</h4>\n  </div>\n  <div class=\"mt-5 mb-5 col-7\">\n    <small>This checklist will help you get started.</small>\n    <div class=\"row mt-5\">\n      <div col=\"3\">\n        <md-checkbox></md-checkbox>\n      </div>\n      <div class=\"col-9\">\n        <h5 class=\"bold-dark-gray mb-4\">Change your MX Record</h5>\n        <small>Access your account at your domain host and change the domain's MX record to SECUREMAIL.RE-SEC.COM.\n          Here's a directory of all domain hosts and hot to find your MX record.\n        </small>\n      </div>\n    </div>\n    <div class=\"row mt-5\">\n      <div col=\"3\">\n        <md-checkbox></md-checkbox>\n      </div>\n      <div class=\"col-9\">\n        <h5 class=\"bold-dark-gray mb-4\">Send a test email</h5>\n        <small>Make sure the MX record change was a success and that\n          we're up and running by sending a test email.\n        </small>\n        <div class=\"mt-3\">\n          <button class=\"btn btn-action-inverse ml-0\">Send Test Email</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"row mt-5\">\n      <div col=\"3\">\n        <md-checkbox></md-checkbox>\n      </div>\n      <div class=\"col-9\">\n        <h5 class=\"bold-dark-gray mb-4\">Customize Security Settings</h5>\n        <small>Create your company security policy by heading to the <a class=\"internal-link\">Security Settings</a>\n          section.\n        </small>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ 939:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 bg-white-shadow\">\n  <div class=\"container pt-5 mt-5 mb-5 text-center\">\n    <button class=\"btn btn-primary\" [ngClass]=\"{'btn-primary-active': query.Stage === 'Failed'}\"\n            (click)=\"filterBy('Failed')\">Blocked Emails\n    </button>\n    <button class=\"btn btn-primary\" [ngClass]=\"{'btn-primary-active': query.Stage === 'ContentRemoved'}\"\n            (click)=\"filterBy('ContentRemoved')\">Emails Blocked with Attachments\n    </button>\n\n  </div>\n  <div class=\"mt-5 text-center\" *ngIf=\"!isEmailEmpty\">\n    <p class=\"text-center m-5\"><strong>{{totalNumberOfMails}} Results </strong></p>\n    <td-data-table\n      #dataTable\n      [data]=\"emails\"\n      [columns]=\"columns\"\n      [sortable]=\"true\"\n      [selectable]=\"false\"\n      [sortBy]=\"query.sortField\"\n      [sortOrder]=\"query.sortOrder\"\n      (sortChange)=\"sort($event)\"\n      (rowSelect)=\"selectMail($event)\"\n      (selectAll)=\"selectAllMails($event)\">\n    </td-data-table>\n    <div class=\"md-padding\" *ngIf=\"!dataTable.hasData\" layout=\"row\" layout-align=\"center center\">\n      <h3>No results to display.</h3>\n    </div>\n    <td-paging-bar #pagingBar [pageSizes]=\"[5, 10, 15, 20]\" [total]=\"totalNumberOfMails\" (change)=\"page($event)\">\n      <span td-paging-bar-label hide-xs>Row per page:</span>\n      {{pagingBar.range}} <span hide-xs>of {{pagingBar.total}}</span>\n    </td-paging-bar>\n  </div>\n</div>\n"

/***/ }),

/***/ 940:
/***/ (function(module, exports) {

module.exports = "<div  id=\"reports-container\">\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 941:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div *ngIf=\"!isFirstTime\" class=\"mb-5 mt-5\">\n    <p>Your current plan allows for 7 days of email archiving. If you need more, upgrade here.</p>\n    <div class=\"white frame pt-5 pb-5\">\n      <div class=\"col-6\">\n        <div class=\"row\">\n          <p class=\"col-sm-3 bold-gray\">Ticket ID</p>\n          <div class=\"col-sm-7\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"query.ticketId\" placeholder=\"Ticket ID\">\n          </div>\n          <button class=\"btn btn-circle-action\" (click)=\"searchMails()\" [disabled]=\"!query.ticketId\">\n            <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n\n        <!-- search result section -->\n        <div *ngIf=\"!noResultFound && !noSearchInitiated\">\n          <div class=\"mt-5 mb-4\" *ngIf=\"!noResultFound\">\n            <div class=\"row\">\n              <p class=\"bold-gray col-3\">Date</p>\n              <p class=\"bold-dark-gray col\">{{emails.SanitizationDate | date:'medium'}}</p>\n            </div>\n            <div class=\"row\">\n              <p class=\"bold-gray col-3\">Reason</p>\n              <p class=\"bold-dark-gray col\">{{emails['Reason Blocked']}}</p>\n            </div>\n            <div class=\"row\">\n              <p class=\"bold-gray col-3\">Recipient</p>\n              <p class=\"bold-dark-gray col\">{{emails.Recipient}}</p>\n            </div>\n            <div class=\"row\">\n              <p class=\"bold-gray col-3\">Sender</p>\n              <p class=\"bold-dark-gray col\">{{emails.Sender}}</p>\n            </div>\n            <div class=\"row\">\n              <p class=\"bold-gray col-3\">Subject</p>\n              <p class=\"bold-dark-gray col\">{{emails.Subject}}</p>\n            </div>\n            <div class=\"row\">\n              <p class=\"bold-gray col-3\">Attached Files</p>\n              <p class=\"bold-dark-gray col\">.{{emails['Attached Files']}}</p>\n            </div>\n          </div>\n\n          <div class=\"row mb-5\">\n            <button class=\"btn btn-action-inverse\"\n                    (click)=\"performAction(emails.SanitizationId, 'ReleaseEmailToRecipient')\">Release to Recipient\n            </button>\n            <button class=\"btn btn-action-inverse\" (click)=\"performAction(emails.SanitizationId, 'ForwardToAdmin')\">\n              Forward To Admin\n            </button>\n          </div>\n        </div>\n        <div *ngIf=\"noResultFound && !noSearchInitiated\" class=\"mt-5 alert alert-warning\">\n          <p>no result found</p>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"isFirstTime\" class=\"col text-center white frame\">\n    <div class=\"mt-5 mb-5 p-5\">\n      <p class=\"bold-dark-gray\">\n        0 email</p>\n      <p>No emails have been processed yet. Once they do, you'll see them listed here. Head to the dashboard, complete\n        your\n        checklist and make sure you're up and running with ReSecure Mail.</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 942:
/***/ (function(module, exports) {

module.exports = "<div class=\"outer\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFill>\n  <h3 *ngIf=\"wrongId\" color=\"accent\">Please enter valid credentials</h3>\n  <div class=\"frame white\" style=\"width: 40%\">\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <div [hidden]=\"submitted\" fxFlex=\"90\">\n        <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\" id=\"form-container\" fxLayout=\"column\" fxLayoutGap=\"20px\"\n              fxLayoutWrap>\n          <md-input-container class=\"full-width\" dividerColor=\"primary\">\n            <input mdInput placeholder=\"Server\" type=\"text\" id=\"server\" required [(ngModel)]=\"user.server\" name=\"server\"\n                   #server=\"ngModel\">\n            <label [hidden]=\"server.valid || server.pristine\" class=\"wrong-input\">Server is required</label>\n          </md-input-container>\n          <md-input-container class=\"full-width\" dividerColor=\"primary\">\n            <input mdInput type=\"text\" placeholder=\"UserName\" id=\"username\" required [(ngModel)]=\"user.username\"\n                   name=\"username\" #username=\"ngModel\">\n            <label [hidden]=\"username.valid || username.pristine\" class=\"wrong-input\">Username is required</label>\n          </md-input-container>\n          <md-input-container class=\"full-width\" dividerColor=\"primary\">\n            <input mdInput type=\"password\" placeholder=\"Password\" id=\"password\" required [(ngModel)]=\"user.password\"\n                   name=\"password\" #password=\"ngModel\">\n            <label [hidden]=\"password.valid || password.pristine\" class=\"wrong-input\">Password is incorrect</label>\n          </md-input-container>\n          <button type=\"submit\" md-raised-button [disabled]=\"!loginForm.valid\" color=\"primary\">Submit</button>\n        </form>\n      </div>\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <md-spinner *ngIf=\"checkingUser\" color=\"primary\"></md-spinner>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 943:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center center\" style=\"height: 100vh\">\n  <div class=\"white frame p-5\" style=\"width: 45%\">\n    <form class=\"form-horizontal\" layout-margin #changePasswordForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"currentPassword\" class=\"col-sm-4 control-label\">Current Password</label>\n        <div class=\"col-sm-8\">\n          <input required type=\"password\" name='currentPassword' class=\"form-control\" id=\"currentPassword\"\n                 [(ngModel)]=\"passwords.CurrentPassword\"  #current = 'ngModel' placeholder=\"Current Password\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"newPassword1\" class=\"col-sm-4 control-label\">Password</label>\n        <div class=\"col-sm-8\">\n          <input required #newPassword1 = \"ngModel\" minlength = \"6\" type=\"password\" name='newPassword1' class=\"form-control\" id=\"newPassword1\"\n                 [(ngModel)]=\"passwords.NewPassword\" placeholder=\"Pick new password\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"newPassword2\" class=\"col-sm-4 control-label\">Confirm Password</label>\n        <div class=\"col-sm-8\">\n          <input #newPassword2 =\"ngModel\" minlength = \"6\" required type=\"password\" name='newPassword2' class=\"form-control\" id=\"newPassword2\"\n                 [(ngModel)]=\"passwords.ConfirmNewPassword\" placeholder=\"Confirm new password\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"text-center mt-5\">\n          <button type=\"submit\" class=\"btn btn-default\"\n                  [disabled]='!(changePasswordForm.valid && changePasswordForm.newPassword1 === changePasswordForm.newPassword2)'\n                  (click)=\"changePassword()\">\n            Change Password\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 944:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" *ngIf=\"!dataIsLoading\">\n  <div layout=\"row\" flex=\"100\" style=\"margin-top: 3em;\">\n    <button md-button color=\"primary\" (click)='newDptQuery(true)'>+ Add Department</button>\n  </div>\n  <div flex=\"85\" flex-gt-lg=\"85\" fxFlex.lt-md=\"100\" layout=\"row\" layout-margin>\n\n    <existing-exceptions flex=\"30\" [noSettingsExist] = \"noSettingsExist\" [exceptionsList]=\"exceptionsList\" [currentSettings]=\"settings\"\n                         (onSelect)=\"selectDepartment($event)\"></existing-exceptions>\n    <div flex>\n      <div *ngIf=\"!noSettingsExist && !newDepartment\">\n        <exception-settings flex=\"60\"\n                            [settings]=\"settings\"\n                            (onSave)='postNewSettings($event)' (onDelete)='deletePolicy($event)'>\n        </exception-settings>\n      </div>\n      <div *ngIf=\"newDepartment\">\n        <new-exception (onCancel)=\"cancelCreation($event)\" (onSave)=\"postNewSettings($event)\"></new-exception>\n      </div>\n      <p *ngIf=\"!newDepartment && noSettingsExist\">bummer no settings exist</p>\n    </div>\n  </div>\n\n\n</div>\n\n<div layout=\"column\" layout-align=\"center center\" *ngIf=\"dataIsLoading\" style=\"min-height: 80vh\">\n  <md-spinner></md-spinner>\n</div>\n"

/***/ }),

/***/ 945:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\">\n  <md-list *ngIf=\"!noSettingsExist\">\n    <md-list-item *ngFor=\"let exception of exceptionsList | DictionaryIteratorPipe\" class=\"dpt-list\"\n                  (click)=\"selectDepartment(exception.PolicyName)\"\n                  [ngClass]=\"{'selectedPolicy': isCurrentPolicy(exception.PolicyName)}\">\n      <p class=\"dpt-name\" md-line>{{exception.PolicyName}}</p>\n      <p md-line>{{exception.PolicyId}} users</p>\n    </md-list-item>\n  </md-list>\n</div>\n\n<style>\n\n\n  .dpt-list:hover {\n    background-color: white;\n  }\n\n</style>\n"

/***/ }),

/***/ 946:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" class=\"white frame\">\n  <div layout=\"flex\" layout-align=\"space-between center\" layout-margin>\n    <p flex=\"30\">Department Name</p>\n    <input class=\"bs-input\" flex=\"40\" placeholder=\"Pick a name\" [(ngModel)]=\"settings.PolicyName\"/>\n    <a (click)=\"cancelCreation(false)\" class=\"cta\">Cancel </a>\n  </div>\n  <div layout=\"row\" layout-align=\"space-between end\" layout-margin>\n    <p flex=\"30\">Department Users</p>\n    <tag-input [(ngModel)]='settings.Exceptions' [maxItems]='100' flex [errorMessages]=\"errorMessages\"\n               [validators]=\"validators\" theme='dark'></tag-input>\n  </div>\n</div>\n<div class=\"white frame margin-top\">\n  <div class=\"title-section\" layout-padding>\n    <h4>ATTACHMENTS PROCESSED WITH CDR</h4>\n  </div>\n\n  <div class=\"content-holder\">\n\n    <table>\n      <thead>\n      <th></th>\n      <th layout-align=\"center\">\n        Don't Process<br>\n        <small>Not recommended</small>\n      </th>\n      <th layout-align=\"center\">\n        High<br>\n        <small>Active content NOT removed</small>\n      </th>\n      <th>Highest<br>\n        <small>Active content removed</small>\n      </th>\n      </thead>\n      <tbody>\n      <tr>\n        <td layout=\"column\" class=\"table-row\">\n          <p>Documents</p>\n          <small>.doc, .docx, .pdf, .pages, .gdoc</small>\n        </td>\n        <td colspan=\"3\">\n          <md-slider [(ngModel)]=\"settings.AttachementsProcessedLevels.Documents\"\n                     [max]=\"2\"\n                     style=\"width: 100%\"\n                     [min]=\"0\"\n                     [step]=\"1\"\n                     [value]=\"0\"\n                     [vertical]=\"vertical\"\n                     color=\"primary\">\n          </md-slider>\n        </td>\n      </tr>\n      <tr>\n        <td layout=\"column\" class=\"table-row\">\n          <p>Spreadsheets</p>\n          <small>.csv, .xls, .xlsx, .gsheet</small>\n        </td>\n        <td colspan=\"3\">\n          <md-slider [(ngModel)]=\"settings.AttachementsProcessedLevels.Spreadsheets\"\n                     [max]=\"2\"\n                     style=\"width: 100%\"\n                     [min]=\"0\"\n                     [step]=\"1\"\n                     [value]=\"0\"\n                     [vertical]=\"vertical\"\n                     color=\"primary\">\n          </md-slider>\n        </td>\n      </tr>\n      <tr>\n        <td layout=\"column\" class=\"table-row\">\n          <p>Images</p>\n          <small>.png, .jpg, .jpeg, .gif</small>\n        </td>\n        <td colspan=\"3\">\n          <md-slider [(ngModel)]=\"settings.AttachementsProcessedLevels.Images\"\n                     [max]=\"2\"\n                     style=\"width: 100%\"\n                     [min]=\"0\"\n                     [step]=\"1\"\n                     [value]=\"0\"\n                     [vertical]=\"vertical\"\n                     color=\"primary\">\n          </md-slider>\n        </td>\n      </tr>\n      </tbody>\n\n    </table>\n    <a class=\"cta\" layout-margin (click)=\"restoreDefaultCdr()\">Restore default settings</a>\n\n  </div>\n</div>\n\n<div class=\"white frame margin-top\">\n  <div class=\"title-section\" layout-padding>\n    <h4>ATTACHMENTS PROCESSED WITHOUT CDR</h4>\n  </div>\n\n  <div class=\"content-holder\">\n    <table>\n      <thead>\n      <th></th>\n      <th style=\"width: 35%;\">Allow</th>\n      <th style=\"width: 38%; \">Block</th>\n      </thead>\n      <tbody>\n      <tr>\n        <td layout=\"column\" class=\"table-row\">\n          <p>Videos/Sounds</p>\n          <small>.mp4, .mp3</small>\n        </td>\n        <td colspan=\"3\">\n          <md-slider [(ngModel)]=\"settings.AttachementsWithoutCdr['Video/Sound']\"\n                     [max]=\"1\"\n                     style=\"width: 100%\"\n                     [min]=\"0\"\n                     [step]=\"1\"\n                     [value]=\"0\"\n                     [vertical]=\"vertical\"\n                     color=\"primary\">\n          </md-slider>\n        </td>\n      </tr>\n      <tr>\n        <td layout=\"column\" class=\"table-row\">\n          <p>Applications / Scripts</p>\n          <small>.dmg, .exe</small>\n        </td>\n        <td colspan=\"3\">\n          <md-slider [(ngModel)]=\"settings.AttachementsWithoutCdr['Applications/Scripts']\"\n                     [max]=\"1\"\n                     style=\"width: 100%\"\n                     [min]=\"0\"\n                     [step]=\"1\"\n                     [value]=\"0\"\n                     [vertical]=\"vertical\"\n                     color=\"primary\">\n          </md-slider>\n        </td>\n      </tr>\n      <tr>\n        <td class=\"table-row\">\n          <p>Unrecognized Files</p>\n        </td>\n        <td colspan=\"3\">\n          <md-slider [(ngModel)]=\"settings.AttachementsWithoutCdr['Unrecognized Files']\"\n                     [max]=\"1\"\n                     style=\"width: 100%\"\n                     [min]=\"0\"\n                     [step]=\"1\"\n                     [value]=\"0\"\n                     [vertical]=\"vertical\"\n                     color=\"primary\">\n          </md-slider>\n        </td>\n      </tr>\n      </tbody>\n\n    </table>\n    <a class=\"cta\" layout-margin (click)=\"restoreDefaultNoCdr()\">Restore default settings</a>\n  </div>\n\n</div>\n<div layout=\"row\" layout-align=\"center center\" style=\"margin-top: 3em;\">\n  <button md-raised-button color=\"primary\" (click)=\"saveSettings(settings)\">SAVE</button>\n</div>\n\n\n\n"

/***/ }),

/***/ 947:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\">\n<div id=\"actionCenter\" class=\"white frame margin-top\">\n  <div class=\"title-section\" layout-padding layout=\"row\" layout-align=\"space-between center\" layout-margin>\n    <h4>{{settings.PolicyName}}</h4>\n    <a (click)=\"deletePolicy(settings)\" class=\"cta\">Delete this department</a>\n  </div>\n  <div layout=\"row\" layout-align=\"space-between start\" layout-margin>\n    <tag-input [(ngModel)]='settings.Exceptions' [errorMessages]=\"errorMessages\" [validators]=\"validators\"\n               [maxItems]='100' flex=\"70\" theme='dark'></tag-input>\n    <a class=\"cta\">Show More</a>\n    <button md-button>+Add Exception</button>\n  </div>\n\n</div>\n\n<div id=\"cdr\" class=\"col-sm-12 white frame mb-5\">\n\n  <div class=\"title-section pt-4 pb-4 col-12\">\n    <h4 class=\"bold-dark-gray\">ATTACHMENTS PROCESSED WITH CDR</h4>\n  </div>\n  <div class=\"col-sm-10\">\n\n    <div class=\"col-sm-5 mt-4 mb-4\">\n      <small>CDR (Content Disarm and Reconstruction) means that a secure version of the file is created and the email\n        is received seamlessly to the end user.\n      </small>\n    </div>\n    <div class=\"col-sm-12 pl-0 pt-3 pb-3\">\n      <div class=\"col-sm-8 col-sm-offset-4 mt-3 pl-0\">\n        <div class=\"row\">\n          <div class=\"col-4 text-center\">\n            <h4 class=\"bold-dark-gray mb-3\">Don't Process</h4>\n            <small>Not Recommended</small>\n          </div>\n          <div class=\"col-4 text-center\">\n            <h4 class=\"bold-dark-gray mb-3\">High</h4>\n            <small>Active content NOT removed\n            </small>\n          </div>\n          <div class=\"col-4 text-center\">\n            <h4 class=\"bold-dark-gray mb-3\">Highest</h4>\n            <small>Active content removed</small>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 row mb-5 pr-0\">\n      <div class=\"col-4\">\n        <p class=\"bold-dark-gray\">Documents</p>\n        <small>.doc, .docx, .pdf, .pages\n        </small>\n      </div>\n      <div class=\"col-sm-8 \">\n        <md-slider [(ngModel)]=\"settings.AttachementsProcessedLevels.Documents\"\n                   [max]=\"2\"\n                   style=\"width: 100%\"\n                   [min]=\"0\"\n                   [step]=\"1\"\n                   [value]=\"0\"\n                   [vertical]=\"vertical\"\n                   color=\"accent\">\n        </md-slider>\n      </div>\n    </div>\n    <div class=\"col-sm-12 row mb-5 pr-0\">\n      <div class=\"col-4\">\n        <p class=\"bold-dark-gray\">Spreadsheets</p>\n        <small>.csv, .xls, .xlsx, .gsheet\n        </small>\n      </div>\n      <div class=\"col-sm-8 \">\n        <md-slider [(ngModel)]=\"settings.AttachementsProcessedLevels.Spreadsheets\"\n                   [max]=\"2\"\n                   style=\"width: 100%\"\n                   [min]=\"0\"\n                   [step]=\"1\"\n                   [value]=\"0\"\n                   [vertical]=\"vertical\"\n                   color=\"accent\">\n        </md-slider>\n      </div>\n    </div>\n    <div class=\"col-sm-12 row mb-5 pr-0\">\n      <div class=\"col-4\">\n        <p class=\"bold-dark-gray\">Images</p>\n        <small>.png, .jpeg, .jpg, .gif\n        </small>\n      </div>\n      <div class=\"col-sm-8 \">\n        <md-slider [(ngModel)]=\"settings.AttachementsProcessedLevels.Images\"\n                   [max]=\"2\"\n                   style=\"width: 100%\"\n                   [min]=\"0\"\n                   [step]=\"1\"\n                   [value]=\"0\"\n                   [vertical]=\"vertical\"\n                   color=\"accent\">\n        </md-slider>\n      </div>\n    </div>\n    <div class=\"col-sm-12 row mb-5 pr-0\">\n      <div class=\"col-4\">\n        <p class=\"bold-dark-gray\">Presentations</p>\n        <small>.ppt, .pptx, .keynote, .gslides\n        </small>\n      </div>\n      <div class=\"col-sm-8 \">\n        <md-slider [(ngModel)]=\"settings.AttachementsProcessedLevels.Presentations\"\n                   [max]=\"2\"\n                   style=\"width: 100%\"\n                   [min]=\"0\"\n                   [step]=\"1\"\n                   [value]=\"0\"\n                   [vertical]=\"vertical\"\n                   color=\"accent\">\n        </md-slider>\n      </div>\n    </div>\n\n  </div>\n  <button class=\"btn btn-link mb-4 mt-4\" (click)=\"restoreDefaultCdr()\">Restore Default Settings</button>\n</div>\n\n<div id=\"noCdr\" class=\"col-sm-12 white frame mb-5\">\n\n  <div class=\"title-section pt-4 pb-4 col-12\">\n    <h4 class=\"bold-dark-gray\">ATTACHMENTS PROCESSED WITHOUT CDR</h4>\n  </div>\n  <div class=\"col-sm-10 mt-4\">\n\n    <div class=\"col-sm-12 pl-0 pt-3 pb-3\">\n      <div class=\"col-sm-8 col-sm-offset-4 mt-3 pl-0\">\n        <div class=\"row\">\n          <div class=\"col-6 text-left\">\n            <h4 class=\"bold-dark-gray mb-3\">Block</h4>\n          </div>\n          <div class=\"col-6 text-right\">\n            <h4 class=\"bold-dark-gray mb-3\">Allow</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 row mb-5 pr-0\">\n      <div class=\"col-4\">\n        <p class=\"bold-dark-gray\">Videos/Sound</p>\n        <small>.mp4, mp3\n        </small>\n      </div>\n      <div class=\"col-sm-8 \">\n        <md-slider [(ngModel)]=\"settings.AttachementsWithoutCdr['Video/Sound']\"\n                   [max]=\"1\"\n                   style=\"width: 100%\"\n                   [min]=\"0\"\n                   [step]=\"1\"\n                   [value]=\"0\"\n                   [vertical]=\"vertical\"\n                   color=\"accent\">\n        </md-slider>\n      </div>\n    </div>\n    <div class=\"col-sm-12 row mb-5 pr-0\">\n      <div class=\"col-4\">\n        <p class=\"bold-dark-gray\">Applications/Scripts</p>\n        <small>.exe, .dmg\n        </small>\n      </div>\n      <div class=\"col-sm-8 \">\n        <md-slider [(ngModel)]=\"settings.AttachementsWithoutCdr['Applications/Scripts']\"\n                   [max]=\"1\"\n                   style=\"width: 100%\"\n                   [min]=\"0\"\n                   [step]=\"1\"\n                   [value]=\"0\"\n                   [vertical]=\"vertical\"\n                   color=\"accent\">\n        </md-slider>\n      </div>\n    </div>\n    <div class=\"col-sm-12 row mb-5 pr-0\">\n      <div class=\"col-4\">\n        <p class=\"bold-dark-gray\">Unrecognized Files</p>\n      </div>\n      <div class=\"col-sm-8 \">\n        <md-slider [(ngModel)]=\"settings.AttachementsWithoutCdr['Unrecognized Files']\"\n                   [max]=\"1\"\n                   style=\"width: 100%\"\n                   [min]=\"0\"\n                   [step]=\"1\"\n                   [value]=\"0\"\n                   [vertical]=\"vertical\"\n                   color=\"accent\">\n        </md-slider>\n      </div>\n    </div>\n\n\n  </div>\n  <button class=\"btn btn-link mt-4 mb-4\" (click)=\"restoreDefaultNoCdr()\">Restore Default Settings</button>\n</div>\n\n<div id=\"specialAttachments\" class=\"col-sm-12 white frame mb-5\">\n\n  <div class=\"title-section pt-4 pb-4 col-12\">\n    <h4 class=\"bold-dark-gray\">SPECIAL ATTACHMENTS</h4>\n  </div>\n  <div class=\"col-sm-10 mt-4\">\n\n    <div class=\"col-sm-12 pl-0 pt-3 pb-3\">\n      <div class=\"col-sm-8 col-sm-offset-4 mt-3 pl-0\">\n        <div class=\"row\">\n          <div class=\"col-6 text-left\">\n            <h4 class=\"bold-dark-gray mb-3\">Block</h4>\n          </div>\n          <div class=\"col-6 text-right\">\n            <h4 class=\"bold-dark-gray mb-3\">Allow</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 row mb-5 pr-0\">\n      <div class=\"col-4\">\n        <p class=\"bold-dark-gray\">Password Protected</p>\n        <small>A secure version of an attachment can't be made when it is password protected\n        </small>\n      </div>\n      <div class=\"col-sm-8 \">\n        <md-slider [(ngModel)]=\"other\"\n                   [max]=\"1\"\n                   style=\"width: 100%\"\n                   [min]=\"0\"\n                   [step]=\"1\"\n                   [value]=\"0\"\n                   [vertical]=\"vertical\"\n                   color=\"accent\">\n        </md-slider>\n      </div>\n    </div>\n    <div class=\"col-sm-12 row mb-5 pr-0\">\n      <div class=\"col-4\">\n        <p class=\"bold-dark-gray\">Signed Documents</p>\n        <small>A secure version can be made, the the signature can't remain true.\n        </small>\n      </div>\n      <div class=\"col-sm-8 \">\n        <md-slider [(ngModel)]=\"other2\"\n                   [max]=\"1\"\n                   style=\"width: 100%\"\n                   [min]=\"0\"\n                   [step]=\"1\"\n                   [value]=\"0\"\n                   [vertical]=\"vertical\"\n                   color=\"accent\">\n        </md-slider>\n      </div>\n    </div>\n\n  </div>\n  <button class=\"btn btn-link mt-4 mb-4\" (click)=\"restoreDefaultSpecial()\">Restore Default Settings</button>\n</div>\n<div layout=\"row\" layout-align=\"center center\" class=\"mt-5 mb-5\">\n  <button class=\"btn btn-action\" (click)=\"saveSettings(settings)\">APPLY</button>\n</div>\n\n</div>\n\n<!--\n\n<div layout=\"row\" layout-align=\"center center\" style=\"margin-top: 3em;\">\n  <button md-raised-button color=\"primary\" (click)=\"saveSettings(settings)\">APPLY</button>\n</div>\n\n-->\n\n\n\n"

/***/ }),

/***/ 948:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-2\" flex=\"85\" flex-gt-lg=\"85\" fxFlex.lt-md=\"100\" layout=\"column\">\n  <general-settings [generalSettings]=\"mainPolicySettings\"></general-settings>\n  <general-with-cdr\n    [cdrSettings]=\"mainPolicySettings.AttachementsProcessedLevels\"></general-with-cdr>\n  <general-without-cdr [noCdrSettings]=\"mainPolicySettings.AttachementsWithoutCdr\"></general-without-cdr>\n  <app-special-attachments\n    [specialAttachmentSettings]=\"mainPolicySettings.SpecialAttachments\"></app-special-attachments>\n  <div layout=\"row\" layout-margin layout-align=\"center center\" class=\"mt-5\">\n    <button class=\"btn btn-action-yellow-big hvr-glow\"  layout-padding (click)=\"saveSettings()\">APPLY</button>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ 949:
/***/ (function(module, exports) {

module.exports = "<div class=\"white frame\">\n  <div class=\"title-section\" layout-padding>\n    <h4 class=\"sob-title\">GENERAL</h4>\n  </div>\n  <div class=\"content-holder\">\n    <div layout=\"row\" class=\"inner-section\">\n      <div flex=\"40\">\n        <h4 class=\"item\">Antivirus</h4>\n        <small>Anti-malware & anti-virus solutions detecting \"known threats\".</small>\n      </div>\n      <md-slide-toggle flex=\"30\" [(ngModel)]=\"generalSettings.UseAntiviruses\" aria-label=\"antivrus\"\n                       color=\"accent\"></md-slide-toggle>\n\n    </div>\n    <div layout=\"row\" class=\"inner-section\">\n      <div flex=\"40\">\n        <h4 class=\"item\">Safe Links</h4>\n        <small> this includes links in the body of an email and in any documents attached.</small>\n      </div>\n      <div layout=\"row\" flex>\n        <div layout=\"column\">\n          <md-slide-toggle  [(ngModel)]=\"generalSettings.HandleLinks\" aria-label=\"antivrus\"\n                            color=\"accent\"></md-slide-toggle>\n\n          <md-radio-group *ngIf=\" generalSettings.HandleLinks\" [(ngModel)]=\"generalSettings.SelectedSafeLinksOperation\"\n                          class=\"operation-actions\" layout=\"column\">\n\n            <md-radio-button value=\"1\" color=\"primary\"><span\n              [ngClass]=\"{'bold':  generalSettings.SelectedSafeLinksOperation =='1' }\">Fix Links </span>to be what it is\n              supposed to be.\n            </md-radio-button>\n            <md-radio-button value=\"2\" color=\"primary\"><span\n              [ngClass]=\"{'bold':  generalSettings.SelectedSafeLinksOperation =='2' }\">Test links </span> via reputation\n              engine i.e google, mcafee\n            </md-radio-button>\n            <md-radio-button value=\"3\" color=\"primary\"><span\n              [ngClass]=\"{'bold':  generalSettings.SelectedSafeLinksOperation =='3' }\">Kill links </span>so that only\n              the\n              text is displayed\n            </md-radio-button>\n          </md-radio-group>\n\n        </div>\n        <small *ngIf=\"! generalSettings.HandleLinks\">The safe links is turned off. Since it's been turned off, {{\n          numberOfMaliciousLinks}}\n          malicious links were detected.We highly recommend turning it on for your safety.\n        </small>\n      </div>\n    </div>\n    <a class=\"cta\" (click)=\"restoreDefaultGeneralSettings()\">Restore default settings</a>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 95:
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
        template: __webpack_require__(940),
        styles: [__webpack_require__(399)]
    }),
    __metadata("design:paramtypes", [])
], EmailComponent);

//# sourceMappingURL=email.component.js.map

/***/ }),

/***/ 950:
/***/ (function(module, exports) {

module.exports = "<div class=\"white frame margin-top\">\n  <div class=\"title-section\" layout-padding>\n    <h4 class=\"sob-title\">SPECIAL ATTACHMENTS</h4>\n  </div>\n\n  <div class=\"content-holder\">\n    <table>\n      <thead>\n      <th></th>\n      <th style=\"width: 35%;\">Block</th>\n      <th style=\"width: 38%; \" class=\"text-right\">Allow</th>\n      </thead>\n      <tbody>\n\n      <tr>\n        <td layout=\"column\" class=\"sob-table-security-td\">\n          <p class=\"sob-category-title\">Password Protected</p>\n          <small>A secure version of  an attachment can't be made when it is password protected.</small>\n        </td>\n        <td colspan=\"3\">\n          <md-slider [(ngModel)]=\"specialAttachmentSettings['Password Protected']\"\n                     [max]=\"1\"\n                     style=\"width: 100%\"\n                     [min]=\"0\"\n                     [step]=\"1\"\n                     [value]=\"0\"\n                     [vertical]=\"vertical\"\n                     color=\"accent\">\n          </md-slider>\n        </td>\n      </tr>\n      <tr>\n        <td class=\"sob-table-security-td\">\n          <p class=\"sob-category-title\">Unrecognized Files</p>\n        </td>\n        <td colspan=\"3\">\n          <md-slider [(ngModel)]=\"specialAttachmentSettings['Signed Documents']\"\n                     [max]=\"1\"\n                     style=\"width: 100%\"\n                     [min]=\"0\"\n                     [step]=\"1\"\n                     [value]=\"0\"\n                     [vertical]=\"vertical\"\n                     color=\"accent\">\n          </md-slider>\n        </td>\n      </tr>\n      </tbody>\n\n    </table>\n    <a class=\"cta\" layout-margin (click)=\"restoreDefaultSpecial()\">Restore default settings</a>\n  </div>\n\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ 951:
/***/ (function(module, exports) {

module.exports = "<div class=\"white frame margin-top\">\n  <div class=\"title-section\" layout-padding>\n    <h4 class=\"sob-title\">ATTACHMENTS PROCESSED WITH CDR</h4>\n  </div>\n\n  <div class=\"content-holder\">\n\n    <table>\n      <thead>\n      <th></th>\n      <th class=\"text-center\">\n        Don't Process<br>\n        <small>Not recommended</small>\n      </th>\n      <th class=\"text-center\">\n        High<br>\n        <small>Active content NOT removed</small>\n      </th>\n      <th class=\"text-center\">Highest<br>\n        <small>Active content removed</small>\n      </th>\n      </thead>\n      <tbody>\n      <tr>\n        <td layout=\"column\" class=\"sob-table-security-td\">\n          <p class=\"sob-category-title\">Documents</p>\n          <small>.doc, .docx, .pdf, .pages, .gdoc</small>\n        </td>\n        <td colspan=\"3\">\n          <md-slider [(ngModel)]=\"cdrSettings.Documents\"\n                     [max]=\"2\"\n                     style=\"width: 100%\"\n                     [min]=\"0\"\n                     [step]=\"1\"\n                     [value]=\"0\"\n                     [vertical]=\"vertical\"\n                     color=\"accent\">\n          </md-slider>\n        </td>\n      </tr>\n      <tr>\n        <td layout=\"column\" class=\"sob-table-security-td\">\n          <p class=\"sob-category-title\">Spreadsheets</p>\n          <small>.csv, .xls, .xlsx, .gsheet</small>\n        </td>\n        <td colspan=\"3\">\n          <md-slider [(ngModel)]=\"cdrSettings.Spreadsheets\"\n                     [max]=\"2\"\n                     style=\"width: 100%\"\n                     [min]=\"0\"\n                     [step]=\"1\"\n                     [value]=\"0\"\n                     [vertical]=\"vertical\"\n                     color=\"accent\">\n          </md-slider>\n        </td>\n      </tr>\n      <tr>\n        <td layout=\"column\" class=\"sob-table-security-td\">\n          <p class=\"sob-category-title\">Images</p>\n          <small>.png, .jpg, .jpeg, .gif</small>\n        </td>\n        <td colspan=\"3\">\n          <md-slider [(ngModel)]=\"cdrSettings.Images\"\n                     [max]=\"2\"\n                     style=\"width: 100%\"\n                     [min]=\"0\"\n                     [step]=\"1\"\n                     [value]=\"0\"\n                     [vertical]=\"vertical\"\n                     color=\"accent\">\n          </md-slider>\n        </td>\n      </tr>\n      <tr>\n        <td layout=\"column\" class=\"sob-table-security-td\">\n          <p class=\"sob-category-title\">Presentations</p>\n          <small>.ppt, .pptx, .keynote, .gslides\n          </small>\n        </td>\n        <td colspan=\"3\">\n          <md-slider [(ngModel)]=\"cdrSettings.Presentations\"\n                     [max]=\"2\"\n                     style=\"width: 100%\"\n                     [min]=\"0\"\n                     [step]=\"1\"\n                     [value]=\"0\"\n                     [vertical]=\"vertical\"\n                     color=\"accent\">\n          </md-slider>\n        </td>\n      </tr>\n      </tbody>\n\n    </table>\n    <a class=\"cta\" layout-margin (click)=\"restoreDefaultCdr()\" >Restore default settings</a>\n\n  </div>\n</div>\n\n\n<style>\n\n  .disabled-action{\n    color: #CCCCCC !important;\n    pointer-events: none;\n  }\n</style>\n"

/***/ }),

/***/ 952:
/***/ (function(module, exports) {

module.exports = "<div class=\"white frame margin-top\">\n  <div class=\"title-section\" layout-padding>\n    <h4 class=\"sob-title\">ATTACHMENTS PROCESSED WITHOUT CDR</h4>\n  </div>\n\n  <div class=\"content-holder\">\n    <table>\n      <thead>\n      <th></th>\n      <th style=\"width: 35%;\">Block</th>\n      <th style=\"width: 38%; \" class=\"text-right\">Allow</th>\n      </thead>\n      <tbody>\n      <tr>\n        <td layout=\"column\" class=\"sob-table-security-td\">\n          <p class=\"sob-category-title\">Videos/Sounds</p>\n          <small>.mp4, .mp3</small>\n        </td>\n        <td colspan=\"3\">\n          <md-slider [(ngModel)]=\"noCdrSettings['Video/Sound']\"\n                     [max]=\"1\"\n                     style=\"width: 100%\"\n                     [min]=\"0\"\n                     [step]=\"1\"\n                     [value]=\"0\"\n                     [vertical]=\"vertical\"\n                     color=\"accent\">\n          </md-slider>\n        </td>\n      </tr>\n      <tr>\n        <td layout=\"column\" class=\"sob-table-security-td\">\n          <p class=\"sob-category-title\">Applications / Scripts</p>\n          <small>.dmg, .exe</small>\n        </td>\n        <td colspan=\"3\">\n          <md-slider [(ngModel)]=\"noCdrSettings['Applications/Scripts']\"\n                     [max]=\"1\"\n                     style=\"width: 100%\"\n                     [min]=\"0\"\n                     [step]=\"1\"\n                     [value]=\"0\"\n                     [vertical]=\"vertical\"\n                     color=\"accent\">\n          </md-slider>\n        </td>\n      </tr>\n      <tr>\n        <td class=\"sob-table-security-td\">\n          <p class=\"sob-category-title\">Unrecognized Files</p>\n        </td>\n        <td colspan=\"3\">\n          <md-slider [(ngModel)]=\"noCdrSettings['Unrecognized Files']\"\n                     [max]=\"1\"\n                     style=\"width: 100%\"\n                     [min]=\"0\"\n                     [step]=\"1\"\n                     [value]=\"0\"\n                     [vertical]=\"vertical\"\n                     color=\"accent\">\n          </md-slider>\n        </td>\n      </tr>\n      </tbody>\n\n    </table>\n    <a class=\"cta\" layout-margin (click)=\"restoreDefaultNoCdr()\">Restore default settings</a>\n  </div>\n\n</div>\n\n\n<style>\n  .table-row {\n    margin-right: 1em;\n  }\n\n  .disabled-action {\n    color: #CCCCCC !important;\n    pointer-events: none;\n  }\n</style>\n"

/***/ }),

/***/ 953:
/***/ (function(module, exports) {

module.exports = "<div id=\"settings-container\">\n\n  <small>The Company policy is applied to all email addresses under the domain name.</small>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ 954:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-end mb-4\">\n    <button class=\"btn btn-circle\" md-dialog-close>x</button>\n  </div>\n  <div *ngIf=\"changePassword\">\n    <div class=\"text-center m-3\">\n      <h4 class=\"mb-3 bold \">Change Password</h4>\n      <button class=\"btn btn-link\" (click)=\"switchToForgotPassword()\">Forgot Password ?</button>\n    </div>\n    <div class=\"mb-4 mt-2\" layout=\"row\" layout-align=\"space-between center\" layout-margin>\n      <p flex=\"35\" class=\"reset-field ml-0\">Confirm New Password</p>\n      <input flex=\"50\" class=\"sob-input\" required [(ngModel)]=\"currentPassword\">\n      <div flex>\n        <i class=\"fa fa-check-circle-o fa-2x green-icon\" aria-hidden=\"true\" *ngIf=\"currentPassword\"></i>\n      </div>\n    </div>\n    <div class=\"mb-4\" layout=\"row\" layout-align=\"space-between center\" layout-margin>\n      <p flex=\"35\" class=\"reset-field ml-0\">New Password</p>\n      <input flex=\"50\" class=\"sob-input\" required [(ngModel)]=\"firstPassword\">\n      <div flex>\n        <i class=\"fa fa-check-circle-o fa-2x green-icon\" aria-hidden=\"true\" *ngIf=\"firstPassword\"></i>\n      </div>\n    </div>\n    <div class=\"mb-4\" layout=\"row\" layout-align=\"space-between center\" layout-margin>\n      <p flex=\"35\" class=\"reset-field ml-0\">Confirm New Password</p>\n      <input flex=\"50\" class=\"sob-input\" required [(ngModel)]=\"secondPassword\">\n      <div flex>\n        <i class=\"fa fa-check-circle-o fa-2x green-icon\" aria-hidden=\"true\" *ngIf=\"secondPassword\"></i>\n      </div>\n    </div>\n    <div class=\"row justify-content-center\">\n      <button type=\"button\" class=\"btn btn-action-yellow-big\" md-dialog-close>CHANGE\n      </button>\n    </div>\n  </div>\n  <div *ngIf=\"forgotPassword\">\n    <div class=\"col text-center\">\n      <h4 class=\"mb-3 bold\">Forgot Password ?</h4>\n      <p class=\"mb-3\">We'll send you a link to reset your password.</p>\n      <button type=\"button\" class=\"btn btn-action-yellow-big\" md-dialog-close>RESET PASSWORD\n      </button>\n    </div>\n  </div>\n</div>\n\n\n<style>\n  .green-icon {\n    color: #72B895 !important;\n  }\n\n  .reset-field {\n    margin-bottom: 0px !important;\n    color: #666666 !important;\n    font-weight: 600 !important;\n  }\n</style>\n"

/***/ }),

/***/ 955:
/***/ (function(module, exports) {

module.exports = "<!-- nesting level: 2 entry inside the app -->\n\n<md-sidenav-container style=\"height: 100vh\">\n  <md-sidenav #sidenav opened=\"true\" mode=\"side\" style=\"width: auto !important\">\n    <ul style=\"height: 10%\" class=\"mt-5\">\n      <li mdTooltipPosition=\"right\" class=\"text-center mt-5 pt-3 pb-3 mb-3 noHoverEffect\">\n        <md-icon class=\"center-icon\" svgIcon=\"resecLogo\"></md-icon>\n      </li>\n    </ul>\n    <nav>\n      <ul>\n        <li mdTooltip=\"Dashboard\" mdTooltipPosition=\"right\" class=\"text-center pt-3 pb-3 mb-3\"\n            routerLink=\"/user/dashboard\" routerLinkActive=\"active\">\n          <md-icon class=\"center-icon\" svgIcon=\"dashboard\"></md-icon>\n        </li>\n        <li mdTooltip=\"Mails\" mdTooltipPosition=\"right\" class=\"text-center pt-3 pb-3 mb-3\" routerLink=\"/user/emails\"\n            routerLinkActive=\"active\">\n          <md-icon class=\"center-icon\" svgIcon=\"mails\"></md-icon>\n        </li>\n        <li mdTooltip=\"Security\" mdTooltipPosition=\"right\" class=\"text-center pt-3 pb-3 mb-3\"\n            routerLink=\"/user/security\" routerLinkActive=\"active\">\n          <md-icon class=\"center-icon\" svgIcon=\"security\"></md-icon>\n        </li>\n        <li mdTooltip=\"Account Settings\" mdTooltipPosition=\"right\" class=\"text-center pt-3 pb-3 mb-3\"\n            routerLink=\"/user/account\" routerLinkActive=\"active\">\n          <md-icon class=\"center-icon\" svgIcon=\"settings\"></md-icon>\n        </li>\n      </ul>\n\n    </nav>\n  </md-sidenav>\n  <div layout-fill style=\"background-color: #F7F8F8\">\n\n    <nav class=\"navbar sticky-top bg-white-shadow\">\n      <div class=\"container-fluid row\">\n        <div class=\"nav navbar-nav mr-auto  justify-content-center\">\n          <!-- nav here -->\n          <div layout=\"row\" *ngIf=\"testRoute('account')\">\n            <a class=\"sob-page-link\" routerLink=\"account/notifications\" routerLinkActive=\"page-active\">Notifications</a>\n            <a class=\"sob-page-link\" routerLink=\"account/account\" routerLinkActive=\"page-active\">Account</a>\n            <a class=\"sob-page-link\" routerLink=\"account/billing\" routerLinkActive=\"page-active\">Billing</a>\n          </div>\n          <div layout=\"row\" *ngIf=\"testRoute('emails')\">\n            <a class=\"sob-page-link\" routerLink=\"emails/search\" routerLinkActive=\"page-active\">Search</a>\n            <a class=\"sob-page-link\" routerLink=\"emails/browse\" routerLinkActive=\"page-active\">Browse</a>\n          </div>\n          <div layout=\"row\" *ngIf=\"testRoute('security')\">\n            <a class=\"sob-page-link\" routerLink=\"security/general\" routerLinkActive=\"page-active\">General</a>\n            <a class=\"sob-page-link\" routerLink=\"security/exceptions\" routerLinkActive=\"page-active\">Exception</a>\n          </div>\n        </div>\n        <div class=\"nav navbar-nav ml-auto  justify-content-center\">\n          <div class=\"dropdown\">\n            <button class=\"btn  dropdown-toggle\"\n                    type=\"button\" id=\"dropdownMenu1\"\n                    data-toggle=\"dropdown\"\n                    aria-haspopup=\"true\" aria-expanded=\"true\">\n              {{username}}\n            </button>\n            <ul class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenu1\">\n              <li><a class=\"sob-menu-item\" (click)=\"openChangePassword()\">Change Password</a></li>\n              <li role=\"separator\" class=\"divider\"></li>\n              <li><a class=\"sob-menu-item\" (click)=\"logout()\">Logout</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </nav>\n    <div style=\"margin: 2em; \">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</md-sidenav-container>\n\n\n"

/***/ })

},[1200]);
//# sourceMappingURL=main.bundle.js.map