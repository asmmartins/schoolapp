import { NgModule } from '@angular/core';
import { PublicSchoolListComponent } from './publicschool-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PublicSchoolListComponent    
  ],
  imports: [
    RouterModule.forChild([
      { path: 'publicschools', component: PublicSchoolListComponent }    
    ]),
    SharedModule
  ]
})
export class PublicSchoolListModule { }
