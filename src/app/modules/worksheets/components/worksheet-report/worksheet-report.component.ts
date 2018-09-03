import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../../../shared/shared.service';
import { ContentService } from '../../../../shared/services/content/content.service';
import { WorksheetsService } from '../../services/worksheets.service';
import * as _ from 'lodash';

@Component({
  selector: 'ms-worksheet-report',
  templateUrl: './worksheet-report.component.html',
  styleUrls: ['./worksheet-report.component.scss']
})
export class WorksheetReportComponent implements OnInit {
  [x: string]: any;
  worksheetReportBodyData: any;
  template: string;
  errorInfo: any;
  from: any;
  constructor(private sharedService: SharedService, private contentService: ContentService, private worksheetsService: WorksheetsService) {
    this.templateService = this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
        this.templateClass = this.sharedService.getClassName();
      },
      responseError => this.errorInfo = responseError
    );
    this.sharedService.getWorksheetReportData().subscribe(worksheetDataResult => {
      this.getWorsheetReport(worksheetDataResult);
    });
    this.sharedService.setSiteTitle('Wroksheet Report');
    this.sharedService.setTrailFrom('worksheetreport');

  }

  ngOnInit() {
    this.from = 'worksheet';
  }

  getWorsheetReport(worksheetDataResult) {
    this.sharedService.showLoader();
    this.worksheetsService.getWorsheetReport().subscribe(
      result => {
        this.contentService.setBasicData(result);
        this.worksheetReportData = result;
      });
    this.sharedService.hideLoader();
  }
}
