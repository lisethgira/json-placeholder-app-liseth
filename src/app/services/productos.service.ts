import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Productos } from '../interfaces/productos';

const endpoint = 'https://fakestoreapi.com/';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Productos[] = [];

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<any> {
    return this.httpClient
      .get<Productos>(endpoint + 'products')
      .pipe(catchError(this.handleError));
  }

  getProduct(id: string): Observable<any> {
    return this.httpClient
      .get<Productos>(endpoint + 'products/' + id)
      .pipe(catchError(this.handleError));
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
