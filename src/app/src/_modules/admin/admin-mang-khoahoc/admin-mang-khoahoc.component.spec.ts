import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMangKhoahocComponent } from './admin-mang-khoahoc.component';

describe('AdminMangKhoahocComponent', () => {
  let component: AdminMangKhoahocComponent;
  let fixture: ComponentFixture<AdminMangKhoahocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMangKhoahocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMangKhoahocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
