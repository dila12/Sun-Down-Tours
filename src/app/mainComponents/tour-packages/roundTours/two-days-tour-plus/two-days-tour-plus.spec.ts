import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDaysTourPlus } from './two-days-tour-plus';

describe('TwoDaysTourPlus', () => {
  let component: TwoDaysTourPlus;
  let fixture: ComponentFixture<TwoDaysTourPlus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoDaysTourPlus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoDaysTourPlus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
