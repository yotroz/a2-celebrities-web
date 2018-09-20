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
  private celebrities: Celebrity[];

  constructor(private http: HttpClient) { }

  getCelebrities(): Observable<Celebrity[]> {
    return this.http.get<Celebrity[]>(this.baseUrl, this.httpOptions)  
  }

  // getCelebrity(id: string): Observable<Celebrity> {
  //   // ...
  // }

  // createCelebrity(celebrity: Celebrity): Observable<Celebrity> {
  //   // ...
  // }

   createCelebrity(celebrity: Celebrity): Observable<Celebrity> {
     return this.http.post<Celebrity>(this.baseUrl, celebrity , this.httpOptions)    
  }

  // updateCelebrity(celebrity: Celebrity): Observable<Celebrity> {
  //   // ...
  // }

  // deleteCelebrity(celebrity: Celebrity): Observable<void> {
  //   // ...
  // }
}
