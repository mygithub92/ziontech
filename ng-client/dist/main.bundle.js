webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_list_product_list_component__ = __webpack_require__("./src/app/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__grower_add_product_add_product_component__ = __webpack_require__("./src/app/grower/add-product/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_main_component__ = __webpack_require__("./src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mat_components_mat_components_module__ = __webpack_require__("./src/app/mat-components/mat-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__qr_dialog_qr_dialog_component__ = __webpack_require__("./src/app/qr-dialog/qr-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_hyperledger_service__ = __webpack_require__("./src/app/services/hyperledger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes__ = __webpack_require__("./src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__bottler_bottler_product_bottler_product_component__ = __webpack_require__("./src/app/bottler/bottler-product/bottler-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__winery_winery_product_winery_product_component__ = __webpack_require__("./src/app/winery/winery-product/winery-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_jwt_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_jwt_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_jwt_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__auth_guard_service__ = __webpack_require__("./src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guard_services_admin_auth_guard_service__ = __webpack_require__("./src/app/guard-services/admin-auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__guard_services_grower_auth_guard_service__ = __webpack_require__("./src/app/guard-services/grower-auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__guard_services_winery_auth_guard_service__ = __webpack_require__("./src/app/guard-services/winery-auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guard_services_bottler_auth_guard_service__ = __webpack_require__("./src/app/guard-services/bottler-auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__no_access_no_access_component__ = __webpack_require__("./src/app/no-access/no-access.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__product_list_product_list_component__["a" /* ProductListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__grower_add_product_add_product_component__["a" /* AddProductComponent */],
                __WEBPACK_IMPORTED_MODULE_8__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_11__qr_dialog_qr_dialog_component__["a" /* QrDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_14__bottler_bottler_product_bottler_product_component__["a" /* BottlerProductComponent */],
                __WEBPACK_IMPORTED_MODULE_15__winery_winery_product_winery_product_component__["a" /* WineryProductComponent */],
                __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_24__no_access_no_access_component__["a" /* NoAccessComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__qr_dialog_qr_dialog_component__["a" /* QrDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__routes__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_25__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_10__mat_components_mat_components_module__["a" /* MatComponentsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__services_hyperledger_service__["a" /* HyperledgerService */],
                // { provide: ErrorHandler, useClass: AppErrorHandler },
                __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_19__auth_guard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_20__guard_services_admin_auth_guard_service__["a" /* AdminAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_21__guard_services_grower_auth_guard_service__["a" /* GrowerAuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_22__guard_services_winery_auth_guard_service__["a" /* WineryAuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_23__guard_services_bottler_auth_guard_service__["a" /* BottlerAuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_17_angular2_jwt_angular2_jwt__["AuthHttp"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/bottler/bottler-product/bottler-product.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-top: 20px;\n  }\n  \n  .example-container > * {\n    width: 80%;\n  }\n  \n  .example-container form {\n    margin-bottom: 20px;\n  }\n  \n  .example-container form > * {\n    margin: 5px 0;\n  }\n  \n  .example-container .mat-radio-button {\n    margin: 0 5px;\n  }\n    "

/***/ }),

/***/ "./src/app/bottler/bottler-product/bottler-product.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\n  <div class=\"example-container\">\n    <mat-grid-list cols=\"2\" rowHeight=\"70px\" gutterSize=\"20px\">\n      <mat-grid-tile>\n        <mat-form-field>\n          <mat-label>Brand</mat-label>\n          <input matInput placeholder=\"Brand\" formControlName=\"brand\">\n          <mat-error *ngIf=\"form.get('brand').invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n      <mat-grid-tile>\n        <mat-form-field>\n          <mat-label>Label</mat-label>\n          <input matInput placeholder=\"Label\" formControlName=\"label\">\n          <mat-error *ngIf=\"form.get('label').invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n      <mat-grid-tile>\n        <mat-form-field>\n          <mat-label>Cork Cap</mat-label>\n          <input matInput placeholder=\"Cork Cap\" formControlName=\"corkCap\">\n          <mat-error *ngIf=\"form.get('corkCap').invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n      <mat-grid-tile>\n        <mat-form-field>\n          <mat-label>\n            <mat-icon>domain</mat-icon>\n            <i> Seller </i>\n          </mat-label>\n          <mat-select formControlName=\"seller\" required>\n            <mat-option>-- None --</mat-option>\n            <mat-option *ngFor=\"let seller of sellers\" [value]=\"seller\">{{ seller }}</mat-option>\n          </mat-select>\n          <mat-error *ngIf=\"form.get('seller').invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n      <mat-grid-tile>\n        <mat-form-field>\n          <mat-label>\n            <mat-icon>domain</mat-icon>\n            <i> Status </i>\n          </mat-label>\n          <mat-select formControlName=\"status\" required>\n            <mat-option>-- None --</mat-option>\n            <mat-option *ngFor=\"let status of statuses\" [value]=\"status\">{{ status }}</mat-option>\n          </mat-select>\n          <mat-error *ngIf=\"form.get('status').invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </div>\n  <div class=\"button-row\">\n    <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n    <button mat-raised-button color=\"warn\" [routerLink]=\"['/home/products','bottler']\">Cancel</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/bottler/bottler-product/bottler-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BottlerProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_finally__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_hyperledger_service__ = __webpack_require__("./src/app/services/hyperledger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BottlerProductComponent = /** @class */ (function () {
    function BottlerProductComponent(service, router, route, fb) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.route = route;
        this.sellers = ['Liquid Shop', 'BWS'];
        this.statuses = ['Labeled', 'Not Labeled'];
        this.route.params.subscribe(function (pamams) { return _this.selectedId = pamams.id; });
        this.form = fb.group({
            brand: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            label: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            corkCap: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            seller: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            status: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    }
    BottlerProductComponent.prototype.ngOnInit = function () {
    };
    BottlerProductComponent.prototype.onSubmit = function (data) {
        var _this = this;
        this.service.bottlerUpdate(__assign({ key: this.selectedId }, data))
            .finally(function () { return _this.router.navigate(['/home/products', 'bottler']); })
            .subscribe(function (res) { return console.log(res); });
    };
    BottlerProductComponent.prototype.getErrorMessage = function () {
        return 'You must enter a value';
    };
    BottlerProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bottler-product',
            template: __webpack_require__("./src/app/bottler/bottler-product/bottler-product.component.html"),
            styles: [__webpack_require__("./src/app/bottler/bottler-product/bottler-product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_hyperledger_service__["a" /* HyperledgerService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], BottlerProductComponent);
    return BottlerProductComponent;
}());



/***/ }),

/***/ "./src/app/common/app-error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppError; });
var AppError = /** @class */ (function () {
    function AppError(originalError) {
    }
    return AppError;
}());



/***/ }),

/***/ "./src/app/common/bad-input.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadInput; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_error__ = __webpack_require__("./src/app/common/app-error.ts");
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

var BadInput = /** @class */ (function (_super) {
    __extends(BadInput, _super);
    function BadInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BadInput;
}(__WEBPACK_IMPORTED_MODULE_0__app_error__["a" /* AppError */]));



/***/ }),

/***/ "./src/app/common/not-found-error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_error__ = __webpack_require__("./src/app/common/app-error.ts");
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

var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotFoundError;
}(__WEBPACK_IMPORTED_MODULE_0__app_error__["a" /* AppError */]));



/***/ }),

