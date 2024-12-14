import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';
import { SurveyService } from  '../../servicios/survey.service'

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-vista-encuesta',
  templateUrl: './vista-encuesta.component.html',
  styleUrl: './vista-encuesta.component.css'
})

export class VistaEncuestaComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatSidenav;
  user: any = null;
  survey: any = null;

  constructor(private route: ActivatedRoute, private surveyService: SurveyService ) {}


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const surveyId = params['surveyId'];
      if (surveyId) {
        this.loadSurvey(surveyId);
      }
    });
  }

  async loadSurvey(surveyId: number): Promise<void> {
    const survey$ = await this.surveyService.getSurveyById(surveyId); // Asumimos que existe este método en SurveyService
    survey$.subscribe(
      (data) => (this.survey = data),
      (error) => console.error('Error al cargar la encuesta:', error)
    );
  }
}