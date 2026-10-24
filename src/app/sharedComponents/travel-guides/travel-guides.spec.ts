import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { TravelGuides } from './travel-guides';

describe('TravelGuides', () => {
  let component: TravelGuides;
  let fixture: ComponentFixture<TravelGuides>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelGuides],
      providers: [provideRouter([]), provideHttpClient()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelGuides);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
