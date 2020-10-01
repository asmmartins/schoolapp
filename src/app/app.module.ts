import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PublicSchoolListComponent } from './publicschools-list/publicschool-list.component';

import { PublicSchoolListModule } from './publicschools-list/publicschool-list.module';
import { ProductModule } from './products/product.module';


@NgModule({
  declarations: [
    AppComponent      
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'publicschools', component: PublicSchoolListComponent } ,     
      { path: '', redirectTo: 'publicschools', pathMatch: 'full' },
      { path: '**', redirectTo: 'publicschools', pathMatch: 'full' },            
    ]),        
    PublicSchoolListModule,
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
