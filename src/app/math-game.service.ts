import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import Result from './results';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class MathGameService {

  userResults: Result[];

  private _score: number = 0;
  private mathGameUrl = `https://math-game-c0556.firebaseio.com/`;

  private errorHandler = (error) => {
    if (error.error instanceof ErrorEvent) {
      console.error(error.error.message);
    } else {
      console.error(error.status);
    }
    return throwError;
  }

  constructor(private http: HttpClient) { }

  generateQuestion(): Array<number> {
      const number1 = Math.floor(Math.random() * (10 - 0))
      const number2 = Math.floor(Math.random() * (10 - 0))
      const result = number1 * number2;

      return [number1, number2, result];
  }

  get score() {
    return this._score;
  }

  set score(score) {
    this._score = score
  }

  checkResponse(number1, number2, result) {

  }


  getResults(): Observable<Result[]> {
    return this.http.get<Result[]>(this.mathGameUrl + `/.json`, httpOptions).pipe(
      map(values => {
        // console.log(values)

        return this.userResults
      })
    )
  }

  addResults(userResults : Result): Observable<any> {
    return this.http.post<void>(this.mathGameUrl + `/.json`, userResults, httpOptions);
  }
}
