import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { ISensorRegional } from './sensor-regional';

@Injectable({
  providedIn: 'root'
})
export class SensorRegionalListService {

  private sensoresUrl = 'https://localhost:5001/sensores-regionais';

  constructor(private http: HttpClient) { }

  getSensores(): Observable<ISensorRegional[]> {
    return this.http.get<ISensorRegional[]>(this.sensoresUrl)
      .pipe(        
        catchError(this.handleError)
      );
  }

  getSensor(region: string): Observable<ISensorRegional | undefined> {
    return this.getSensores()
      .pipe(
        map((sensores: ISensorRegional[]) => sensores.find(s => s.region === region))
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
