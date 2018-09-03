/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyProgressT2Component } from './my-progress-t2.component';

describe('MyProgressT2Component', () => {
  let component: MyProgressT2Component;
  let fixture: ComponentFixture<MyProgressT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProgressT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProgressT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
