import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NavbarComponent } from '../nav/nav-bar.component';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],

})
export class SignupComponent {
  signupForm;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private navbar: NavbarComponent) {

  this.signupForm = this.formBuilder.group({
    username: [''],
    password: ''
  });
}

  backHome() {
    this.router.navigate(['/home']);
  }

  LoginUser() {
    if (this.signupForm.controls['username'].value === 'Wega' && this.signupForm.controls['password'].value === 'wega123') {
      this.navbar.signedIn = true;
      this.router.navigate(['/home']);
    }
  }

}
