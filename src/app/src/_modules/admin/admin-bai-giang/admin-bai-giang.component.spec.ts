import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBaiGiangComponent } from './admin-bai-giang.component';

describe('AdminBaiGiangComponent', () => {
  let component: AdminBaiGiangComponent;
  let fixture: ComponentFixture<AdminBaiGiangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBaiGiangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBaiGiangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
