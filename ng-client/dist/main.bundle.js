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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes__ = __webpack_require__("./src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__bottler_bottler_product_bottler_product_component__ = __webpack_require__("./src/app/bottler/bottler-product/bottler-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__winery_winery_product_winery_product_component__ = __webpack_require__("./src/app/winery/winery-product/winery-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_jwt_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_jwt_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_jwt_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__no_access_no_access_component__ = __webpack_require__("./src/app/no-access/no-access.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__product_list_confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/app/product-list/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__driver_driver_component__ = __webpack_require__("./src/app/driver/driver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__http_interceptor_http_factory__ = __webpack_require__("./src/app/http-interceptor/http.factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__guard_services_auth_guard_service__ = __webpack_require__("./src/app/guard-services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__delete_confirm_dialog_delete_confirm_dialog_component__ = __webpack_require__("./src/app/delete-confirm-dialog/delete-confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_hyperledger_service__ = __webpack_require__("./src/app/services/hyperledger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_base_base_component__ = __webpack_require__("./src/app/shared/base/base.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_13__bottler_bottler_product_bottler_product_component__["a" /* BottlerProductComponent */],
                __WEBPACK_IMPORTED_MODULE_14__winery_winery_product_winery_product_component__["a" /* WineryProductComponent */],
                __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__no_access_no_access_component__["a" /* NoAccessComponent */],
                __WEBPACK_IMPORTED_MODULE_19__product_list_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_20__driver_driver_component__["a" /* DriverComponent */],
                __WEBPACK_IMPORTED_MODULE_23__delete_confirm_dialog_delete_confirm_dialog_component__["a" /* DeleteConfirmDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_26__shared_base_base_component__["a" /* BaseComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__qr_dialog_qr_dialog_component__["a" /* QrDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_19__product_list_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_23__delete_confirm_dialog_delete_confirm_dialog_component__["a" /* DeleteConfirmDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__routes__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_18__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_10__mat_components_mat_components_module__["a" /* MatComponentsModule */],
            ],
            providers: [
                // { provide: ErrorHandler, useClass: AppErrorHandler },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
                    useFactory: __WEBPACK_IMPORTED_MODULE_21__http_interceptor_http_factory__["a" /* httpFactory */],
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["XHRBackend"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]]
                },
                __WEBPACK_IMPORTED_MODULE_22__guard_services_auth_guard_service__["b" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_22__guard_services_auth_guard_service__["a" /* AdminAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_22__guard_services_auth_guard_service__["c" /* BottlerAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_22__guard_services_auth_guard_service__["d" /* DriverAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_22__guard_services_auth_guard_service__["e" /* GrowerAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_22__guard_services_auth_guard_service__["f" /* WineryAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_16_angular2_jwt_angular2_jwt__["AuthHttp"],
                __WEBPACK_IMPORTED_MODULE_24__services_hyperledger_service__["a" /* HyperledgerService */],
                __WEBPACK_IMPORTED_MODULE_25__services_auth_service__["a" /* AuthService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bottler/bottler-product/bottler-product.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 80%;\r\n  }\r\n  \r\n  .example-container form {\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .example-container form > * {\r\n    margin: 5px 0;\r\n  }\r\n  \r\n  .example-container .mat-radio-button {\r\n    margin: 0 5px;\r\n  }\r\n    "

/***/ }),

/***/ "./src/app/bottler/bottler-product/bottler-product.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n  <div class=\"example-container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-8\">\r\n        <mat-grid-list cols=\"2\" rowHeight=\"70px\" gutterSize=\"20px\">\r\n          <mat-grid-tile>\r\n            <mat-form-field>\r\n              <mat-label>Brand</mat-label>\r\n              <input matInput placeholder=\"Brand\" formControlName=\"brand\">\r\n              <mat-error *ngIf=\"form.get('brand').invalid\">{{getErrorMessage()}}</mat-error>\r\n            </mat-form-field>\r\n          </mat-grid-tile>\r\n          <mat-grid-tile>\r\n            <mat-form-field>\r\n              <mat-label>Label</mat-label>\r\n              <input matInput placeholder=\"Label\" formControlName=\"label\">\r\n              <mat-error *ngIf=\"form.get('label').invalid\">{{getErrorMessage()}}</mat-error>\r\n            </mat-form-field>\r\n          </mat-grid-tile>\r\n          <mat-grid-tile>\r\n            <mat-form-field>\r\n              <mat-label>Cork Cap</mat-label>\r\n              <input matInput placeholder=\"Cork Cap\" formControlName=\"corkCap\">\r\n              <mat-error *ngIf=\"form.get('corkCap').invalid\">{{getErrorMessage()}}</mat-error>\r\n            </mat-form-field>\r\n          </mat-grid-tile>\r\n          <mat-grid-tile>\r\n            <mat-form-field>\r\n              <mat-label>\r\n                <mat-icon>domain</mat-icon>\r\n                <i> Status </i>\r\n              </mat-label>\r\n              <mat-select formControlName=\"status\" required>\r\n                <mat-option>-- None --</mat-option>\r\n                <mat-option *ngFor=\"let status of statuses\" [value]=\"status\">{{ status }}</mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"form.get('status').invalid\">{{getErrorMessage()}}</mat-error>\r\n            </mat-form-field>\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n      </div>\r\n      <div class=\"col\" *ngIf=\"showCard()\">\r\n        <div class=\"card\" style=\"width: 20rem;\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Product information</h5>\r\n            <ul class=\"list-group list-group-flush\">\r\n              <li class=\"list-group-item\">\r\n                <div class=\"row\">\r\n                  <div class=\"col\">Compnay:</div>\r\n                  <div class=\"col\">{{ product.companyName }}</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"row\">\r\n                  <div class=\"col\">Variety:</div>\r\n                  <div class=\"col\">{{ grape.variety }}</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"row\">\r\n                  <div class=\"col\">Vintage:</div>\r\n                  <div class=\"col\">{{ grape.vintage }}</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"row\">\r\n                  <div class=\"col\">Weight:</div>\r\n                  <div class=\"col\">{{ grape.estimatedWeight }}</div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"button-row\">\r\n    <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n    <button mat-raised-button color=\"warn\" [routerLink]=\"['/home/products','bottler']\">Cancel</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/bottler/bottler-product/bottler-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BottlerProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_finally__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_hyperledger_service__ = __webpack_require__("./src/app/services/hyperledger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_no_auth_error__ = __webpack_require__("./src/app/common/no-auth-error.ts");
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
    function BottlerProductComponent(service, router, route, authService, fb) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.fb = fb;
        this.componentDestroyed$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["a" /* Subject */]();
        this.sellers = ['Liquid Shop', 'BWS'];
        this.statuses = ['Labeled', 'Not Labeled'];
    }
    BottlerProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            brand: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            label: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            corkCap: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            status: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
        this.route.params.subscribe(function (pamams) {
            _this.service.getProduct(pamams.id)
                .takeUntil(_this.componentDestroyed$)
                .subscribe(function (product) {
                setTimeout(function () {
                    console.log(product);
                    _this.product = product;
                    _this.grape = product.grapes[0];
                    _this.form.patchValue(_this.grape);
                    if (_this.product.wines && _this.product.wines.length) {
                        _this.form.patchValue(_this.product.wines[0]);
                    }
                });
            }, function (err) {
                if (err instanceof __WEBPACK_IMPORTED_MODULE_7__common_no_auth_error__["a" /* NoAuthError */]) {
                    _this.router.navigate(['login']);
                }
            });
        });
    };
    BottlerProductComponent.prototype.showCard = function () {
        return this.product && this.product.grapes && this.product.grapes.length;
    };
    BottlerProductComponent.prototype.onSubmit = function (data) {
        var _this = this;
        if (this.form.valid) {
            if (this.product.wines && this.product.wines.length) {
                data['wineId'] = this.product.wines[0].id;
            }
            this.service.addOrUpdateProduct(data)
                .finally(function () { return _this.router.navigate(['/home/products', _this.authService.currentRole]); })
                .subscribe(function (res) { return console.log(res); });
        }
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_hyperledger_service__["a" /* HyperledgerService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */],
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

/***/ "./src/app/common/no-auth-error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoAuthError; });
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

var NoAuthError = /** @class */ (function (_super) {
    __extends(NoAuthError, _super);
    function NoAuthError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoAuthError;
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

/***/ "./src/app/delete-confirm-dialog/delete-confirm-dialog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/delete-confirm-dialog/delete-confirm-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Are you sure to delete it?</h2>\r\n<mat-dialog-content>\r\n  The product is going to be deleted.\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-raised-button mat-dialog-close=\"yes\">Yes</button>\r\n  <button mat-raised-button mat-dialog-close=\"yes\">No</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/delete-confirm-dialog/delete-confirm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteConfirmDialogComponent; });
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


var DeleteConfirmDialogComponent = /** @class */ (function () {
    function DeleteConfirmDialogComponent(data) {
    }
    DeleteConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    DeleteConfirmDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delete-confirm-dialog',
            template: __webpack_require__("./src/app/delete-confirm-dialog/delete-confirm-dialog.component.html"),
            styles: [__webpack_require__("./src/app/delete-confirm-dialog/delete-confirm-dialog.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], DeleteConfirmDialogComponent);
    return DeleteConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/driver/driver.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 80%;\r\n  }\r\n  \r\n  .example-container form {\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .example-container form > * {\r\n    margin: 5px 0;\r\n  }\r\n  \r\n  .example-container .mat-radio-button {\r\n    margin: 0 5px;\r\n  }\r\n    "

/***/ }),

/***/ "./src/app/driver/driver.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n  <div class=\"example-container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-7\">\r\n\r\n        <mat-grid-list cols=\"2\" rowHeight=\"70px\" gutterSize=\"20px\">\r\n          <mat-grid-tile>\r\n            <mat-form-field>\r\n              <mat-label>From</mat-label>\r\n              <input matInput placeholder=\"From\" formControlName=\"from\">\r\n              <mat-error *ngIf=\"form.get('from').invalid\">{{getErrorMessage()}}</mat-error>\r\n            </mat-form-field>\r\n          </mat-grid-tile>\r\n          <mat-grid-tile>\r\n            <mat-form-field>\r\n              <mat-label>To</mat-label>\r\n              <input matInput placeholder=\"To\" formControlName=\"to\">\r\n              <mat-error *ngIf=\"form.get('to').invalid\">{{getErrorMessage()}}</mat-error>\r\n            </mat-form-field>\r\n          </mat-grid-tile>\r\n          <mat-grid-tile>\r\n            <mat-form-field>\r\n              <mat-label>Pick Date</mat-label>\r\n              <input matInput [matDatepicker]=\"start\" placeholder=\"Choose a date\" formControlName=\"start\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"start\"></mat-datepicker-toggle>\r\n              <mat-datepicker #start></mat-datepicker>\r\n              <mat-error *ngIf=\"form.get('start').invalid\">{{getErrorMessage()}}</mat-error>\r\n            </mat-form-field>\r\n          </mat-grid-tile>\r\n          <mat-grid-tile>\r\n            <mat-form-field>\r\n              <mat-label>Delivery Date</mat-label>\r\n              <input matInput [matDatepicker]=\"end\" placeholder=\"Choose a date\" formControlName=\"end\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"end\"></mat-datepicker-toggle>\r\n              <mat-datepicker #end></mat-datepicker>\r\n              <mat-error *ngIf=\"form.get('end').invalid\">{{getErrorMessage()}}</mat-error>\r\n            </mat-form-field>\r\n          </mat-grid-tile>\r\n          <mat-grid-tile>\r\n            <mat-form-field>\r\n              <mat-label>Driver licence</mat-label>\r\n              <input matInput placeholder=\"Driver licence\" formControlName=\"driverId\">\r\n              <mat-error *ngIf=\"form.get('driverId').invalid\">{{getErrorMessage()}}</mat-error>\r\n            </mat-form-field>\r\n          </mat-grid-tile>\r\n          <mat-grid-tile>\r\n            <mat-form-field>\r\n              <mat-label>Truck Plate Number</mat-label>\r\n              <input matInput placeholder=\"Truck Plate Number\" formControlName=\"plateNumber\">\r\n              <mat-error *ngIf=\"form.get('plateNumber').invalid\">{{getErrorMessage()}}</mat-error>\r\n            </mat-form-field>\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n      </div>\r\n      <div class=\"col\" *ngIf=\"showCard()\">\r\n        <div class=\"card\" style=\"width: 20rem;\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Product information</h5>\r\n            <ul class=\"list-group list-group-flush\">\r\n              <li class=\"list-group-item\">\r\n                <div class=\"row\">\r\n                  <div class=\"col\">Compnay:</div>\r\n                  <div class=\"col\">{{ product.companyName }}</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"row\">\r\n                  <div class=\"col\">Variety:</div>\r\n                  <div class=\"col\">{{ grape.variety }}</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"row\">\r\n                  <div class=\"col\">Vintage:</div>\r\n                  <div class=\"col\">{{ grape.vintage }}</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"row\">\r\n                  <div class=\"col\">Weight:</div>\r\n                  <div class=\"col\">{{ grape.estimatedWeight }}</div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"button-row\">\r\n      <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n      <button mat-raised-button color=\"warn\" [routerLink]=\"['/home/products','driver']\">Cancel</button>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/driver/driver.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_hyperledger_service__ = __webpack_require__("./src/app/services/hyperledger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_no_auth_error__ = __webpack_require__("./src/app/common/no-auth-error.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DriverComponent = /** @class */ (function () {
    function DriverComponent(service, route, router, authService, fb) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.componentDestroyed$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
    }
    DriverComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            from: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            to: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            start: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            end: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            driverId: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            plateNumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
        this.route.params.subscribe(function (pamams) {
            _this.service.getProduct(pamams.id)
                .takeUntil(_this.componentDestroyed$)
                .subscribe(function (product) {
                setTimeout(function () {
                    console.log(product);
                    _this.product = product;
                    _this.grape = product.grapes[0];
                    _this.form.patchValue(_this.grape);
                    if (_this.product.transports && _this.product.transports.length) {
                        _this.form.patchValue(_this.product.transports[0]);
                    }
                });
            }, function (err) {
                if (err instanceof __WEBPACK_IMPORTED_MODULE_6__common_no_auth_error__["a" /* NoAuthError */]) {
                    _this.router.navigate(['login']);
                }
            });
        });
    };
    DriverComponent.prototype.showCard = function () {
        return this.product && this.product.grapes && this.product.grapes.length;
    };
    DriverComponent.prototype.onSubmit = function (data) {
        var _this = this;
        console.log(this.product);
        data.productId = this.product.id;
        if (this.form.valid) {
            if (this.product.transports && this.product.transports.length) {
                data['transportId'] = this.product.transports[0].id;
            }
            console.log(data);
            this.service.addOrUpdateProduct(data)
                .finally(function () { return _this.router.navigate(['/home/products', _this.authService.currentRole]); })
                .subscribe(function (res) { return console.log(res); });
        }
    };
    DriverComponent.prototype.getErrorMessage = function () {
        return 'You must enter a value';
    };
    DriverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-driver',
            template: __webpack_require__("./src/app/driver/driver.component.html"),
            styles: [__webpack_require__("./src/app/driver/driver.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_hyperledger_service__["a" /* HyperledgerService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], DriverComponent);
    return DriverComponent;
}());



/***/ }),

/***/ "./src/app/grower/add-product/add-product.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  margin-top: 20px;\r\n}\r\n\r\n.example-container > * {\r\n  width: 80%;\r\n}\r\n\r\n.example-container form {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.example-container form > * {\r\n  margin: 5px 0;\r\n}\r\n\r\n.example-container .mat-radio-button {\r\n  margin: 0 5px;\r\n}\r\n  "

/***/ }),

/***/ "./src/app/grower/add-product/add-product.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n  <div class=\"example-container\">\r\n    <mat-grid-list cols=\"2\" rowHeight=\"70px\" gutterSize=\"20px\">\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>\r\n            <mat-icon>domain</mat-icon>\r\n            <i> Company name </i>\r\n          </mat-label>\r\n          <mat-select formControlName=\"companyName\" required>\r\n            <mat-option>-- None --</mat-option>\r\n            <mat-option *ngFor=\"let company of companies\" [value]=\"company\">{{ company }}</mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"form.get('companyName').invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Region</mat-label>\r\n          <input matInput placeholder=\"Region\" formControlName=\"region\">\r\n          <mat-error *ngIf=\"form.get('region').invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Vineyard</mat-label>\r\n          <input matInput placeholder=\"Vineyard\" formControlName=\"vineyard\">\r\n          <mat-error *ngIf=\"form.get('vineyard').invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Block</mat-label>\r\n          <input matInput placeholder=\"Block\" formControlName=\"block\">\r\n          <mat-error *ngIf=\"form.get('block').invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Row range</mat-label>\r\n          <input matInput placeholder=\"Row range\" formControlName=\"rowRange\">\r\n          <mat-error *ngIf=\"form.get('rowRange').invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Variety</mat-label>\r\n          <input matInput placeholder=\"Variety\" formControlName=\"variety\">\r\n          <mat-error *ngIf=\"form.get('variety').invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Vintage</mat-label>\r\n          <input matInput placeholder=\"Vintage\" formControlName=\"vintage\">\r\n          <mat-error *ngIf=\"form.get('vintage').invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Estimated weight</mat-label>\r\n          <input matInput placeholder=\"Estimated weight\" formControlName=\"estimatedWeight\">\r\n          <mat-error *ngIf=\"form.get('estimatedWeight').invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n  </div>\r\n  <div class=\"button-row\">\r\n    <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n    <button mat-raised-button color=\"warn\" type=\"button\" *ngIf=\"showDeleteButton()\" (click)=\"delete()\">Delete</button>\r\n    <button mat-raised-button color=\"btn-secondary\" [routerLink]=\"['/home/products','grower']\">Cancel</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/grower/add-product/add-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__delete_confirm_dialog_delete_confirm_dialog_component__ = __webpack_require__("./src/app/delete-confirm-dialog/delete-confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_hyperledger_service__ = __webpack_require__("./src/app/services/hyperledger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_no_auth_error__ = __webpack_require__("./src/app/common/no-auth-error.ts");
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
    function AddProductComponent(service, route, router, fb, dialog, authSevice) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.dialog = dialog;
        this.authSevice = authSevice;
        this.componentDestroyed$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["a" /* Subject */]();
        this.companies = ['Penley', 'Hoggies Estate'];
    }
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            companyName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            region: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            vineyard: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            block: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            rowRange: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            variety: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            vintage: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            estimatedWeight: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            if (_this.id && _this.id !== '0') {
                _this.service.getProduct(_this.id)
                    .takeUntil(_this.componentDestroyed$)
                    .subscribe(function (product) {
                    setTimeout(function () {
                        _this.prodcut = product;
                        _this.form.patchValue(product);
                        _this.form.patchValue(product.grapes[0]);
                    });
                }, function (err) {
                    if (err instanceof __WEBPACK_IMPORTED_MODULE_9__common_no_auth_error__["a" /* NoAuthError */]) {
                        _this.router.navigate(['login']);
                    }
                });
            }
        });
    };
    AddProductComponent.prototype.onSubmit = function (data) {
        var _this = this;
        if (this.form.valid) {
            if (this.prodcut) {
                data.id = this.prodcut.id;
                if (this.prodcut.grapes || this.prodcut.grapes[0].id) {
                    data.grapeId = this.prodcut.grapes[0].id;
                }
            }
            this.service.addOrUpdateProduct(data)
                .finally(function () { return _this.router.navigate(['/home/products', _this.authSevice.currentRole]); })
                .subscribe(function (res) { return console.log(res); });
        }
    };
    AddProductComponent.prototype.showDeleteButton = function () {
        return this.id && this.id !== '0';
    };
    AddProductComponent.prototype.delete = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__delete_confirm_dialog_delete_confirm_dialog_component__["a" /* DeleteConfirmDialogComponent */], {
            width: '550px',
            disableClose: true,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'yes') {
                _this.service.deleteProduct('' + _this.prodcut.id)
                    .finally(function () { return _this.router.navigate(['/home/products', _this.authSevice.currentRole]); })
                    .subscribe(function (res) {
                    console.log(res);
                });
            }
        });
    };
    AddProductComponent.prototype.getErrorMessage = function () {
        return 'You must enter a value';
    };
    AddProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__("./src/app/grower/add-product/add-product.component.html"),
            styles: [__webpack_require__("./src/app/grower/add-product/add-product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__services_hyperledger_service__["a" /* HyperledgerService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/guard-services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BottlerAuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DriverAuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GrowerAuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return WineryAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_Roles_enum__ = __webpack_require__("./src/app/shared/Roles.enum.ts");
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
        if (this.authService.currentUser.roleIds) {
            return true;
        }
        this.router.navigate(['/no-access']);
        return false;
    };
    AdminAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], AdminAuthGuard);
    return AdminAuthGuard;
}(AuthGuard));

