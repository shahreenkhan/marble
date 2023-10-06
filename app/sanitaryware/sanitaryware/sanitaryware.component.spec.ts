import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitarywareComponent } from './sanitaryware.component';

describe('SanitarywareComponent', () => {
  let component: SanitarywareComponent;
  let fixture: ComponentFixture<SanitarywareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SanitarywareComponent]
    });
    fixture = TestBed.createComponent(SanitarywareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
