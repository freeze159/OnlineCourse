import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKhoahocQuestionComponent } from './admin-khoahoc-question.component';

describe('AdminKhoahocQuestionComponent', () => {
  let component: AdminKhoahocQuestionComponent;
  let fixture: ComponentFixture<AdminKhoahocQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKhoahocQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKhoahocQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
