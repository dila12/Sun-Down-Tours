import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';

import { TourContentService } from '../../../../i18n/tours/tour-content.service';
import { TwoDaysTourPlus } from './two-days-tour-plus';

describe('TwoDaysTourPlus', () => {
  let component: TwoDaysTourPlus;
  let fixture: ComponentFixture<TwoDaysTourPlus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoDaysTourPlus],
      providers: [provideRouter([]), provideHttpClient(), provideToastr()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoDaysTourPlus);
    component = fixture.componentInstance;
    await TestBed.inject(TourContentService).preloadDetail('tour2ek');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
