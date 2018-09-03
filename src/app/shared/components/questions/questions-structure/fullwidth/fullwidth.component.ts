import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { SharedService } from '../../../../shared.service';
import { ContentService } from '../../../../services/content/content.service';
import * as _ from 'lodash';

@Component({
  selector: 'ms-fullwidth',
  templateUrl: './fullwidth.component.html',
  styleUrls: ['./fullwidth.component.scss']
})
export class FullwidthComponent implements OnInit, OnChanges {
  @Input('type') type: any;
  @Input('questionContent') questionContent: any;
  @Input('from') from: any;

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

  ngOnInit() { }

  ngOnChanges(changes: any): void {
    const changeQuestionContent = _.get(changes, 'questionContent.currentValue', null);
    const fromChange = _.get(changes, 'from.currentValue', null);
    const typeChange = _.get(changes, 'type.currentValue', null);
    if (changeQuestionContent !== undefined && changeQuestionContent !== null) {
      this.questionContent = changeQuestionContent;
    }
    if (fromChange !== undefined && fromChange !== null) {
      this.from = fromChange;
    }
    if (typeChange !== undefined && typeChange !== null) {
      this.type = typeChange;
    }
  }

}
