import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { SharedService } from '../../../shared.service';
import { ContentService } from '../../../services/content/content.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ms-details-header',
  templateUrl: './details-header.component.html',
  styleUrls: ['./details-header.component.scss']
})
export class DetailsHeaderComponent implements OnInit, OnChanges {
  errorInfo: any;
  templateClass: string;
  templateService: Subscription;
  localFrom: any;
  headerTitle: string;
  @Input('template') template: any;
  @Input('topicTrailHeaderData') topicTrailHeaderData: any;
  @Input('from') from: any;

  constructor(private router: Router, private sharedService: SharedService, private contentService: ContentService) {
    this.sharedService.setTrailFrom('worksheetreport');
    this.templateService = this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
        this.templateClass = this.sharedService.getClassName();
      },
      responseError => this.errorInfo = responseError
    );
  }

  ngOnInit() {
  }
  ngOnChanges(changes: any) {
    let changesFromValue = _.get(changes, 'from.currentValue', null);
    if (changesFromValue) {
      changesFromValue = changesFromValue.toLowerCase();
      this.localFrom = changesFromValue;
      switch (this.localFrom) {
        case 'topictrail':
          this.headerTitle = 'Topic Trail';
          break;
        case 'worksheet':
          this.headerTitle = 'Worksheet Report';
          break;
        case 'topicdetails':
          this.headerTitle = 'Topic Details';
          break;
        default:
          break;
      }
    }
  }
  closeReport() {
    let url = '';
    switch (this.localFrom) {
      case 'topictrail':
        url = 'topics';
        break;
      case 'worksheet':
        url = 'worksheets';
        break;
      case 'topicdetails':
        url = 'topics';
        break;
      default:
        break;
    }
    this.router.navigate([url]);
  }
}
