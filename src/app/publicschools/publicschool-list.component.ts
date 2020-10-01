import { Component, OnInit } from '@angular/core';

import { IPublicSchool } from './publicschool';
import { PublicSchoolService } from './publicschool.service';

@Component({
  templateUrl: './publicschool-list.component.html',
  styleUrls: ['./publicschool-list.component.css']
})
export class PublicSchoolListComponent implements OnInit {
  pageTitle = 'Escolas';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredPublicSchools = this.listFilter ? this.performFilter(this.listFilter) : this.publicSchools;
  }

  filteredPublicSchools: IPublicSchool[] = [];
  publicSchools: IPublicSchool[] = [];

  constructor(private publicSchoolService: PublicSchoolService) { }

  onRatingClicked(message: string): void {
    this.pageTitle = '' + message;
  }

  performFilter(filterBy: string): IPublicSchool[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.publicSchools.filter((publicSchool: IPublicSchool) =>
    publicSchool.inep.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.publicSchoolService.getPublicSchools().subscribe({
      next: publicSchools => {
        this.publicSchools = publicSchools;
        this.filteredPublicSchools = this.publicSchools;
      },
      error: err => this.errorMessage = err
    });
  }
}
