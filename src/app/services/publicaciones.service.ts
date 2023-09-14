import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Publicaciones } from '../interfaces/publicaciones';

const direccionweb = 'https://jsonplaceholder.typicode.com/';
@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  publicaciones: Publicaciones[] = [];

  constructor(private httpClient: HttpClient) { }

  traerPublicaciones():Observable<any> {
    return this.httpClient.get(direccionweb + 'posts').pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return console.log('Something bad happened; please try again later.');
  }
}
