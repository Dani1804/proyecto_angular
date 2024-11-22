import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { ReestablecerPassComponent } from './reestablecer-pass.component';

describe('ReestablecerPassComponent', () => {
  let component: ReestablecerPassComponent;
  let fixture: ComponentFixture<ReestablecerPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReestablecerPassComponent],
      imports: [FormsModule] // Agrega FormsModule aquí
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReestablecerPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
