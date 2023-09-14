import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Comentarios } from '../interfaces/comentarios';

const direccionweb = 'https://jsonplaceholder.typicode.com/'
@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  comentarios: Comentarios[] = [];

  constructor(private httpClient:HttpClient) { }

  traerComentarios():Observable<any> {
    return this.httpClient.get(direccionweb + 'comments').pipe(catchError(this.manejarError));
  }

  private manejarError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('ocurrió un error:', error.error.message);
    } else {
      console.error(
        `codigo de error ${error.status}, ` + `es: ${error.error}`
      );
    }
    return console.log('algo pasó por favor intente más tardecito');
  }
}
