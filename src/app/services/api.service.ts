import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  getYearsWithMultipleWinners(): Observable<any[]> {
    return of([
      { year: 1986, winnerCount: 2 },
      { year: 1990, winnerCount: 2 },
      { year: 2015, winnerCount: 2 },
    ]);
  }

  getMovies(): Observable<any[]> {
    return of([
      { id: 1, year: 1980, title: "Can't Stop the Music", winner: true },
      { id: 2, year: 1980, title: 'Cruising', winner: false },
    ]);
  }
}
