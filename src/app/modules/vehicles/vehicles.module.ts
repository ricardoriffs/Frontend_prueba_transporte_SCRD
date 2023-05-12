import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    ReactiveFormsModule

  ]
})
export class VehiclesModule { }
