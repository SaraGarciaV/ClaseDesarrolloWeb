import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', // Asegúrate que apunta al HTML correcto
  styleUrls: ['./login.component.css']   // Usa los estilos CSS si los necesitas
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.username && this.password) {
      // Simulación de login exitoso
      localStorage.setItem('authToken', 'dummy-token');
      this.router.navigate(['/dashboard']);
    }
  }
}