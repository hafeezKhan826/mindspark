/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyMindsparkTabsT1Component } from './my-tabs-t1.component';

describe('MyMindsparkTabsT1Component', () => {
  let component: MyMindsparkTabsT1Component;
  let fixture: ComponentFixture<MyMindsparkTabsT1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMindsparkTabsT1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMindsparkTabsT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
