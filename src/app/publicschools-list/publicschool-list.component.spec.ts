import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PublicSchoolListComponent } from './publicschool-list.component';
import { PublicSchoolListService} from './publicschool-list.service';

describe('PublicSchoolListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [PublicSchoolListService],
      declarations: [
        PublicSchoolListComponent
      ],
    }).compileComponents();
  }));

  it(`should create the 'PublicSchoolListComponent'`, () => {
    const fixture = TestBed.createComponent(PublicSchoolListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Escolas'`, () => {
    const fixture = TestBed.createComponent(PublicSchoolListComponent);
    const app = fixture.componentInstance;
    expect(app.pageTitle).toEqual('Escolas');
  });
});