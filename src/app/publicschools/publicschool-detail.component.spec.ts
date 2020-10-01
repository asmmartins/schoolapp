import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSchoolDetailComponent } from './publicschool-detail.component';

describe('PublicSchoolDetailComponent', () => {
  let component: PublicSchoolDetailComponent;
  let fixture: ComponentFixture<PublicSchoolDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PublicSchoolDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSchoolDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
