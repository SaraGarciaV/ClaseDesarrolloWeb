import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService // ¡Servicio inyectado!
  ) {}

  onSubmit() {
    if (this.username === 'admin' && this.password === '1234') {
      this.authService.login(); // Usa el servicio
      this.router.navigate(['/dashboard']);
    } else {
      alert('Credenciales incorrectas. Usa: admin / 1234');
    }
  }
}