import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redireciona para o Dashboard
  { path: 'dashboard', component: DashboardComponent }, // Carrega o Dashboard
  { path: 'movies', component: MoviesListComponent }, // Carrega a lista de filmes
];
