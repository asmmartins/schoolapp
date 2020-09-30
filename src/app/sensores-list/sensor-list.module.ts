import { NgModule } from '@angular/core';
import { SensorListComponent } from './sensor-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SensorListComponent    
  ],
  imports: [
    RouterModule.forChild([
      { path: 'sensores', component: SensorListComponent }    
    ]),
    SharedModule
  ]
})
export class SensorListModule { }