/***/ "./src/app/grower/add-product/add-product.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-top: 20px;\n}\n\n.example-container > * {\n  width: 80%;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 5px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 5px;\n}\n  "

/***/ }),

/***/ "./src/app/grower/add-product/add-product.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\n  <div class=\"example-container\">\n    <mat-grid-list cols=\"2\" rowHeight=\"70px\" gutterSize=\"20px\">\n      <mat-grid-tile>\n        <mat-form-field>\n          <mat-label>Key</mat-label>\n          <input matInput placeholder=\"Key\" formControlName=\"id\">\n          <mat-error *ngIf=\"form.get('id').invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n      <mat-grid-tile>\n        <mat-form-field>\n          <mat-label>\n            <mat-icon>domain</mat-icon>\n            <i> Company name </i>\n          </mat-label>\n          <mat-select formControlName=\"companyName\" required>\n            <mat-option>-- None --</mat-option>\n            <mat-option *ngFor=\"let company of companies\" [value]=\"company\">{{ company }}</mat-option>\n          </mat-select>\n          <mat-error *ngIf=\"form.get('companyName').invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n      <mat-grid-tile>\n        <mat-form-field>\n          <mat-label>Vineyard</mat-label>\n          <input matInput placeholder=\"Vineyard\" formControlName=\"vineyard\">\n          <mat-error *ngIf=\"form.get('vineyard').invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n      <mat-grid-tile>\n        <mat-form-field>\n          <mat-label>Block</mat-label>\n          <input matInput placeholder=\"Block\" formControlName=\"block\">\n          <mat-error *ngIf=\"form.get('block').invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n      <mat-grid-tile>\n        <mat-form-field>\n          <mat-label>Row range</mat-label>\n          <input matInput placeholder=\"Row range\" formControlName=\"rowRange\">\n          <mat-error *ngIf=\"form.get('rowRange').invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n      <mat-grid-tile>\n        <mat-form-field>\n          <mat-label>Variety</mat-label>\n          <input matInput placeholder=\"Variety\" formControlName=\"variety\">\n          <mat-error *ngIf=\"form.get('variety').invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n      <mat-grid-tile>\n        <mat-form-field>\n          <mat-label>Vintage</mat-label>\n          <input matInput placeholder=\"Vintage\" formControlName=\"vintage\">\n          <mat-error *ngIf=\"form.get('vintage').invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n      <mat-grid-tile>\n        <mat-form-field>\n          <mat-label>Date delivered</mat-label>\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" formControlName=\"dateDelivered\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n          <mat-error *ngIf=\"form.get('dateDelivered').invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n      <mat-grid-tile>\n        <mat-form-field>\n          <mat-label>Winery</mat-label>\n          <input matInput placeholder=\"Winery\" formControlName=\"vinery\">\n          <mat-error *ngIf=\"form.get('vinery').invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n      <mat-grid-tile>\n        <mat-form-field>\n          <mat-label>Estimated weight</mat-label>\n          <input matInput placeholder=\"Estimated weight\" formControlName=\"estimatedWeight\">\n          <mat-error *ngIf=\"form.get('estimatedWeight').invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </div>\n  <div class=\"button-row\">\n    <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n    <button mat-raised-button color=\"warn\" [routerLink]=\"['/home/products','grower']\">Cancel</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/grower/add-product/add-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hyperledger_service__ = __webpack_require__("./src/app/services/hyperledger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/finally.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(service, router, fb) {
        this.service = service;
        this.router = router;
        this.companies = ['Penley', 'Hoggies Estate'];
        this.form = fb.group({
            id: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            companyName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            region: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            vineyard: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            block: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            rowRange: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            variety: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            vintage: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            dateDelivered: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            vinery: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            estimatedWeight: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    }
    AddProductComponent.prototype.onSubmit = function (data) {
        var _this = this;
        this.service.addProduct(data)
            .finally(function () { return _this.router.navigate(['/home/products', 'grower']); })
            .subscribe(function (res) { return console.log(res); });
    };
    AddProductComponent.prototype.getErrorMessage = function () {
        return 'You must enter a value';
    };
    AddProductComponent.prototype.ngOnInit = function () {
    };
    AddProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__("./src/app/grower/add-product/add-product.component.html"),
            styles: [__webpack_require__("./src/app/grower/add-product/add-product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_hyperledger_service__["a" /* HyperledgerService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/guard-services/admin-auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard_service__ = __webpack_require__("./src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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


var AdminAuthGuard = /** @class */ (function (_super) {
    __extends(AdminAuthGuard, _super);
    function AdminAuthGuard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdminAuthGuard.prototype.canActivate = function () {
        var isAuthenticated = _super.prototype.canActivate.call(this);
        if (!isAuthenticated) {
            return false;
        }
        if (this.authService.currentUser.roles && this.authService.currentUser.roles.includes('admin')) {
            return true;
        }
        this.router.navigate(['/no-access']);
        return false;
    };
    AdminAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], AdminAuthGuard);
    return AdminAuthGuard;
}(__WEBPACK_IMPORTED_MODULE_0__auth_guard_service__["a" /* AuthGuard */]));



/***/ }),

