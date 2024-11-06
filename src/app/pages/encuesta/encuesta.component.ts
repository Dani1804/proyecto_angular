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

    // Recuperar datos desde localStorage
    const surveyData = localStorage.getItem('surveys');
    if (surveyData) {
      this.surveys = JSON.parse(surveyData);
    }
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
