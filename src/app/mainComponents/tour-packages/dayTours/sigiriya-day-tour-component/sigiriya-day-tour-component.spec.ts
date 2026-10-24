import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';

import { TourContentService } from '../../../../i18n/tours/tour-content.service';
import { SigiriyaDayTourComponent } from './sigiriya-day-tour-component';

describe('SigiriyaDayTourComponent', () => {
  let component: SigiriyaDayTourComponent;
  let fixture: ComponentFixture<SigiriyaDayTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigiriyaDayTourComponent],
      providers: [provideRouter([]), provideHttpClient(), provideToastr()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigiriyaDayTourComponent);
    component = fixture.componentInstance;
    await TestBed.inject(TourContentService).preloadDetail('sigiriyaDay');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
