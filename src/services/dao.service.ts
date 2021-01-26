import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DaoService {
  databaseAddress = 'http://localhost:8080';

  options = {
    headers: new HttpHeaders({
      Authorization: ''
    })
  };

  constructor(private http: HttpClient) { }

  private static handleError(errorRes: HttpErrorResponse): Observable<any> {
    return throwError(errorRes);
  }

  private setToken(token: string | undefined): void {
    if (token) {
      this.options = {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token
        })
      };
    } else {
      this.options = {
        headers: new HttpHeaders({
          Authorization: ''
        })
      };
    }
  }

  sendGetRequest(urlPath: string, token?: string | undefined): Observable<any> {
    this.setToken(token);
    return this.http
      .get<any>(this.databaseAddress + urlPath, this.options)
      .pipe(catchError(DaoService.handleError));
  }

  sendPostRequest(urlPath: string, body: unknown, token?: string | undefined): Observable<any> {
    this.setToken(token);
    return this.http
      .post<any>(this.databaseAddress + urlPath, body, this.options)
      .pipe(catchError(DaoService.handleError));
  }

  sendPutRequest(urlPath: string, body: unknown, token?: string | undefined): Observable<any> {
    this.setToken(token);
    return this.http
      .put<any>(this.databaseAddress + urlPath, body, this.options)
      .pipe(catchError(DaoService.handleError));
  }

  sendDeleteRequest(urlPath: string, token?: string | undefined): Observable<any> {
    this.setToken(token);
    return this.http
      .delete<any>(this.databaseAddress + urlPath, this.options)
      .pipe(catchError(DaoService.handleError));
  }
}
