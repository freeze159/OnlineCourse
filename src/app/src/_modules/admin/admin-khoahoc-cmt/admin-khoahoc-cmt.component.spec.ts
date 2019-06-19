import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKhoahocCmtComponent } from './admin-khoahoc-cmt.component';

describe('AdminKhoahocCmtComponent', () => {
  let component: AdminKhoahocCmtComponent;
  let fixture: ComponentFixture<AdminKhoahocCmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKhoahocCmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKhoahocCmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
