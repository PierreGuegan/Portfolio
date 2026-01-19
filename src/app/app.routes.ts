import { Routes } from '@angular/router';
import { Presentation } from './presentation/presentation';
import { Portfolio } from './portfolio/portfolio';
import { Cv } from './cv/cv';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Presentation },              // route par défaut
  { path: 'presentation', component: Presentation },
  { path: 'portfolio', component: Portfolio },
  { path: 'cv', component: Cv },
  { path: 'contact', component: Contact },
  { path: '**', component: Presentation }             // wildcard
];
