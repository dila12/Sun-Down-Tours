import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { PackageItemComponent } from './package-item-component';

describe('PackageItemComponent', () => {
  let component: PackageItemComponent;
  let fixture: ComponentFixture<PackageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackageItemComponent],
      providers: [provideRouter([]), provideHttpClient()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageItemComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('tour', {
      pageId: 'tour7',
      title: '7 day Sri Lanka tour',
      days: '7 Days',
      persons: '2 Persons',
      imageName: 'package-1',
      price: 100,
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
