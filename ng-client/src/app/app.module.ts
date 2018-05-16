import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
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
import { AuthGuard } from './guard-services/auth-guard.service';
import { AdminAuthGuard } from './guard-services/admin-auth-guard.service';
import { GrowerAuthGuard } from './guard-services/grower-auth-guard.service';
import { WineryAuthGuard } from './guard-services/winery-auth-guard.service';
import { BottlerAuthGuard } from './guard-services/bottler-auth-guard.service';
import { NoAccessComponent } from './no-access/no-access.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from './product-list/confirm-dialog/confirm-dialog.component';
import { AppService } from './services/app.service';
import { AuthServiceProvider } from './services/auth.service.provider';

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
    ConfirmDialogComponent
  ],
  entryComponents: [
    QrDialogComponent,
    ConfirmDialogComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    MatComponentsModule
  ],
  providers: [
    // { provide: ErrorHandler, useClass: AppErrorHandler },
    AppService,
    AuthServiceProvider,
    AuthGuard,
    AdminAuthGuard,
    GrowerAuthGuard,
    WineryAuthGuard,
    BottlerAuthGuard,
    AuthHttp
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
