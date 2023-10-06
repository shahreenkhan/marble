import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaucetsComponent } from './faucets/faucets.component';

const routes: Routes = [
  {
    path:"faucets",
    component:FaucetsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaucetRoutingModule { }
