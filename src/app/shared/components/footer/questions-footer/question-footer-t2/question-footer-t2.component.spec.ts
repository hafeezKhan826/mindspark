/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuestionFooterT2Component } from './question-footer-t2.component';

describe('QuestionFooterT2Component', () => {
  let component: QuestionFooterT2Component;
  let fixture: ComponentFixture<QuestionFooterT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionFooterT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFooterT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
