import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSchoolCreateComponent } from './publicschool-create.component';

describe('PublicSchoolCreateComponent', () => {
  let component: PublicSchoolCreateComponent;
  let fixture: ComponentFixture<PublicSchoolCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PublicSchoolCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSchoolCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