/***/ "./src/app/guard-services/bottler-auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BottlerAuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_guard_service__ = __webpack_require__("./src/app/auth-guard.service.ts");
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


var BottlerAuthGuardService = /** @class */ (function (_super) {
    __extends(BottlerAuthGuardService, _super);
    function BottlerAuthGuardService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BottlerAuthGuardService.prototype.canActivate = function () {
        var isAuthenticated = _super.prototype.canActivate.call(this);
        if (!isAuthenticated) {
            return false;
        }
        if (this.authService.currentUser.roles.includes('bottler')) {
            return true;
        }
        this.router.navigate(['/no-access']);
        return false;
    };
    BottlerAuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], BottlerAuthGuardService);
    return BottlerAuthGuardService;
}(__WEBPACK_IMPORTED_MODULE_1__auth_guard_service__["a" /* AuthGuard */]));



/***/ }),

/***/ "./src/app/guard-services/grower-auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrowerAuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_guard_service__ = __webpack_require__("./src/app/auth-guard.service.ts");
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


var GrowerAuthGuardService = /** @class */ (function (_super) {
    __extends(GrowerAuthGuardService, _super);
    function GrowerAuthGuardService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GrowerAuthGuardService.prototype.canActivate = function () {
        var isAuthenticated = _super.prototype.canActivate.call(this);
        if (!isAuthenticated) {
            return false;
        }
        if (this.authService.currentUser.roles.includes('grower')) {
            return true;
        }
        this.router.navigate(['/no-access']);
        return false;
    };
    GrowerAuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], GrowerAuthGuardService);
    return GrowerAuthGuardService;
}(__WEBPACK_IMPORTED_MODULE_1__auth_guard_service__["a" /* AuthGuard */]));



