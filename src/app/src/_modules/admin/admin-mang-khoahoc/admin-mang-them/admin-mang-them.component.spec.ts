import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMangThemComponent } from './admin-mang-them.component';

describe('AdminMangThemComponent', () => {
  let component: AdminMangThemComponent;
  let fixture: ComponentFixture<AdminMangThemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMangThemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMangThemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
