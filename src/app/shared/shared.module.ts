import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../nav/nav-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ],
  declarations: [NavbarComponent],
  providers: [],
})
export class SharedModule { }
