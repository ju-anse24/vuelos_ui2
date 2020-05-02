import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PasajerosService} from 'src/app/services/pasajeros/pasajeros.service';
import {Pasajero} from 'src/app/Modelo/Pasajero';
import { TranslateService } from '@ngx-translate/core';
import {AppComponent} from 'src/app/app.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  public pasajeros: Pasajero[];
  public pasajero: Pasajero;
  idPasajero: number;

  constructor(private router: Router, private serviceP: PasajerosService, public translate: TranslateService) {
    this.translate.addLangs(['es', 'en']);
   }

  ngOnInit(): void {
    this.serviceP.getPasajeros()
    .subscribe(data => {
    this.pasajeros = data;
  });
  }

  editarPasajero(pasajero: Pasajero){
    localStorage.setItem('idPasajero', pasajero.idPasajero.toString());
    this.router.navigate(['editarPasajero']);
  }
  eliminarPasajero(pasajero: Pasajero){
    this.serviceP.borrarPasajero(pasajero)
       .subscribe(data => {
       this.pasajeros = this.pasajeros.filter(P => P !== pasajero);
       alert('El usuario a sido eliminado');
    });
  }

  agregarPasajero(){
    return this.router.navigate(['agregarPasajero']);
  }

  buscar(idPasajero: number){
  this.serviceP.getIdPasajero(idPasajero)
  .subscribe(data =>{
    localStorage.setItem('idPasajero', idPasajero.toString());
    this.router.navigate(['editarPasajero']);
  });
  }
}
