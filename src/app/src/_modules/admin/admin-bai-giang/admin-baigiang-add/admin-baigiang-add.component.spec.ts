import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBaigiangAddComponent } from './admin-baigiang-add.component';

describe('AdminBaigiangAddComponent', () => {
  let component: AdminBaigiangAddComponent;
  let fixture: ComponentFixture<AdminBaigiangAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBaigiangAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBaigiangAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