var BottlerAuthGuard = /** @class */ (function (_super) {
    __extends(BottlerAuthGuard, _super);
    function BottlerAuthGuard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BottlerAuthGuard.prototype.canActivate = function () {
        var isAuthenticated = _super.prototype.canActivate.call(this);
        if (!isAuthenticated) {
            return false;
        }
        if (this.authService.isAuth(__WEBPACK_IMPORTED_MODULE_3__shared_Roles_enum__["a" /* Roles */].Bottler)) {
            return true;
        }
        this.router.navigate(['/no-access']);
        return false;
    };
    BottlerAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], BottlerAuthGuard);
    return BottlerAuthGuard;
}(AuthGuard));

var DriverAuthGuard = /** @class */ (function (_super) {
    __extends(DriverAuthGuard, _super);
    function DriverAuthGuard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DriverAuthGuard.prototype.canActivate = function () {
        var isAuthenticated = _super.prototype.canActivate.call(this);
        if (!isAuthenticated) {
            return false;
        }
        if (this.authService.isAuth(__WEBPACK_IMPORTED_MODULE_3__shared_Roles_enum__["a" /* Roles */].Distributor)) {
            return true;
        }
        this.router.navigate(['/no-access']);
        return false;
    };
    DriverAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], DriverAuthGuard);
    return DriverAuthGuard;
}(AuthGuard));

