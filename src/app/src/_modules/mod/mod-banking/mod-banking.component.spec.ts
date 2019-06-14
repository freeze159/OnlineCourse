import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModBankingComponent } from './mod-banking.component';

describe('ModBankingComponent', () => {
  let component: ModBankingComponent;
  let fixture: ComponentFixture<ModBankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModBankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
