import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  signupUsers: any[] = [];
  signupObj:any = {
    userName: '',
    email: '',
    password: '',
    passwordV: ''
  };
  loginObj: any = {
    email: '',
    password: ''
  }
  constructor(private router: Router){}
  ngOnInit(): void{
    const localData = localStorage.getItem('signupUsers');
    if(localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignUp() {

    if (this.signupObj.password === this.signupObj.passwordV) {
      // Si coinciden, realiza el push al arreglo
      this.signupUsers.push(this.signupObj);
      localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
      

      this.signupObj = {
        userName: '',
        email: '',
        password: '',
        passwordV: ''
      };
    } else {

      alert('Las contraseñas no coinciden.');
    }
  }
  onLogIn(){
    debugger
    if (this.loginObj.email != '' && this.loginObj.password != ''){
      const isUserExist = this.signupUsers.find(m => m.email == this.loginObj.email && m.password == this.loginObj.password);
      if(isUserExist != undefined){
        alert('Usuario ingresado con éxito');
      }else {
        alert('Credenciales incorrectas');
      }
    }else {
      alert('Favor ingresar credenciales')
    }

      
  }
}
 