import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { CrudfirebaseService } from './crudfirebase.service';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  private apiUrl = 'http://localhost:3000/surveys'; // Cambia a tu endpoint real
  private user: any = null;

  constructor(private http: HttpClient, private crudService: CrudfirebaseService) {

  }

  async initUser() {
    this.user = await this.crudService.getUser();
  }

  async getSurveys(): Promise<Observable<any[]>> {
    if (!this.user) {
      await this.initUser();
    }
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((surveys) => surveys.filter((survey) => survey.userId === this.user.id_usuario))
    );
  }

  async getSurveyById(id: number): Promise<Observable<any>> {
    if (!this.user) {
      await this.initUser();
    }
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map((survey) => (survey.userId === this.user.id_usuario ? survey : null))
    );
  }


  async createSurvey(survey: any): Promise<Observable<any>> {
    if (!this.user) {
      await this.initUser();
    }
    const surveyWithUser = { ...survey, userId: this.user.id_usuario };
    return this.http.post<any>(this.apiUrl, surveyWithUser);
  }

  updateSurvey(id: number, survey: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, survey).pipe(tap(() => this.restartServer()));
  }

  deleteSurvey(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(tap(() => this.restartServer()));
  }

  private restartServer(): void {
    this.http.get('http://localhost:3000/restart').subscribe();
  }
}