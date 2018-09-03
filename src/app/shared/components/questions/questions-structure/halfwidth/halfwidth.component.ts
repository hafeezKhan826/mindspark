import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { SharedService } from '../../../../shared.service';
import { ContentService } from '../../../../services/content/content.service';
import * as _ from 'lodash';

@Component({
  selector: 'ms-halfwidth',
  templateUrl: './halfwidth.component.html',
  styleUrls: ['./halfwidth.component.scss']
})
export class HalfwidthComponent implements OnInit, OnChanges {

  @Input('questionContent') questionContent: any;
  @Input('from') from: string;

  template: any;
  errorInfo: any;

  constructor(private sharedService: SharedService, private contentService: ContentService) {
    this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
      },
      responseError => this.errorInfo = responseError
    );
  }

  ngOnInit() {
  }

  ngOnChanges(changes: any): void {
    const changeQuestionContent = _.get(changes, 'questionContent.currentValue', null);
    const changeFrom = _.get(changes, 'from.currentValue', null);
    if (changeQuestionContent !== undefined && changeQuestionContent !== null) {
      this.questionContent = changeQuestionContent;
    }
    if (changeFrom !== undefined && changeFrom !== null) {
      this.from = changeFrom;
    }
  }

}
