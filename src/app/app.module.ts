import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PublicSchoolListComponent } from './publicschools-list/publicschool-list.component';

import { PublicSchoolListModule } from './publicschools-list/publicschool-list.module';
import { ProductModule } from './publicschools/publicschool.module';


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
    ]),        
    PublicSchoolListModule,
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
