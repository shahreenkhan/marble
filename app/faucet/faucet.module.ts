import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaucetRoutingModule } from './faucet-routing.module';
import { FaucetsComponent } from './faucets/faucets.component';


@NgModule({
  declarations: [
    FaucetsComponent
  ],
  imports: [
    CommonModule,
    FaucetRoutingModule
  ]
})
export class FaucetModule { }
