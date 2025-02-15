import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Asegúrate de que este archivo exista

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};