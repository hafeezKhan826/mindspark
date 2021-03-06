/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyProgressComponent } from './my-progress.component';

describe('MyProgressComponent', () => {
  let component: MyProgressComponent;
  let fixture: ComponentFixture<MyProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
