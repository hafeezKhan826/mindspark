/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopicListT1Component } from './topic-list-t1.component';

describe('TopicListT1Component', () => {
  let component: TopicListT1Component;
  let fixture: ComponentFixture<TopicListT1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicListT1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicListT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
