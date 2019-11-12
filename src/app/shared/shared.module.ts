import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../nav/nav-bar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [ CommonModule ],
  exports: [NavbarComponent],
  providers: [],
})
export class SharedModule {}
