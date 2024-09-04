import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
  provideZoneChangeDetection({ eventCoalescing: true }), 
  provideRouter(routes, withComponentInputBinding()), 
  provideHttpClient(),
],
};

// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter, withComponentInputBinding } from '@angular/router';
// import { provideHttpClient, withFetch } from '@angular/common/http';
// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideZoneChangeDetection({ eventCoalescing: true }),
//     provideRouter(routes, withComponentInputBinding()),
//     provideHttpClient(withFetch()),
//   ],
// };


