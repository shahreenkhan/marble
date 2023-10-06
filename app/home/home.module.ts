import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { ContactusComponent } from './contactus/contactus.component';
import { OurProductComponent } from './our-product/our-product.component';
import { BannerComponent } from './banner/banner.component';
import { FactoryComponent } from './factory/factory.component';
import { HrComponent } from './hr/hr.component';
import { JoinusComponent } from './joinus/joinus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexComponent,
    ContactusComponent,
    OurProductComponent,
    BannerComponent,
    FactoryComponent,
    HrComponent,
    JoinusComponent,
    PagenotfoundComponent,
  ],
  imports: [
    CommonModule,
     HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
