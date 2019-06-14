import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKhoahocAddComponent } from './admin-khoahoc-add.component';

describe('AdminKhoahocAddComponent', () => {
  let component: AdminKhoahocAddComponent;
  let fixture: ComponentFixture<AdminKhoahocAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKhoahocAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKhoahocAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
