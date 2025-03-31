import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }
}