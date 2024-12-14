import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SurveyService } from '../../servicios/survey.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista-encuesta',
  templateUrl: './vista-encuesta.component.html',
  styleUrls: ['./vista-encuesta.component.css']
})
export class VistaEncuestaComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatSidenav;
  userData: any = {
    nom_cliente: '',
    telefono: '',
    nom_comuna: '',
    correo: ''
  };
  survey: any = null;

  constructor(private route: ActivatedRoute, private surveyService: SurveyService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const surveyId = params['surveyId'];
      if (surveyId) {
        this.loadSurvey(surveyId);
      }
    });
  }

  async loadSurvey(surveyId: number): Promise<void> {
    const survey$ = await this.surveyService.getSurveyByIdFree(surveyId); // Asumimos que existe este método en SurveyService
    survey$.subscribe(
      (data) => (this.survey = data),
      (error) => console.error('Error al cargar la encuesta:', error)
    );
  }

  guardarEncuesta(): void {
    // Verificar si todos los campos del formulario están llenos
    if (
      !this.userData.nom_cliente ||
      !this.userData.telefono ||
      !this.userData.nom_comuna ||
      !this.userData.correo
    ) {
      alert('Por favor, registre sus datos en el primer formulario.');
      return;
    }

    // Verificar si todas las preguntas han sido respondidas
    for (let i = 0; i < this.survey.questions.length; i++) {
      const question = this.survey.questions[i];
      if (!question.answer) {
        alert('Por favor, responda todas las preguntas de la encuesta.');
        return;
      }
    }

    // Si todo está completo, mostrar mensaje de éxito y redirigir
    alert('¡Gracias por contestar la encuesta!');
    window.close();  // Esto cierra la ventana, si es una ventana emergente
  }
}