/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DoneModalWorksheetComponent } from './done-modal-worksheet.component';

describe('DoneModalWorksheetComponent', () => {
  let component: DoneModalWorksheetComponent;
  let fixture: ComponentFixture<DoneModalWorksheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneModalWorksheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneModalWorksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
