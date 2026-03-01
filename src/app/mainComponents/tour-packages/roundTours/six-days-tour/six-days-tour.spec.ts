import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixDaysTour } from './six-days-tour';

describe('SixDaysTour', () => {
  let component: SixDaysTour;
  let fixture: ComponentFixture<SixDaysTour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SixDaysTour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixDaysTour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
