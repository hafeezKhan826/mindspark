/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyDetailsT1Component } from './my-details-t1.component';

describe('MyDetailsT1Component', () => {
  let component: MyDetailsT1Component;
  let fixture: ComponentFixture<MyDetailsT1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDetailsT1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDetailsT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
