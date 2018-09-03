import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../../../shared/shared.service';
import { ContentService } from '../../../../shared/services/content/content.service';
import { GamesService } from '../../games.service';
import * as _ from 'lodash';

@Component({
  selector: 'ms-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  activityList: any;
  template: string;
  errorInfo: any;

  constructor(private sharedService: SharedService, private contentService: ContentService, private gameService: GamesService) {
    this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
      },
      responseError => this.errorInfo = responseError
    );
  }

  ngOnInit() {
    this.getActivityList();
  }

  getActivityList() {
    this.sharedService.showLoader();
    this.gameService.getListActivity().subscribe(activityListResult => {
      const status = this.contentService.validateResponse(activityListResult, {});
      this.sharedService.handleUnexpectedResponse(status);
      if (status === 'success') {
        this.activityList = _.get(activityListResult, 'activityList', {});
        this.contentService.setTemplate(activityListResult);
        this.contentService.setBasicData(activityListResult);
      }
      this.sharedService.hideLoader();
    });
  }
}
