import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksheetTileT2Component } from './worksheet-tile-t2.component';

describe('WorksheetTileT2Component', () => {
  let component: WorksheetTileT2Component;
  let fixture: ComponentFixture<WorksheetTileT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksheetTileT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksheetTileT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
