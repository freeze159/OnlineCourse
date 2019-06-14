import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKhoahocComponent } from './admin-khoahoc.component';

describe('AdminKhoahocComponent', () => {
  let component: AdminKhoahocComponent;
  let fixture: ComponentFixture<AdminKhoahocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKhoahocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKhoahocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
