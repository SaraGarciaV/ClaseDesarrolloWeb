import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta principal (login)
  { path: 'dashboard', component: DashboardComponent }, // Ruta del dashboard
];