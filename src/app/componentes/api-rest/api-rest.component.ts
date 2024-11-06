import { Component, OnInit } from '@angular/core';
import { DataService, User } from '../../servicios/api-rest.service';


@Component({
  selector: 'app-api-rest',
  templateUrl: './api-rest.component.html',
  styleUrl: './api-rest.component.css'
})
export class ApiRestComponent implements OnInit{
  users: User[] = [];
  newUser: User = { id: 0, name: '', email: '' }; // Para el formulario de nuevo usuario
  editingUser: User | null = null; // Para el usuario que se está editando

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.dataService.getUsers().subscribe((users) => {
      this.users = users; // Carga los usuarios desde el servicio
    });
  }

  addUser() {
    if (!this.newUser.name || !this.newUser.email) return; // Validación básica

    const newUser: User = {
      id: this.users.length > 0 ? Math.max(...this.users.map(u => u.id)) + 1 : 1, // Genera un ID único
      name: this.newUser.name,
      email: this.newUser.email,
    };

    this.dataService.createUser(newUser).subscribe((user) => {
      this.users.push(user); // Agrega el nuevo usuario a la lista
      this.resetForm(); // Resetea el formulario
    });
  }

  updateUser(user: User) {
    this.editingUser = user; // Establece el usuario que se está editando
    this.newUser.name = user.name; // Carga el nombre en el formulario
    this.newUser.email = user.email; // Carga el email en el formulario
  }

  saveUser() {
    if (!this.editingUser) return; // Asegúrate de que hay un usuario en edición

    const updatedUser: User = {
      id: this.editingUser.id, // Usa el ID existente
      name: this.newUser.name,
      email: this.newUser.email,
    };

    this.dataService.updateUser(updatedUser).subscribe((user) => {
      const index = this.users.findIndex(u => u.id === user.id);
      if (index !== -1) {
        this.users[index] = user; // Actualiza el usuario en el array
      }
      this.resetForm(); // Resetea el formulario
      this.editingUser = null; // Limpia el usuario en edición
    }, (error) => {
      console.error("Error al actualizar al ususario:", error); // Log de error
    });
  }

  deleteUser(userId: number) {
    this.dataService.deleteUser(userId).subscribe(() => {
      this.users = this.users.filter(user => user.id !== userId); // Filtra el usuario eliminado
    }, (error) => {
      console.error("Error al eliminar el usuario:", error); // Log de error
    });
  }

  resetForm() {
    this.newUser = { id: 0, name: '', email: '' }; // Resetea el formulario
    this.editingUser = null; // Limpia el usuario en edición
  }
}