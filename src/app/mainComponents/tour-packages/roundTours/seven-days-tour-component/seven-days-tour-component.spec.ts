import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';

import { TourContentService } from '../../../../i18n/tours/tour-content.service';
import { SevenDaysTourComponent } from './seven-days-tour-component';

describe('SevenDaysTourComponent', () => {
  let component: SevenDaysTourComponent;
  let fixture: ComponentFixture<SevenDaysTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SevenDaysTourComponent],
      providers: [provideRouter([]), provideHttpClient(), provideToastr()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevenDaysTourComponent);
    component = fixture.componentInstance;
    await TestBed.inject(TourContentService).preloadDetail('tour7');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
