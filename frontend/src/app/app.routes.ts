import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [() => {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (!isLoggedIn) {
        inject(Router).navigate(['/auth/login']);
        return false; // ¡Importante añadir este return!
      }
      return true;
    }]
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' }
];