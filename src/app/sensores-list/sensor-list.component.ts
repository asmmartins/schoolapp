import { Component, OnInit } from '@angular/core';

import { ISensor } from './sensor';
import { SensorListService } from './sensor-list.service';

@Component({
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css']
})
export class SensorListComponent implements OnInit {
  
  pageTitle = 'Nacional';  
  errorMessage = '';

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredSensores = this.listFilter ? this.performFilter(this.listFilter) : this.sensores;
  }

  filteredSensores: ISensor[] = [];
  sensores: ISensor[] = [];

  constructor(private sensorListService: SensorListService) { }

  performFilter(filterBy: string): ISensor[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.sensores.filter((sensor: ISensor) =>
      sensor.tag.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.sensorListService.getSensores().subscribe({
      next: sensores => {
        this.sensores = sensores;
        this.filteredSensores = this.sensores;
      },
      error: err => this.errorMessage = err
    });
  }
}
