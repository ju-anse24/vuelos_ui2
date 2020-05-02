import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {ListarVueloComponent} from 'src/app/components/vuelo/listar/listar.component';
import {AgregarVueloComponent} from 'src/app/components/vuelo/agregar/agregar.component';
import {ListarComponent} from 'src/app/components/pasajero/listar/listar.component';
import {AgregarComponent} from 'src/app/components/pasajero/agregar/agregar.component';
import {EditarComponent} from 'src/app/components/pasajero/editar/editar.component';

const routes: Routes = [
  {path: 'listarVuelo', component: ListarVueloComponent},
  {path: 'agregarVuelo', component: AgregarVueloComponent},
  {path: 'listarPasajero', component: ListarComponent},
  {path: 'agregarPasajero', component: AgregarComponent},
  {path: 'editarPasajero', component: EditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
