import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInstructorAddComponent } from './admin-instructor-add.component';

describe('AdminInstructorAddComponent', () => {
  let component: AdminInstructorAddComponent;
  let fixture: ComponentFixture<AdminInstructorAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInstructorAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInstructorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
