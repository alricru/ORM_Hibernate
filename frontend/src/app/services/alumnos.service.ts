import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Alumnos {
  idalumnos: number;
  nombre: string;
  apellido: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  endpoint = "http://localhost:8080/alumnos";

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})};
  constructor(private httpClient: HttpClient) { }

  createAlumno(Alumnos: Alumnos): Observable<any>{
    let bodyencoded = new URLSearchParams();
    bodyencoded.append("nombre",Alumnos.nombre);
    bodyencoded.append("apellido",Alumnos.apellido);
    const body = bodyencoded.toString();
    return this.httpClient.post<Alumnos>(this.endpoint, body, this.httpOptions)
      .pipe(
        catchError(this.handleError<Alumnos>('Error occured'))
      );
  }
  getAlumno(idalumnos): Observable<Alumnos[]>{
    return this.httpClient.get<Alumnos[]>(this.endpoint + '/' + idalumnos)
    .pipe(
      tap(_ => console.log('alumnos fetched: ${idalumnos}')),
      catchError(this.handleError<Alumnos[]>('Get alumnos id=${idalumnos}'))
    );
  }

  getAlumnos(): Observable<Alumnos[]>{
    return this.httpClient.get<Alumnos[]>(this.endpoint)
    .pipe(
      tap(User => console.log('Alumnos retrieved!')),
      catchError(this.handleError<Alumnos[]>('Get Alumnos', []))
    );
  }

  updateAlumnos(idalumnos, Alumnos: Alumnos): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + idalumnos, JSON.stringify(Alumnos), this.httpOptions)
    .pipe(
      tap(_ => console.log('alumnos updated: ${idalumnos}')),
      catchError(this.handleError<Alumnos[]>('Update alumnos'))
    );
  }

  deleteAlumnos(idalumnos): Observable<Alumnos[]>{
    return this.httpClient.delete<Alumnos[]>(this.endpoint + '/' + idalumnos, this.httpOptions)
    .pipe(
      tap(_ => console.log('alumno deleted: ${idalumnos}')),
      catchError(this.handleError<Alumnos[]>('Delete alumno'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
}}
