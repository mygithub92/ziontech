import { ProductListComponent } from './product-list/product-list.component';
import { WineryProductComponent } from './winery/winery-product/winery-product.component';
import { BottlerProductComponent } from './bottler/bottler-product/bottler-product.component';
import { MainComponent } from './main/main.component';
import { AddProductComponent } from './grower/add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { AdminAuthGuard } from './guard-services/admin-auth-guard.service';
import { NoAccessComponent } from './no-access/no-access.component';
import { GrowerAuthGuardService } from './guard-services/grower-auth-guard.service';
import { WineryAuthGuardService } from './guard-services/winery-auth-guard.service';
import { BottlerAuthGuardService } from './guard-services/bottler-auth-guard.service';

export const appRoutes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: MainComponent,
    children: [
      // { path: '', redirectTo: 'products/grower', pathMatch: 'full' },
      { path: 'products/:role', component: ProductListComponent },
      { path: 'grower/new', component: AddProductComponent, canActivate: [GrowerAuthGuardService] },
      { path: 'winery/product/:id', component: AddProductComponent, canActivate: [WineryAuthGuardService] },
      { path: 'bottler/product/:id', component: BottlerProductComponent, canActivate: [BottlerAuthGuardService] },
    ]
  },
  { path: 'no-access', component: NoAccessComponent }
];
