import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SensorListComponent } from './sensores-list/sensor-list.component';
import { SensorRegionalListComponent } from './sensores-regionais-list/sensor-regional-list.component';

import { SensorListModule } from './sensores-list/sensor-list.module';
import { SensorRegionalListModule } from './sensores-regionais-list/sensor-regional-list.module';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'sensores', component: SensorListComponent },      
      { path: '', redirectTo: 'sensores', pathMatch: 'full' },
      { path: '**', redirectTo: 'sensores', pathMatch: 'full' },
      { path: 'sensores-regionais', component: SensorRegionalListComponent }
    ]),    
    SensorListModule,
    SensorRegionalListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
