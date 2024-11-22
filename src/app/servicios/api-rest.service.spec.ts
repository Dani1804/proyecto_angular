import { TestBed } from '@angular/core/testing';

import { DataService } from './api-rest.service'; // Cambiado para importar correctamente DataService.

describe('DataService', () => { // Cambiado el nombre de la suite para que coincida con el servicio correcto.
  let service: DataService; // Cambiado el tipo de la variable a DataService.

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService], // Asegura que DataService esté disponible en el TestBed.
    });
    service = TestBed.inject(DataService); // Cambiado para inyectar correctamente DataService.
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Validamos que la instancia de DataService se haya creado.
  });
});

