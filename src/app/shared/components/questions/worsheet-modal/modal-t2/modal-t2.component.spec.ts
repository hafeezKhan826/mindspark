/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModalT2Component } from './modal-t2.component';

describe('ModalT2Component', () => {
  let component: ModalT2Component;
  let fixture: ComponentFixture<ModalT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
