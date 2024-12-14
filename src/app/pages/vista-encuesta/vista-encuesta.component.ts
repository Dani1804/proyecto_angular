import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SurveyService } from '../../servicios/survey.service';
import { ActivatedRoute } from '@angular/router';
import { CrudfirebaseService } from '../../servicios/crudfirebase.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

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
  isAuthenticated: boolean = false;
  responses: any[] = [];

  constructor(private route: ActivatedRoute, private surveyService: SurveyService, private crudFirebaseService: CrudfirebaseService, private router: Router,private afAuth: AngularFireAuth) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const surveyId = params['surveyId'];
      if (surveyId) {
        this.loadSurvey(surveyId);
      }
    });
  
  this.afAuth.authState.subscribe(user => {
    this.isAuthenticated = !!user;  // Si hay un usuario autenticado, isAuthenticated será true
  });
}

  async loadSurvey(surveyId: number): Promise<void> {
    const survey$ = await this.surveyService.getSurveyByIdFree(surveyId); // Asumimos que existe este método en SurveyService
    survey$.subscribe(
      (data) => (this.survey = data),
      (error) => console.error('Error al cargar la encuesta:', error)
    );
  }

  onAnswerQuestion(questionId: string, answer: string): void {
    // Verifica si ya hay una respuesta para esa pregunta y la actualiza
    const existingAnswer = this.responses.find((response) => response.questionId === questionId);
    if (existingAnswer) {
      existingAnswer.answer = answer;
    } else {
      // Si no existe, agrega una nueva respuesta
      this.responses.push({ questionId, answer });
    }
  }
  async guardarEncuesta(): Promise<void> {
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
      if (!this.responses.find((response) => response.questionId === question.id)) {
        alert('Por favor, responda todas las preguntas de la encuesta.');
        return;
      }
    }

    try {
      // Guardar los datos del cliente
      await this.crudFirebaseService.addClient(
        this.userData.nom_cliente,
        this.userData.telefono,
        this.userData.nom_comuna,
        this.userData.correo
      );

      // Guardar las respuestas en Firestore
      await this.crudFirebaseService.addSurveyResponses(this.survey.id, this.responses);

      // Incrementar el contador de respuestas de la encuesta
      this.survey.answer = (this.survey.answer || 0) + 1;

      // Actualizar el documento de la encuesta en la base de datos
      await this.surveyService.updateSurvey(this.survey.id, { answer: this.survey.answer });

      alert('¡Gracias por contestar la encuesta!');
      window.close(); // Esto cierra la ventana, si es una ventana emergente
    } catch (error) {
      console.error('Error al guardar la encuesta:', error);
      alert('Ocurrió un error al guardar la encuesta.');
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([`/home/${route}`]); // Navegar a la ruta especificada
  }
}