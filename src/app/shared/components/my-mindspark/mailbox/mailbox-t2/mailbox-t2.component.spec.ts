/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MailboxT2Component } from './mailbox-t2.component';

describe('MailboxT2Component', () => {
  let component: MailboxT2Component;
  let fixture: ComponentFixture<MailboxT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailboxT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailboxT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
