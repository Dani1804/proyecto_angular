import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private apiUrl = 'http://localhost:3000/surveys'; // Cambia a tu endpoint real

  constructor(private http: HttpClient) {}

  getSurveys(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getSurveyById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createSurvey(survey: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, survey).pipe(tap(() => this.restartServer()));
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
