import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInterestComponent } from './course-interest.component';

describe('CourseInterestComponent', () => {
  let component: CourseInterestComponent;
  let fixture: ComponentFixture<CourseInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
