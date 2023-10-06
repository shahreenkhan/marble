import { NgModule } from '@angular/core';

import { SanitarywareComponent } from './sanitaryware/sanitaryware.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"sanitaryware",
    component:SanitarywareComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanitarywareRoutingModule { }
