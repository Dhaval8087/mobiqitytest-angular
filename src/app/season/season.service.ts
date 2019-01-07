import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  constructor(private http: HttpClient) { }
  getSeason(): Observable<any> {
    const url = `${environment.API_URL}/seasons.json?limit=11&offset=55`;
    return this.http.get(url).pipe(tap((data) => { }), catchError(this.handleError));
  }
  private handleError(err: HttpErrorResponse) {
    return err.message;
  }
}
