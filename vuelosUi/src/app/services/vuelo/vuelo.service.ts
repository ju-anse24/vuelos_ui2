import { Injectable } from '@angular/core';
import {Vuelo} from 'src/app/Modelo/Vuelo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  constructor(private http: HttpClient) { }
  URL = 'http://localhost:8181/micro_vuelos/vuelo';

  getVuelos() {
     return this.http.get<Vuelo[]>(this.URL);
  }
  crearVuelo(vuelo: any){
    return this.http.post<Vuelo>(this.URL, vuelo);
  }
}
