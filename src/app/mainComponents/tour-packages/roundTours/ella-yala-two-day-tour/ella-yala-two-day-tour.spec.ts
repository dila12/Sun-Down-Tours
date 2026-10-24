import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';

import { TourContentService } from '../../../../i18n/tours/tour-content.service';
import { EllaYalaTwoDayTour } from './ella-yala-two-day-tour';

describe('EllaYalaTwoDayTour', () => {
  let component: EllaYalaTwoDayTour;
  let fixture: ComponentFixture<EllaYalaTwoDayTour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EllaYalaTwoDayTour],
      providers: [provideRouter([]), provideHttpClient(), provideToastr()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EllaYalaTwoDayTour);
    component = fixture.componentInstance;
    await TestBed.inject(TourContentService).preloadDetail('tour2ey');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
