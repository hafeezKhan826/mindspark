import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { AppSettings } from '../../../../../settings/app.settings';
import * as _ from 'lodash';

@Component({
  selector: 'ms-question-footer-t2',
  templateUrl: './question-footer-t2.component.html',
  styleUrls: ['./question-footer-t2.component.scss']
})
export class QuestionFooterT2Component implements OnInit, OnChanges {
  @Input('sessionInformation') sessionInformation;
  appSettings: any;

  constructor() {
    this.appSettings = AppSettings;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: any): void {
    const changeValue = _.get(changes, 'sessionInformation.currentValue', null);
    if (changeValue !== undefined && changeValue !== null) {
      this.sessionInformation = changeValue;
    }
  }

}
