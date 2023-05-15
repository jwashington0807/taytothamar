import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './Pages/portfolio/portfolio.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { ReferencesComponent } from './Pages/references/references.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'references', component: ReferencesComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{useHash:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
