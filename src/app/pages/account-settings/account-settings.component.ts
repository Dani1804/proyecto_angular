import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { CrudfirebaseService } from '../../servicios/crudfirebase.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatSidenav;

  showForm = false;

  user: any = null;
  // Datos de la cuenta del usuario
  accountData = {
    nombre:  '',
    clave: ''
  };

  constructor(private router: Router, private crudService: CrudfirebaseService) {}

  ngOnInit(): void {
    this.loadUser(); 
    
  }

  async loadUser() {
    this.user = await this.crudService.getUser();
  }


  // Función para confirmar los cambios en el formulario de configuración de cuenta
  async editUser(){
    await this.crudService.editUser(this.user.id_usuario,this.accountData );
  }

  // Función para limpiar el formulario de configuración de cuenta
  clearForm(): void {
    this.accountData = { nombre: '', clave: '' };
  }
}
