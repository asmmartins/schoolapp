import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { PublicSchoolListComponent } from './publicschools-list/publicschool-list.component';
import { PublicSchoolCreateComponent } from './publicschools-create/publicschool-create.component';

import { PublicSchoolListModule } from './publicschools-list/publicschool-list.module';
import { PublicSchoolModule } from './publicschools/publicschool.module';


@NgModule({
  declarations: [
    AppComponent      
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'escolas', component: PublicSchoolListComponent } ,     
      { path: '', redirectTo: 'escolas', pathMatch: 'full' },
      { path: '**', redirectTo: 'escolas', pathMatch: 'full' },       
      { path: 'criar-escolas', component: PublicSchoolCreateComponent } ,          
    ]),        
    PublicSchoolListModule,
    PublicSchoolModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
