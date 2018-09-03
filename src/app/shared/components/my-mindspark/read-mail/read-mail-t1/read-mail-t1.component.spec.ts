/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReadMailT1Component } from './read-mail-t1.component';

describe('ReadMailT1Component', () => {
  let component: ReadMailT1Component;
  let fixture: ComponentFixture<ReadMailT1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadMailT1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMailT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
