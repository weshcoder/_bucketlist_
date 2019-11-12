import { NgModule } from '@angular/core';

import { BucketlistComponent } from './bucketlist.component';
import { Routes, RouterModule } from '@angular/router';

const featureRoutes: Routes = [
  { path: '', component: BucketlistComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(featureRoutes)
  ],
  exports: [],
  declarations: [BucketlistComponent],
  providers: [],
})
export class BucketlistModule { }
