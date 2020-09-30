import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SensorListComponent } from './sensor-list.component';
import { SensorListService} from './sensor-list.service';

describe('SensorListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [SensorListService],
      declarations: [
        SensorListComponent
      ],
    }).compileComponents();
  }));

  it(`should create the 'sensorListComponent'`, () => {
    const fixture = TestBed.createComponent(SensorListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Nacional'`, () => {
    const fixture = TestBed.createComponent(SensorListComponent);
    const app = fixture.componentInstance;
    expect(app.pageTitle).toEqual('Nacional');
  });
});