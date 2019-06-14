import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTheLoaiComponent } from './admin-the-loai.component';

describe('AdminTheLoaiComponent', () => {
  let component: AdminTheLoaiComponent;
  let fixture: ComponentFixture<AdminTheLoaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTheLoaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTheLoaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
