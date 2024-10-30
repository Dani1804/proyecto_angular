import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrl: './encuesta.component.css'
})
export class EncuestaComponent implements OnInit{
  @ViewChild('drawer') drawer!: MatSidenav;
  signupUsers: any[] = [];
  loginUsers: any[] = [];
  currentUser: any = null;
  userName: string = '';
  constructor( private router: Router) { }
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
  }
  navigateTo(route: string): void {
    this.router.navigate([route]); // Navegar a la ruta especificada
  }
  logout(): void {
    this.router.navigate(['/splash']);  // Redirigir al login al cerrar sesión
  }

  showForm = false;
  formData = {
    food: '',
    comment: ''
  };
  createForm() {
    this.showForm = true;
    this.formData = { food: '', comment: '' }; // Reset form
  }

  editForm() {
    this.showForm = true;
    // Aquí puedes cargar los datos del formulario existente para editar
    // Por ejemplo:
    // this.formData = this.getFormData();
  }

  deleteForm() {
    if (confirm('¿Estás seguro de que deseas eliminar este formulario?')) {
      // Lógica para eliminar el formulario
      this.showForm = false;
      this.formData = { food: '', comment: '' }; // Reset form
    }
  }
  saveForm() {
    // Aquí implementas la lógica para enviar los datos a tu base de datos
    console.log('Formulario guardado:', this.formData);
    // Aquí podrías hacer una llamada a tu servicio para guardar los datos en la base de datos
    // this.yourService.saveForm(this.formData).subscribe(response => {
    //   console.log('Formulario guardado con éxito', response);
    //   this.showForm = false; // Opcionalmente ocultar el formulario después de guardar
    // });
  }

}
