import { Component, OnInit } from '@angular/core';
import { CrudfirebaseService } from '../../servicios/crudfirebase.service';

@Component({
  selector: 'app-usuariosfirebase',
  templateUrl: './usuariosfirebase.component.html',
  styleUrls: ['./usuariosfirebase.component.css']
})
export class UsuariosfirebaseComponent implements OnInit {
  isAdmin: boolean = false;
  correo: string = '';
  clave: string = '';
  nombre: string = '';
  user: any = null; // Variable para almacenar el usuario autenticado
  usuarios: any[] = []; // Lista de usuarios para admins
  displayedColumns: string[] = ['nombre', 'correo', 'acciones']; // Columnas de la tabla

  constructor(private crudService: CrudfirebaseService) {}

  ngOnInit(): void {
    this.loadUser(); // Cargar información del usuario actual al iniciar el componente
    this.crudService.isAdmin().subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
      if (this.isAdmin) {
        this.loadUsuarios(); // Cargar usuarios si es administrador
      }
    });
  }

  // Método para agregar un nuevo usuario
  async addUser() {
    if (this.correo && this.clave && this.nombre) {
      try {
        await this.crudService.addUser(this.correo, this.clave, this.nombre);
        this.nombre = '';
        this.correo = '';
        this.clave = '';
        
        this.loadUsuarios(); // Refrescar la lista de usuarios
      } catch (error) {
        console.error('Error al agregar usuario:', error);
        alert('Hubo un error al agregar el usuario.');
      }
    } else {
      alert('Por favor, ingresa un correo, nombre y contraseña');
    }
  }

  // Método para eliminar un usuario específico
  async deleteUser(uid: string) {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este usuario?');
    if (confirmDelete) {
      try {
        await this.crudService.deleteUserById(uid);
        this.loadUsuarios(); // Refrescar la lista de usuarios
      } catch (error) {
        console.error('Error al eliminar usuario:', error);
        alert('Hubo un error al eliminar el usuario.');
      }
    }
  }

  // Método para editar los datos de un usuario
  async editUser(uid: string) {
    const newNombre = prompt('Introduce el nuevo nombre del usuario:')?.toString();
    const newClave = prompt('Introduce la nueva contraseña del usuario:')?.toString();
   
    
    if (newNombre || newClave) {
      try {
        await this.crudService.editUser(uid, {
          nombre: newNombre,
          clave: newClave,
          
        });
        this.loadUsuarios(); // Refrescar la lista de usuarios
      } catch (error) {
        console.error('Error al editar usuario:', error);
        alert('Hubo un error al editar el usuario.');
      }
    }
  }

  // Cargar el usuario autenticado actual
  async loadUser() {
    try {
      this.user = await this.crudService.getUser();
    } catch (error) {
      console.error('Error al cargar el usuario:', error);
    }
  }

  // Cargar todos los usuarios para admins
  async loadUsuarios() {
    this.crudService.getAllUsers().subscribe(
      (usuarios) => {
        this.usuarios = usuarios;
      },
      (error) => {
        console.error('Error al cargar los usuarios:', error);
      }
    );
  }
}
