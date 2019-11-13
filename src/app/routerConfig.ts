import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing-page.component';
import { BucketlistComponent } from './bucketlist/bucketlist.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
  { path: 'home', component: LandingComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'signup', component: SignupComponent},
  { path: 'dashboard', component: BucketlistComponent}
];

export default appRoutes;
