import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEncuestaComponent } from './vista-encuesta.component';

describe('VistaEncuestaComponent', () => {
  let component: VistaEncuestaComponent;
  let fixture: ComponentFixture<VistaEncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaEncuestaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
