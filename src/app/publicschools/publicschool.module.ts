import { NgModule } from '@angular/core';
import { PublicSchoolListComponent } from './publicschool-list.component';
import { PublicSchoolDetailComponent } from './publicschool-detail.component';
import { RouterModule } from '@angular/router';
import { PublicSchoolDetailGuard } from './publicschool-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { PublicSchoolCreateComponent } from '../publicschools-create/publicschool-create.component';

@NgModule({
  declarations: [
    PublicSchoolListComponent,
    PublicSchoolDetailComponent,    
  ],
  imports: [
    RouterModule.forChild([
      { path: 'escolas', component: PublicSchoolListComponent },
      {
        path: 'escolas/:inep',
        canActivate: [PublicSchoolDetailGuard],
        component: PublicSchoolDetailComponent
      },
      { path: 'criar-escolas', component: PublicSchoolCreateComponent },
    ]),
    SharedModule
  ]
})
export class PublicSchoolModule { }
