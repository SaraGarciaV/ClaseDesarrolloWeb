import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // <-- Comilla cerrada
import { AuthService } from '../../services/auth.service';  // <-- Ruta corregida

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']  // <-- "styleUrls" correcto
})
export class DashboardComponent {
  constructor(public authService: AuthService) {}  // <-- Llave de cierre
}