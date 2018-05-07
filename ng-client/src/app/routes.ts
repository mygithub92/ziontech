import { ProductListComponent } from './product-list/product-list.component';
import { WineryProductComponent } from './winery/winery-product/winery-product.component';
import { BottlerProductComponent } from './bottler/bottler-product/bottler-product.component';
import { MainComponent } from './main/main.component';
import { AddProductComponent } from './grower/add-product/add-product.component';

export const appRoutes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products/:role', component: ProductListComponent },
    { path: 'grower/new', component: AddProductComponent },
    { path: 'winery/product/:id', component: WineryProductComponent },
    { path: 'bottler/product/:id', component: BottlerProductComponent }
  ];
