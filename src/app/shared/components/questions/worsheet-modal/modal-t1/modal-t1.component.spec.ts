/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModalT1Component } from './modal-t1.component';

describe('ModalT1Component', () => {
  let component: ModalT1Component;
  let fixture: ComponentFixture<ModalT1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalT1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
