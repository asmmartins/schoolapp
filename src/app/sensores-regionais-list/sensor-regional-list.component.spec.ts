import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SensorRegionalListComponent } from './sensor-regional-list.component';
import { SensorRegionalListService} from './sensor-regional-list.service';

describe('SensorRegionalListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [SensorRegionalListService],
      declarations: [
        SensorRegionalListComponent
      ],
    }).compileComponents();
  }));

  it(`should create the 'sensorRegionalListComponent'`, () => {
    const fixture = TestBed.createComponent(SensorRegionalListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Regional'`, () => {
    const fixture = TestBed.createComponent(SensorRegionalListComponent);
    const app = fixture.componentInstance;
    expect(app.pageTitle).toEqual('Regional');
  });
});