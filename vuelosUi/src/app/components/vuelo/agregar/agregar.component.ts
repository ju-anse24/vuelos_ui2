import { Component, OnInit } from '@angular/core';
import {Vuelo} from 'src/app/Modelo/Vuelo';
import {VueloService} from 'src/app/services/vuelo/vuelo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarVueloComponent implements OnInit {
  public vuelo = new Vuelo();
  constructor(private service: VueloService, private router: Router) { }

  ngOnInit(): void {
  }

  GuardarVuelo(){
    this.service.crearVuelo(this.vuelo)
    .subscribe(data => {
    alert('Se agrego el vuelo con exito');
    this.router.navigate(['listarVuelo']);
  });
  }
  Volver(){
   return this.router.navigate(['listarVuelo']);
  }

}
