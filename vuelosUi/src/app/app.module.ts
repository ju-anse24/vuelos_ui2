import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient, HttpClientJsonpModule } from '@angular/common/http';

import { TranslateModule, TranslateLoader} from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './components/pasajero/listar/listar.component';
import { AgregarComponent } from './components/pasajero/agregar/agregar.component';
import { EditarComponent } from './components/pasajero/editar/editar.component';
import { AgregarVueloComponent } from './components/vuelo/agregar/agregar.component';
import { ListarVueloComponent } from './components/vuelo/listar/listar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    AgregarVueloComponent,
    ListarVueloComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
