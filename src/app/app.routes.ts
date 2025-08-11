import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { DocumentComponent } from './Pages/document/document.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'document', component: DocumentComponent},
  { path: '404error', component: NotFoundComponent},
  { path: '**', component: NotFoundComponent }
];
