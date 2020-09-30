import { NgModule } from '@angular/core';
import { SensorRegionalListComponent } from './sensor-regional-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SensorRegionalListComponent    
  ],
  imports: [
    RouterModule.forChild([
      { path: 'sensores-regionais', component: SensorRegionalListComponent }    
    ]),
    SharedModule
  ]
})
export class SensorRegionalListModule { }
