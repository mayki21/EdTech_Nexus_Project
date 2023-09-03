import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidsectionComponent } from './midsection.component';

describe('MidsectionComponent', () => {
  let component: MidsectionComponent;
  let fixture: ComponentFixture<MidsectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MidsectionComponent]
    });
    fixture = TestBed.createComponent(MidsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
