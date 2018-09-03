import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { ContentService } from '../../../services/content/content.service';
import * as _ from 'lodash';

@Component({
  selector: 'ms-game-list-t2',
  templateUrl: './game-list-t2.component.html',
  styleUrls: ['./game-list-t2.component.scss']
})
export class GameListT2Component implements OnChanges, OnInit {

  gameList: any;
  canPlay: boolean;
  showMoreGames: any;
  lockedActivityList: any;
  unattemptedActivityList: any;
  attemptedActivityList: any;
  gameStatus: string;
  templateClass: string;
  errorInfo: any;
  activityTypes: string[];
  showText: string;
  @Input('activityList') activityList: any;

  constructor(private sharedService: SharedService, private contentService: ContentService) {
    this.contentService.getTemplate().subscribe(
      result => this.templateClass = this.sharedService.getClassName(),
      responseError => this.errorInfo = responseError
    );
  }

  ngOnInit() {
    this.canPlay = true;
  }

  ngOnChanges(changes: any): void {
    const changeValue = _.get(changes, 'activityList', null);
    if (changeValue.currentValue !== undefined && changeValue.currentValue !== null) {
      this.activityList = changeValue.currentValue;
      this.activityTypes = Object.keys(changeValue.currentValue);
      this.formGameList();
    }
  }

  formGameList(): any {

    this.showText = 'show more';
    this.attemptedActivityList = _.get(this.activityList, 'attempted', []);
    this.unattemptedActivityList = _.get(this.activityList, 'unattempted', []);
    this.lockedActivityList = _.get(this.activityList, 'locked', []);
    this.gameList = [
      { list: this.unattemptedActivityList, type: 'unattempted', text: this.showText, status: false },
      { list: this.attemptedActivityList, type: 'attempted', text: this.showText, status: false },
      { list: this.lockedActivityList, type: 'locked', text: this.showText, status: false }
    ];
  }

  getActivityType(type) {
    switch (type) {
      case 'attempted':
        this.gameStatus = 'played';
        break;
      case 'locked':
        this.gameStatus = 'locked';
        break;
      default:
        this.gameStatus = 'latest';
        break;
    }
    return type;
  }
  toggleShowMoreGames(activityType, index) {

    this.gameList[index].status = !this.gameList[index].status;

    if (this.gameList[index].status) {
      this.gameList[index].text = 'show less'
    } else {
      this.gameList[index].text = 'show more'
    }
  }

}
