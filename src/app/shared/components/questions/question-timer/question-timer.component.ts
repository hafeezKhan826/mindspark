import { Component, OnDestroy } from '@angular/core';
import { ContentService } from '../../../services/content/content.service';
import * as _ from 'lodash';
import { QuestionsComponent } from '../questions.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ms-question-timer',
  templateUrl: './question-timer.component.html',
  styleUrls: ['./question-timer.component.scss']
})
export class QuestionTimerComponent implements OnDestroy {

  timed: any;
  from: any;
  endTimer: any;
  warningTime: number;
  totalTime: any;
  widthValue: any;
  remainingTime: any;
  clear: any;
  startWorksheet: any;
  decreaseWidthValue: any;

  private questionContent: any;
  private getTimerValueService: Subscription;
  private getQuestionContentService: Subscription;
  private getQuestionDataService: Subscription;

  constructor(private contentService: ContentService, private questionsComponent: QuestionsComponent) {

    this.getQuestionDataService = this.contentService.getQuestionData().subscribe(
      result => {
        this.remainingTime = _.get(result, 'remainingTime', '');
        this.totalTime = _.get(result, 'totalTime', '');
        this.timed = _.get(result, 'timed', '');
      }
    );
    this.getTimerValueService = this.contentService.getTimerValue().subscribe(
      result => {
        this.startWorksheet = _.get(result, 'worksheetValue', false);
        this.endTimer = _.get(result, 'endTimer', null);
        this.widthValue = 100;
        this.warningTime = (10 * this.totalTime) / 100;
        if (this.startWorksheet) {
          this.clearTimer();
          this.timeOut();
        }
      }
    );
    this.getQuestionContentService = this.contentService.getQuestionContent().subscribe(
      result => {
        this.questionContent = result;
        this.from = _.get(result, 'from', '');
      }
    );
  }

  ngOnDestroy(): void {
    this.getTimerValueService.unsubscribe();
    this.getQuestionDataService.unsubscribe();
    this.getQuestionContentService.unsubscribe();
    this.clearTimer();
  }

  timeOut() {
    this.clear = setInterval(() => {
      if (this.startWorksheet) {
        const data = {
          worksheetValue: this.startWorksheet,
          remainingTime: this.remainingTime--
        };
        this.decreaseWidthValue = (this.widthValue * this.remainingTime) / this.totalTime;
        this.contentService.setTimerValue(data);
        if (this.remainingTime === 0) {
          this.contentService.setTimerValue({});
          clearInterval(this.clear);
          if (this.from === 'worksheet') {
            this.questionsComponent.quitWorksheets();
          } else {
            const templateContent: string = _.get(this.questionContent, 'templateContent', '').toLowerCase();
            if (templateContent === 'timedtest') {
              this.questionsComponent.callSubmitAnswer();
            }
          }
        }
      } else {
        this.decreaseWidthValue = 100;
      }
    }, 1000);
  }

  clearTimer() {
    if (this.clear) {
      clearInterval(this.clear);
    }
  }
}
