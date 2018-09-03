/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuestionHeaderT2Component } from './question-header-t2.component';

describe('QuestionHeaderT2Component', () => {
  let component: QuestionHeaderT2Component;
  let fixture: ComponentFixture<QuestionHeaderT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionHeaderT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionHeaderT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
