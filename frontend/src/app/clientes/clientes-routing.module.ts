import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { MapaComponent } from './mapa/mapa.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteResolver } from './guards/cliente.resolver';


const routes: Routes = [
  { path: '', component: ClientesComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'novo', component: ClienteFormComponent, resolve: { cliente: ClienteResolver } },
  { path: 'editar/:id', component: ClienteFormComponent, resolve: { cliente: ClienteResolver } }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClientesRoutingModule { }
