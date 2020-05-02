import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vuelosUi';
  langs: string[] = [];

  constructor(private router: Router, private translate: TranslateService){
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.translate.addLangs(['es', 'en']);
    this.langs = this.translate.getLangs();

  }

  Listar(){
    return this.router.navigate(['listarVuelo']);
  }

  cambiarIdioma(lang: string){
    this.translate.use(lang);
    console.log(lang);
  }
}
