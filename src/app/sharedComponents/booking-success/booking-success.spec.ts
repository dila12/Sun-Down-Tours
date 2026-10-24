import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { BookingSuccessComponent } from './booking-success';

describe('BookingSuccessComponent', () => {
  let component: BookingSuccessComponent;
  let fixture: ComponentFixture<BookingSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingSuccessComponent],
      providers: [provideRouter([]), provideHttpClient()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
