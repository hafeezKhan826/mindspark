import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as _ from 'lodash';
import { QuestionDisplayReformService } from '../../../services/question/questionDisplayReform.service';
import { AppSettings } from '../../../../settings/app.settings';
import { SharedService } from '../../../shared.service';
import { Subscription } from 'rxjs/Subscription';
import { ContentService } from '../../../services/content/content.service';

@Component({
  selector: 'ms-worksheet-report-t2',
  templateUrl: './worksheet-report-t2.component.html',
  styleUrls: ['./worksheet-report-t2.component.scss']
})
export class WorksheetReportT2Component implements OnInit, OnChanges {
  errorInfo: any;
  templateService: Subscription;
  worksheetDataSubscription: Subscription;
  totalPagesCount: number;
  maxPageSize: number;
  currentPage: number;
  totalPages: number;
  collectionSize: number;
  settings: any;
  showingFrom: number;
  displayContent: any;
  trailList: any = [];
  document: any;
  @Input('template') template: string;
  @Input('worksheetReportData') worksheet: any;
  currentWorksheetTrailData: any;
  topicList: any;
  templateClass: string;
  page = 3;
  showHigherGrades: boolean;

  constructor(private questionDisplayReformService: QuestionDisplayReformService, private sharedService: SharedService, private contentService: ContentService) {
    this.maxPageSize = AppSettings.PAGINATION_MAX_SIZE;
    this.worksheetDataSubscription = this.sharedService.getWorksheetReportData().subscribe(result => {
      this.currentWorksheetTrailData = result;
    });
    this.sharedService.setTrailFrom('worksheetreport');
    this.totalPagesCount = AppSettings.PAGINATION_LIMIT;
    this.templateService = this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
        this.templateClass = this.sharedService.getClassName();
      },
      responseError => this.errorInfo = responseError
    );
  }


  ngOnInit() {
    this.showHigherGrades = false;
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('body-bg');
    this.displayContent = [];
  }


  ngOnChanges(changes: any): void {
    const changeValue = _.get(changes, 'worksheet.currentValue', {});
    if (changeValue !== null || changeValue !== undefined) {
      this.topicList = _.get(changeValue, 'topicList', []);
      this.settings = _.get(changeValue, 'settings', null);
      this.collectionSize = _.get(changeValue, 'totalQuestion', 1);
      this.currentPage = _.get(changeValue, 'currentPage', 1);
      this.totalPages = _.get(changeValue, 'totalPages', 1);
      this.showingFrom = _.get(changeValue, 'showingFrom', 1);
      if (_.isEmpty(this.trailList)) {
        this.trailList = _.get(changeValue, 'trailList', []);
        this.callLoadJs();
      }
    }
  }

  callLoadJs() {
    this.questionDisplayReformService.loadJS().then(
      result => {
        if (result.result !== 'failed') {
          this.questionDisplayReformService.initContentService(this.trailList);
          setTimeout(() => {
            this.displayContent = this.questionDisplayReformService.getQuestionsContent();
            for (let i = 0; i < this.displayContent.length; i++) {
              const contentMode = this.trailList[i].contentMode;
              this.displayContent[i].index = i;
              if ((this.trailList[i].contentType === 'question' && this.displayContent[i].contentType === 'question')
                && contentMode) {
                this.displayContent[i].contentMode = contentMode;
              }
            }
          }, 200);
        } else {
          this.callLoadJs();
        }
      }
    );
  }
  generateOptionString(index) {
    return this.questionDisplayReformService.generateOptionString(index);
  }
  loadPage(page) {
    if (page !== this.currentPage) {
      this.currentPage = page;
      const data = {
        startFrom: this.currentWorksheetTrailData.startFrom + 20,
        limit: AppSettings.PAGINATION_MAX_SIZE,
        topicId: this.currentWorksheetTrailData.topicId,
        index: this.currentPage
      };
      this.sharedService.setWorksheetReportData(data);
    }
  }
  check() {
    this.showHigherGrades = !this.showHigherGrades;
  }
}