var GrowerAuthGuard = /** @class */ (function (_super) {
    __extends(GrowerAuthGuard, _super);
    function GrowerAuthGuard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GrowerAuthGuard.prototype.canActivate = function () {
        var isAuthenticated = _super.prototype.canActivate.call(this);
        if (!isAuthenticated) {
            return false;
        }
        if (this.authService.isAuth(__WEBPACK_IMPORTED_MODULE_3__shared_Roles_enum__["a" /* Roles */].Grower)) {
            return true;
        }
        this.router.navigate(['/no-access']);
        return false;
    };
    GrowerAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], GrowerAuthGuard);
    return GrowerAuthGuard;
}(AuthGuard));

var WineryAuthGuard = /** @class */ (function (_super) {
    __extends(WineryAuthGuard, _super);
    function WineryAuthGuard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WineryAuthGuard.prototype.canActivate = function () {
        var isAuthenticated = _super.prototype.canActivate.call(this);
        if (!isAuthenticated) {
            return false;
        }
        if (this.authService.isAuth(__WEBPACK_IMPORTED_MODULE_3__shared_Roles_enum__["a" /* Roles */].Winery)) {
            return true;
        }
        this.router.navigate(['/no-access']);
        return false;
    };
    WineryAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], WineryAuthGuard);
    return WineryAuthGuard;
}(AuthGuard));



