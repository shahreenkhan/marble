import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartzComponent } from './quartz.component';

describe('QuartzComponent', () => {
  let component: QuartzComponent;
  let fixture: ComponentFixture<QuartzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuartzComponent]
    });
    fixture = TestBed.createComponent(QuartzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
