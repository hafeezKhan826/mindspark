/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReadMailT2Component } from './read-mail-t2.component';

describe('ReadMailT2Component', () => {
  let component: ReadMailT2Component;
  let fixture: ComponentFixture<ReadMailT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadMailT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMailT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
