/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DoneModalT2Component } from './done-modal-t2.component';

describe('DoneModalT2Component', () => {
  let component: DoneModalT2Component;
  let fixture: ComponentFixture<DoneModalT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneModalT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneModalT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
