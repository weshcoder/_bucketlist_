import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './home/app.component';
import { NavbarComponent } from './nav/nav-bar.component';
import appRoutes from './routerConfig';
import { LandingComponent } from './landing/landing-page.component';
import { BucketlistModule } from './bucketlist/bucketlist.module';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
  ],
  imports: [
    SharedModule,
    BucketlistModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
