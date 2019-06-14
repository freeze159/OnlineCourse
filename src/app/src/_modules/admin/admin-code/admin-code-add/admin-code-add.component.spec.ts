import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCodeAddComponent } from './admin-code-add.component';

describe('AdminCodeAddComponent', () => {
  let component: AdminCodeAddComponent;
  let fixture: ComponentFixture<AdminCodeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCodeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCodeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
