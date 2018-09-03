/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeT2Component } from './home-t2.component';

describe('HomeT2Component', () => {
  let component: HomeT2Component;
  let fixture: ComponentFixture<HomeT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
