import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './grower/product-list/product-list.component';
import { AddProductComponent } from './grower/add-product/add-product.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatComponentsModule } from './mat-components/mat-components.module';
import { QrDialogComponent } from './qr-dialog/qr-dialog.component';
import { HyperledgerService } from './services/hyperledger.service';
import { AppErrorHandler } from './common/app-error-handler';
import { HyperledgerMockService } from './services/hyperledger.mock.service';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    MainComponent,
    QrDialogComponent
  ],
  entryComponents: [
    QrDialogComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    MatComponentsModule
  ],
  providers: [
    HyperledgerMockService,
    { provide: ErrorHandler, useClass: AppErrorHandler }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
