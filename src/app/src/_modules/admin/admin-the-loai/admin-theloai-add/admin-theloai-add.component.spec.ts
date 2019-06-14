import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTheloaiAddComponent } from './admin-theloai-add.component';

describe('AdminTheloaiAddComponent', () => {
  let component: AdminTheloaiAddComponent;
  let fixture: ComponentFixture<AdminTheloaiAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTheloaiAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTheloaiAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
