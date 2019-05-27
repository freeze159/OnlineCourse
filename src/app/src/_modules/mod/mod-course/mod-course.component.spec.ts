import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModCourseComponent } from './mod-course.component';

describe('ModCourseComponent', () => {
  let component: ModCourseComponent;
  let fixture: ComponentFixture<ModCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
