import { Celebrity } from './../models/celebritie.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CelebritiesService {
  private baseUrl: string = 'http://localhost:3000/celebrities';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getCelebrities(): Observable<Celebrity[]> {
    return this.http.get<Celebrity[]>(this.baseUrl);
  }

  getCelebrity(id: string): Observable<Celebrity> {
    return this.http.get<Celebrity>(`${this.baseUrl}/${id}`);
  }

  createCelebrity(celebrity: Celebrity): Observable<Celebrity> {
    return this.http.post<Celebrity>(this.baseUrl, celebrity, this.httpOptions);
  }

  updateCelebrity(celebrity: Celebrity): Observable<Celebrity> {
    return this.http.post<Celebrity>(`${this.baseUrl}/${celebrity.id}/update`, celebrity, this.httpOptions);
  }

  deleteCelebrity(celebrity: Celebrity): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/${celebrity.id}/delete`, null, this.httpOptions);
  }
}
