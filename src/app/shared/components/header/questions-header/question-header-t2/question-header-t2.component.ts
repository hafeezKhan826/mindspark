import { Component, OnInit, OnChanges, Input, OnDestroy } from '@angular/core';
import { SharedService } from '../../../../shared.service';
import { ContentService } from '../../../../services/content/content.service';
import { AppSettings } from '../../../../../settings/app.settings';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'ms-question-header-t2',
  templateUrl: './question-header-t2.component.html',
  styleUrls: ['./question-header-t2.component.scss']
})
export class QuestionHeaderT2Component implements OnDestroy, OnChanges {
  @Input('headerContent') headerContent: any;
  private getQuestionContentService: Subscription
  questionIcon: any;
  toDisplay: any;
  template: string;
  templateClass: string;
  errorInfo: any;
  isDisplay: boolean;
  constructor(private sharedService: SharedService, private contentService: ContentService) {
    this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
        this.templateClass = this.sharedService.getClassName();
      },
      responseError => this.errorInfo = responseError
    );
    this.getQuestionContentService = this.contentService.getQuestionContent().subscribe(
      result => {
        this.toDisplay = _.get(result, 'from', ' ');
        if (this.toDisplay === 'worksheet') {
          this.isDisplay = true;
        }
      }
    );
    this.questionIcon = AppSettings.QUESTIONS_ICON;
  }


  ngOnChanges(changes: any): void {
    const changeHeaderContent = _.get(changes, 'headerContent.currentValue', null);
    if (changeHeaderContent !== undefined && changeHeaderContent !== null) {
      this.headerContent = changeHeaderContent;
    }
  }

  ngOnDestroy() {
    this.getQuestionContentService.unsubscribe();
  }




}
