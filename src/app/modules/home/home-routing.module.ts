import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path:'vehicles',
  loadChildren : () => import('../vehicles/vehicles.module').then((m)=>m.VehiclesModule)
},
 {
   path:'conductors',
   loadChildren : () => import('../drivers/drivers.module').then((m)=>m.DriversModule)

 },{
  path:'',
  loadChildren : () => import('../drivers/drivers.module').then((m)=>m.DriversModule)
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
