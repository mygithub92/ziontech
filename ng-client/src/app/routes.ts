import { ProductListComponent } from './grower/product-list/product-list.component';
import { MainComponent } from './main/main.component';
import { AddProductComponent } from './grower/add-product/add-product.component';

export const appRoutes = [
    { path: '', redirectTo: 'grower', pathMatch: 'full' },
    { path: 'grower', component: ProductListComponent },
    { path: 'grower/new', component: AddProductComponent },
    { path: 'transaction', component: ProductListComponent },
  ];
