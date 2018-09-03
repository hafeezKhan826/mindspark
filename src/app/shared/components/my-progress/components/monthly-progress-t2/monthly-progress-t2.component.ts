import { Component, OnChanges, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'ms-monthly-progress-t2',
  templateUrl: './monthly-progress-t2.component.html',
  styleUrls: ['../../my-progress-t2/my-progress-t2.component.scss']
})
export class MonthlyProgressT2Component implements OnChanges {
  @Input('myProgress') myProgress: any;

  constructor() { }

  ngOnChanges(changes: any): void {
    const changeMyProgress = _.get(changes, 'myProgress.currentValue', null);
    if (changeMyProgress !== undefined && changeMyProgress !== null) {
      this.myProgress = changeMyProgress;
    }
  }

}
