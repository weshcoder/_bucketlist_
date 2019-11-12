import { NgModule } from '@angular/core';

import { SignupComponent } from './signup.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: SignupComponent}
];

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    SignupModule
  ],
  declarations: [SignupComponent],
  providers: [],
})
export class SignupModule { }
