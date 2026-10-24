import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';

import { TourContentService } from '../../../../i18n/tours/tour-content.service';
import { TenDaysTourComponent } from './ten-days-tour-component';

describe('TenDaysTourComponent', () => {
  let component: TenDaysTourComponent;
  let fixture: ComponentFixture<TenDaysTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenDaysTourComponent],
      providers: [provideRouter([]), provideHttpClient(), provideToastr()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenDaysTourComponent);
    component = fixture.componentInstance;
    await TestBed.inject(TourContentService).preloadDetail('tour10');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
