import { NgModule } from '@angular/core';

import { SignupComponent } from './signup.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: SignupComponent}
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [SignupComponent],
  providers: [],
})
export class SignupModule { }
