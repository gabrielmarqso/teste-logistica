import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';

import { ClientesComponent } from './clientes.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { MapaComponent } from './mapa/mapa.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';


@NgModule({
  declarations: [
    ClientesComponent,
    MapaComponent,
    ClienteListComponent,
    ClienteFormComponent,

  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ClientesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClientesModule { }
