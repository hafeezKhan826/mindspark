import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { ContentService } from '../../../services/content/content.service';
import * as _ from 'lodash';

@Component({
  selector: 'ms-questions-header',
  templateUrl: './questions-header.component.html',
  styleUrls: ['./questions-header.component.scss']
})
export class QuestionsHeaderComponent implements OnInit, OnChanges {
  @Input('headerContent') headerContent: any;
  templateClass: string;
  template: string;
  errorInfo: any;

  constructor(private contentService: ContentService, private sharedService: SharedService) {
    this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
        this.templateClass = this.sharedService.getClassName();
      },
      responseError => this.errorInfo = responseError
    );
  }

  ngOnInit() {
  }

  ngOnChanges(changes: any): void {
    const changeHeaderContent = _.get(changes, 'headerContent.currentValue', null);
    if (changeHeaderContent !== undefined && changeHeaderContent !== null) {
      this.headerContent = changeHeaderContent;
    }
  }

}
