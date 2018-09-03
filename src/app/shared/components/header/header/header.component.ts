import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from '../../../services/content/content.service';
import { HomeService } from '../../../../modules/home/home.service';

@Component({
  selector: 'ms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input('template') template;
  @Input('isDetailed') isDetailedView;
  @Input('isProfileVisible') isProfileVisible: any;
  @Input('formValue') formValue: any;

  dashboardData: any;
  errorInfo: any;

  constructor(private contentService: ContentService, private homeService: HomeService) {
  }

  ngOnInit() {
    this.contentService.getBasicData().subscribe(
      result => this.dashboardData = result,
      responseError => this.errorInfo = responseError
    );
  }

  logout(type?: number) {
    type = (type) ? type : 0;
    this.homeService.logout(type);
  }

}
