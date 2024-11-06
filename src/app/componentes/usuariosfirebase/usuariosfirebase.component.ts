import { Component, OnInit} from '@angular/core';
import { CrudfirebaseService } from '../../servicios/crudfirebase.service';

@Component({
  selector: 'app-usuariosfirebase',
  templateUrl: './usuariosfirebase.component.html',
  styleUrl: './usuariosfirebase.component.css'
})
export class UsuariosfirebaseComponent implements OnInit {

  correo: string = '';
  clave: string = '';
  nombre: string= '';
  user: any = null; //Variable para almacenar el usuario autenticado

  constructor (private crudService: CrudfirebaseService) {}

  ngOnInit(): void {
    this.loadUser(); //Cargar informacion del usuario actual al iniciar el componente
  }

  //Metodo para agregar un nuevo usuario
  async addUser() {
    if (this.correo && this.clave) {
      await this.crudService.addUser(this.correo, this.clave, this.nombre);
      this.nombre = '';
      this.correo = '';
      this.clave = '';
      this.loadUser(); //Refrescar la lista de usuarios
    } else {
      alert('Por favor, ingresa un correo y contraseña');
    }
  }

  //Metodo para eliminar al usuario autenticado actual
  async deleteUser() {
    const confirmDelete = confirm('¿Estas seguro de que deseas eliminar este usuario?');
    if (confirmDelete) {
      await this.crudService.deleteUser();
      this.user = null; //Limpiar el usuario mostrado
    }    
  }

  //Cargar el usuario autenticado actual
  async loadUser() {
    this.user = await this.crudService.getUser();
  }
}



