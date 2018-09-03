import { Component, OnChanges, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'ms-weekly-progress-t2',
  templateUrl: './weekly-progress-t2.component.html',
  styleUrls: ['./weekly-progress-t2.component.scss']
})
export class WeeklyProgressT2Component implements OnChanges {
  @Input('weeklyData') weeklyData: any;
  @Input('reportType') reportType: any;

  constructor() { }

  ngOnChanges(changes: any): void {
    const changeWeeklyData = _.get(changes, 'weeklyData.currentValue', null);
    if (changeWeeklyData !== undefined && changeWeeklyData !== null) {
      this.weeklyData = changeWeeklyData;
    }
    const changeReportType = _.get(changes, 'reportType.currentValue', null);
    if (changeReportType !== undefined && changeReportType !== null) {
      this.reportType = changeReportType;
    }
  }

}
