import { Component, OnInit } from '@angular/core';
import {Vuelo} from 'src/app/Modelo/Vuelo';
import { Router } from '@angular/router';
import {VueloService} from 'src/app/services/vuelo/vuelo.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarVueloComponent implements OnInit {
  vuelos: Vuelo[];
  constructor(private router: Router, private service: VueloService ) {}

  ngOnInit(): void {
    this.service.getVuelos()
    .subscribe(data => {
        this.vuelos = data;
     });
  }
  agregarVuelo() {
    return this.router.navigate(['agregarVuelo']);
  }
  listarPasajero(){
    return this.router.navigate(['listarPasajero']);
  }
}
