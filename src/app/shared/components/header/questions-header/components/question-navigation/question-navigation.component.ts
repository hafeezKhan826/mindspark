import { Component, OnInit, OnChanges, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'ms-question-navigation',
  templateUrl: './question-navigation.component.html',
  styleUrls: ['./question-navigation.component.scss']
})
export class QuestionNavigationComponent implements OnInit, OnChanges {
  @Input('pedagogyContent') pedagogyContent: any;
  @Input('toDisplay') toDisplay: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: any): void {
    const changeValue = _.get(changes, 'pedagogyContent.currentValue', null);
    if (changeValue !== undefined && changeValue !== null) {
      this.pedagogyContent = changeValue;
    }
  }

}
