import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Adicionado aqui
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatToolbarModule], // Inclua o CommonModule aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies = [
    { id: 1, year: 1980, title: "Can't Stop the Music" },
    { id: 2, year: 1981, title: "Mommy Dearest" },
    { id: 3, year: 1982, title: "Endless Love" },
    { id: 4, year: 1983, title: "Xanadu" },
    { id: 5, year: 1984, title: "Superman IV" },
    { id: 6, year: 1985, title: "Howard the Duck" },
  ];

  filteredMovies = [...this.movies];
  noResultsMessage = '';

  searchMovies(year: string) {
    this.noResultsMessage = '';
    if (!year) {
      this.filteredMovies = [...this.movies];
    } else {
      const parsedYear = parseInt(year, 10);
      this.filteredMovies = this.movies.filter((movie) => movie.year === parsedYear);
      if (this.filteredMovies.length === 0) {
        this.noResultsMessage = `Ops, nenhum filme encontrado para o ano ${year}`;
      }
    }
  }
}
