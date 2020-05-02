import { Injectable } from '@angular/core';
import {Pasajero} from 'src/app/Modelo/Pasajero';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PasajerosService {

  constructor(private http: HttpClient) { }
  URL = 'http://localhost:8181/micro_vuelos/pasajero';

  getPasajeros() {
     return this.http.get<Pasajero[]>(this.URL);
  }
  crearPasajero(pasajero: any){
    return this.http.post<Pasajero>(this.URL, pasajero);
  }

  getIdPasajero(idPasajero: number) {
      return this.http.get<Pasajero>(this.URL + '/' + idPasajero);
 }

 actualizarPasajero(pasajero: Pasajero) {
     return this.http.put<Pasajero>(this.URL + '/' + pasajero.idPasajero, pasajero);
 }

 borrarPasajero(pasajero: Pasajero){
  return this.http.delete<Pasajero>(this.URL + '/' + pasajero.idPasajero);
 }
}
