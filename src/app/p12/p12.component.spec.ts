import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P12Component } from './p12.component';

describe('P12Component', () => {
  let component: P12Component;
  let fixture: ComponentFixture<P12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
