/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HalfwidthComponent } from './halfwidth.component';

describe('HalfwidthComponent', () => {
  let component: HalfwidthComponent;
  let fixture: ComponentFixture<HalfwidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfwidthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfwidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
