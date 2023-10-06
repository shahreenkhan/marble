import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TilesComponent } from './tiles/tiles.component';

const routes: Routes = [
  {
    path:"tiles",
    component:TilesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TileRoutingModule { }
