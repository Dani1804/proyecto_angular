import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudfirebaseService {

  constructor(private afAuth: AngularFireAuth, private router: Router, private firestore: AngularFirestore,) { }

  //Agregar nuevo usuario a Firebase authentication
  async addUser(email: string, password: string, nombre: string): Promise<void> {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
  
      if (user) {
        // Guarda el usuario en Firestore con los campos especificados
        await this.firestore.collection('Usuarios').doc(user.uid).set({
          id_usuario: user.uid,
          nombre: nombre,
          correo: user.email,
          clave: password // Guarda la contraseña o una versión encriptada si es necesario
        });
      }
    } catch (error: any) {
      console.error('Error al ingresar usuario:', error);
      alert('No se pudo agregar el usuario: ' + error.message);
    }
  }


  //Eliminar un usuario autenticado actualmente
  async deleteUser(): Promise<void> {
    try {
      const user = await this.afAuth.currentUser;
      
      if (user) {
        // Primero, elimina el documento del usuario en Firestore
        await this.firestore.collection('Usuarios').doc(user.uid).delete();
        console.log('Usuario eliminado de Firestore');
        
        // Luego, elimina el usuario de Firebase Authentication
        await user.delete();
        console.log('Usuario eliminado de Firebase Auth');
        
        alert('Usuario eliminado exitosamente');
        this.router.navigate(['/']);
      } else {
        console.warn('No hay usuario autenticado');
      }
    } catch (error: any) { // Hacer un casting del error a 'any'
      console.error('Error al eliminar usuario:', error);
      alert('No se pudo eliminar el usuario: ' + error.message);
    }
  }

  //Obtener el usuario autenticado actualmente

  async getUser(): Promise<any> {
    try {
      const currentUser = await this.afAuth.currentUser;
      
      if (currentUser) {
        const uid = currentUser.uid;
        const userDoc = await this.firestore.collection('Usuarios').doc(uid).ref.get();
        
        if (userDoc.exists) {
          return userDoc.data(); // Devuelve los datos del usuario desde Firestore
        } else {
          console.warn('Usuario no encontrado en Firestore');
          return null;
        }
      } else {
        console.warn('Usuario no autenticado');
        return null;
      }
    } catch (error: any) { 
      console.error('Error al obtener usuario:', error);
      return null;
    }
  }

  //Cerrar sesión del usuario actual
  async signOut(): Promise<void> {
    try {
      await this.afAuth.signOut();
      console.log('Sesión cerrada');
      this.router.navigate(['/login'])
    } catch (error: any) { // Hacer un casting del error a 'any'
      console.error('Error al cerrar sesión:', error);
    }
  }
  async editUser(uid: string, updatedData: { nombre?: string; clave?: string }): Promise<void> {
    try {
      // Actualiza los datos del usuario en Firestore solo con los campos nombre y clave
      await this.firestore.collection('Usuarios').doc(uid).update(updatedData);
      console.log('Usuario actualizado en Firestore');
  
      const user = await this.afAuth.currentUser;
      if (user) {
        // Actualiza el nombre en Firebase Auth si está presente en updatedData
        if (updatedData.nombre && updatedData.nombre !== user.displayName) {
          await user.updateProfile({ displayName: updatedData.nombre });
        }
  
        // Actualiza la clave en Firebase Auth si está presente en updatedData
        if (updatedData.clave) {
          await user.updatePassword(updatedData.clave);
        }
  
        console.log('Usuario actualizado en Firebase Auth');
        alert('Usuario actualizado exitosamente');
      } else {
        console.warn('Usuario no autenticado');
      }
    } catch (error: any) {
      console.error('Error al actualizar el usuario:', error);
      alert('No se pudo actualizar el usuario: ' + error.message);
    }
  }
  

}
