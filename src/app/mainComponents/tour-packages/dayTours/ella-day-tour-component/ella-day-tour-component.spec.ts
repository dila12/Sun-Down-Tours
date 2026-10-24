import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';

import { TourContentService } from '../../../../i18n/tours/tour-content.service';
import { EllaDayTourComponent } from './ella-day-tour-component';

describe('EllaDayTourComponent', () => {
  let component: EllaDayTourComponent;
  let fixture: ComponentFixture<EllaDayTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EllaDayTourComponent],
      providers: [provideRouter([]), provideHttpClient(), provideToastr()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EllaDayTourComponent);
    component = fixture.componentInstance;
    await TestBed.inject(TourContentService).preloadDetail('ellaDay');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
