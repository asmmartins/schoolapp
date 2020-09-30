import { Component, OnInit } from '@angular/core';

import { ISensorRegional } from './sensor-regional';
import { SensorRegionalListService } from './sensor-regional-list.service';

@Component({
  templateUrl: './sensor-regional-list.component.html',
  styleUrls: ['./sensor-regional-list.component.css']
})
export class SensorRegionalListComponent implements OnInit {
  
  pageTitle = 'Regional';  
  errorMessage = '';

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredSensores = this.listFilter ? this.performFilter(this.listFilter) : this.sensores;
  }

  filteredSensores: ISensorRegional[] = [];
  sensores: ISensorRegional[] = [];

  constructor(private sensorListService: SensorRegionalListService) { }

  performFilter(filterBy: string): ISensorRegional[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.sensores.filter((sensor: ISensorRegional) =>
      sensor.region.toLocaleLowerCase().indexOf(filterBy) !== -1);
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
