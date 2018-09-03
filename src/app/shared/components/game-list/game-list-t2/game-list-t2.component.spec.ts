/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GameListT2Component } from './game-list-t2.component';

describe('GameListT2Component', () => {
  let component: GameListT2Component;
  let fixture: ComponentFixture<GameListT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameListT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
