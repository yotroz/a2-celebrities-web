import { CelebritiesDetailsComponent } from './components/celebrities/celebrities-details/celebrities-details.component';
import { CelebritiesFormComponent } from './components/celebrities/celebrities-form/celebrities-form.component';
import { CelebritiesListComponent } from './components/celebrities/celebrities-list/celebrities-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'celebrities', component: CelebritiesListComponent },
  { path: 'celebrities/new', component: CelebritiesFormComponent },
  { path: 'celebrities/:id/edit', component: CelebritiesFormComponent },
  { path: 'celebrities/:id', component: CelebritiesDetailsComponent },
  { path: '', redirectTo: '/celebrities', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
