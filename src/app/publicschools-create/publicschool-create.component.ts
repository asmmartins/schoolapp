import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IPublicSchool } from './publicschool';
import { PublicSchoolService } from './publicschool.service';

import {NgForm} from '@angular/forms';

@Component({
  templateUrl: './publicschool-create.component.html',
  styleUrls: ['./publicschool-create.component.css']
})
export class PublicSchoolCreateComponent implements OnInit {
  pageTitle = '';
  errorMessage = '';
  publicSchool: IPublicSchool | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private publicSchoolService: PublicSchoolService) {
  }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('inep');
    if (param) {      
      this.getPublicSchools(param);
    }
  }

  getPublicSchools(id: string): void {
    this.publicSchoolService.getPublicSchool(id).subscribe({
      next: publicSchool => this.publicSchool = publicSchool,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/escolas']);
  }

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
}
}
