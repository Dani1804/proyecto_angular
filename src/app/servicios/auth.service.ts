import { Injectable } from '@angular/core';  // Importa el decorador Injectable para definir servicios en Angular
import { AngularFireAuth } from '@angular/fire/compat/auth';  // Importa el servicio de autenticación de Firebase
import { Router } from '@angular/router';  // Importa el servicio de enrutamiento de Angular
import { Observable } from 'rxjs';  // Importa la clase Observable de RxJS para manejo de flujos de datos
import { map } from 'rxjs/operators';  // Importa la función map para transformar flujos de datos

@Injectable({
  providedIn: 'root'  // Define que este servicio estará disponible en toda la aplicación
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}  // Inyecta el servicio de autenticación y el de enrutamiento

  // Método para iniciar sesión con correo y contraseña
  async signIn(email: string, password: string): Promise<boolean> {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);  // Intenta autenticar al usuario con Firebase
      console.log('Usuario autenticado:', userCredential.user);  // Muestra en la consola los detalles del usuario autenticado
      return true;  // Retorna true si la autenticación es exitosa
    } catch (error) {
      console.error('Error en la autenticación:', error);  // Muestra un mensaje de error en la consola si falla la autenticación
      alert('Credenciales incorrectas.');  // Muestra una alerta en caso de error
      return false;  // Retorna false si hay un error durante la autenticación
    }
  }

  // Método para verificar si el usuario está autenticado
  isLoggedIn(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map(user => !!user) // Devuelve true si el usuario está autenticado (user existe), false si no
    );
  }
}