/***/ }),

/***/ "./src/app/http-interceptor/http.factory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = httpFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_interceptor__ = __webpack_require__("./src/app/http-interceptor/http.interceptor.ts");

function httpFactory(xhrBackend, requestOptions) {
    return new __WEBPACK_IMPORTED_MODULE_0__http_interceptor__["a" /* InterceptedHttp */](xhrBackend, requestOptions);
}


/***/ }),

/***/ "./src/app/http-interceptor/http.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptedHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
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


var InterceptedHttp = /** @class */ (function (_super) {
    __extends(InterceptedHttp, _super);
    function InterceptedHttp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    InterceptedHttp.prototype.get = function (url, options) {
        return _super.prototype.get.call(this, url, this.getRequestOptionArgs(options));
    };
    InterceptedHttp.prototype.post = function (url, body, options) {
        return _super.prototype.post.call(this, url, body, this.getRequestOptionArgs(options));
    };
    InterceptedHttp.prototype.put = function (url, body, options) {
        return _super.prototype.put.call(this, url, body, this.getRequestOptionArgs(options));
    };
    InterceptedHttp.prototype.delete = function (url, options) {
        return _super.prototype.delete.call(this, url, this.getRequestOptionArgs(options));
    };
    InterceptedHttp.prototype.getRequestOptionArgs = function (options) {
        if (options == null) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]();
        }
        if (options.headers == null) {
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        }
        options.headers.append('Content-Type', 'application/json');
        var token = localStorage.getItem('token');
        if (token) {
            options.headers.set('Authorization', 'Bearer ' + token);
        }
        return options;
    };
    InterceptedHttp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["ConnectionBackend"], __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]])
    ], InterceptedHttp);
    return InterceptedHttp;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]));



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.form-signin {\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n.form-signin .form-signin-heading,\r\n.form-signin .checkbox {\r\n  margin-bottom: 10px;\r\n}\r\n.form-signin .checkbox {\r\n  font-weight: normal;\r\n}\r\n.form-signin .form-control {\r\n  position: relative;\r\n  height: auto;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n.form-signin input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-signin\" #f=\"ngForm\" (ngSubmit)=\"signIn(f.value)\">\r\n  <h2 class=\"form-signin-heading\">Please sign in</h2>\r\n  <div *ngIf=\"invalidLogin\" class=\"alert alert-danger\">Invalid username and/or password.</div>\r\n  <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n  <input type=\"email\" id=\"inputEmail\" name=\"email\" ngModel class=\"form-control\" placeholder=\"Email address\" required autofocus>\r\n  <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n  <input type=\"password\" id=\"inputPassword\" name=\"password\" ngModel class=\"form-control\" placeholder=\"Password\" required>\r\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\r\n</form>"

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
            setTimeout(function () {
                if (result) {
                    _this.router.navigate(['/home']);
                }
                else {
                    _this.invalidLogin = true;
                }
            });
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

module.exports = "\r\n.sidebar {\r\n    min-height: 500px;\r\n    max-height: 500px;\r\n    min-width: 170px;\r\n    margin: 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.top-banner {\r\n    background-color: rgb(140, 161, 189);\r\n}\r\n\r\n.nav > .nav-item > .nav-link.active {\r\n    color: rgb(14, 126, 116);\r\n}\r\n\r\n.nav-divider {\r\n    padding-right: 15px;\r\n    margin-right: 15px;\r\n}\r\n\r\n.collapse.navbar-collapse > .nav-link {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    vertical-align: middle;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light top-banner\">\r\n  <a class=\"navbar-brand\" routerLink=\"/\"><i class=\"fa fa-leaf\" aria-hidden=\"true\">\r\n      <img src=\"/assets/logo.svg\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\r\n      Ziontech</i></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" \r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\r\n    (click)=\"toggleMenu()\"\r\n    [attr.aria-expanded]=\"!isCollapsed\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngbCollapse]=\"isCollapsed\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Contact</a></li>\r\n      <li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">About</a></li>\r\n      <li class=\"nav-item\"><mat-icon color=\"warn\">person</mat-icon><strong>{{authService.currentUser.name}} as {{authService.currentRoleName()}}</strong></li>\r\n    </ul>\r\n    <a class=\"nav-link\" (click)=\"logout()\"><mat-icon color=\"warn\">exit_to_app</mat-icon>Logout</a>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-11 col-md-1 sidebar bg-dark\" id=\"sidebar\" role=\"navigation\">\r\n        <ul class=\"nav flex-column sidebar\">\r\n          <li class=\"nav-item active\" *ngIf=\"authService.isAuth(roles.Grower)\" >\r\n              <a class=\"nav-link\" (click)=\"navigateTo(roles.Grower)\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Grower</a>\r\n          </li>\r\n          <li class=\"nav-item\" *ngIf=\"authService.isAuth(roles.Winery)\">\r\n            <a class=\"nav-link\" (click)=\"navigateTo(roles.Winery)\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Winery</a>\r\n          </li>\r\n          <li class=\"nav-item\" *ngIf=\"authService.isAuth(roles.Bottler)\">\r\n            <a class=\"nav-link\" (click)=\"navigateTo(roles.Bottler)\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Bottler</a>\r\n          </li>\r\n          <li class=\"nav-item\" *ngIf=\"authService.isAuth(roles.Distributor)\">\r\n            <a class=\"nav-link\" (click)=\"navigateTo(roles.Distributor)\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Driver</a>\r\n          </li>\r\n          <li class=\"nav-divider\"><mat-divider></mat-divider></li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" (click)=\"navigateToTransaction()\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Transaction</a>\r\n          </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"col-11 col-md-10\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_Roles_enum__ = __webpack_require__("./src/app/shared/Roles.enum.ts");
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
        this.roles = __WEBPACK_IMPORTED_MODULE_5__shared_Roles_enum__["a" /* Roles */];
    }
    MainComponent.prototype.ngOnInit = function () {
        this.router.navigate(["/home/products/" + this.authService.currentRole]);
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
    MainComponent.prototype.navigateTo = function (asRole) {
        this.authService.currentRole = asRole;
        this.authService.transaction = false;
        this.router.navigate(["/home/products/" + this.authService.currentRole]);
    };
    MainComponent.prototype.navigateToTransaction = function () {
        this.authService.transaction = true;
        this.router.navigate(['/home/products/transaction']);
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

module.exports = "\r\n<h1>Access Denied</h1>"

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

/***/ "./src/app/product-list/confirm-dialog/confirm-dialog.component.css":
/***/ (function(module, exports) {

module.exports = ".confirm-tranfer-grid .mat-grid-tile:nth-child(odd) {\r\n    text-align: left;\r\n    background-color: rgb(235, 217, 217);\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/product-list/confirm-dialog/confirm-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Please confirm...</h2>\r\n<mat-dialog-content>\r\n    <mat-grid-list cols=\"2\" rowHeight=\"30px\" class=\"confirm-tranfer-grid\">\r\n        <mat-grid-tile>\r\n          ID:\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            {{ product.id}}\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n          Company Name:\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            {{ product.companyName}}\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n          Region:\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            {{ product.grapes[0].region}}\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n          Variety:\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            {{ product.grapes[0].variety}}\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n          Vintage:\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            {{ product.grapes[0].vintage}}\r\n        </mat-grid-tile>\r\n      </mat-grid-list>\r\n  <p>Are you sure you want to transfer this product?</p>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-raised-button mat-dialog-close=\"yes\" color=\"primary\">Yes</button>\r\n  <button mat-raised-button mat-dialog-close=\"no\" color=\"warn\">No</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/product-list/confirm-dialog/confirm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogComponent; });
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


var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(data) {
        this.product = data;
    }
    ConfirmDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__("./src/app/product-list/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__("./src/app/product-list/confirm-dialog/confirm-dialog.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 700px;\r\n  }\r\n\r\n  .example-header {\r\n    min-height: 64px;\r\n    padding-top: 10px;\r\n  }\r\n\r\n  .clickable-row {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .mat-cell.mat-column-action.mat-raised-button > .mat-icon {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    vertical-align: middle;\r\n  }\r\n\r\n  .mat-cell.mat-column-action.mat-raised-button {\r\n    padding: 0px;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\" *ngIf=\"showAddButton\">\r\n  <button mat-raised-button color=\"primary\" [routerLink]=\"['/home/grower/new/0']\">Add</button>\r\n</div>\r\n<div class=\"example-header\">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\" [(ngModel)]=\"filterValue\">\r\n    <button mat-button *ngIf=\"filterValue\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"filterValue='';applyFilter('')\">\r\n        <mat-icon>close</mat-icon>\r\n    </button>\r\n  </mat-form-field>\r\n</div>\r\n\r\n<div class=\"example-container mat-elevation-z8\">\r\n  <mat-table #table [dataSource]=\"dataSource\" matSort multiTemplateDataRows=\"true\">\r\n\r\n    <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> {{ column.header }} </mat-header-cell>\r\n      <mat-cell \r\n        *matCellDef=\"let element\" \r\n        (click)=\"transfer($event,element,column)\" \r\n        [ngClass]=\"{'mat-raised-button mat-primary' : column.cell(element) === 'Transfer'}\"\r\n        >\r\n        <mat-icon color=\"warn\" *ngIf=\"column.cell(element) === 'Transfer'\">visibility</mat-icon>\r\n        {{ column.cell(element)}} \r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"\r\n      (click)=\"rowClick(row)\"\r\n      class=\"clickable-row\"\r\n    ></mat-row>\r\n  </mat-table>\r\n  <mat-paginator #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\" [showFirstLastButtons]=\"true\"></mat-paginator>\r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__qr_dialog_qr_dialog_component__ = __webpack_require__("./src/app/qr-dialog/qr-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_hyperledger_service__ = __webpack_require__("./src/app/services/hyperledger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_Roles_enum__ = __webpack_require__("./src/app/shared/Roles.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__confirm_dialog_confirm_dialog_component__ = __webpack_require__("./src/app/product-list/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_no_auth_error__ = __webpack_require__("./src/app/common/no-auth-error.ts");
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
    function ProductListComponent(service, router, authService, route, dialog) {
        this.service = service;
        this.router = router;
        this.authService = authService;
        this.route = route;
        this.dialog = dialog;
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_10__angular_common__["d" /* DatePipe */]('en-AU');
        this.componentDestroyed$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.displayedColumns = [];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.populateMetaData();
            _this.service.getAllProducts(_this.authService.transaction)
                .takeUntil(_this.componentDestroyed$)
                .subscribe(function (response) {
                setTimeout(function () {
                    console.log(response);
                    _this.currentRolename = _this.authService.currentRoleName();
                    _this.records = response;
                    _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatTableDataSource */](_this.records);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                });
            }, function (err) {
                if (err instanceof __WEBPACK_IMPORTED_MODULE_11__common_no_auth_error__["a" /* NoAuthError */]) {
                    _this.router.navigate(['login']);
                }
            });
        });
    };
    ProductListComponent.prototype.ngOnDestroy = function () {
        this.componentDestroyed$.next(true);
        this.componentDestroyed$.complete();
    };
    ProductListComponent.prototype.populateMetaData = function () {
        switch (this.authService.currentRole) {
            case __WEBPACK_IMPORTED_MODULE_8__shared_Roles_enum__["a" /* Roles */].Grower:
                this.populateGrowerMetaData();
                break;
            case __WEBPACK_IMPORTED_MODULE_8__shared_Roles_enum__["a" /* Roles */].Winery:
                this.populateWineryMetaData();
                break;
            case __WEBPACK_IMPORTED_MODULE_8__shared_Roles_enum__["a" /* Roles */].Bottler:
                this.populateBottlerMetaData();
                break;
            case __WEBPACK_IMPORTED_MODULE_8__shared_Roles_enum__["a" /* Roles */].Distributor:
                this.populateDriverMetaData();
                break;
        }
        /** Column definitions in order */
        this.displayedColumns = this.columns.map(function (x) { return x.columnDef; });
    };
    ProductListComponent.prototype.populateGrowerMetaData = function () {
        this.columns = [
            { columnDef: 'companyName', header: 'Company Name', cell: function (row) { return "" + row.companyName; } },
            { columnDef: 'region', header: 'Region', cell: function (row) { return "" + row.grapes[0].region; } },
            { columnDef: 'vineyard', header: 'Vineyard', cell: function (row) { return "" + row.grapes[0].vineyard; } },
            { columnDef: 'block', header: 'Block', cell: function (row) { return "" + row.grapes[0].block; } },
            { columnDef: 'rowRange', header: 'Row Range', cell: function (row) { return "" + row.grapes[0].rowRange; } },
            { columnDef: 'variety', header: 'Variety', cell: function (row) { return "" + row.grapes[0].variety; } },
            { columnDef: 'vintage', header: 'Vintage', cell: function (row) { return "" + row.grapes[0].vintage; } },
            { columnDef: 'estimatedWeight', header: 'Estimated Weight', cell: function (row) { return "" + row.grapes[0].estimatedWeight; } }
        ];
        if (this.authService.transaction) {
            this.columns.push({ columnDef: 'actualWeight', header: 'Actual Weight', cell: function (row) { return "" + row.grapes[0].actualWeight; } });
        }
        else {
            this.columns.push({ columnDef: 'action', header: 'Action', cell: function (row) { return 'Transfer'; } });
        }
    };
    ProductListComponent.prototype.populateWineryMetaData = function () {
        this.columns = [
            { columnDef: 'companyName', header: 'Company Name', cell: function (row) { return "" + row.companyName; } },
            { columnDef: 'variety', header: 'Variety', cell: function (row) { return "" + row.grapes[0].variety; } },
            { columnDef: 'vintage', header: 'Vintage', cell: function (row) { return "" + row.grapes[0].vintage; } },
            { columnDef: 'estimatedWeight', header: 'Estimated Weight', cell: function (row) { return "" + row.grapes[0].estimatedWeight; } },
            { columnDef: 'actualWeight', header: 'Actual Weight', cell: function (row) { return "" + (row.grapes[0].actualWeight ? row.grapes[0].actualWeight : ''); } },
            { columnDef: 'volume', header: 'Volume', cell: function (row) { return "" + (row.wineries && row.wineries.length && row.wineries[0].volume ? row.wineries[0].volume : ''); } }
        ];
        if (!this.authService.transaction) {
            this.columns.push({
                columnDef: 'action',
                header: 'Action',
                cell: function (row) { return row.grapes[0].actualWeight && row.wineries && row.wineries.length && row.wineries[0].volume ? 'Transfer' : ''; }
            });
        }
    };
    ProductListComponent.prototype.populateBottlerMetaData = function () {
        this.columns = [
            { columnDef: 'companyName', header: 'Company Name', cell: function (row) { return "" + row.companyName; } },
            { columnDef: 'variety', header: 'Variety', cell: function (row) { return "" + row.grapes[0].variety; } },
            { columnDef: 'vintage', header: 'Vintage', cell: function (row) { return "" + row.grapes[0].vintage; } },
            { columnDef: 'volume', header: 'Volume', cell: function (row) { return "" + (row.wineries && row.wineries.length ? row.wineries[0].volume : ''); } },
            { columnDef: 'brand', header: 'Brand', cell: function (row) { return "" + (row.wines && row.wines.length && row.wines[0].brand ? row.wines[0].brand : ''); } },
            { columnDef: 'label', header: 'Label', cell: function (row) { return "" + (row.wines && row.wines.length && row.wines[0].label ? row.wines[0].label : ''); } },
            { columnDef: 'corkCap', header: 'Cork Cap', cell: function (row) { return "" + (row.wines && row.wines.length && row.wines[0].corkCap ? row.wines[0].corkCap : ''); } },
            { columnDef: 'status', header: 'Status', cell: function (row) { return "" + (row.wines && row.wines.length && row.wines[0].status ? row.wines[0].status : ''); } }
        ];
        if (!this.authService.transaction) {
            this.columns.push({
                columnDef: 'action',
                header: 'Action',
                cell: function (row) { return row.grapes[0].actualWeight && row.wineries && row.wineries.length && row.wineries[0].volume ? 'Transfer' : ''; }
            });
        }
    };
    ProductListComponent.prototype.populateDriverMetaData = function () {
        var _this = this;
        this.columns = [
            // { columnDef: 'key', header: '#', cell: (row: Product) => `${row.key}` },
            { columnDef: 'companyName', header: 'Company Name', cell: function (row) { return "" + row.companyName; } },
            { columnDef: 'region', header: 'Region', cell: function (row) { return "" + row.grapes[0].region; } },
            { columnDef: 'vineyard', header: 'Vineyard', cell: function (row) { return "" + row.grapes[0].vineyard; } },
            { columnDef: 'actualWeight', header: 'Actual Weight', cell: function (row) { return "" + row.grapes[0].actualWeight; } },
            { columnDef: 'volume', header: 'Volume', cell: function (row) { return "" + (row.wineries && row.wineries.length ? row.wineries[0].volume : ''); } },
            { columnDef: 'brand', header: 'Brand', cell: function (row) { return "" + (row.wines && row.wines.length ? row.wines[0].brand : ''); } },
            { columnDef: 'from', header: 'From', cell: function (row) { return "" + (row.transports && row.transports.length ? row.transports[0].from : ''); } },
            { columnDef: 'to', header: 'To', cell: function (row) { return "" + (row.transports && row.transports.length ? row.transports[0].to : ''); } },
            { columnDef: 'start', header: 'Start', cell: function (row) { return "" + (row.transports && row.transports.length ? _this.datePipe.transform(row.transports[0].start, 'd MMM yyyy') : ''); } },
            { columnDef: 'end', header: 'End', cell: function (row) { return "" + (row.transports && row.transports.length ? _this.datePipe.transform(row.transports[0].end, 'd MMM yyyy') : ''); } },
            { columnDef: 'driverId', header: 'Driver Id', cell: function (row) { return "" + (row.transports && row.transports.length ? row.transports[0].driverId : ''); } },
            { columnDef: 'plateNumber', header: 'Plate Number', cell: function (row) { return "" + (row.transports && row.transports.length ? row.transports[0].plateNumber : ''); } },
        ];
        if (!this.authService.transaction) {
            this.columns.push({
                columnDef: 'action',
                header: 'Action',
                cell: function (row) { return 'Transfer'; }
            });
        }
    };
    ProductListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ProductListComponent.prototype.transfer = function ($event, row, cell) {
        var _this = this;
        if (cell.header === 'Action') {
            var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], {
                width: '550px',
                disableClose: true,
                data: row
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result === 'yes') {
                    _this.records = _this.records.filter(function (e) { return e.id !== row.id; });
                    _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatTableDataSource */](_this.records);
                    _this.service.transportProduct(row.id)
                        .subscribe(function (res) { return console.log(res); });
                }
            });
            $event.stopPropagation();
        }
        return;
    };
    Object.defineProperty(ProductListComponent.prototype, "showAddButton", {
        get: function () {
            return this.authService.currentRole === __WEBPACK_IMPORTED_MODULE_8__shared_Roles_enum__["a" /* Roles */].Grower && !this.authService.transaction;
        },
        enumerable: true,
        configurable: true
    });
    ProductListComponent.prototype.rowClick = function (row) {
        if (this.authService.transaction) {
            this.openQrDialog(row.id);
            return;
        }
        switch (this.authService.currentRole) {
            case __WEBPACK_IMPORTED_MODULE_8__shared_Roles_enum__["a" /* Roles */].Grower:
                this.router.navigateByUrl("/home/grower/new/" + row.id);
                break;
            case __WEBPACK_IMPORTED_MODULE_8__shared_Roles_enum__["a" /* Roles */].Winery:
                this.router.navigateByUrl("/home/winery/product/" + row.id);
                break;
            case __WEBPACK_IMPORTED_MODULE_8__shared_Roles_enum__["a" /* Roles */].Bottler:
                this.router.navigateByUrl("/home/bottler/product/" + row.id);
                break;
            case __WEBPACK_IMPORTED_MODULE_8__shared_Roles_enum__["a" /* Roles */].Distributor:
                this.router.navigateByUrl("/home/driver/product/" + row.id);
                break;
        }
    };
    ProductListComponent.prototype.openQrDialog = function (id) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__qr_dialog_qr_dialog_component__["a" /* QrDialogComponent */], {
            data: {
                id: id
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatPaginator */])
    ], ProductListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSort */])
    ], ProductListComponent.prototype, "sort", void 0);
    ProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__("./src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__("./src/app/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_hyperledger_service__["a" /* HyperledgerService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialog */]])
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

