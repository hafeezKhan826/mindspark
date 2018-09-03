import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AppSettings } from '../../../../settings/app.settings';
import { TopicsTileComponent } from '../../topics-tile/topics-tile.component';
import { WorksheetTileComponent } from '../../worksheet-tile/worksheet-tile.component';
import * as _ from 'lodash';

@Component({
  selector: 'ms-worksheet-tile-t2',
  templateUrl: './worksheet-tile-t2.component.html',
  styleUrls: ['./worksheet-tile-t2.component.scss']
})

export class WorksheetTileT2Component implements OnInit, OnChanges {

  @Input('for') for: string;
  @Input('liveWorksheets') live: any;
  @Input('olderWorksheets') older: any;

  constructor(private topicsTileComponent: TopicsTileComponent, private worksheetTileComponent: WorksheetTileComponent) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    const changeFor = _.get(changes, 'for.currentValue', '');
    if (changeFor !== undefined && changeFor !== null) {
      this.for = changeFor.toLowerCase();
    }
    const changeLiveWorksheets = _.get(changes, 'live.currentValue', '');
    if (changeLiveWorksheets !== undefined && changeLiveWorksheets !== null) {
      this.live = changeLiveWorksheets;
    }
    const changeOlderWorksheets = _.get(changes, 'older.currentValue', '');
    if (changeOlderWorksheets !== undefined && changeOlderWorksheets !== null) {
      this.older = changeOlderWorksheets;
    }
  }

  startWorksheets(worksheet) {
    this.worksheetTileComponent.startWorksheets(worksheet);
  }

  startWorksheetReport(worksheet) {
    this.worksheetTileComponent.worksheetReport(worksheet);
  }
}
