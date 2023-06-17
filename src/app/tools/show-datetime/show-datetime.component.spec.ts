import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowDatetimeComponent } from './show-datetime.component';
import { HttpClientModule } from '@angular/common/http';

describe('ShowDatetimeComponent', () => {
  let component: ShowDatetimeComponent;
  let fixture: ComponentFixture<ShowDatetimeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ShowDatetimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDatetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
