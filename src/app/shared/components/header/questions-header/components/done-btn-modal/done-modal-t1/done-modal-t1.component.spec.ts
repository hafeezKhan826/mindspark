/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DoneModalT1Component } from './done-modal-t1.component';

describe('DoneModalT1Component', () => {
  let component: DoneModalT1Component;
  let fixture: ComponentFixture<DoneModalT1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneModalT1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneModalT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
