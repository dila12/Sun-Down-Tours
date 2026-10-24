import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';

import { TourContentService } from '../../../../i18n/tours/tour-content.service';
import { SixDaysTour } from './six-days-tour';

describe('SixDaysTour', () => {
  let component: SixDaysTour;
  let fixture: ComponentFixture<SixDaysTour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SixDaysTour],
      providers: [provideRouter([]), provideHttpClient(), provideToastr()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixDaysTour);
    component = fixture.componentInstance;
    await TestBed.inject(TourContentService).preloadDetail('tour6');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
