import { ProductListComponent } from './product-list/product-list.component';
import { WineryProductComponent } from './winery/winery-product/winery-product.component';
import { BottlerProductComponent } from './bottler/bottler-product/bottler-product.component';
import { MainComponent } from './main/main.component';
import { AddProductComponent } from './grower/add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import {
  AdminAuthGuard,
  GrowerAuthGuard,
  WineryAuthGuard,
  BottlerAuthGuard,
  DriverAuthGuard
 } from './guard-services/auth-guard.service';
import { NoAccessComponent } from './no-access/no-access.component';
import { DriverComponent } from './driver/driver.component';

export const appRoutes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: MainComponent,
    children: [
      // { path: '', redirectTo: 'products/grower', pathMatch: 'full' },
      { path: 'products/:role', component: ProductListComponent },
      { path: 'grower/new', component: AddProductComponent, canActivate: [GrowerAuthGuard] },
      { path: 'winery/product/:id', component: WineryProductComponent, canActivate: [WineryAuthGuard] },
      { path: 'bottler/product/:id', component: BottlerProductComponent, canActivate: [BottlerAuthGuard] },
      { path: 'driver/product/:id', component: DriverComponent, canActivate: [DriverAuthGuard] },
    ]
  },
  { path: 'no-access', component: NoAccessComponent }
];
