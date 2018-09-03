import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../../../shared/shared.service';
import { ContentService } from '../../../../shared/services/content/content.service';
import { TopicListService } from '../../services/topic-list.service';

@Component({
  selector: 'ms-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.scss']
})
export class TopicDetailsComponent implements OnInit {
  from: string;
  topicDetails: any;
  topicId: any;
  template: string;
  errorInfo: any;
  constructor(private sharedService: SharedService, private contentService: ContentService, private topicDetailsService: TopicListService) {
    this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
      },
      responseError => this.errorInfo = responseError
    );
    this.contentService.getTopicId().subscribe(
      result => {
        this.topicId = result.topicId;
      }
    );
    this.sharedService.setSiteTitle('Topic Details');
    this.getTopicDetailsService(this.topicId);
    this.from = 'topicDetails';
  }

  ngOnInit() {
  }

  getTopicDetailsService(topicId) {
    const data = {
      'topicId': topicId
    };
    this.sharedService.setTopicId(data);
    this.sharedService.showLoader();
    this.topicDetailsService.getTopicDetails(data).subscribe(
      result => { this.topicDetails = result; }
    );
    this.sharedService.hideLoader();
  }
}

