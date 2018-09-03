import { Component, OnChanges, Input } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { ContentService } from '../../../services/content/content.service';
import { Router } from '@angular/router';
import { TopicDetailsComponent } from '../../../../modules/topics/components/topic-details/topic-details.component';
import { GameTileComponent } from '../../game-list/game-tile/game-tile.component';
import { TopicsTileComponent } from '../../topics-tile/topics-tile.component';
import { SessionReportService } from '../../questions/session-report/services/session-report/session-report-service.service';
import * as _ from 'lodash';
import { AppSettings } from '../../../../settings/app.settings';


@Component({
  selector: 'ms-topic-details-t2',
  templateUrl: './topic-details-t2.component.html',
  styleUrls: ['./topic-details-t2.component.scss'],
  providers: [GameTileComponent, TopicsTileComponent]
})
export class TopicDetailsT2Component implements OnChanges {

  topicId: any;
  @Input('topicDetails') topicDetails: any;
  topicData: any;
  topicMetrics: any;
  contentDetails: any;
  unitList: any;
  higherDetailsList: any;
  private errorInfo: any;

  constructor(private sharedService: SharedService, private contentService: ContentService, private router: Router,
    private gameTileComponent: GameTileComponent, private topicsTileComponent: TopicsTileComponent,
    private sessionReportService: SessionReportService) {
    this.sharedService.getTopicId().subscribe(result => {
      this.topicId = result.topicId;
    });
  }

  ngOnChanges(changes: any): void {
    const changesValue = _.get(changes, 'topicDetails.currentValue', null);
    if (changesValue !== undefined && changesValue !== null) {
      this.topicDetails = changesValue;
      this.topicMetrics = _.get(this.topicDetails, 'topicMetrics', null);
      this.contentDetails = _.get(this.topicDetails, 'contentDetails', []);
      this.contentDetails = (this.contentDetails !== []) ? [this.contentDetails] : [];
      this.topicData = _.get(this.topicDetails, 'topicData', null);
      this.unitList = _.get(this.topicDetails, 'topicData.unitList', []);
      this.higherDetailsList = _.get(this.topicDetails, 'topicData.higherLevelUnitList', []);
    }
  }

  openTopicTrails() {
    const data: any = {
      'startFrom': 1,
      'limit': 20,
      'topicId': this.topicId,
      'index': 1
    };
    this.sharedService.setTopicTrailData(data);
    this.router.navigate(['topics/trails']);
  }

  openActivity(unitID) {
    this.gameTileComponent.openActivity(unitID);
  }

  startTopic() {
    const button = {
      state: 'redo',
      type: 'learn'
    };
    this.topicsTileComponent.startTopic(this.topicId, button);
  }

  startHigherLevel() {
    this.sharedService.showLoader();
    const data: any = {
      topicID: this.topicId
    };
    this.sessionReportService.startTopicHigherLevel(data).subscribe(
      result => {
        data.from = 'topic';
        this.contentService.setQuestionContent(data);
        const redirectionCode = _.get(result, 'redirectionCode', '').toLowerCase();
        if (redirectionCode === 'contentpage') {
          this.contentService.contentPageRedirect(result);
        }
      },
      responseError => this.errorInfo = this.sharedService.handleResponseError(responseError)
    );
  }

  openFavourites() {
    const data = {
      topicID: this.topicId
    };
    this.contentService.setFavouritesQuestionIndex(data);
    this.router.navigate([AppSettings.REDIRECT_CODE.starredquestions]);
  }
}