module.exports = "<h2 mat-dialog-title>Please scan...</h2>\r\n<mat-dialog-content>\r\n  <img [src]=\"imagePath\" alt=\"\">\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-raised-button mat-dialog-close=\"yes\">Ok</button>\r\n</mat-dialog-actions>\r\n\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guard_services_auth_guard_service__ = __webpack_require__("./src/app/guard-services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__no_access_no_access_component__ = __webpack_require__("./src/app/no-access/no-access.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__driver_driver_component__ = __webpack_require__("./src/app/driver/driver.component.ts");









var appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_3__main_main_component__["a" /* MainComponent */],
        children: [
            // { path: '', redirectTo: 'products/grower', pathMatch: 'full' },
            { path: 'products/:action', component: __WEBPACK_IMPORTED_MODULE_0__product_list_product_list_component__["a" /* ProductListComponent */] },
            { path: 'grower/new/:id', component: __WEBPACK_IMPORTED_MODULE_4__grower_add_product_add_product_component__["a" /* AddProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guard_services_auth_guard_service__["e" /* GrowerAuthGuard */]] },
            { path: 'winery/product/:id', component: __WEBPACK_IMPORTED_MODULE_1__winery_winery_product_winery_product_component__["a" /* WineryProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guard_services_auth_guard_service__["f" /* WineryAuthGuard */]] },
            { path: 'bottler/product/:id', component: __WEBPACK_IMPORTED_MODULE_2__bottler_bottler_product_bottler_product_component__["a" /* BottlerProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guard_services_auth_guard_service__["c" /* BottlerAuthGuard */]] },
            { path: 'driver/product/:id', component: __WEBPACK_IMPORTED_MODULE_8__driver_driver_component__["a" /* DriverComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guard_services_auth_guard_service__["d" /* DriverAuthGuard */]] },
        ]
    },
    { path: 'no-access', component: __WEBPACK_IMPORTED_MODULE_7__no_access_no_access_component__["a" /* NoAccessComponent */] }
];


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__server_url__ = __webpack_require__("./src/app/services/server.url.ts");
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
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__server_url__["a" /* baseUrl */];
        var token = localStorage.getItem('token');
        if (token) {
            var jwt = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
            this.currentUser = jwt.decodeToken(token);
            this.populateUserInfor();
        }
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        return this.http.post(this.baseUrl + '/api/login', credentials)
            .map(function (response) {
            var result = response.json();
            if (result && result.token) {
                localStorage.setItem('token', result.token);
                var jwt = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
                _this.currentUser = jwt.decodeToken(localStorage.getItem('token'));
                _this.populateUserInfor();
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthService.prototype.populateUserInfor = function () {
        var _this = this;
        console.log(this.currentUser);
        this.currentUser.roleMap = new Map();
        this.currentUser.roleIds = this.currentUser.roles.map(function (role) {
            _this.currentUser.roleMap.set(role.id, role.name);
            return role.id;
        });
        this.currentRole = this.currentUser.roleIds[0];
    };
    AuthService.prototype.isAuth = function (roleId) {
        return this.currentUser && this.currentUser.roleIds && this.currentUser.roleIds.includes(roleId);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.currentUser = null;
    };
    AuthService.prototype.currentRoleName = function () {
        if (this.currentRole && this.currentUser.roleMap && this.currentUser.roleMap.size > 1) {
            var roleName = this.currentUser.roleMap.get(this.currentRole);
            return roleName;
        }
        return '';
    };
    AuthService.prototype.isLoggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('token');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_Roles_enum__ = __webpack_require__("./src/app/shared/Roles.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__server_url__ = __webpack_require__("./src/app/services/server.url.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_no_auth_error__ = __webpack_require__("./src/app/common/no-auth-error.ts");
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
    function HyperledgerService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_11__server_url__["a" /* baseUrl */];
    }
    HyperledgerService.prototype.getAllProducts = function (history) {
        switch (this.authService.currentRole) {
            case __WEBPACK_IMPORTED_MODULE_9__shared_Roles_enum__["a" /* Roles */].Grower:
                return this.http.get(this.baseUrl + "/api/grapes", { params: { history: history } })
                    .map(function (res) { return res.json(); })
                    .catch(this.handleError);
            case __WEBPACK_IMPORTED_MODULE_9__shared_Roles_enum__["a" /* Roles */].Winery:
                return this.http.get(this.baseUrl + "/api/wineries", { params: { history: history } })
                    .map(function (res) { return res.json(); })
                    .catch(this.handleError);
            case __WEBPACK_IMPORTED_MODULE_9__shared_Roles_enum__["a" /* Roles */].Bottler:
                return this.http.get(this.baseUrl + "/api/bottlers", { params: { history: history } })
                    .map(function (res) { return res.json(); })
                    .catch(this.handleError);
            case __WEBPACK_IMPORTED_MODULE_9__shared_Roles_enum__["a" /* Roles */].Distributor:
                if (history) {
                    return this.http.get(this.baseUrl + "/api/transports", { params: { history: history } })
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                }
                return this.http.get(this.baseUrl + "/api/transports", { params: { history: history } })
                    .map(function (res) {
                    var ps = res.json();
                    console.log(ps);
                    ps.products.forEach(function (product) {
                        product.transports = product.transports || [];
                        ps.transports.forEach(function (transport) {
                            if (product.id === transport.productId) {
                                product.transports.push(transport);
                            }
                        });
                    });
                    console.log(ps.products);
                    return ps.products;
                })
                    .catch(this.handleError);
        }
    };
    HyperledgerService.prototype.getProduct = function (id) {
        switch (this.authService.currentRole) {
            case __WEBPACK_IMPORTED_MODULE_9__shared_Roles_enum__["a" /* Roles */].Grower:
                return this.http.get(this.baseUrl + "/api/grape", { params: { id: id } })
                    .map(function (res) { return res.json(); })
                    .catch(this.handleError);
            case __WEBPACK_IMPORTED_MODULE_9__shared_Roles_enum__["a" /* Roles */].Winery:
                return this.http.get(this.baseUrl + "/api/winery", { params: { id: id } })
                    .map(function (res) { return res.json(); })
                    .catch(this.handleError);
            case __WEBPACK_IMPORTED_MODULE_9__shared_Roles_enum__["a" /* Roles */].Bottler:
                return this.http.get(this.baseUrl + "/api/bottler", { params: { id: id } })
                    .map(function (res) { return res.json(); })
                    .catch(this.handleError);
            case __WEBPACK_IMPORTED_MODULE_9__shared_Roles_enum__["a" /* Roles */].Distributor:
                return this.http.get(this.baseUrl + "/api/transport", { params: { id: id } })
                    .map(function (res) {
                    var ps = res.json();
                    console.log(ps);
                    if (ps.transport) {
                        ps.product.transports = [];
                        ps.product.transports.push(ps.transport);
                    }
                    return ps.product;
                })
                    .catch(this.handleError);
        }
    };
    HyperledgerService.prototype.addOrUpdateProduct = function (data) {
        data.userId = this.authService.currentUser.id;
        console.log(data);
        console.log(this.authService.currentRole);
        switch (this.authService.currentRole) {
            case __WEBPACK_IMPORTED_MODULE_9__shared_Roles_enum__["a" /* Roles */].Grower:
                if (data.id) {
                    return this.http.post(this.baseUrl + '/api/grape/update/', data)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                }
                else {
                    return this.http.put(this.baseUrl + '/api/grape/create', data)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                }
            case __WEBPACK_IMPORTED_MODULE_9__shared_Roles_enum__["a" /* Roles */].Winery:
                if (data.wineryId) {
                    return this.http.post(this.baseUrl + '/api/winery/update/', data)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                }
                else {
                    return this.http.put(this.baseUrl + '/api/winery/create', data)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                }
            case __WEBPACK_IMPORTED_MODULE_9__shared_Roles_enum__["a" /* Roles */].Bottler:
                if (data.wineId) {
                    return this.http.post(this.baseUrl + '/api/bottler/update/', data)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                }
                else {
                    return this.http.put(this.baseUrl + '/api/bottler/create', data)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                }
            case __WEBPACK_IMPORTED_MODULE_9__shared_Roles_enum__["a" /* Roles */].Distributor:
                console.log('--------------------');
                if (data.transportId) {
                    return this.http.post(this.baseUrl + '/api/transport/update/', data)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                }
                else {
                    return this.http.put(this.baseUrl + '/api/transport/create', data)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                }
        }
    };
    HyperledgerService.prototype.deleteProduct = function (id) {
        return this.http.delete(this.baseUrl + ("/api/grape/" + id))
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    HyperledgerService.prototype.transportProduct = function (id) {
        console.log(id);
        switch (this.authService.currentRole) {
            case __WEBPACK_IMPORTED_MODULE_9__shared_Roles_enum__["a" /* Roles */].Grower:
                return this.http.post(this.baseUrl + '/api/grape/transport', { id: id })
                    .map(function (res) { return res.json(); })
                    .catch(this.handleError);
            case __WEBPACK_IMPORTED_MODULE_9__shared_Roles_enum__["a" /* Roles */].Winery:
                return this.http.post(this.baseUrl + '/api/winery/transport', { id: id })
                    .map(function (res) { return res.json(); })
                    .catch(this.handleError);
            case __WEBPACK_IMPORTED_MODULE_9__shared_Roles_enum__["a" /* Roles */].Bottler:
                return this.http.post(this.baseUrl + '/api/bottler/transport', { id: id })
                    .map(function (res) { return res.json(); })
                    .catch(this.handleError);
            case __WEBPACK_IMPORTED_MODULE_9__shared_Roles_enum__["a" /* Roles */].Distributor:
                return this.http.post(this.baseUrl + '/api/transport/transport', { id: id })
                    .map(function (res) { return res.json(); })
                    .catch(this.handleError);
        }
    };
    HyperledgerService.prototype.handleError = function (error) {
        if (error.status === 400) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(new __WEBPACK_IMPORTED_MODULE_6__common_bad_input__["a" /* BadInput */](error.json));
        }
        if (error.status === 404) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(new __WEBPACK_IMPORTED_MODULE_7__common_not_found_error__["a" /* NotFoundError */](error));
        }
        if (error.status === 401) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(new __WEBPACK_IMPORTED_MODULE_12__common_no_auth_error__["a" /* NoAuthError */](error));
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(new __WEBPACK_IMPORTED_MODULE_8__common_app_error__["a" /* AppError */](error));
    };
    HyperledgerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_10__auth_service__["a" /* AuthService */]])
    ], HyperledgerService);
    return HyperledgerService;
}());



