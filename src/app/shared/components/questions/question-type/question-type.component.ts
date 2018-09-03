import { Component, OnInit, OnChanges, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'ms-question-type',
  templateUrl: './question-type.component.html',
  styleUrls: ['./question-type.component.scss']
})
export class QuestionTypeComponent implements OnInit, OnChanges {
  @Input('type') type: string;
  private types: any;
  constructor() {
    this.types = {
      'timedTest': 'time-test',
      'challenge': 'challenge-question',
      'wildCard': 'wild-card-question',
      'higherLevel': 'higher-level-question',
      'practice': 'practice-question',
      'worksheet': 'worksheet'
    };
  }

  ngOnInit() { }

  ngOnChanges(changes: any): void {
    const changeValue = _.get(changes, 'type.currentValue', null);
    if (changeValue !== undefined && changeValue !== null) {
      this.type = changeValue;
    }
  }

  showTypeSection() {
    const types = _.keys(this.types);
    if (this.type) {
      return (_.indexOf(types, this.type.toLowerCase()) > -1);
    }
    return false;
  }

  getTypeClass() {
    const className: string = _.get(this.types, this.type, '');
    return className;
  }

}
