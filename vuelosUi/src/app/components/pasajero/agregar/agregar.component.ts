import { Component, OnInit } from '@angular/core';
import {Pasajero} from 'src/app/Modelo/Pasajero';
import {PasajerosService} from 'src/app/services/pasajeros/pasajeros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  public pasajero = new Pasajero();
  constructor(private service: PasajerosService, private router: Router) { }

  ngOnInit(): void {
  }
  GuardarPasajero(){
    this.service.crearPasajero(this.pasajero)
    .subscribe(data => {
    alert('Se agrego el pasajero con exito');
    this.router.navigate(['listarPasajero']);
  });
  }
  Volver(){
   return this.router.navigate(['listarPasajero']);
  }

}
