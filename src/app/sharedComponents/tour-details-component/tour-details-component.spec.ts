import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { TourDetailsComponent } from './tour-details-component';

describe('TourDetailsComponent', () => {
  let component: TourDetailsComponent;
  let fixture: ComponentFixture<TourDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourDetailsComponent],
      providers: [provideRouter([]), provideHttpClient()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourDetailsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('tour', {
      title: 'Sri Lanka tour',
      description: 'Private tour',
      duration: '7 Days',
      persons: '2 Persons',
      price: 0,
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
