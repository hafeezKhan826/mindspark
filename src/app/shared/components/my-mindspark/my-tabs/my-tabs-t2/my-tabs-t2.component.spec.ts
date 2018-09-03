/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyMindsparkTabsT2Component } from './my-tabs-t2.component';

describe('MyMindsparkTabsT2Component', () => {
  let component: MyMindsparkTabsT2Component;
  let fixture: ComponentFixture<MyMindsparkTabsT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMindsparkTabsT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMindsparkTabsT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