/***/ }),

/***/ "./src/app/guard-services/winery-auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WineryAuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_guard_service__ = __webpack_require__("./src/app/auth-guard.service.ts");
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


var WineryAuthGuardService = /** @class */ (function (_super) {
    __extends(WineryAuthGuardService, _super);
    function WineryAuthGuardService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WineryAuthGuardService.prototype.canActivate = function () {
        var isAuthenticated = _super.prototype.canActivate.call(this);
        if (!isAuthenticated) {
            return false;
        }
        if (this.authService.currentUser.roles.includes('winery')) {
            return true;
        }
        this.router.navigate(['/no-access']);
        return false;
    };
    WineryAuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], WineryAuthGuardService);
    return WineryAuthGuardService;
}(__WEBPACK_IMPORTED_MODULE_1__auth_guard_service__["a" /* AuthGuard */]));



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "\n.form-signin {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n  margin-bottom: 10px;\n}\n.form-signin .checkbox {\n  font-weight: normal;\n}\n.form-signin .form-control {\n  position: relative;\n  height: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-signin\" #f=\"ngForm\" (ngSubmit)=\"signIn(f.value)\">\n  <h2 class=\"form-signin-heading\">Please sign in</h2>\n  <div *ngIf=\"invalidLogin\" class=\"alert alert-danger\">Invalid username and/or password.</div>\n  <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n  <input type=\"email\" id=\"inputEmail\" name=\"email\" ngModel class=\"form-control\" placeholder=\"Email address\" required autofocus>\n  <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n  <input type=\"password\" id=\"inputPassword\" name=\"password\" ngModel class=\"form-control\" placeholder=\"Password\" required>\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    LoginComponent.prototype.signIn = function (credentials) {
        var _this = this;
        this.authService.login(credentials)
            .subscribe(function (result) {
            if (result) {
                _this.router.navigate(['/home']);
            }
            else {
                _this.invalidLogin = true;
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/***/ (function(module, exports) {

module.exports = "\n.sidebar {\n    min-height: 500px;\n    max-height: 500px;\n    min-width: 170px;\n    margin: 10px;\n    border-radius: 5px;\n}\n\n.top-banner {\n    background-color: rgb(140, 161, 189);\n}\n\n.nav > .nav-item > .nav-link.active {\n    color: rgb(14, 126, 116);\n}\n\n.nav-divider {\n    padding-right: 15px;\n    margin-right: 15px;\n}\n\n.collapse.navbar-collapse > .nav-link {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    vertical-align: middle;\n}\n"

/***/ }),

/***/ "./src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light top-banner\">\n  <a class=\"navbar-brand\" routerLink=\"/\"><i class=\"fa fa-leaf\" aria-hidden=\"true\">\n      <img src=\"/assets/logo.svg\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n      Ziontech</i></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" \n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\n    (click)=\"toggleMenu()\"\n    [attr.aria-expanded]=\"!isCollapsed\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngbCollapse]=\"isCollapsed\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Contact</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">About</a></li>\n    </ul>\n    <a class=\"nav-link\" (click)=\"logout()\"><mat-icon color=\"warn\">exit_to_app</mat-icon>Logout</a>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-1 sidebar bg-dark\" id=\"sidebar\" role=\"navigation\">\n        <ul class=\"nav flex-column sidebar\">\n          <li class=\"nav-item active\" *ngIf=\"isGrower()\" >\n              <a class=\"nav-link\" [routerLink]=\"['./products','grower']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Grower</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"isWinery()\">\n            <a class=\"nav-link\" [routerLink]=\"['./products','winery']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Winery</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"isBottler()\">\n            <a class=\"nav-link\" [routerLink]=\"['./products','bottler']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Bottler</a>\n          </li>\n          <li class=\"nav-divider\"><mat-divider></mat-divider></li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['./products','transaction']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Transaction</a>\n          </li>\n        </ul>\n    </div>\n    <div class=\"col-10\">\n        <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qr_dialog_qr_dialog_component__ = __webpack_require__("./src/app/qr-dialog/qr-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainComponent = /** @class */ (function () {
    function MainComponent(dialog, router, authService) {
        this.dialog = dialog;
        this.router = router;
        this.authService = authService;
        this.isCollapsed = true;
        this.roles = [];
    }
    MainComponent.prototype.ngOnInit = function () {
        if (this.authService.currentUser) {
            this.roles = this.authService.currentUser.roles || [];
        }
        this.router.navigate(["/home/products/" + this.roles[0]]);
    };
    MainComponent.prototype.openDialog = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__qr_dialog_qr_dialog_component__["a" /* QrDialogComponent */], {
            data: {
                courseId: 1
            }
        }).afterClosed()
            .subscribe(function (result) { return console.log(result); });
    };
    MainComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['login']);
    };
    MainComponent.prototype.toggleMenu = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    MainComponent.prototype.isGrower = function () {
        return this.roles.includes('grower');
    };
    MainComponent.prototype.isWinery = function () {
        return this.roles.includes('winery');
    };
    MainComponent.prototype.isBottler = function () {
        return this.roles.includes('bottler');
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/main/main.component.html"),
            styles: [__webpack_require__("./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/mat-components/mat-components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MatComponentsModule = /** @class */ (function () {
    function MatComponentsModule() {
    }
    MatComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatSortModule */]
            ]
        })
    ], MatComponentsModule);
    return MatComponentsModule;
}());



