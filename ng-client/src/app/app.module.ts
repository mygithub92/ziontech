import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule, Http, BaseRequestOptions, XHRBackend, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './grower/add-product/add-product.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatComponentsModule } from './mat-components/mat-components.module';
import { QrDialogComponent } from './qr-dialog/qr-dialog.component';
import { AppErrorHandler } from './common/app-error-handler';
import { appRoutes } from './routes';
import { BottlerProductComponent } from './bottler/bottler-product/bottler-product.component';
import { WineryProductComponent } from './winery/winery-product/winery-product.component';
import { LoginComponent } from './login/login.component';
import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt/angular2-jwt';
import { NoAccessComponent } from './no-access/no-access.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from './product-list/confirm-dialog/confirm-dialog.component';
import { DriverComponent } from './driver/driver.component';
import { httpFactory } from './http-interceptor/http.factory';
import {
  AuthGuard,
  AdminAuthGuard,
  BottlerAuthGuard,
  DriverAuthGuard,
  GrowerAuthGuard,
  WineryAuthGuard
 } from './guard-services/auth-guard.service';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';
import { HyperledgerService } from './services/hyperledger.service';
import { AuthService } from './services/auth.service';
import { BaseComponent } from './shared/base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    MainComponent,
    QrDialogComponent,
    BottlerProductComponent,
    WineryProductComponent,
    LoginComponent,
    NoAccessComponent,
    ConfirmDialogComponent,
    DriverComponent,
    DeleteConfirmDialogComponent,
    BaseComponent
  ],
  entryComponents: [
    QrDialogComponent,
    ConfirmDialogComponent,
    DeleteConfirmDialogComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    MatComponentsModule,
  ],
  providers: [
    // { provide: ErrorHandler, useClass: AppErrorHandler },
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    },
    AuthGuard,
    AdminAuthGuard,
    BottlerAuthGuard,
    DriverAuthGuard,
    GrowerAuthGuard,
    WineryAuthGuard,
    AuthHttp,
    HyperledgerService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
