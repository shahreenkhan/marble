import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanitarywareRoutingModule } from './sanitaryware-routing.module';
import { SanitarywareComponent } from './sanitaryware/sanitaryware.component';


@NgModule({
  declarations: [
    SanitarywareComponent
  ],
  imports: [
    CommonModule,
    SanitarywareRoutingModule
  ]
})
export class SanitarywareModule { }
