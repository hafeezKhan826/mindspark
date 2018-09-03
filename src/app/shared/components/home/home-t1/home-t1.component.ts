import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from '../../../services/content/content.service';
import * as _ from 'lodash';

@Component({
  selector: 'ms-home-t1',
  templateUrl: './home-t1.component.html',
  styleUrls: ['./home-t1.component.scss']
})
export class HomeT1Component implements OnInit {
  @Input('for') for: string;
  @Input('homeTileList') homeTileList = [];
  @Input('isProfileVisible') isProfileVisible: boolean;
  @Input('template') template: string;
  permittedNavs: any;

  constructor(private contentService: ContentService) {
  }

  ngOnInit() {
    this.contentService.getBasicData().subscribe(result => {
      this.permittedNavs = _.get(result, 'permittedNavs');
    });
  }

}