/***/ }),

/***/ "./src/app/no-access/no-access.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/no-access/no-access.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1>Access Denied</h1>"

/***/ }),

/***/ "./src/app/no-access/no-access.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoAccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoAccessComponent = /** @class */ (function () {
    function NoAccessComponent() {
    }
    NoAccessComponent.prototype.ngOnInit = function () {
    };
    NoAccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-no-access',
            template: __webpack_require__("./src/app/no-access/no-access.component.html"),
            styles: [__webpack_require__("./src/app/no-access/no-access.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NoAccessComponent);
    return NoAccessComponent;
}());



/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/***/ (function(module, exports) {

module.exports = "\n  .mat-table {\n    overflow: auto;\n    max-height: 700px;\n  }\n\n  .example-header {\n    min-height: 64px;\n    padding-top: 10px;\n  }\n\n  .clickable-row {\n    cursor: pointer;\n  }"

/***/ }),

/***/ "./src/app/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\" *ngIf=\"showAddButton\">\n  <button mat-raised-button color=\"primary\" [routerLink]=\"['/home/grower/new']\">Add</button>\n</div>\n<div class=\"example-header\">\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\" [(ngModel)]=\"filterValue\">\n    <button mat-button *ngIf=\"filterValue\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"filterValue='';applyFilter('')\">\n        <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n</div>\n\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n    <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> {{ column.header }} </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{ column.cell(element)}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n      (click)=\"rowClick(row)\"\n      [ngClass]=\"{'clickable-row': rowClickable}\"\n    ></mat-row>\n  </mat-table>\n  <mat-paginator #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\" [showFirstLastButtons]=\"true\"></mat-paginator>\n</div>\n  "

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hyperledger_service__ = __webpack_require__("./src/app/services/hyperledger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__qr_dialog_qr_dialog_component__ = __webpack_require__("./src/app/qr-dialog/qr-dialog.component.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(service, router, route, dialog) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.rowClickable = true;
        this.transaction = false;
        this.showAddButton = false;
        this.displayedColumns = [];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.role = params['role'];
            _this.populateMetaData();
            _this.service.getHyperledgers()
                .subscribe(function (response) {
                setTimeout(function () {
                    var result = response.map(function (record) {
                        return __assign({ key: record['Key'] }, record['Record']);
                    });
                    _this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatTableDataSource */](result);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                });
            });
        });
    };
    ProductListComponent.prototype.populateMetaData = function () {
        switch (this.role) {
            case 'grower':
                this.populateGrowerMetaData();
                break;
            case 'winery':
                this.populateWineryMetaData();
                break;
            case 'bottler':
                this.populateBottlerMetaData();
                break;
            case 'transaction':
                this.populateTransactionMetaData();
                break;
        }
        /** Column definitions in order */
        this.displayedColumns = this.columns.map(function (x) { return x.columnDef; });
    };
    ProductListComponent.prototype.populateGrowerMetaData = function () {
        this.rowClickable = false;
        this.transaction = false;
        this.showAddButton = true;
        this.columns = [
            { columnDef: 'key', header: '#', cell: function (row) { return "" + row.key; } },
            { columnDef: 'companyName', header: 'Company Name', cell: function (row) { return "" + row.companyName; } },
            { columnDef: 'region', header: 'Region', cell: function (row) { return "" + row.region; } },
            { columnDef: 'vineyard', header: 'Vineyard', cell: function (row) { return "" + row.vineyard; } },
            { columnDef: 'block', header: 'Block', cell: function (row) { return "" + row.block; } },
            { columnDef: 'rowRange', header: 'Row Range', cell: function (row) { return "" + row.rowRange; } },
            { columnDef: 'variety', header: 'Variety', cell: function (row) { return "" + row.variety; } },
            { columnDef: 'vintage', header: 'Vintage', cell: function (row) { return "" + row.vintage; } },
            { columnDef: 'dateDelivered', header: 'Date Delivered', cell: function (row) { return "" + row.dateDelivered; } },
            { columnDef: 'vinery', header: 'Vinery', cell: function (row) { return "" + row.vinery; } },
            { columnDef: 'estimatedWeight', header: 'Estimated Weight', cell: function (row) { return "" + row.estimatedWeight; } }
        ];
    };
    ProductListComponent.prototype.populateWineryMetaData = function () {
        this.rowClickable = true;
        this.transaction = false;
        this.showAddButton = false;
        this.columns = [
            { columnDef: 'key', header: '#', cell: function (row) { return "" + row.key; } },
            { columnDef: 'companyName', header: 'Company Name', cell: function (row) { return "" + row.companyName; } },
            { columnDef: 'variety', header: 'Variety', cell: function (row) { return "" + row.variety; } },
            { columnDef: 'vintage', header: 'Vintage', cell: function (row) { return "" + row.vintage; } },
            { columnDef: 'dateDelivered', header: 'Date Delivered', cell: function (row) { return "" + row.dateDelivered; } },
            { columnDef: 'estimatedWeight', header: 'Estimated Weight', cell: function (row) { return "" + row.estimatedWeight; } },
            { columnDef: 'actualWeight', header: 'Actual Weight', cell: function (row) { return "" + row.actualWeight; } },
            { columnDef: 'volume', header: 'Volume', cell: function (row) { return "" + row.volume; } },
            { columnDef: 'bottlingCompany', header: 'Bottling Company', cell: function (row) { return "" + row.bottlingCompany; } }
        ];
    };
    ProductListComponent.prototype.populateBottlerMetaData = function () {
        this.rowClickable = true;
        this.transaction = false;
        this.showAddButton = false;
        this.columns = [
            { columnDef: 'key', header: '#', cell: function (row) { return "" + row.key; } },
            { columnDef: 'companyName', header: 'Company Name', cell: function (row) { return "" + row.companyName; } },
            { columnDef: 'variety', header: 'Variety', cell: function (row) { return "" + row.variety; } },
            { columnDef: 'vintage', header: 'Vintage', cell: function (row) { return "" + row.vintage; } },
            { columnDef: 'volume', header: 'Volume', cell: function (row) { return "" + row.volume; } },
            { columnDef: 'brand', header: 'Brand', cell: function (row) { return "" + row.brand; } },
            { columnDef: 'label', header: 'Label', cell: function (row) { return "" + row.label; } },
            { columnDef: 'corkCap', header: 'Cork Cap', cell: function (row) { return "" + row.corkCap; } },
            { columnDef: 'seller', header: 'Seller', cell: function (row) { return "" + row.seller; } },
            { columnDef: 'status', header: 'Status', cell: function (row) { return "" + row.status; } }
        ];
    };
    ProductListComponent.prototype.populateTransactionMetaData = function () {
        this.rowClickable = true;
        this.transaction = true;
        this.showAddButton = false;
        this.columns = [
            { columnDef: 'key', header: '#', cell: function (row) { return "" + row.key; } },
            { columnDef: 'companyName', header: 'Company Name', cell: function (row) { return "" + row.companyName; } },
            { columnDef: 'region', header: 'Region', cell: function (row) { return "" + row.region; } },
            { columnDef: 'vineyard', header: 'Vineyard', cell: function (row) { return "" + row.vineyard; } },
            { columnDef: 'block', header: 'Block', cell: function (row) { return "" + row.block; } },
            { columnDef: 'rowRange', header: 'Row Range', cell: function (row) { return "" + row.rowRange; } },
            { columnDef: 'variety', header: 'Variety', cell: function (row) { return "" + row.variety; } },
            { columnDef: 'vintage', header: 'Vintage', cell: function (row) { return "" + row.vintage; } },
            { columnDef: 'dateDelivered', header: 'Date Delivered', cell: function (row) { return "" + row.dateDelivered; } },
            { columnDef: 'vinery', header: 'Vinery', cell: function (row) { return "" + row.vinery; } },
            { columnDef: 'actualWeight', header: 'Actual Weight', cell: function (row) { return "" + row.actualWeight; } },
            { columnDef: 'volume', header: 'Volume', cell: function (row) { return "" + row.volume; } },
            { columnDef: 'bottlingCompany', header: 'Bottling Company', cell: function (row) { return "" + row.bottlingCompany; } },
            { columnDef: 'brand', header: 'Brand', cell: function (row) { return "" + row.brand; } },
            { columnDef: 'label', header: 'Label', cell: function (row) { return "" + row.label; } },
            { columnDef: 'corkCap', header: 'Cork Cap', cell: function (row) { return "" + row.corkCap; } },
            { columnDef: 'seller', header: 'Seller', cell: function (row) { return "" + row.seller; } },
            { columnDef: 'status', header: 'Status', cell: function (row) { return "" + row.status; } }
        ];
    };
    ProductListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ProductListComponent.prototype.rowClick = function (row) {
        if (this.transaction) {
            this.openDialog(row.key);
            return;
        }
        if (this.rowClickable) {
            switch (this.role) {
                case 'winery':
                    this.router.navigateByUrl("/home/winery/product/" + row.key);
                    break;
                case 'bottler':
                    this.router.navigateByUrl("/home/bottler/product/" + row.key);
                    break;
            }
        }
    };
    ProductListComponent.prototype.openDialog = function (id) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__qr_dialog_qr_dialog_component__["a" /* QrDialogComponent */], {
            data: { id: id }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatPaginator */])
    ], ProductListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatSort */])
    ], ProductListComponent.prototype, "sort", void 0);
    ProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__("./src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__("./src/app/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_hyperledger_service__["a" /* HyperledgerService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/qr-dialog/qr-dialog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/qr-dialog/qr-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Please scan...</h2>\n<mat-dialog-content>\n  <img [src]=\"imagePath\" alt=\"\">\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-raised-button mat-dialog-close=\"yes\">Ok</button>\n</mat-dialog-actions>\n\n"

/***/ }),

