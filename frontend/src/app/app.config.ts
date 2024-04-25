import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {  provideHttpClient,withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
// import { authInterceptor } from './auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),provideHttpClient(),ReactiveFormsModule,provideToastr({timeOut:3000,positionClass:'toast-top-right',newestOnTop:false}),provideAnimations()]
};
