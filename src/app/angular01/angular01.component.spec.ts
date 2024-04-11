import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular01Component } from './angular01.component';

describe('Angular01Component', () => {
  let component: Angular01Component;
  let fixture: ComponentFixture<Angular01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angular01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Angular01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
