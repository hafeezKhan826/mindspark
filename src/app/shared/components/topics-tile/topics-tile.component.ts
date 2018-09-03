import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from '../../../settings/app.settings';
import { SessionReportModalComponent } from '../questions/session-report/session-report-modal/session-report-modal.component';
import { TopicListService } from '../../../modules/topics/services/topic-list.service';
import { SharedService } from '../../shared.service';
import { ContentService } from '../../services/content/content.service';
import { SlugifyPipe } from 'ngx-pipes';
import { SearchFilterPipe } from '../../../modules/topics/filters/search-filter.pipe';
import * as _ from 'lodash';

@Component({
  selector: 'ms-topics-tile',
  templateUrl: './topics-tile.component.html',
  styleUrls: ['./topics-tile.component.scss'],
  providers: [SlugifyPipe, TopicListService]
})
export class TopicsTileComponent implements OnInit {
  topicId: any;
  errorInfo: any;
  overlayButton: boolean;
  @Input('template') template: string;
  @Input('for') for: string;
  @Input('topicList') topicList = [];
  @Input('search') search: any;
  @Input('showHigherGrades') showHigherGrades: boolean;
  @Input('grade') grade: boolean;

  moreOptions: boolean[] = [];

  constructor(private router: Router, private topicListService: TopicListService, private slugifyPipe: SlugifyPipe,
    private sharedService: SharedService, private contentService: ContentService) {
    this.sharedService.getTopicId().subscribe(result => {
      this.topicId = result.topicId;
    });
  }

  ngOnInit() {
    this.overlayButton = false;
    if (this.topicList) {
      this.addMoreOptions(this.topicList);
    }
  }
  showOverlay(x, y) {
    this.moreOptions[y] = !this.moreOptions[y];
    if (this.topicList.length > 0 && x === this.topicList[y].contentID) {
      this.overlayButton = true;
      return this.overlayButton;
    }
  }
  goToDetailsPage(topic) {
    const topicID = _.get(topic, 'contentID', '');
    this.contentService.setTopicId(topicID);
    this.router.navigate(['/topics/detail']);
  }
  addMoreOptions(topicsList) {
    if (topicsList) {
      this.topicList = topicsList;
      for (let i = 0; i < topicsList.length; i++) {
        this.moreOptions.push(false);
      }
      return this.moreOptions;
    }
  }
  startTopic(topic, button) {
    this.sharedService.showLoader();
    const data: any = {
      'topicID': topic.contentID,
      'mode': button.type,
      'action': button.state
    };
    this.topicListService.startTopic(data).subscribe(
      result => {
        const status = this.contentService.validateResponse(result, data);
        this.sharedService.handleUnexpectedResponse(status);
        if (status === 'redirect') {
          data.from = 'topic';
          this.contentService.setQuestionContent(data);
          const redirectionCode = _.get(result, 'redirectionCode', '').toLowerCase();
          if (redirectionCode === 'contentpage') {
            this.contentService.contentPageRedirect(result);
          } else {
            if (redirectionCode === 'closecontent') {
              this.sharedService.open(SessionReportModalComponent, ['backDropStop']);
            } else {
              this.sharedService.hideLoader();
            }
          }
        } else {
          this.sharedService.hideLoader();
        }
      },
      responseError => this.errorInfo = this.sharedService.handleResponseError(responseError)
    );
  }
  setTopicsClearedProgress(progressValue) {
    return ((progressValue.conceptCleared / progressValue.conceptOverall) * 100);

  }
  getTopicProgress(cleared, overall) {
    const progress: number = (cleared / overall) * 100;
    return progress;
  }

  openTopicTrails(topicId) {
    const data: any = {
      'startFrom': 1,
      'limit': 20,
      'topicId': topicId,
      'index': 1
    };
    this.sharedService.setTopicTrailData(data);
    this.router.navigate(['topics/trails']);
  }
}
