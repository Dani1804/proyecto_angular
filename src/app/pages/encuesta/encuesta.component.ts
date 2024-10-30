import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatSidenav;
  signupUsers: any[] = [];
  loginUsers: any[] = [];
  currentUser: any = null;
  userName: string = '';

  // Nuevo atributo para almacenar las encuestas
  surveys: any[] = [];
  showForm = false;

  // Modificar formData para incluir preguntas
  formData = {
    name: '', // Nombre de la encuesta
    questions: [{ question: '', answerType: 'text' }], // Preguntas iniciales
    id: null // Agregar id para la encuesta
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    const signupData = localStorage.getItem('signupUsers');
    if (signupData) {
      this.signupUsers = JSON.parse(signupData);
    }
    // Recuperar el arreglo de loginUsers desde el localStorage
    const loginData = localStorage.getItem('loginUsers');
    if (loginData) {
      this.loginUsers = JSON.parse(loginData);
      // Obtener el último usuario logueado (el último en el arreglo)
      this.currentUser = this.loginUsers[this.loginUsers.length - 1];
      // Buscar el userName correspondiente al email del usuario logueado
      const matchedUser = this.signupUsers.find(user => user.email === this.currentUser.email);
      if (matchedUser) {
        this.userName = matchedUser.userName;  // Obtener el userName del signupUsers
      } }
    // Recuperar datos desde localStorage
    const surveyData = localStorage.getItem('surveys');
    if (surveyData) {
      this.surveys = JSON.parse(surveyData);
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([route]); // Navegar a la ruta especificada
  }

  logout(): void {
    this.router.navigate(['/splash']);  // Redirigir al login al cerrar sesión
  }

  createForm() {
    this.showForm = true;
    this.formData = { name: '', questions: [{ question: '', answerType: 'text' }], id: null }; // Reset form
  }

  editForm(surveyId: number) {
    this.showForm = true;
    const surveyToEdit = this.surveys.find(survey => survey.id === surveyId);
    if (surveyToEdit) {
      this.formData = { ...surveyToEdit }; // Cargar los datos del formulario existente para editar
    }
  }

  deleteForm(surveyId: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta encuesta?')) {
      this.surveys = this.surveys.filter(survey => survey.id !== surveyId); // Eliminar la encuesta
      this.updateSurveysInLocalStorage();
      alert('Encuesta eliminada con éxito.');
    }
  }

  viewSurvey(surveyId: number) {
    this.router.navigate(['/view-survey', surveyId]);
  }

  saveForm() {
    if (this.formData.id) {
      // Actualizar encuesta existente
      const index = this.surveys.findIndex(survey => survey.id === this.formData.id);
      if (index !== -1) {
        this.surveys[index] = { ...this.formData }; // Actualiza la encuesta
      }
    } else {
      // Crear nueva encuesta
      const newSurvey = {
        ...this.formData,
        id: Date.now() // Generar un ID único basado en el timestamp
      };
      this.surveys.push(newSurvey); // Agregar nueva encuesta
    }

    this.updateSurveysInLocalStorage();
    this.showForm = false; // Opcionalmente ocultar el formulario después de guardar
    console.log('Formulario guardado:', this.formData);
  }

  addQuestion() {
    this.formData.questions.push({ question: '', answerType: 'text' }); // Agregar nueva pregunta
  }

  deleteQuestion(index: number) {
    if (this.formData.questions.length > 1) {
      this.formData.questions.splice(index, 1); // Eliminar pregunta
    } else {
      alert('Debes tener al menos una pregunta.');
    }
  }

  private updateSurveysInLocalStorage() {
    localStorage.setItem('surveys', JSON.stringify(this.surveys)); // Guardar encuestas en localStorage
  }
}
