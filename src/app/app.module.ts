import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './home/app.component';
import { NavbarComponent } from './nav/nav-bar.component';
import appRoutes from './routerConfig';
import { LandingComponent } from './landing/landing-page.component';
import { SharedModule } from './shared/shared.module';
import { SignupModule } from './signup/signup.module';
import { BucketlistModule } from './bucketlist/bucketlist.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
  ],
  imports: [
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
