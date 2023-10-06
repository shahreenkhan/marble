import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuartzRoutingModule } from './quartz-routing.module';
import { QuartzComponent } from './quartz/quartz.component';


@NgModule({
  declarations: [
    QuartzComponent
  ],
  imports: [
    CommonModule,
    QuartzRoutingModule
  ]
})
export class QuartzModule { }
