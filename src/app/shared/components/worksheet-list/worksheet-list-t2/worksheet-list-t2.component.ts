import { Component, OnChanges, Input } from '@angular/core';
import { WorksheetListT1Component } from '../worksheet-list-t1/worksheet-list-t1.component';
import { AppSettings } from '../../../../settings/app.settings';
import { TopicListService } from '../../../../modules/topics/services/topic-list.service';
import { Router } from '@angular/router';
import { TopicsListComponent } from '../../../../modules/topics/components/topics-list/topics-list.component';
import * as _ from 'lodash';

@Component({
  selector: 'ms-worksheet-list-t2',
  templateUrl: './worksheet-list-t2.component.html',
  styleUrls: ['./worksheet-list-t2.component.scss']
})
export class WorksheetListT2Component implements OnChanges {

  @Input('worksheetData') worksheetData: any;

  liveWorksheetsData: any;
  olderWorksheets: any;
  liveWorksheets: any;
  listSize: number;
  worksheetTiles: {}[];
  grade: any;
  showHigherGrades: boolean;
  isRetail: any;
  for: any;

  constructor(private router: Router, private topicsListComponent: TopicsListComponent) {

    this.liveWorksheets = [];
    this.olderWorksheets = [];
    this.showHigherGrades = false;
    this.for = 'worksheet';
  }

  ngOnChanges(changes: any): void {
    const changeworksheetData = _.get(changes, 'worksheetData.currentValue', null);
    if (changeworksheetData !== undefined && changeworksheetData !== null) {
      this.isRetail = changeworksheetData.userInformation.isRetail;
      this.worksheetTiles = changeworksheetData.worksheetList;
      if (this.worksheetTiles) {
        this.listSize = this.worksheetTiles.length;
        this.grade = changeworksheetData.userInformation.grade;
        for (let worksheetTile = 0; worksheetTile < this.listSize; worksheetTile++) {
          this.liveWorksheetsData = this.worksheetTiles[worksheetTile];
          const contentStatus: any = _.get(this.liveWorksheetsData, 'contentStatus', '');
          if (contentStatus === 'active') {
            this.liveWorksheets.push(this.liveWorksheetsData);
          } else {
            this.olderWorksheets.push(this.liveWorksheetsData);
          }
        }
      }
    }
  }

}
