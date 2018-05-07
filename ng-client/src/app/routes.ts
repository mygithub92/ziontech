import { ProductListComponent } from './product-list/product-list.component';
import { MainComponent } from './main/main.component';
import { AddProductComponent } from './grower/add-product/add-product.component';

export const appRoutes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products/:role', component: ProductListComponent },
    { path: 'grower/new', component: AddProductComponent },
    { path: 'transaction', component: ProductListComponent },
  ];
