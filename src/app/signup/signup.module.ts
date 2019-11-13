import { NgModule } from '@angular/core';

import { SignupComponent } from './signup.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
  ],
  declarations: [SignupComponent],
  providers: [],
})
export class SignupModule { }
