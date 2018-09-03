import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../../services/content/content.service';
import * as _ from 'lodash';

@Component({
  selector: 'ms-my-tabs-t1',
  templateUrl: './my-tabs-t1.component.html',
  styleUrls: ['./my-tabs-t1.component.scss']
})
export class MyMindsparkTabsT1Component implements OnInit {
  permittedNavs: any;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getBasicData().subscribe(result => {
      this.permittedNavs = _.get(result, 'permittedNavs');

    });
  }

}
