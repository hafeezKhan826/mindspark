import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as _ from 'lodash';
import { SharedService } from '../../../shared.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ContentService } from '../../../services/content/content.service';
import { environment } from '../../../../../environments/environment';
import { AppSettings } from '../../../../settings/app.settings';
import { QuestionDisplayReformService } from '../../../services/question/questionDisplayReform.service';

@Component({
  selector: 'ms-topic-trail-t2',
  templateUrl: './topic-trail-t2.component.html',
  styleUrls: ['./topic-trail-t2.component.scss']
})
export class TopicTrailT2Component implements OnInit, OnChanges, OnDestroy {
  errorInfo: any;
  templateClass: string;
  templateService: Subscription;
  showingFrom: number;
  topicHeadTitle: string;
  settings: any;
  totalPagesCount: any;
  totalPages: any;
  maxPageSize: any;
  topicTrailSubscription: Subscription;
  currentTopicTrailData: any;
  currentPage: any;
  collectionSize: any;
  trailList: any = [];
  topicDetails: any;
  displayContent: any;
  from: string;
  page: number;
  @Input('template') template: string;
  @Input('topicTrailData') topicTrailData: string;

  showHigherGrades: boolean;
  constructor(private sharedService: SharedService, private contentService: ContentService,
    private questionDisplayReformService: QuestionDisplayReformService) {
    this.topicHeadTitle = 'topic trail';
    this.topicTrailSubscription = this.sharedService.getTopicTrailData().subscribe(result => {
      this.currentTopicTrailData = result;
    });
    this.from = 'topicDetails';
    this.maxPageSize = AppSettings.PAGINATION_MAX_SIZE;
    this.templateService = this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
        this.templateClass = this.sharedService.getClassName();
      },
      responseError => this.errorInfo = responseError
    );
    this.sharedService.setTrailFrom('topics');
  }



  ngOnInit() {
    this.showHigherGrades = false;
    this.displayContent = [];
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('body-bg');
  }

  check() {
    this.showHigherGrades = !this.showHigherGrades;
  }
  ngOnChanges(changes: any) {
    const changesValue = _.get(changes, 'topicTrailData.currentValue', {});
    if (changesValue !== null || changesValue !== undefined) {

      this.topicDetails = _.get(changesValue, 'topicDetails', null);
      this.settings = _.get(changesValue, 'settings', null);
      this.collectionSize = _.get(this.topicDetails, 'totalQuestion', 1);
      this.totalPages = _.get(this.topicDetails, 'totalPages', 1);
      this.currentPage = _.get(this.topicDetails, 'currentPage', 1);
      this.showingFrom = _.get(this.topicDetails, 'showingFrom', 1);
      this.totalPagesCount = _.get(this.topicDetails, 'totalPagesCount', AppSettings.PAGINATION_LIMIT);
      if (_.isEmpty(this.trailList)) {
        this.trailList = _.get(changesValue, 'trailList', []);
      }
      this.callLoadJs();
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
        startFrom: this.currentTopicTrailData.startFrom + 20,
        limit: 20,
        topicId: this.currentTopicTrailData.topicId,
        index: this.currentPage
      };
      this.sharedService.setTopicTrailData(data);
    }
  }
  ngOnDestroy(): void {
    this.topicTrailSubscription.unsubscribe();
  }
}
