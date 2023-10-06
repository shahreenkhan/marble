import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './home/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  },
  {
    path:"home",
    loadChildren:() =>
    import("./home/home.module").then(m=> m.HomeModule)
 },
 {
  path:"tile",
  loadChildren:() =>
  import("./tile/tile.module").then(m=> m.TileModule)
},
{
 path:"faucet",
 loadChildren:() =>
 import("./faucet/faucet.module").then(m=> m.FaucetModule)
},
{
  path:"sanitaryware",
  loadChildren:() =>
  import("./sanitaryware/sanitaryware.module").then(m=> m.SanitarywareModule)
 },
 {
   path:"Quartz",
   loadChildren:() =>
   import("./quartz/quartz.module").then(m=> m.QuartzModule)
  },
  {
    path:"**",
    component:PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
