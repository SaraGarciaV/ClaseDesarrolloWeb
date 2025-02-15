import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule], // Importa FormsModule para usar ngModel
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Simula la validación de credenciales
    if (this.username === 'usuario' && this.password === 'contraseña') {
      this.router.navigate(['/dashboard']); // Redirige al dashboard
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}