import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { ResturantComponent } from './resturant-component';

describe('ResturantComponent', () => {
  let component: ResturantComponent;
  let fixture: ComponentFixture<ResturantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResturantComponent],
      providers: [provideRouter([]), provideHttpClient()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
