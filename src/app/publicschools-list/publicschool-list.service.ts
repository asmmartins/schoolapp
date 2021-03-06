import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IPublicSchool } from './publicschool';

@Injectable({
  providedIn: 'root'
})
export class PublicSchoolListService {

  private url = 'https://amschoolapi.azurewebsites.net/public-schools';

  constructor(private http: HttpClient) { }

  getPublicSchools(): Observable<IPublicSchool[]> {
    return this.http.get<IPublicSchool[]>(this.url)
      .pipe(        
        catchError(this.handleError)
      );
  }

  getPublicSchool(inep: string): Observable<IPublicSchool | undefined> {
    return this.getPublicSchools()
      .pipe(
        map((publicschools: IPublicSchool[]) => publicschools.find(s => s.inep === inep))
      );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
