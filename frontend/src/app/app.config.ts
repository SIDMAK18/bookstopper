import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {  provideHttpClient,withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { UserService } from './services/user.service';
import { NgImageSliderComponent } from 'ng-image-slider';
export const appConfig: ApplicationConfig = {
  providers: [UserService,provideRouter(routes),NgImageSliderComponent ,provideClientHydration(),provideHttpClient(),ReactiveFormsModule,provideToastr({timeOut:3000,positionClass:'toast-bottom-right',newestOnTop:false}),provideAnimations()]
};