/***/ }),

/***/ "./src/app/services/server.url.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseUrl; });
var baseUrl = '';


/***/ }),

/***/ "./src/app/shared/Roles.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Roles; });
var Roles;
(function (Roles) {
    Roles[Roles["Grower"] = 1] = "Grower";
    Roles[Roles["Winery"] = 2] = "Winery";
    Roles[Roles["Bottler"] = 3] = "Bottler";
    Roles[Roles["Distributor"] = 4] = "Distributor";
})(Roles || (Roles = {}));


/***/ }),

/***/ "./src/app/shared/base/base.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/base/base.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  base works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/shared/base/base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
        this.componentDestroyed$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    BaseComponent.prototype.ngOnInit = function () {
    };
    BaseComponent.prototype.ngOnDestroy = function () {
    };
    BaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-base',
            template: __webpack_require__("./src/app/shared/base/base.component.html"),
            styles: [__webpack_require__("./src/app/shared/base/base.component.css")]
        })
    ], BaseComponent);
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/winery/winery-product/winery-product.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 80%;\r\n  }\r\n  \r\n  .example-container form {\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .example-container form > * {\r\n    margin: 5px 0;\r\n  }\r\n  \r\n  .example-container .mat-radio-button {\r\n    margin: 0 5px;\r\n  }\r\n    "

/***/ }),

