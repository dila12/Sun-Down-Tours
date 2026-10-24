import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';

import { TourContentService } from '../../../../i18n/tours/tour-content.service';
import { FourdaysTourComponent } from './fourdays-tour-component';

describe('FourdaysTourComponent', () => {
  let component: FourdaysTourComponent;
  let fixture: ComponentFixture<FourdaysTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourdaysTourComponent],
      providers: [provideRouter([]), provideHttpClient(), provideToastr()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourdaysTourComponent);
    component = fixture.componentInstance;
    await TestBed.inject(TourContentService).preloadDetail('tour4');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
