import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './products.component';
import {ProductsAddComponent} from './products-add/products-add.component';
import {ProductsEditComponent} from './products-edit/products-edit.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {ProductsDetailsComponent} from './products-details/products-details.component';
import {AllComponent} from "./all/all.component";

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {path: 'add', component: ProductsAddComponent},
      {path: 'edit', component: ProductsEditComponent},
      {path: 'list', component: ProductsListComponent},
      {path: 'details', component: ProductsDetailsComponent},
      {path: 'all', component: AllComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {
}
