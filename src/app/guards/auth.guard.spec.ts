import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { AuthGuard } from './auth.guard'; // Cambiado para importar la clase correcta.

describe('AuthGuard', () => { // Ajustado el nombre de la suite de pruebas.
  let authGuard: AuthGuard; // Se instancia el AuthGuard.

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard], // Configuración necesaria para inyectar AuthGuard.
    });
    authGuard = TestBed.inject(AuthGuard); // Obtenemos la instancia del AuthGuard.
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy(); // Validamos que la instancia se haya creado.
  });
});
