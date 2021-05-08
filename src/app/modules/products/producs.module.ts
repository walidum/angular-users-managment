import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products.component';
import {RouterModule} from '@angular/router';
import {ProductsListComponent} from './products-list/products-list.component';
import {ProductsAddComponent} from './products-add/products-add.component';
import {ProductsEditComponent} from './products-edit/products-edit.component';
import {ProductsDetailsComponent} from './products-details/products-details.component';
import {AllComponent} from './all/all.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductsAddComponent,
    ProductsEditComponent,
    ProductsDetailsComponent,
    AllComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    RouterModule,
    MatButtonModule
  ]
})
export class ProducsModule {
}
