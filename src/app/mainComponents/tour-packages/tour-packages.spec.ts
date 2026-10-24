import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { TourPackages } from './tour-packages';

describe('TourPackages', () => {
  let component: TourPackages;
  let fixture: ComponentFixture<TourPackages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourPackages],
      providers: [provideRouter([]), provideHttpClient()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourPackages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
