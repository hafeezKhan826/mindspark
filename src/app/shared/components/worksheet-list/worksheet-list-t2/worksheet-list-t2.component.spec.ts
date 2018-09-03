import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksheetListT2Component } from './worksheet-list-t2.component';

describe('WorksheetListT2Component', () => {
  let component: WorksheetListT2Component;
  let fixture: ComponentFixture<WorksheetListT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksheetListT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksheetListT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
