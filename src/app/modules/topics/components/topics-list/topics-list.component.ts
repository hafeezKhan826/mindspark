import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { AppSettings } from '../../../../settings/app.settings';
import { TopicListService } from '../../services/topic-list.service';
import { SharedService } from '../../../../shared/shared.service';
import { ContentService } from '../../../../shared/services/content/content.service';

@Component({
  selector: 'ms-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss'],
  providers: [TopicListService]
})
export class TopicsListComponent implements OnInit {
  gradeData: any;
  topicImageDefault: string = AppSettings.TOPIC_DEFAULT_IMAGE;
  higherGradeLoaded = false;
  topicTiles: any[];
  errorInfo: string;
  contentNames: any[] = [];
  grade: any;
  showHigherGrades: boolean;
  isClassVisible: boolean;
  dashboardData: any;
  higherGradeTopics: any;
  template: string;
  @Input('for') for: string;
  @Input('topicList') topicList: any;
  @Input('isProfileVisible') isProfileVisible: any;

  constructor(private sharedService: SharedService, private contentService: ContentService, private service: TopicListService,
    private router: Router) {
    this.getTopicList();
    this.sharedService.setSiteTitle('Topics');
    this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
        this.sharedService.setBodyClass();
      },
      responseError => this.errorInfo = responseError
    );
  }

  ngOnInit() {
  }
  check() {
    this.sharedService.showLoader();
    this.service.getHigherGrades().subscribe(
      topicsData => {
        const status = this.contentService.validateResponse(topicsData, {});
        this.sharedService.handleUnexpectedResponse(status);
        if (status === 'success') {
          this.higherGradeTopics = topicsData.topicList;
        }
        this.sharedService.hideLoader();
      },
      responseError => this.errorInfo = this.sharedService.handleResponseError(responseError)
    );
  }
  getTopicList() {
    this.sharedService.showLoader();
    this.service.getTopicList().subscribe(
      result => {
        const status = this.contentService.validateResponse(result, {});
        this.sharedService.handleUnexpectedResponse(status);
        if (status === 'success') {
          this.gradeData = result;
          this.contentService.setTemplate(result);
          this.contentService.setBasicData(result);
        }
        this.sharedService.hideLoader();
      },
      error => this.errorInfo = this.sharedService.handleResponseError(error)
    );
  }
}
