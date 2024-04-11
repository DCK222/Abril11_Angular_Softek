import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ts01Component } from './ts01.component';

describe('Ts01Component', () => {
  let component: Ts01Component;
  let fixture: ComponentFixture<Ts01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ts01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ts01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
