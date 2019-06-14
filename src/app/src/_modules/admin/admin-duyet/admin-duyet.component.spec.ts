import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDuyetComponent } from './admin-duyet.component';

describe('AdminDuyetComponent', () => {
  let component: AdminDuyetComponent;
  let fixture: ComponentFixture<AdminDuyetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDuyetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDuyetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
