import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing-page.component';

const appRoutes: Routes = [
  { path: 'home', component: LandingComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'signup', loadChildren: ()  => import('./signup/signup.module').then(m => m.SignupModule)},
];

export default appRoutes;
