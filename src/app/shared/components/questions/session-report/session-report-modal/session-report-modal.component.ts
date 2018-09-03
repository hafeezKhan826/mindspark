import { Component, OnInit, AfterViewInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from 'ng2-translate';
import { SessionReportService } from '../services/session-report/session-report-service.service';
import { SharedService } from '../../../../shared.service';
import { ContentService } from '../../../../services/content/content.service';
import { environment } from '../../../../../../environments/environment';
import { AppMessageSettings } from '../../../../../settings/app.messages';
import * as _ from 'lodash';

@Component({
  selector: 'ms-session-report-modal',
  templateUrl: './session-report-modal.component.html',
  styleUrls: ['./session-report-modal.component.scss'],
})
export class SessionReportModalComponent implements OnInit, AfterViewInit, OnDestroy {
  sessionReward: any;
  sessionReport: any;
  template: any;
  templateClass: any;
  errorInfo: any;
  topicID: any;
  concepts: boolean[] = [];
  higherLevelConceptsCompletedMsg: string;
  challengeQuestionAttemptMsg: string;
  messages: any[] = [];
  struggledThroughConceptMsg: string;
  topicCompletionImage: any;

  private getTemplateService: any;
  private getQuestionContentService: any;

  constructor(private modalService: NgbModal, private sessionReportService: SessionReportService, private router: Router,
    public ngbActiveModal: NgbActiveModal, private sharedService: SharedService, private contentService: ContentService,
    @Inject(DOCUMENT) private document: Document, private translate: TranslateService) {
    this.getTemplateService = this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
        this.templateClass = this.sharedService.getClassName();
      },
      responseError => this.errorInfo = responseError
    );
    this.getQuestionContentService = this.contentService.getQuestionContent().subscribe(
      result => this.topicID = _.get(result, 'topicID', ''),
      responseError => this.errorInfo = responseError
    );
  }
  ngOnInit() {
    this.getSessionReportContent();
  }
  ngAfterViewInit() {
    if (document.querySelector('.modal-content') !== undefined && document.querySelector('.modal-content') !== null) {
      document.querySelector('.modal-content').classList.add('modal-custom-width');
      document.querySelector('.modal-backdrop').classList.add('modal-disable');
    }
  }
  ngOnDestroy(): void {
    this.getTemplateService.unsubscribe();
    this.getQuestionContentService.unsubscribe();
  }
  getSessionReportContent() {
    this.sharedService.showLoader();
    const topicData = {
      topicID: this.topicID
    };
    this.sessionReportService.getTopicSessionReport(topicData).subscribe(
      result => {
        this.extractReport(result);
        this.sharedService.translateMessage('topic completion').subscribe(res => {
          this.topicCompletionImage = 'url(' + environment.appBaseURL + res + ')';
        });
        this.sharedService.hideLoader();
      },
      error => this.errorInfo = this.sharedService.handleResponseError(error)
    );
  }
  goToHigherLevels() {
    this.sharedService.showLoader();
    const data = {
      topicID: this.topicID
    };
    this.sessionReportService.startTopicHigherLevel(data).subscribe(
      result => {
        this.ngbActiveModal.close();
        if (_.indexOf(['/home', '/topics'], this.router.url) > -1) {
          this.router.navigate(['topics/content']);
        } else {
          this.contentService.setFetchFirstContent(true);
          this.sharedService.hideLoader();
        }
      },
      responseError => this.errorInfo = this.sharedService.handleResponseError(responseError)
    );
  }
  getDetails() {
    this.ngbActiveModal.close();
    this.router.navigate(['topics/detail']);
  }
  goToHome() {
    this.ngbActiveModal.close();
    this.router.navigate(['/home']);
  }
  extractReport(report) {
    const message = _.toArray(report.sessionReward.messages);
    if (report.resultCode === 'C001') {
      this.sessionReport = report.sessionReport;
      this.sessionReward = report.sessionReward;
      for (let i = 0; i < report.sessionReport.conceptsOverall; i++) {
        this.concepts[i] = false;
      }
      this.getProgress(report.sessionReport.conceptsClearedOverall);
      this.getMessages(message);
    }
  }
  getProgress(cleared) {
    for (let i = 0; i < cleared; i++) {
      this.concepts[i] = true;
    }
  }
  getMessages(messages) {
    let key;
    messages.forEach(element => {
      key = element.messageKey;
      const conceptsNumber = element.conceptCleared;
      const number = 'number';
      const message = {
        'key': key,
        'value': AppMessageSettings[key]
      };
      if (key === 'accurateClusterSuccess') {
        message.value = message.value.replace('<conceptCleared>', conceptsNumber);
      }
      this.messages.push(message);
    });
  }

  padZero(value?) {
    value = (value) ? value : '0';
    return this.sharedService.padPrefix(value, 2, '0');
  }
}
