import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { importProvidersFrom } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { CarouselModule } from 'ngx-bootstrap/carousel';


bootstrapApplication(App, {
  providers: [
    provideRouter(routes),                 
    importProvidersFrom([ModalModule.forRoot(),CarouselModule.forRoot(), ]),
  ]
}).catch(err => console.error(err));
