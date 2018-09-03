/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MailboxT1Component } from './mailbox-t1.component';

describe('MailboxT1Component', () => {
  let component: MailboxT1Component;
  let fixture: ComponentFixture<MailboxT1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailboxT1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailboxT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
