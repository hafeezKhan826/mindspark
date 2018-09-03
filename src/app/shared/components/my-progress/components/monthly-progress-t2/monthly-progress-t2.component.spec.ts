/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MonthlyProgressT2Component } from './monthly-progress-t2.component';

describe('MonthlyProgressT2Component', () => {
  let component: MonthlyProgressT2Component;
  let fixture: ComponentFixture<MonthlyProgressT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyProgressT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyProgressT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
