import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'app-root',
  template: '<router-outlet></router-outlet>', // Solo maneja rutas
})
export class AppComponent {}