import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './products.component';
import {ProductsAddComponent} from './products-add/products-add.component';
import {ProductsEditComponent} from './products-edit/products-edit.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {ProductsDetailsComponent} from './products-details/products-details.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {path: 'add-products', component: ProductsAddComponent},
      {path: 'edit-products', component: ProductsEditComponent},
      {path: 'list-products', component: ProductsListComponent},
      {path: 'details-products', component: ProductsDetailsComponent},
    ]
  }
];

//      {path: '', loadChildren: () => import('./drivers/drivers.module').then(m => m.DriversModule)},
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {
}
