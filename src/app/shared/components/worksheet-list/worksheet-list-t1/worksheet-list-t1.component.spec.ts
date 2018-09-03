/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WorksheetListT1Component } from './worksheet-list-t1.component';

describe('WorksheetListT1Component', () => {
  let component: WorksheetListT1Component;
  let fixture: ComponentFixture<WorksheetListT1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksheetListT1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksheetListT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
