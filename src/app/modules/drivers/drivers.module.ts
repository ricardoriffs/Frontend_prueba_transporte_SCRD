import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { AssociateComponent } from './components/associate/associate.component';
import { DisassociateComponent } from './components/disassociate/disassociate.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    AssociateComponent,
    DisassociateComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    ReactiveFormsModule
  ]
})
export class DriversModule { }
