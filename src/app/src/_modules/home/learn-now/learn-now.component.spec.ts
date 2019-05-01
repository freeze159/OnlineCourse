import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnNowComponent } from './learn-now.component';

describe('LearnNowComponent', () => {
  let component: LearnNowComponent;
  let fixture: ComponentFixture<LearnNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
