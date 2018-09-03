import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { AppSettings } from '../../../../settings/app.settings';
import { TopicListService } from '../../../../modules/topics/services/topic-list.service';
import { TopicsListComponent } from '../../../../modules/topics/components/topics-list/topics-list.component';
import { ContentService } from '../../../services/content/content.service';

@Component({
  selector: 'ms-topics-list-t1',
  templateUrl: './topic-list-t1.component.html',
  styleUrls: ['./topic-list-t1.component.scss'],
  providers: [TopicListService]
})
export class TopicListT1Component implements OnInit, OnChanges {
  listSize: number;
  topicImageDefault: string = AppSettings.TOPIC_DEFAULT_IMAGE;
  higherGradeLoaded = false;
  topicTiles: {}[];
  grade: any;
  showHigherGrades: boolean;
  isRetail: any;
  permittedNavs: any;

  @Input('template') template: string;
  @Input('for') for: string;
  @Input('topicList') topicList: any;
  @Input('gradeData') gradeData: any;
  @Input('higherGradeTopics') higherGradeTopics: any;
  @Input('isProfileVisible') isProfileVisible: any;

  constructor(private service: TopicListService, private router: Router, private topicsListComponent: TopicsListComponent, private contentService: ContentService) {
    this.contentService.getBasicData().subscribe(result => {
      this.permittedNavs = _.get(result, 'permittedNavs');
    });
  }

  ngOnInit() {
    this.showHigherGrades = false;
    this.for = 'topics';
  }
  ngOnChanges(changes: any): void {
    const changeHigherGradeTopics = _.get(changes, 'higherGradeTopics.currentValue', null);
    const changeGradeData = _.get(changes, 'gradeData.currentValue', null);
    if (changeGradeData !== undefined && changeGradeData !== null) {
      this.isRetail = changeGradeData.userInformation.isRetail;
      this.topicTiles = changeGradeData.topicList;
      this.listSize = this.topicTiles.length;
      this.grade = changeGradeData.userInformation.grade;
    }
    if (changeHigherGradeTopics !== undefined && changeHigherGradeTopics !== null) {
      this.higherGradeTopics = changeHigherGradeTopics;
      this.addHigherGradesToTopic();
    }
  }
  check() {
    this.showHigherGrades = !this.showHigherGrades;
    if (this.showHigherGrades) {
      this.topicsListComponent.check();
    }
  }
  addHigherGradesToTopic() {
    this.removeHigherGradeTopics();
    if (this.showHigherGrades) {
      this.topicTiles = this.topicTiles.concat(this.higherGradeTopics);
    }
  }

  removeHigherGradeTopics() {
    for (let index = 0; index < this.topicTiles.length; index++) {
      const tile = this.topicTiles[index];
      if (tile['grades']) {
        this.topicTiles.splice(index, 1);
      }
    }
  }
}
