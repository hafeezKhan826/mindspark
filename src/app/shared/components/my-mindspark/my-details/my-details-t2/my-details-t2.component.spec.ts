/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyDetailsT2Component } from './my-details-t2.component';

describe('MyDetailsT2Component', () => {
  let component: MyDetailsT2Component;
  let fixture: ComponentFixture<MyDetailsT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDetailsT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDetailsT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
