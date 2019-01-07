import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WinnerService {

  constructor(private http: HttpClient) { }
  getWinners(season: any): Observable<any> {
    const url = `${environment.API_URL}/${season}/results/1.json`;
    return this.http.get(url).pipe(tap((result) => {
    }), catchError(this.handleError));
  }
  getChampion(season: any): Observable<any> {
    const winnerurl = `${environment.API_URL}/${season}/driverstandings/1.json`;
    return this.http.get(winnerurl).pipe(tap((winner) => {
    }), catchError(this.handleError));
  }
  private handleError(err: HttpErrorResponse) {
    return err.message;
  }
}
