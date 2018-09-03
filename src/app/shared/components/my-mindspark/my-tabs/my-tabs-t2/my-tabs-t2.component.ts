import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../../services/content/content.service';
import * as _ from 'lodash';

@Component({
  selector: 'ms-my-tabs-t2',
  templateUrl: './my-tabs-t2.component.html',
  styleUrls: ['./my-tabs-t2.component.scss']
})
export class MyMindsparkTabsT2Component implements OnInit {
  permittedNavs: any;

  constructor(private contentService: ContentService) { }
  thing: string;
  ngOnInit() {
    this.setOnloadTab();
    this.contentService.getBasicData().subscribe(result => {
      this.permittedNavs = _.get(result, 'permittedNavs');

    });
  }
  setOnloadTab() {
    const url = location.href;
    const urlSplit = url.split('/');
    const getEle = urlSplit[urlSplit.length - 1];
    this.thing = getEle;
  }

}
