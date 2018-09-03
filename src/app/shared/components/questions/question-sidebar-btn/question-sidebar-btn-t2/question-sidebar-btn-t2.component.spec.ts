/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuestionSidebarBtnT2Component } from './question-sidebar-btn-t2.component';

describe('QuestionSidebarBtnT2Component', () => {
  let component: QuestionSidebarBtnT2Component;
  let fixture: ComponentFixture<QuestionSidebarBtnT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionSidebarBtnT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSidebarBtnT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
