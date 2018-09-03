/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuestionHeaderT1Component } from './question-header-t1.component';

describe('QuestionHeaderT1Component', () => {
  let component: QuestionHeaderT1Component;
  let fixture: ComponentFixture<QuestionHeaderT1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionHeaderT1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionHeaderT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
