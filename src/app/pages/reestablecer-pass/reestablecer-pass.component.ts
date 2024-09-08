import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reestablecer-pass',
  templateUrl: './reestablecer-pass.component.html',
  styleUrl: './reestablecer-pass.component.css'
})
export class ReestablecerPassComponent {
  email: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {}

  reestablecer() {
    if (this.email.trim() === '') {
      alert('Ingrese una dirección de correo');
    } else {
      this.toLogIn();
    }
  }

  toLogIn() {
    alert('Se enviaron instrucciones para la recuperación de contraseña a su correo!');
    this.router.navigate(['/login']);
  }
}
