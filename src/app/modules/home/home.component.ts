import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppSettings } from '../../settings/app.settings';
import { SharedService } from '../../shared/shared.service';
import { ContentService } from '../../shared/services/content/content.service';
import { HomeService } from './home.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'ms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayDetailedView = true;
  dashboardData: any;
  errorInfo: string;
  isProfileVisible = false;
  template: string;

  profileVisible: any;
  homeTileList: any[] = [];
  for: string;
  topicImageDefault: string = AppSettings.TOPIC_DEFAULT_IMAGE;

  constructor(private sharedService: SharedService, private contentService: ContentService, private homeService: HomeService,
    private router: Router) {
    document.cookie = 'jwt=a';
    this.sharedService.setSiteTitle('Home');
    this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
        this.sharedService.setBodyClass();
      },
      responseError => this.errorInfo = responseError
    );
    this.sharedService.getAndClearCookies();
  }

  ngOnInit() {
    this.for = 'home';
    this.getHomeDetails();
  }

  getHomeDetails() {
    this.sharedService.showLoader();
    this.homeService.getHomeDetails().subscribe(
      homeData => {
        const status = this.contentService.validateResponse(homeData, {});
        this.sharedService.handleUnexpectedResponse(status);
        if (status === 'success') {
          this.homeTileList = _.toArray(homeData.contentList);
          this.contentService.setTemplate(homeData);
          this.contentService.setBasicData(homeData);
        }
        this.sharedService.hideLoader();
      },
      responseError => this.errorInfo = this.sharedService.handleResponseError(responseError)
    );
  }

  continueTopic() {

  }

}
