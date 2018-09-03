import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AppSettings } from '../../../../settings/app.settings';
import { SearchFilterPipe } from '../../../../modules/topics/filters/search-filter.pipe';
import { SlugifyPipe } from 'ngx-pipes';
import { TopicsTileComponent } from '../topics-tile.component';
import { WorksheetTileComponent } from '../../worksheet-tile/worksheet-tile.component';
import { TopicDetailsT2Component } from '../../topic-details/topic-details-t2/topic-details-t2.component';
import * as _ from 'lodash';

@Component({
  selector: 'ms-topics-tile-t2',
  templateUrl: './topics-tile-t2.component.html',
  styleUrls: ['./topics-tile-t2.component.scss'],
  providers: [SearchFilterPipe, SlugifyPipe, TopicsTileComponent, WorksheetTileComponent]
})
export class TopicsTileT2Component implements OnInit, OnChanges {

  @Input('for') for: string;
  @Input('topicList') topicList = [];
  @Input('template') template: string;
  @Input('search') search: any;
  @Input('endDate') endDate: any;
  @Input('isProfileVisible') isProfileVisible: boolean;
  @Input('grade') grade: boolean;
  @Input('showHigherGrades') showHigherGrades: boolean;

  overlayButton: boolean;
  isClassVisible: boolean;
  moreOptions: boolean[] = [];
  topicImageDefault: string = AppSettings.TOPIC_DEFAULT_IMAGE;

  constructor(private topicsTileComponent: TopicsTileComponent, private worksheetTileComponent: WorksheetTileComponent) {
  }

  ngOnInit() {
    this.overlayButton = false;
    this.isClassVisible = false;
    if (this.topicList) {
      this.addMoreOptions(this.topicList);
    }
  }

  ngOnChanges(changes: any) {
    const changesValue = _.get(changes, 'topicList.currentValue');
    if (changesValue !== null || changesValue !== undefined) {
      this.topicList = _.toArray(changesValue);
    }
  }

  startTopic(topic, button) {
    this.topicsTileComponent.startTopic(topic, button);
  }


  addMoreOptions(topicsList) {
    this.moreOptions = this.topicsTileComponent.addMoreOptions(topicsList);
  }


  setTopicsClearedProgress(progressValue) {
    return this.topicsTileComponent.setTopicsClearedProgress(progressValue);

  }

  showOverlay(x, y) {
    this.overlayButton = this.topicsTileComponent.showOverlay(x, y);

  }

  goToDetailsPage(topic) {
    this.topicsTileComponent.goToDetailsPage(topic);
  }
  getTopicProgress(cleared, overall) {
    return this.topicsTileComponent.getTopicProgress(cleared, overall);
  }
  worksheetTileActions(worksheet, type) {
    if (type === 'report') {
      this.worksheetTileComponent.worksheetReport(worksheet);
    } else if (type === 'learn') {
      this.worksheetTileComponent.startWorksheets(worksheet);
    }
  }
  openTopicTrails(topicId) {
    this.topicsTileComponent.openTopicTrails(topicId);
  }
}
