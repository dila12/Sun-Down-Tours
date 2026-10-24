import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { DestinationComponent } from './destination-component';

describe('DestinationComponent', () => {
  let component: DestinationComponent;
  let fixture: ComponentFixture<DestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationComponent],
      providers: [provideRouter([]), provideHttpClient()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
