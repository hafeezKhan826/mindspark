/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopicListT2Component } from './topic-list-t2.component';

describe('TopicListT2Component', () => {
  let component: TopicListT2Component;
  let fixture: ComponentFixture<TopicListT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicListT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicListT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
