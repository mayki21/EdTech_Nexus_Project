import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrnavbarComponent } from './instrnavbar.component';

describe('InstrnavbarComponent', () => {
  let component: InstrnavbarComponent;
  let fixture: ComponentFixture<InstrnavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstrnavbarComponent]
    });
    fixture = TestBed.createComponent(InstrnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
