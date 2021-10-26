import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Asignaturas {
  idasignaturas: number;
  nombre: string;
  horas: string;
  aula: string;
}

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  endpoint = "http://localhost:8080/asignaturas";

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})};
  constructor(private httpClient: HttpClient) { }

  createAsignaturas(Asignaturas: Asignaturas): Observable<any>{
    let bodyencoded = new URLSearchParams();
    bodyencoded.append("nombre",Asignaturas.nombre);
    bodyencoded.append("horas",Asignaturas.horas);
    bodyencoded.append("aula",Asignaturas.aula);
    const body = bodyencoded.toString();
    return this.httpClient.post<Asignaturas>(this.endpoint, body, this.httpOptions)
      .pipe(
        catchError(this.handleError<Asignaturas>('Error occured'))
      );
  }
  getAsignatura(idasignaturas): Observable<Asignaturas[]>{
    return this.httpClient.get<Asignaturas[]>(this.endpoint + '/' + idasignaturas)
    .pipe(
      tap(_ => console.log('asignaturas fetched: ${idasignaturas}')),
      catchError(this.handleError<Asignaturas[]>('Get asignaturas id=${idasignaturas}'))
    );
  }

  getAsignaturas(): Observable<Asignaturas[]>{
    return this.httpClient.get<Asignaturas[]>(this.endpoint)
    .pipe(
      tap(User => console.log('Asignaturas retrieved!')),
      catchError(this.handleError<Asignaturas[]>('Get Asignaturas', []))
    );
  }

  updateAsignaturas(idasignaturas, Asignaturas: Asignaturas): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + idasignaturas, JSON.stringify(Asignaturas), this.httpOptions)
    .pipe(
      tap(_ => console.log('asignatura updated: ${idasignaturas}')),
      catchError(this.handleError<Asignaturas[]>('Update asignaturas'))
    );
  }

  deleteAsignaturas(idasignaturas): Observable<Asignaturas[]>{
    return this.httpClient.delete<Asignaturas[]>(this.endpoint + '/' + idasignaturas, this.httpOptions)
    .pipe(
      tap(_ => console.log('asignatura deleted: ${idasignaturas}')),
      catchError(this.handleError<Asignaturas[]>('Delete asignatura'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
}}