/***/ "./src/app/qr-dialog/qr-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
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


var QrDialogComponent = /** @class */ (function () {
    function QrDialogComponent(data) {
        this.imagePath = "assets/qr/qr" + data.id + ".png";
    }
    QrDialogComponent.prototype.ngOnInit = function () {
    };
    QrDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-qr-dialog',
            template: __webpack_require__("./src/app/qr-dialog/qr-dialog.component.html"),
            styles: [__webpack_require__("./src/app/qr-dialog/qr-dialog.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], QrDialogComponent);
    return QrDialogComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_list_product_list_component__ = __webpack_require__("./src/app/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__winery_winery_product_winery_product_component__ = __webpack_require__("./src/app/winery/winery-product/winery-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bottler_bottler_product_bottler_product_component__ = __webpack_require__("./src/app/bottler/bottler-product/bottler-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main_component__ = __webpack_require__("./src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grower_add_product_add_product_component__ = __webpack_require__("./src/app/grower/add-product/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__no_access_no_access_component__ = __webpack_require__("./src/app/no-access/no-access.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guard_services_grower_auth_guard_service__ = __webpack_require__("./src/app/guard-services/grower-auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guard_services_winery_auth_guard_service__ = __webpack_require__("./src/app/guard-services/winery-auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guard_services_bottler_auth_guard_service__ = __webpack_require__("./src/app/guard-services/bottler-auth-guard.service.ts");










var appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_3__main_main_component__["a" /* MainComponent */],
        children: [
            // { path: '', redirectTo: 'products/grower', pathMatch: 'full' },
            { path: 'products/:role', component: __WEBPACK_IMPORTED_MODULE_0__product_list_product_list_component__["a" /* ProductListComponent */] },
            { path: 'grower/new', component: __WEBPACK_IMPORTED_MODULE_4__grower_add_product_add_product_component__["a" /* AddProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guard_services_grower_auth_guard_service__["a" /* GrowerAuthGuardService */]] },
            { path: 'winery/product/:id', component: __WEBPACK_IMPORTED_MODULE_1__winery_winery_product_winery_product_component__["a" /* WineryProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guard_services_winery_auth_guard_service__["a" /* WineryAuthGuardService */]] },
            { path: 'bottler/product/:id', component: __WEBPACK_IMPORTED_MODULE_2__bottler_bottler_product_bottler_product_component__["a" /* BottlerProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guard_services_bottler_auth_guard_service__["a" /* BottlerAuthGuardService */]] },
        ]
    },
    { path: 'no-access', component: __WEBPACK_IMPORTED_MODULE_6__no_access_no_access_component__["a" /* NoAccessComponent */] }
];


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = 'http://ziontech.com:5000';
        var token = localStorage.getItem('token');
        if (token) {
            var jwt = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
            this.currentUser = jwt.decodeToken(token);
        }
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        return this.http.post(this.baseUrl + '/api/authenticate', credentials)
            .map(function (response) {
            var result = response.json();
            if (result && result.token) {
                localStorage.setItem('token', result.token);
                var jwt = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
                _this.currentUser = jwt.decodeToken(localStorage.getItem('token'));
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.currentUser = null;
    };
    AuthService.prototype.isLoggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('token');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/hyperledger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HyperledgerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_bad_input__ = __webpack_require__("./src/app/common/bad-input.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_not_found_error__ = __webpack_require__("./src/app/common/not-found-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_app_error__ = __webpack_require__("./src/app/common/app-error.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HyperledgerService = /** @class */ (function () {
    function HyperledgerService(http) {
        this.http = http;
        this.baseUrl = 'http://ziontech.com:5000';
    }
    HyperledgerService.prototype.getHyperledgers = function () {
        return this.http.get(this.baseUrl + '/get_all_wine')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    HyperledgerService.prototype.addProduct = function (data) {
        return this.http.post(this.baseUrl + '/add_wine', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    HyperledgerService.prototype.vineryUpdate = function (data) {
        console.log(data);
        return this.http.post(this.baseUrl + '/vinery', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    HyperledgerService.prototype.bottlerUpdate = function (data) {
        return this.http.post(this.baseUrl + '/bottler', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    HyperledgerService.prototype.handleError = function (error) {
        if (error.status === 400) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(new __WEBPACK_IMPORTED_MODULE_6__common_bad_input__["a" /* BadInput */](error.json));
        }
        if (error.status === 404) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(new __WEBPACK_IMPORTED_MODULE_7__common_not_found_error__["a" /* NotFoundError */](error));
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(new __WEBPACK_IMPORTED_MODULE_8__common_app_error__["a" /* AppError */](error));
    };
    HyperledgerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], HyperledgerService);
    return HyperledgerService;
}());



/***/ }),

/***/ "./src/app/winery/winery-product/winery-product.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-top: 20px;\n  }\n  \n  .example-container > * {\n    width: 80%;\n  }\n  \n  .example-container form {\n    margin-bottom: 20px;\n  }\n  \n  .example-container form > * {\n    margin: 5px 0;\n  }\n  \n  .example-container .mat-radio-button {\n    margin: 0 5px;\n  }\n    "

/***/ }),

/***/ "./src/app/winery/winery-product/winery-product.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\n  <div class=\"example-container\">\n    <mat-grid-list cols=\"2\" rowHeight=\"70px\" gutterSize=\"20px\">\n      <mat-grid-tile>\n        <mat-form-field>\n          <mat-label>Actual Weight</mat-label>\n          <input matInput placeholder=\"Actual Weight\" formControlName=\"actualWeight\">\n          <mat-error *ngIf=\"form.get('actualWeight').invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n      <mat-grid-tile>\n        <mat-form-field>\n          <mat-label>Volume</mat-label>\n          <input matInput placeholder=\"Actual Weight\" formControlName=\"volume\">\n          <mat-error *ngIf=\"form.get('volume').invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n      <mat-grid-tile>\n        <mat-form-field>\n          <mat-label>\n            <mat-icon>domain</mat-icon>\n            <i> Bottling Company Name </i>\n          </mat-label>\n          <mat-select formControlName=\"bottlingCompany\" required>\n            <mat-option>-- None --</mat-option>\n            <mat-option *ngFor=\"let company of bottlingCompanies\" [value]=\"company\">{{ company }}</mat-option>\n          </mat-select>\n          <mat-error *ngIf=\"form.get('bottlingCompany').invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </div>\n  <div class=\"button-row\">\n    <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n    <button mat-raised-button color=\"warn\" [routerLink]=\"['/home/products','winery']\">Cancel</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/winery/winery-product/winery-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WineryProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_hyperledger_service__ = __webpack_require__("./src/app/services/hyperledger.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WineryProductComponent = /** @class */ (function () {
    function WineryProductComponent(service, router, route, fb) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.route = route;
        this.bottlingCompanies = ['Best Bottlers', 'Liquid Goods'];
        this.route.params.subscribe(function (pamams) { return _this.selectedId = pamams.id; });
        this.form = fb.group({
            actualWeight: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            volume: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            bottlingCompany: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    }
    WineryProductComponent.prototype.onSubmit = function (data) {
        var _this = this;
        data.key = this.selectedId;
        this.service.vineryUpdate(__assign({ key: this.selectedId }, data))
            .finally(function () { return _this.router.navigate(['/home/products', 'winery']); })
            .subscribe(function (res) { return console.log(res); });
    };
    WineryProductComponent.prototype.getErrorMessage = function () {
        return 'You must enter a value';
    };
    WineryProductComponent.prototype.ngOnInit = function () {
    };
    WineryProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-winery-product',
            template: __webpack_require__("./src/app/winery/winery-product/winery-product.component.html"),
            styles: [__webpack_require__("./src/app/winery/winery-product/winery-product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_hyperledger_service__["a" /* HyperledgerService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], WineryProductComponent);
    return WineryProductComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map