import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModTemplateComponent } from './mod-template.component';

describe('ModTemplateComponent', () => {
  let component: ModTemplateComponent;
  let fixture: ComponentFixture<ModTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
