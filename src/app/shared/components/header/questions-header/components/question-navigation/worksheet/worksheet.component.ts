import { Component, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { SharedService } from '../../../../../../shared.service';
import { ContentService } from '../../../../../../services/content/content.service';
import { AppSettings } from '../../../../../../../settings/app.settings';
import { Subscription } from 'rxjs/Subscription';
import { QuestionsComponent } from '../../../../../questions/questions.component';
import * as _ from 'lodash';


@Component({
  selector: 'ms-worksheet',
  templateUrl: './worksheet.component.html',
  styleUrls: ['../question-navigation.component.scss']
})
export class WorksheetComponent implements OnDestroy {
  @Input('toDisplay') toDisplay: any;

  private WorksheetQuesNavService: Subscription;
  private getQuestionContentService: Subscription;
  private getQuestionDataService: Subscription;

  value: any;
  action: any;
  navValue: any;
  quesNum: any;
  quesNumTotal: any;
  totalQues: any;
  questionIcon: any;
  template: string;
  templateClass: string;
  errorInfo: any;
  unitName: string;
  questionToBeDisplay;
  max_range: number;
  startQuesRange = 0;

  constructor(private sharedService: SharedService, public contentService: ContentService,
    private questionsComponent: QuestionsComponent) {
    this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
        this.templateClass = this.sharedService.getClassName();
      },
      responseError => this.errorInfo = responseError
    );
    this.questionIcon = AppSettings.QUESTIONS_ICON;
    this.getQuestionDataService = this.contentService.getQuestionData().subscribe(
      result => {
        this.quesNumTotal = _.get(result, 'questionData', []);
        this.totalQues = _.get(result, 'questionData.length', []);
        if (this.totalQues > 25) {
          if (this.max_range > 25) {
            this.max_range = this.max_range;
          } else {
            this.max_range = 25;
          }
        } else {
          this.max_range = this.totalQues;
        }
      }
    );
    this.getQuestionContentService = this.contentService.getQuestionContent().subscribe(
      result => {
        this.quesNum = _.get(result, 'contentSeqNum', '');
      }
    );
    this.WorksheetQuesNavService = this.contentService.getWorksheetQuesNav().subscribe(
      result => {
        this.navValue = _.get(result, 'navValue', '');
        this.value = _.get(result, 'value', '');
        this.action = _.get(result, 'action', '');
        if (this.navValue) {
          this.changeQuestions(this.action);
          const data = {
            navValue: false,
            value: 1,
            action: ' '
          };
          this.contentService.setWorksheetQuesNav(data);
        }
      }
    );

  }

  ngOnDestroy() {
    this.getQuestionDataService.unsubscribe();
    this.getQuestionContentService.unsubscribe();
    this.WorksheetQuesNavService.unsubscribe();
  }

  displayQues(quesNum) {
    const data = {
      contentID: _.get(quesNum, 'unitID', ''),
      contentSequenceNo: _.get(quesNum, 'unitSequenceNo', '')
    };
    this.questionsComponent.fetchWorksheetContent(data);
  }


  changeQuestions(action) {
    if (action === 'prev') {
      if (this.startQuesRange > 0) {
        this.startQuesRange = this.startQuesRange - 1;
        this.max_range = this.max_range - 1;
      }
    } else if (action === 'next') {
      if (this.max_range <= this.totalQues) {
        this.startQuesRange = this.startQuesRange + 1;
        this.max_range = this.max_range + 1;
      }
    }
  }


  getProgressClass(quesNum) {
    let unitStatus: string, className = '';
    unitStatus = _.get(quesNum, 'unitStatus', '');
    if (unitStatus !== (null && undefined)) {
      unitStatus = unitStatus.toLowerCase();
      switch (unitStatus) {
        case 'completed':
          className = 'completed';
          break;
        case 'in-progress':
          className = 'current';
          this.unitName = quesNum.unitName;
          break;
      }
    }
    return className;
  }


}














