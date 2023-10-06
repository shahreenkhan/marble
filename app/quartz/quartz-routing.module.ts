import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuartzComponent } from './quartz/quartz.component';

const routes: Routes = [
  {
    path:"quartz",
    component:QuartzComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuartzRoutingModule { }
