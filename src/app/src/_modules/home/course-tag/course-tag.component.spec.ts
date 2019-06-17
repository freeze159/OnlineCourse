import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTagComponent } from './course-tag.component';

describe('CourseTagComponent', () => {
  let component: CourseTagComponent;
  let fixture: ComponentFixture<CourseTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
