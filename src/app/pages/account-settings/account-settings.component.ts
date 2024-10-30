import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatSidenav;
  signupUsers: any[] = [];
  loginUsers: any[] = [];
  currentUser: any = null;
  userName: string = '';
  showForm = false;
  formData = {
    food: '',
    comment: ''
  };

  // Datos de la cuenta del usuario
  accountData = {
    name: '',
    email: '',
    phone: ''
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Recuperar el arreglo de signupUsers desde el localStorage
    const signupData = localStorage.getItem('signupUsers');
    if (signupData) {
      this.signupUsers = JSON.parse(signupData);
    }

    // Recuperar el arreglo de loginUsers desde el localStorage
    const loginData = localStorage.getItem('loginUsers');
    if (loginData) {
      this.loginUsers = JSON.parse(loginData);
      // Obtener el último usuario logueado (el último en el arreglo)
      this.currentUser = this.loginUsers[this.loginUsers.length - 1];
      // Buscar el userName correspondiente al email del usuario logueado
      const matchedUser = this.signupUsers.find(user => user.email === this.currentUser.email);
      if (matchedUser) {
        this.userName = matchedUser.userName; // Obtener el userName del signupUsers
        this.accountData = { // Cargar datos de cuenta para editar
          name: matchedUser.userName,
          email: matchedUser.email,
          phone: matchedUser.phone || ''
        };
      }
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([route]); // Navegar a la ruta especificada
  }

  logout(): void {
    this.router.navigate(['/splash']); // Redirigir al login al cerrar sesión
  }



  // Función para confirmar los cambios en el formulario de configuración de cuenta
  confirmChanges(): void {
    console.log('Datos de cuenta confirmados:', this.accountData);
    // Aquí podrías agregar lógica para actualizar los datos de cuenta en la base de datos o localStorage
    // Ejemplo: Actualizar el usuario en el localStorage
    const userIndex = this.signupUsers.findIndex(user => user.email === this.currentUser.email);
    if (userIndex !== -1) {
      this.signupUsers[userIndex] = { ...this.signupUsers[userIndex], ...this.accountData };
      localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
      alert('Cambios confirmados con éxito');
    }
  }

  // Función para limpiar el formulario de configuración de cuenta
  clearForm(): void {
    this.accountData = { name: '', email: '', phone: '' };
  }
}
