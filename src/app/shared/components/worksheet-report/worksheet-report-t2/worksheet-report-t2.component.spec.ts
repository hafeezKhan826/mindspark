/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WorksheetReportT2Component } from './worksheet-report-t2.component';

describe('WorksheetReportT2Component', () => {
  let component: WorksheetReportT2Component;
  let fixture: ComponentFixture<WorksheetReportT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksheetReportT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksheetReportT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
