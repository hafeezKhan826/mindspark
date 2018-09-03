import { Component, OnChanges, OnDestroy, Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { QuestionsComponent } from '../../../../questions/questions.component';
import { SharedService } from '../../../../../shared.service';
import { ContentService } from '../../../../../services/content/content.service';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AppSettings } from '../../../../../../settings/app.settings';

@Component({
  selector: 'ms-done-btn-modal',
  templateUrl: './done-btn-modal.component.html',
  styleUrls: ['./done-btn-modal.component.scss']
})
export class DoneBtnModalComponent implements OnChanges, OnDestroy {
  @Input('pedagogyContentMode') pedagogyContentMode: any;
  @Input('pedagogyHigherLevel') pedagogyHigherLevel: any;
  @ViewChild('quitHigherLevel') quitHigherLevel;
  @ViewChild('messagesModal') messagesModal;
  @ViewChild('quitTimedModal') quitTimedModal;
  @ViewChild('scoreSheetModal') scoreSheetModal;

  closeResult: string;
  pedagogyMessages: any;
  message: any;
  template: string;
  templateClass: string;
  errorInfo: any;
  from: any;
  questionData: any;
  scoreDetails: any;

  private questionContent: any;
  private userInfo: any;
  private scoreSheet: any;
  private getTemplateService: Subscription;
  private getMessagesService: Subscription;
  private getQuestionContentService: Subscription;
  private getQuestionDataService: Subscription;
  private getScoreSheetService: Subscription;

