import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { ReferencesComponent } from './Pages/references/references.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { ResumeComponent } from './Pages/resume/resume.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'references', component: ReferencesComponent},
  { path: 'resume', component: ResumeComponent},
  { path: '**', component: NotFoundComponent }
];
