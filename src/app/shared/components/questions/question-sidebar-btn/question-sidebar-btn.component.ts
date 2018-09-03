import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { ContentService } from '../../../services/content/content.service';
import * as _ from 'lodash';

@Component({
  selector: 'ms-question-sidebar-btn',
  templateUrl: './question-sidebar-btn.component.html',
  styleUrls: ['./question-sidebar-btn.component.scss']
})
export class QuestionSidebarBtnComponent implements OnChanges {

  @Input('evaluationResult') result: any;
  @Input('questionContent') questionContent: any;

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

  ngOnChanges(changes: any): void {
    const changeEvaluationResult = _.get(changes, 'result.currentValue', '');
    const changeQuestionContent = _.get(changes, 'questionContent.currentValue', null);
    if (changeQuestionContent !== undefined && changeQuestionContent !== null) {
      this.questionContent = changeQuestionContent;
    }
    if (changeEvaluationResult !== null && changeEvaluationResult !== undefined) {
      this.result = changeEvaluationResult;
    }
  }

}
