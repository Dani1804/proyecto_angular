import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosfirebaseComponent } from '../../componentes/usuariosfirebase/usuariosfirebase.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',email: '',password: '',passwordV: ''};
  loginUsers: any[] = [];
  loginObj: any = {email: '',password: ''};
  constructor(private router: Router) {}
  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);}
    const loginData = localStorage.getItem('loginUsers');
    if (loginData != null) {
      this.loginUsers = JSON.parse(loginData);}}
  onSignUp(): void {
    if (this.signupObj.password === this.signupObj.passwordV && this.signupObj.password != '') {
      this.signupUsers.push({ ...this.signupObj }); // Guardar una copia del objeto actual
      localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
      alert('Registro exitoso');
      // Limpiar el formulario
      this.signupObj = {userName: '',email: '',password: '',passwordV: ''};
      window.location.reload();} else {
      alert('El campo está vacío o Las contraseñas no coinciden.');}}
  reestablecer (){
    this.router.navigate(['/reestablecer']);}
  onLogIn(): void {
    if (this.loginObj.email !== '' && this.loginObj.password !== '') {
      const isUserExist = this.signupUsers.find(
        m => m.email === this.loginObj.email && m.password === this.loginObj.password);
      if (isUserExist) {
        alert('Usuario ingresado con éxito');
        this.loginUsers.push({ ...this.loginObj }); // Guardar una copia del objeto actual
        localStorage.setItem('loginUsers', JSON.stringify(this.loginUsers));
        this.router.navigate(['/home']);
      } else { alert('Credenciales incorrectas'); }
    } else { alert('Favor ingresar credenciales');}}}
