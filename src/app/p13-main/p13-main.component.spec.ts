import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P13MainComponent } from './p13-main.component';

describe('P13MainComponent', () => {
  let component: P13MainComponent;
  let fixture: ComponentFixture<P13MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P13MainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P13MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
