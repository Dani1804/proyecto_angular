import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagina404',
  templateUrl: './pagina404.component.html',
  styleUrl: './pagina404.component.css'
})
export class Pagina404Component  {


constructor(private router: Router) { }


navigateTo(route: string): void {
  this.router.navigate([`/${route}`]); // Navegar a la ruta especificada
  }
}
