import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P16Component } from './p16.component';

describe('P16Component', () => {
  let component: P16Component;
  let fixture: ComponentFixture<P16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P16Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
