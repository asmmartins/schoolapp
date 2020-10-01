import { Component, OnInit } from '@angular/core';

import { IPublicSchool } from './publicschool';
import { PublicSchoolListService } from './publicschool-list.service';

@Component({
  templateUrl: './publicschool-list.component.html',
  styleUrls: ['./publicschool-list.component.css']
})
export class PublicSchoolListComponent implements OnInit {
  
  pageTitle = 'Escolas';
  errorMessage = '';

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredpublicschools = this.listFilter ? this.performFilter(this.listFilter) : this.publicschools;
  }

  filteredpublicschools: IPublicSchool[] = [];
  publicschools: IPublicSchool[] = [];

  constructor(private publicSchoolListService: PublicSchoolListService) { }

  performFilter(filterBy: string): IPublicSchool[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.publicschools.filter((publicschool: IPublicSchool) =>
      publicschool.inep.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.publicSchoolListService.getPublicSchools().subscribe({
      next: publicschools => {
        this.publicschools = publicschools;
        this.filteredpublicschools = this.publicschools;
      },
      error: err => this.errorMessage = err
    });
  }
}
