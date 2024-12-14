import { Component , OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { CrudfirebaseService } from '../../servicios/crudfirebase.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: string = ''; // La variable de usuario
  clave: string = ''; // La variable de password
  errors: string[] = []; // Array para almacenar mensajes de error
  nombre: string = '';
  email: string = '';
  clave1: string = '';
  claveV: string = '';
 
  

  constructor(private router: Router, private authService: AuthService, private crudService: CrudfirebaseService) {}
  ngOnInit(): void {
  }
  async login() {
    if (this.usuario && this.clave) {
      const isAuthenticated = await this.authService.signIn(this.usuario, this.clave);
      
      // Solo navegamos si la autenticación fue exitosa
      if (isAuthenticated) {
        const navigationExtras: NavigationExtras = {
          queryParams: {
            user: this.usuario, // Envío dato del input Usuario
          },
        };
        this.router.navigate(['/home'], navigationExtras); // Navega a Home y envía el dato del input Usuario
      }
    } else {
      alert('Por favor, ingresa tu correo y contraseña.');}}
  
async addUser() {
  if (this.email && this.clave1){
    if ( this.clave1 === this.claveV && this.clave1.length >= 6 ) {
      await this.crudService.addUser(this.email, this.clave1, this.nombre);
      this.nombre = '';
      this.email = '';
      this.clave1 = '';
      alert('Usuario Creado con éxito');
      window.location.reload(); 
    } else {
      alert('Por favor, ingresa un correo y contraseña válido de al menos 6 carácteres');}
  }else {
    alert('Las contraseñas no coinciden')
  }}

  reestablecer (){
    this.router.navigate(['/reestablecer']);}

  
  
  
  
  
  }
