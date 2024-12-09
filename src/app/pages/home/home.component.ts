import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { CrudfirebaseService } from '../../servicios/crudfirebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatSidenav;
  user: any = null;

  constructor(private router: Router, private crudService: CrudfirebaseService) { }

  ngOnInit(): void {
    this.loadUser();
  }

  navigateTo(route: string): void {
    this.router.navigate([`/home/${route}`]); // Navegar a la ruta especificada
  }

  async loadUser() {
    this.user = await this.crudService.getUser();
  }


  async signOut() {
    this.user = await this.crudService.signOut();

  }}
