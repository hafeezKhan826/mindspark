import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SharedService } from '../../../../shared/shared.service';
import { ContentService } from '../../../../shared/services/content/content.service';
import { TopicListService } from '../../services/topic-list.service';
import * as _ from 'lodash';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ms-topic-trail',
  templateUrl: './topic-trail.component.html',
  styleUrls: ['./topic-trail.component.scss']
})
export class TopicTrailComponent implements OnInit, OnDestroy {
  topicTrailSubscription: Subscription;
  from: string;
  template: string;
  errorInfo: any;
  topicTrailHeaderData: any;
  topicTrailData: any;

  constructor(private sharedService: SharedService, private contentService: ContentService, private topicListService: TopicListService) {
    this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
      },
      responseError => this.errorInfo = responseError
    );
    this.topicTrailSubscription = this.sharedService.getTopicTrailData().subscribe(result => {
      this.getTopicTrailService(result);
    });
    this.sharedService.setSiteTitle('Topic Trails');
  }

  ngOnInit() {
  }

  getTopicTrailService(result) {
    this.sharedService.showLoader();
    this.topicListService.getTopicTrail(result).subscribe(
      topicTrailResult => {
        this.topicTrailHeaderData = _.get(topicTrailResult, 'topicDetails', {});
        this.topicTrailData = topicTrailResult;
        this.from = 'topicTrail';
      });
    this.sharedService.hideLoader();
  }
  ngOnDestroy() {
    this.topicTrailSubscription.unsubscribe();
  }
}
