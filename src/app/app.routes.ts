import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { ReferencesComponent } from './Pages/references/references.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'references', component: ReferencesComponent},
  { path: '**', component: NotFoundComponent }
];
