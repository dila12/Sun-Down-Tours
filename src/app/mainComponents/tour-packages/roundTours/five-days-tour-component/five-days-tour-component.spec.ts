import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';

import { TourContentService } from '../../../../i18n/tours/tour-content.service';
import { FiveDaysTourComponent } from './five-days-tour-component';

describe('FiveDaysTourComponent', () => {
  let component: FiveDaysTourComponent;
  let fixture: ComponentFixture<FiveDaysTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiveDaysTourComponent],
      providers: [provideRouter([]), provideHttpClient(), provideToastr()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiveDaysTourComponent);
    component = fixture.componentInstance;
    await TestBed.inject(TourContentService).preloadDetail('tour5');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
