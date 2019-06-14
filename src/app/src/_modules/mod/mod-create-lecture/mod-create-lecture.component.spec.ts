import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModCreateLectureComponent } from './mod-create-lecture.component';

describe('ModCreateLectureComponent', () => {
  let component: ModCreateLectureComponent;
  let fixture: ComponentFixture<ModCreateLectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModCreateLectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModCreateLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
