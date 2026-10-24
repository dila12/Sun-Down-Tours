import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';

import { TourContentService } from '../../../../i18n/tours/tour-content.service';
import { GalleDayTour } from './galle-day-tour';

describe('GalleDayTour', () => {
  let component: GalleDayTour;
  let fixture: ComponentFixture<GalleDayTour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleDayTour],
      providers: [provideRouter([]), provideHttpClient(), provideToastr()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleDayTour);
    component = fixture.componentInstance;
    await TestBed.inject(TourContentService).preloadDetail('galleDay');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
