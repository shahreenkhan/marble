import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ContactusComponent } from './contactus/contactus.component';
import { OurProductComponent } from './our-product/our-product.component';
import { FactoryComponent } from './factory/factory.component';
import { HrComponent } from './hr/hr.component';
const routes: Routes = [
  {
    path:"",
    component:IndexComponent
  },
  {
    path:"contactus",
    component:ContactusComponent
  },
  {
    path:"our_products",
    component:OurProductComponent
  },
  {
    path:"factory",
    component:FactoryComponent
  },
  {
    path:"human_resources",
    component:HrComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
