/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopicTrailT2Component } from './topic-trail-t2.component';

describe('TopicTrailT2Component', () => {
  let component: TopicTrailT2Component;
  let fixture: ComponentFixture<TopicTrailT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicTrailT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicTrailT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
