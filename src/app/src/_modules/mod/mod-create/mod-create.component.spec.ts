import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModCreateComponent } from './mod-create.component';

describe('ModCreateComponent', () => {
  let component: ModCreateComponent;
  let fixture: ComponentFixture<ModCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
