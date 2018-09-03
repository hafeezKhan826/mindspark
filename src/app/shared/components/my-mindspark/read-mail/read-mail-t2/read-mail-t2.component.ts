import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbRating, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { ReadMailComponent } from '../../../../../modules/my-mindspark/components/read-mail/read-mail.component';
import { TranslateService } from 'ng2-translate';
import { MailboxService } from '../../../../../modules/my-mindspark/components/mailbox/mailbox.service';
import { SharedService } from '../../../../shared.service';
import { AppSettings } from '../../../../../settings/app.settings';
import { NgPipesModule } from 'ngx-pipes';
import { QuestionDisplayReformService } from '../../../../services/question/questionDisplayReform.service';
import * as _ from 'lodash';

@Component({
  selector: 'ms-read-mail-t2',
  templateUrl: './read-mail-t2.component.html',
  styleUrls: ['./read-mail-t2.component.scss']
})
export class ReadMailT2Component implements OnInit, OnChanges {

  @Input('readMail') readmail: any;
  @ViewChild('uploadFile') attachFile;

  private getQuestionsContentService: any;

  commentId: any;
  rating: any;
  explain: string;
  files: any[] = [];
  replyMessage: FormGroup;
  errorInfo: any;
  uploadFileError: string;
  closeResult: string;
  images: any;
  textlimit: number;
  messageDetails: any;
  displayContent: any;

  constructor(private config: NgbRatingConfig, private mailBoxService: MailboxService, private route: ActivatedRoute,
    private sharedService: SharedService, private readMailComponent: ReadMailComponent,
    private questionDisplayReformService: QuestionDisplayReformService) {
    this.explain = 'SHOW';
    this.config.max = AppSettings.RATING_CONFIG;
    this.textlimit = AppSettings.TEXT_LIMIT;
    this.sharedService.setTrailFrom('messageTrail');
  }

  ngOnInit() {
    this.commentId = this.readMailComponent.getCommentId();
    this.resetReplyMessage();
    this.getMessageTrailData();
    this.questionDisplayReformService.loadJS();
  }

  ngOnChanges(changes: any): void {
    const changeValue = _.get(changes, 'readmail.currentValue', null);
    if (changeValue !== undefined && changeValue !== null) {
      this.readmail = changeValue;
      this.messageDetails = _.get(this.readmail, 'messageDetails', null);
      this.rating = _.get(this.readmail, 'messageDetails.rate.rating', 0);
      if (typeof (window['ContentService']) !== 'undefined') {
        this.questionDisplayReformService.initContentService([this.messageDetails]);
        this.displayContent = this.questionDisplayReformService.getQuestionsContent();
      }
    }
  }

  resetReplyMessage() {
    this.files = [];
    this.replyMessage = new FormGroup({
      replyBody: new FormControl('', Validators.required)
    });
  }

  getMessageTrailData() {
    this.readmail = this.readMailComponent.getMessageTrailData(this.commentId);
  }

  updateSelectedFiles() {
    this.files = this.readMailComponent.updateSelectedFiles(this.attachFile);
  }

  replyToMessage() {
    const repliedMessage = this.readMailComponent.replyToMessage(this.replyMessage, this.commentId, this.attachFile);
    if (repliedMessage.result.toLowerCase() === 'success') {
      this.resetReplyMessage();
    } else {
      this.uploadFileError = repliedMessage.message;
      if (this.uploadFileError !== '') {
        setTimeout(() => this.uploadFileError = '', 3000);
      }
    }
  }

  showQuestion() {
    this.explain = this.readMailComponent.showQuestion(this.explain);
  }

  saveCommentRating(value) {
    this.readMailComponent.saveCommentRating(value, this.commentId);
  }

  removeFile() {
    this.files = this.readMailComponent.removeFile(this.attachFile);
  }

  open(imageBoxModal, fileName) {
    this.images = this.readMailComponent.open(imageBoxModal, fileName);
  }

  disableSend() {
    return this.readMailComponent.disableSend(this.replyMessage);
  }

  generateOptionString(index) {
    return this.questionDisplayReformService.generateOptionString(index);
  }

}