/***/ "./src/app/winery/winery-product/winery-product.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n  <div class=\"example-container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <mat-grid-list cols=\"1\" rowHeight=\"70px\" gutterSize=\"20px\">\r\n          <mat-grid-tile>\r\n            <mat-form-field>\r\n              <mat-label>Actual Weight</mat-label>\r\n              <input matInput placeholder=\"Actual Weight\" formControlName=\"actualWeight\">\r\n              <mat-error *ngIf=\"form.get('actualWeight').invalid\">{{getErrorMessage()}}</mat-error>\r\n            </mat-form-field>\r\n          </mat-grid-tile>\r\n          <mat-grid-tile>\r\n            <mat-form-field>\r\n              <mat-label>Volume</mat-label>\r\n              <input matInput placeholder=\"Volume\" formControlName=\"volume\">\r\n              <mat-error *ngIf=\"form.get('volume').invalid\">{{getErrorMessage()}}</mat-error>\r\n            </mat-form-field>\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n      </div>\r\n      <div class=\"col\" *ngIf=\"showCard()\">\r\n        <div class=\"card\" style=\"width: 20rem;\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Product information</h5>\r\n            <ul class=\"list-group list-group-flush\">\r\n              <li class=\"list-group-item\">\r\n                <div class=\"row\">\r\n                  <div class=\"col\">Compnay:</div>\r\n                  <div class=\"col\">{{ product.companyName }}</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"row\">\r\n                  <div class=\"col\">Variety:</div>\r\n                  <div class=\"col\">{{ grape.variety }}</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"row\">\r\n                  <div class=\"col\">Vintage:</div>\r\n                  <div class=\"col\">{{ grape.vintage }}</div>\r\n                </div>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <div class=\"row\">\r\n                  <div class=\"col\">Weight:</div>\r\n                  <div class=\"col\">{{ grape.estimatedWeight }}</div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"button-row\">\r\n    <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\r\n    <button mat-raised-button color=\"warn\" [routerLink]=\"['/home/products','winery']\">Cancel</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/winery/winery-product/winery-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WineryProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_hyperledger_service__ = __webpack_require__("./src/app/services/hyperledger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_no_auth_error__ = __webpack_require__("./src/app/common/no-auth-error.ts");
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
    function WineryProductComponent(service, router, route, authService, fb) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.fb = fb;
        this.bottlingCompanies = ['Best Bottlers', 'Liquid Goods'];
        this.componentDestroyed$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.product = new Object();
    }
    WineryProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            actualWeight: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            volume: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
        this.route.params.subscribe(function (pamams) {
            _this.service.getProduct(pamams.id)
                .takeUntil(_this.componentDestroyed$)
                .subscribe(function (product) {
                setTimeout(function () {
                    console.log(product);
                    _this.product = product;
                    _this.grape = product.grapes[0];
                    _this.form.patchValue(_this.grape);
                    if (_this.product.wineries && _this.product.wineries.length) {
                        _this.form.patchValue(_this.product.wineries[0]);
                    }
                });
            }, function (err) {
                if (err instanceof __WEBPACK_IMPORTED_MODULE_6__common_no_auth_error__["a" /* NoAuthError */]) {
                    _this.router.navigate(['login']);
                }
            });
        });
    };
    WineryProductComponent.prototype.showCard = function () {
        return this.product && this.product.grapes && this.product.grapes.length;
    };
    WineryProductComponent.prototype.onSubmit = function (data) {
        var _this = this;
        if (this.form.valid) {
            var obj = {
                id: this.product.id,
                actualWeight: data.actualWeight,
                volume: data.volume
            };
            if (this.product.wineries && this.product.wineries.length) {
                obj['wineryId'] = this.product.wineries[0].id;
            }
            this.service.addOrUpdateProduct(obj)
                .finally(function () { return _this.router.navigate(['/home/products', _this.authService.currentRole]); })
                .subscribe(function (res) { return console.log(res); });
        }
    };
    WineryProductComponent.prototype.getErrorMessage = function () {
        return 'You must enter a value';
    };
    WineryProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-winery-product',
            template: __webpack_require__("./src/app/winery/winery-product/winery-product.component.html"),
            styles: [__webpack_require__("./src/app/winery/winery-product/winery-product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_hyperledger_service__["a" /* HyperledgerService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
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