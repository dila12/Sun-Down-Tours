import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EightdaysComponent } from './eightdays-component';

describe('EightdaysComponent', () => {
  let component: EightdaysComponent;
  let fixture: ComponentFixture<EightdaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EightdaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EightdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
