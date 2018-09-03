/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HalfwidthT2Component } from './halfwidth-t2.component';

describe('HalfwidthT2Component', () => {
  let component: HalfwidthT2Component;
  let fixture: ComponentFixture<HalfwidthT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfwidthT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfwidthT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
