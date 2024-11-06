import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatSidenav;
  signupUsers: any[] = [];
  loginUsers: any[] = [];
  currentUser: any = null;
  userName: string = '';
  recentUpdates: any[] = [];

  constructor(private router: Router) { }

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
        this.userName = matchedUser.userName;  // Obtener el userName del signupUsers
      }
    }

    // Inicializar las actualizaciones recientes (puedes reemplazar esto con datos reales)
    this.recentUpdates = [
      { id: 1, title: 'Nueva Encuesta Disponible', description: 'Participa en la última encuesta sobre preferencias de productos.' },
      { id: 2, title: 'Actualización de Sistema', description: 'Mejoras en el rendimiento del sistema y seguridad.' },
      { id: 3, title: 'Nueva Funcionalidad', description: 'Hemos añadido una nueva opción de análisis de encuestas.' }
    ];
  }

  navigateTo(route: string): void {
    this.router.navigate([`/home/${route}`]); // Navegar a la ruta especificada
  }

  logout(): void {
    this.router.navigate(['/splash']);  // Redirigir al login al cerrar sesión
  }

  viewDetails(updateId: number): void {
    // Puedes implementar esta función para redirigir a una página de detalles
    console.log(`Detalles para actualización ID: ${updateId}`);
    // Por ejemplo, podrías navegar a una página específica de detalles
    this.router.navigate(['/update-details', updateId]);
  }
}
