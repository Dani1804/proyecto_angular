import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        {
          provide: AngularFireAuth,
          useValue: {
            authState: of(null), // Simula el estado de autenticación
            signInWithEmailAndPassword: jasmine.createSpy('signInWithEmailAndPassword'), // Mock con Jasmine
            signOut: jasmine.createSpy('signOut'), // Mock con Jasmine
          },
        },
        { provide: FIREBASE_OPTIONS, useValue: {} }, // Configuración mock de Firebase
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
