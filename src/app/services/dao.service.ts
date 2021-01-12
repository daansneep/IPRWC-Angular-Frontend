import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DaoService {
  databaseAddress = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  private static handleError(errorRes: HttpErrorResponse): Observable<any> {
    const errorMessage = `An unknown error occurred: ${errorRes}`;
    return throwError(errorMessage);
  }

  sendGetRequest(urlPath: string): Observable<any> {
    return this.http
      .get<any>(this.databaseAddress + urlPath)
      .pipe(catchError(DaoService.handleError));
  }

  sendPostRequest(urlPath: string, body: unknown): Observable<any> {
    return this.http
      .post<any>(this.databaseAddress + urlPath, body)
      .pipe(catchError(DaoService.handleError));
  }

  sendPutRequest(urlPath: string, body: unknown): Observable<any> {
    return this.http
      .put<any>(this.databaseAddress + urlPath, body)
      .pipe(catchError(DaoService.handleError));
  }

  sendDeleteRequest(urlPath: string): Observable<any> {
    return this.http
      .delete<any>(this.databaseAddress + urlPath)
      .pipe(catchError(DaoService.handleError));
  }
}
