import { Injectable } from '@angular/core'; // Importa el decorador Injectable de Angular para hacer que el servicio sea inyectable.
import { CanActivate, Router } from '@angular/router'; // Importa CanActivate (para implementar la guard) y Router (para la navegación).
import { AuthService } from '../servicios/auth.service'; // Importa el servicio de autenticación que manejará la lógica de autenticación.
import { map, tap } from 'rxjs/operators'; // Importa operadores de RxJS: 'map' transforma valores y 'tap' permite realizar efectos secundarios.
import { Observable } from 'rxjs'; // Importa 'Observable' de RxJS para manejar flujos de datos reactivos.

@Injectable({
  providedIn: 'root'// Define que este servicio estará disponible en toda la aplicación como singleton.
})
export class AuthGuard implements CanActivate { // Define la clase AuthGuard que implementa la interfaz CanActivate para proteger rutas.

  constructor(private authService: AuthService, private router: Router) {} // El constructor inyecta el servicio de autenticación y el servicio de router.

  canActivate(): Observable<boolean> { // El método canActivate devuelve un Observable de tipo booleano que define si la ruta puede activarse.
    return this.authService.isLoggedIn().pipe( // Llama al método isLoggedIn del servicio de autenticación, que devuelve un Observable sobre el estado de autenticación.
      map(loggedIn => { // Usa el operador 'map' para transformar el valor del estado de autenticación (booleano).
        console.log('Estado de autenticación:', loggedIn); // Imprime en consola el estado de autenticación actual.
        if (!loggedIn) { // Si el usuario no está autenticado (loggedIn es falso).
          console.log('Usuario no autenticado, redirigiendo a login'); // Imprime un mensaje en consola indicando que el usuario será redirigido.
          this.router.navigate(['/login']); // Redirige al usuario a la página de login si no está autenticado.
          return false; // Devuelve 'false' para impedir el acceso a la ruta protegida.
        }
        return true; // Devuelve 'true' para permitir el acceso a la ruta si el usuario está autenticado.
      })
    );
  }
}