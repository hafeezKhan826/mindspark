import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksheetTileT1Component } from './worksheet-tile-t1.component';

describe('WorksheetTileT1Component', () => {
  let component: WorksheetTileT1Component;
  let fixture: ComponentFixture<WorksheetTileT1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksheetTileT1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksheetTileT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
