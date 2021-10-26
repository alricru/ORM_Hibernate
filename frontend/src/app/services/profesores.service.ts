import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Profesores {
  idprofesores: number;
  nombre: string;
  apellido: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  endpoint = "http://localhost:8080/profesores";

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    
  };
  constructor(private httpClient: HttpClient) { }

  createProfesor(Profesores: Profesores): Observable<any>{
    let bodyencoded = new URLSearchParams();
    bodyencoded.append("nombre",Profesores.nombre);
    bodyencoded.append("apellido",Profesores.apellido);
    const body = bodyencoded.toString();
    return this.httpClient.post<Profesores>(this.endpoint, body, this.httpOptions)
      .pipe(
        catchError(this.handleError<Profesores>('Error occured'))
      );
  }
  getProfesor(idprofesores): Observable<Profesores[]>{
    return this.httpClient.get<Profesores[]>(this.endpoint + '/' + idprofesores)
    .pipe(
      tap(_ => console.log('profesores fetched: ${idprofesores}')),
      catchError(this.handleError<Profesores[]>('Get profesores id=${idprofesores}'))
    );
  }

  getProfesores(): Observable<Profesores[]>{
    return this.httpClient.get<Profesores[]>(this.endpoint)
    .pipe(
      tap(User => console.log('Profesores retrieved!')),
      catchError(this.handleError<Profesores[]>('Get Profesores', []))
    );
  }

  updateProfesores(idprofesores, Profesores: Profesores): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + idprofesores, JSON.stringify(Profesores), this.httpOptions)
    .pipe(
      tap(_ => console.log('profesores updated: ${idprofesores}')),
      catchError(this.handleError<Profesores[]>('Update profesores'))
    );
  }

  deleteProfesores(idprofesores): Observable<Profesores[]>{
    return this.httpClient.delete<Profesores[]>(this.endpoint + '/' + idprofesores, this.httpOptions)
    .pipe(
      tap(_ => console.log('profesor deleted: ${idprofesores}')),
      catchError(this.handleError<Profesores[]>('Delete profesor'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
}}

