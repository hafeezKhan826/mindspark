import { Component, OnChanges, Input } from '@angular/core';
import * as _ from 'lodash';
import { ContentService } from '../../../services/content/content.service';
import { SharedService } from '../../../shared.service';
@Component({
  selector: 'ms-my-progress-t2',
  templateUrl: './my-progress-t2.component.html',
  styleUrls: ['./my-progress-t2.component.scss']
})
export class MyProgressT2Component implements OnChanges {
  errorInfo: any;
  templateClass: any;
  @Input('myProgress') myProgress: any;

  constructor(private sharedService: SharedService, private contentService: ContentService) {
    this.contentService.getTemplate().subscribe(
      result => this.templateClass = this.sharedService.getClassName(),
      responseError => this.errorInfo = responseError
    );
  }

  ngOnChanges(changes: any): void {
    const changeMyProgress = _.get(changes, 'myProgress.currentValue', null);
    if (changeMyProgress !== undefined && changeMyProgress !== null) {
      this.myProgress = changeMyProgress;
    }
  }

}