  constructor(private router: Router, private sharedService: SharedService, private contentService: ContentService,
    private questionsComponent: QuestionsComponent, private modalService: NgbModal) {
    this.getTemplateService = this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
        this.templateClass = this.sharedService.getClassName();
      },
      responseError => this.errorInfo = responseError
    );
    this.getMessagesService = this.contentService.getMessages().subscribe(
      result => {
        setTimeout(() => {
          this.pedagogyMessages = _.get(result, 'messages', []);
          this.message = this.questionsComponent.generateMessageString(this.pedagogyMessages, 'before', 'overlay');
          if (this.message.class === 'overlay' && !this.message.close) {
            if (this.message.message !== ('' && null && undefined)) {
              this.sharedService.open(this.messagesModal, ['backDropStop']);
            }
          }
        }, 100);
      },
      responseError => this.errorInfo = responseError
    );
    this.contentService.getBasicData().subscribe(
      result => { this.userInfo = _.get(result, 'userInformation', {}); }
    );
    this.getQuestionContentService = this.contentService.getQuestionContent().subscribe(result => {
      this.questionContent = result;
      this.from = _.get(result, 'from', '').toLowerCase();
    });
    this.getQuestionDataService = this.contentService.getQuestionData().subscribe(
      result => {
        this.questionData = result;
      }
    );
    this.getScoreSheetService = this.contentService.getScoreSheet().subscribe(
      result => {
        this.scoreSheet = result;
        if (this.scoreSheet.open) {
          this.scoreSheet.open = false;
          this.contentService.setScoreSheet(this.scoreSheet);
          this.stopContentTimer();
          this.sharedService.open(this.scoreSheetModal, ['backDropStop']);
          this.setScoreDetails();
        }
      }
    );
  }

  ngOnChanges(changes: any): void {
    const changePedagogyContentMode = _.get(changes, 'pedagogyContentMode.currentValue', null);
    const changePedagogyHigherLevel = _.get(changes, 'pedagogyHigherLevel.currentValue', null);
    if (changePedagogyContentMode !== undefined && changePedagogyContentMode !== null) {
      this.pedagogyContentMode = changePedagogyContentMode.toLowerCase();
    }
    if (changePedagogyHigherLevel !== undefined && changePedagogyHigherLevel !== null) {
      this.pedagogyHigherLevel = changePedagogyHigherLevel.toLowerCase();
    }
  }

  ngOnDestroy() {
    this.getMessagesService.unsubscribe();
    this.getTemplateService.unsubscribe();
    this.getQuestionContentService.unsubscribe();
    this.getQuestionDataService.unsubscribe();
    this.getScoreSheetService.unsubscribe();
  }

  doneQuestion(modalName) {
    let modal: any;
    const mode = this.pedagogyContentMode;
    const higherLevel: string = this.pedagogyHigherLevel;
    const templateContent: string = _.get(this.questionContent, 'templateContent', '').toLowerCase();
    this.contentService.setVoiceOverDisabled(true);
    if (this.from === 'worksheet') {
      modal = this.quitTimedModal;
    } else if (higherLevel && higherLevel.toLowerCase() === 'in-progress') {
      modal = this.quitHigherLevel;
    } else if (templateContent === 'timedtest') {
      modal = this.quitTimedModal;
    } else {
      this.closeContent();
    }
    if (typeof (modal) !== 'undefined') {
      this.sharedService.open(modal, ['backDropStop']);
    }
  }

  quitTopicHigherLevel() {
    this.questionsComponent.quitTopicHigherLevel();
  }

  closeTimedContent() {
    this.stopContentTimer();
    const templateContent: string = _.get(this.questionContent, 'templateContent', '').toLowerCase();
    if (this.from === 'worksheet') {
      this.closeWorksheet();
    } else if (templateContent === 'timedtest') {
      this.closeContent();
    }
  }

  private stopContentTimer() {
    this.contentService.setTimerValue({});
    this.questionData.timed = false;
    this.contentService.setQuestionData(this.questionData);
  }

  closeContent() {
    const data = {
      'userTriggered': true,
      'endTopicFlag': false,
      'endTopicHigherLevel': false,
      'sessionTimeExceededFlag': false
    };
    this.questionsComponent.closeContent(data);
  }

  closeWorksheet() {
    document.getElementById('closeWorksheetModal').click();
    this.router.navigate([AppSettings.REDIRECT_CODE.worksheetlist]);
  }

  closePedagogyOverlay() {
    let currentMessage, where;
    for (let i = 0; i < this.pedagogyMessages.length; i++) {
      currentMessage = this.pedagogyMessages[i];
      where = _.get(currentMessage, 'beforeSubmit.where', '').toLowerCase();
      if (where === 'overlay') {
        this.pedagogyMessages[i].beforeSubmit.where = '';
        this.pedagogyMessages[i].beforeSubmit.messages.default = '';
        this.pedagogyMessages[i].beforeSubmit.messages.defaultClose = true;
        this.contentService.setMessages(this.pedagogyMessages);
      }
    }
    this.sharedService.dismissOpenModal();
  }

  setScoreDetails() {
    this.scoreDetails = {};
    let accuracy, total, attempted, correct, wrong, timeTaken;
    total = _.get(this.scoreSheet, 'totalQuestions', null);
    attempted = _.get(this.scoreSheet, 'totalAttempted', null);
    correct = _.get(this.scoreSheet, 'totalCorrect', null);
    timeTaken = _.get(this.scoreSheet, 'timeTaken', null);
    if (!isNaN(timeTaken)) {
      timeTaken = timeTaken / 60;
      timeTaken = Number.isInteger(timeTaken) ? timeTaken : timeTaken.toFixed(2);
    }
    if (total !== null && total !== 0) {
      wrong = attempted - correct;
      accuracy = 100 * correct / total;
      accuracy = Number.isInteger(accuracy) ? accuracy : accuracy.toFixed(2);
    } else {
      accuracy = null;
      wrong = null;
    }
    this.scoreDetails = {
      finished: _.get(this.scoreSheet, 'finished', false),
      userName: _.get(this.userInfo, 'name', ''),
      duration: _.get(this.scoreSheet, 'duration', null),
      timeTaken: timeTaken,
      accuracy: accuracy,
      total: total,
      correct: correct,
      wrong: wrong
    };
  }

  getContentType() {
    let contentType = '';
    const templateContent: string = _.get(this.questionContent, 'templateContent', '').toLowerCase();
    if (templateContent === 'timedtest') {
      contentType = this.questionContent.templateContent.toLowerCase();
    }
    return contentType;
  }

  updateAnswer() {
    this.sharedService.dismissOpenModal();
    this.questionsComponent.resetQuestionService();
    this.questionsComponent.resetTimedTestContent();
    this.questionsComponent.updateAnswer();
  }

  padZero(value?) {
    value = (value) ? value : '0';
    return this.sharedService.padPrefix(value, 2, '0');
  }

}
