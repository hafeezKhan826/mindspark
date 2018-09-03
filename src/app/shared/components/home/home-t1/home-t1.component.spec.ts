/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeT1Component } from './home-t1.component';

describe('HomeT1Component', () => {
  let component: HomeT1Component;
  let fixture: ComponentFixture<HomeT1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeT1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
