import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TileRoutingModule } from './tile-routing.module';
import { TilesComponent } from './tiles/tiles.component';


@NgModule({
  declarations: [
    TilesComponent
  ],
  imports: [
    CommonModule,
    TileRoutingModule
  ]
})
export class TileModule { }
