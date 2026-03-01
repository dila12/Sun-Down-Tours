import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourdaysTourComponent } from './fourdays-tour-component';

describe('FourdaysTourComponent', () => {
  let component: FourdaysTourComponent;
  let fixture: ComponentFixture<FourdaysTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourdaysTourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourdaysTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
