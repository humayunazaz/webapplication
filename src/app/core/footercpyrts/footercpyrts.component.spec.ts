import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootercpyrtsComponent } from './footercpyrts.component';

describe('FootercpyrtsComponent', () => {
  let component: FootercpyrtsComponent;
  let fixture: ComponentFixture<FootercpyrtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootercpyrtsComponent]
    });
    fixture = TestBed.createComponent(FootercpyrtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
