import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';

import { TourContentService } from '../../../../i18n/tours/tour-content.service';
import { KandyDayTourComponent } from './kandy-day-tour-component';

describe('KandyDayTourComponent', () => {
  let component: KandyDayTourComponent;
  let fixture: ComponentFixture<KandyDayTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KandyDayTourComponent],
      providers: [provideRouter([]), provideHttpClient(), provideToastr()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(KandyDayTourComponent);
    component = fixture.componentInstance;
    await TestBed.inject(TourContentService).preloadDetail('kandyDay');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
