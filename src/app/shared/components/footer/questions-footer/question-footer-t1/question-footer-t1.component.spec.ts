/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuestionFooterT1Component } from './question-footer-t1.component';

describe('QuestionFooterT1Component', () => {
  let component: QuestionFooterT1Component;
  let fixture: ComponentFixture<QuestionFooterT1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionFooterT1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFooterT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
