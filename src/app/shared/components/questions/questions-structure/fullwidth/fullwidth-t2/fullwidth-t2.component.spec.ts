/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FullwidthT2Component } from './fullwidth-t2.component';

describe('FullwidthT2Component', () => {
  let component: FullwidthT2Component;
  let fixture: ComponentFixture<FullwidthT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullwidthT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullwidthT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
