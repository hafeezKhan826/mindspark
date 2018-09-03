import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CommentModalComponent } from '../../../comments/comment-modal/comment-modal.component';
import { QuestionsComponent } from '../../questions.component';
import { SharedService } from '../../../../shared.service';
import { ContentService } from '../../../../services/content/content.service';
import * as _ from 'lodash';
import { SessionReportService } from '../../session-report/services/session-report/session-report-service.service';

@Component({
  selector: 'ms-question-sidebar-btn-t2',
  templateUrl: './question-sidebar-btn-t2.component.html',
  styleUrls: ['./question-sidebar-btn-t2.component.scss']
})
export class QuestionSidebarBtnT2Component implements OnChanges, OnDestroy {

  @Input('evaluationResult') result: any = {};
  @Input('questionContent') question: any;

  pedagogyStatus: any;
  questionTemplate: string;
  endTimer: any;
  remainingTime: any;
  isFavourite = false;
  template: any;
  disableNext: boolean;
  templateClass: any;
  activateNext: boolean;
  errorInfo: any;
  from: any;
  startTimer: any;
  totalTime: any;
  hasTranslation: boolean;

  private templateService: Subscription;
  private activateNextService: Subscription;
  private getQuestionContentService: Subscription;
  private getQuestionDataService: Subscription;
  private getTimerValueService: Subscription;

  constructor(private sessionReportService: SessionReportService, private questionsComponent: QuestionsComponent,
    private sharedService: SharedService, private contentService: ContentService) {

    this.isFavourite = false;
    this.templateService = this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
        this.templateClass = this.sharedService.getClassName();
      },
      responseError => this.errorInfo = responseError
    );
    this.activateNextService = this.contentService.getActivateNext().subscribe(
      result => {
        this.activateNext = result.next;
      },
      responseError => this.errorInfo = responseError
    );
    this.getQuestionContentService = this.contentService.getQuestionContent().subscribe(
      result => {
        this.isFavourite = false;
        this.from = _.get(result, 'from', '').toLowerCase();
        this.questionTemplate = _.get(result, 'templateContent', '').toLowerCase();
        this.hasTranslation = _.get(result, 'hasTranslation', false);
      },
      responseError => this.errorInfo = responseError
    );
    this.getQuestionDataService = this.contentService.getQuestionData().subscribe(
      result => {
        this.remainingTime = _.get(result, 'remainingTime', '');
        // this.totalTime = _.get(result, 'totalTime', '');
        this.pedagogyStatus = _.get(result, 'pedagogyStatus', '');
      }
    );
    this.getTimerValueService = this.contentService.getTimerValue().subscribe(
      result => {
        this.startTimer = _.get(result, 'worksheetValue', '');
        this.endTimer = _.get(result, 'endTimer', '');
        if (this.startTimer) {
          if (this.endTimer <= 0) {
            this.startTimer = false;
          }
        }
      }
    );
  }

  ngOnChanges(changes: any): void {
    const changeEvaluationResult = _.get(changes, 'result.currentValue', '');
    const changeQuestionContent = _.get(changes, 'question.currentValue', null);
    if (changeQuestionContent !== undefined && changeQuestionContent !== null) {
      this.question = changeQuestionContent;
      this.disableNext = false;
    }
    if (changeEvaluationResult !== null && changeEvaluationResult !== undefined) {
      this.result = changeEvaluationResult;
    }
  }

  ngOnDestroy(): void {
    this.templateService.unsubscribe();
    this.activateNextService.unsubscribe();
    this.getQuestionContentService.unsubscribe();
    this.getQuestionDataService.unsubscribe();
    this.getTimerValueService.unsubscribe();
  }

  commentActive() {
    this.sharedService.open(CommentModalComponent);
  }

  addToFavourities() {
    if (!this.isFavourite) {
      this.questionsComponent.addToFavourities();
      this.setAsFavourite();
    }
  }
  setAsFavourite() {
    this.isFavourite = !this.isFavourite;
  }

  loadNext() {
    this.disableNext = true;
    this.questionsComponent.updateAnswer();
  }

  showSubmitButton() {
    let questionTemplate: string, sequenceNo, autoSubmit = false;
    if (this.questionTemplate === 'timedtest') {
      autoSubmit = _.get(this.question, 'autoSubmit', false);
      sequenceNo = _.get(this.question, 'timedTestData.questionSequenceNo', null);
      questionTemplate = _.get(this.question, 'questions[' + sequenceNo + '].template', '').toLowerCase();
    } else {
      questionTemplate = this.questionTemplate;
    }
    if ((this.questionsComponent.oneOfFormTemplates(questionTemplate) || questionTemplate === 'interactive') && !autoSubmit) {
      return true;
    }
    return false;
  }

  submitFormAnswer() {
    this.contentService.setQuestionSubmit(true);
  }

  skipContent() {
    this.submitFormAnswer();
  }

  quitWorksheets() {
    this.questionsComponent.quitWorksheets();
  }

  displayQuitWorksheetButton() {
    if (this.from === 'worksheet' && this.pedagogyStatus === 'completed') {
      return true;
    }
    return false;
  }
}
