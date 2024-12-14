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
  isAdmin: boolean = false;
  constructor(private router: Router, private crudService: CrudfirebaseService) { }

  ngOnInit(): void {
    this.loadUser();
    this.crudService.isAdmin().subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
  } );}

  navigateTo(route: string): void {
    this.router.navigate([`/home/${route}`]); // Navegar a la ruta especificada
  }

  async loadUser() {
    this.user = await this.crudService.getUser();
  }


  async signOut() {
    this.user = await this.crudService.signOut();

  }}
