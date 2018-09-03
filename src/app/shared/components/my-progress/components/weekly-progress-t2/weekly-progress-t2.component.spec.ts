/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WeeklyProgressT2Component } from './weekly-progress-t2.component';

describe('WeeklyProgressT2Component', () => {
  let component: WeeklyProgressT2Component;
  let fixture: ComponentFixture<WeeklyProgressT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyProgressT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyProgressT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
