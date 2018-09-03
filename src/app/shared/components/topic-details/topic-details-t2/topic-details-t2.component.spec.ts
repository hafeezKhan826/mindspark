/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopicDetailsT2Component } from './topic-details-t2.component';

describe('TopicDetailsT2Component', () => {
  let component: TopicDetailsT2Component;
  let fixture: ComponentFixture<TopicDetailsT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicDetailsT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicDetailsT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
