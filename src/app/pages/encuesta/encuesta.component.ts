import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { SurveyService } from  '../../servicios/survey.service'



@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatSidenav;

  surveys: any[] = [];
  showForm = false;
  formData = {
    name: '',
    questions: [{ question: '', answerType: 'text' }],
    id: null as number | null
  };

  constructor(private router: Router, private surveyService: SurveyService) {}

  ngOnInit(): void {
    this.loadSurveys();
  }

  loadSurveys() {
    this.surveyService.getSurveys().subscribe(
      (data) => this.surveys = data,
      (error) => console.error('Error al cargar encuestas:', error)
    );
  }

  createForm() {
    this.showForm = true;
    this.formData = { name: '', questions: [{ question: '', answerType: 'text' }], id: null };
  }

  editForm(surveyId: number) {
    const surveyToEdit = this.surveys.find(survey => survey.id === surveyId);
    if (surveyToEdit) {
      this.formData = { ...surveyToEdit };
      this.showForm = true;
    }
  }

  deleteForm(surveyId: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta encuesta?')) {
      this.surveyService.deleteSurvey(surveyId).subscribe(
        () => {
          this.surveys = this.surveys.filter(survey => survey.id !== surveyId);
          alert('Encuesta eliminada con éxito.');
        },
        (error) => console.error('Error al eliminar la encuesta:', error)
      );
    }
  }

  viewSurvey(surveyId: number) {
    this.router.navigate(['/view-survey', surveyId]);
  }

  saveForm() {
    if (this.formData.id) {
      // Actualizar encuesta existente
      this.surveyService.updateSurvey(this.formData.id, this.formData).subscribe(
        () => {
          this.loadSurveys();
          this.showForm = false;
        },
        (error) => console.error('Error al actualizar la encuesta:', error)
      );
    } else {
      // Crear nueva encuesta
      this.formData.id= Date.now();
      this.surveyService.createSurvey(this.formData).subscribe(
        () => {
          this.loadSurveys();
          this.showForm = false;
        },
        (error) => console.error('Error al crear la encuesta:', error)
      );
    }
  }

  addQuestion() {
    this.formData.questions.push({ question: '', answerType: 'text' });
  }

  deleteQuestion(index: number) {
    if (this.formData.questions.length > 1) {
      this.formData.questions.splice(index, 1);
    } else {
      alert('Debes tener al menos una pregunta.');
    }
  }
}