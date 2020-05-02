import { Component, OnInit } from '@angular/core';
import {Pasajero} from 'src/app/Modelo/Pasajero';
import {PasajerosService} from 'src/app/services/pasajeros/pasajeros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  public pasajero = new Pasajero();
  constructor(private service: PasajerosService, private router: Router) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    const id = localStorage.getItem('idPasajero');
    this.service.getIdPasajero(+id)
    .subscribe(data => {
    this.pasajero = data;
    });
   }

   ActualizarPasajero(pasajero) {
        this.service.actualizarPasajero(pasajero)
            .subscribe(data => {
            this.pasajero = data;
            alert('Se actualizo con exito');
            this.router.navigate(['listarPasajero']);
        });
    }

    Volver(){
      return  this.router.navigate(['listarPasajero']);
    }

}
