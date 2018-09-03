import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { WorksheetsService } from '../../../modules/worksheets/services/worksheets.service';
import { ContentService } from '../../services/content/content.service';
import * as _ from 'lodash';
import { SessionReportModalComponent } from '../questions/session-report/session-report-modal/session-report-modal.component';
import { Router } from '@angular/router';
import { AppSettings } from '../../../settings/app.settings';

@Component({
  selector: 'ms-worksheet-tile',
  templateUrl: './worksheet-tile.component.html',
  styleUrls: ['./worksheet-tile.component.scss']
})
export class WorksheetTileComponent {

  errorInfo: any;

  constructor(private sharedService: SharedService, private worksheetsService: WorksheetsService,
    private contentService: ContentService, private router: Router) { }

  startWorksheets(worksheet) {
    this.sharedService.showLoader();
    const data: any = {
      'worksheetID': worksheet.contentID,
      'mode': worksheet.buttonState,
    };
    this.worksheetsService.startWorksheet(data).subscribe(
      result => {
        const status = this.contentService.validateResponse(result, data);
        this.sharedService.handleUnexpectedResponse(status);
        if (status === 'redirect') {
          data.from = 'worksheet';
          this.contentService.setQuestionContent(data);
          const redirectionCode = _.get(result, 'redirectionCode', '').toLowerCase();
          if (redirectionCode === 'contentpage') {
            this.contentService.contentPageRedirect(result);
          } else {
            if (redirectionCode === 'closecontent') {
              this.sharedService.open(SessionReportModalComponent, ['backDropStop']);
            } else {
              this.sharedService.hideLoader();
            }
          }
        } else {
          this.sharedService.hideLoader();
        }
      },
      responseError => this.errorInfo = this.sharedService.handleResponseError(responseError)
    );
  }
  worksheetReport(worksheet) {
    const data = {
      'startFrom': 0,
      'limit': AppSettings.PAGINATION_LIMIT,
      'worksheet': worksheet.contentID,
      'index': 0
    };
    this.sharedService.setWorksheetReportData(data);
    this.router.navigate(['worksheets/report']);
  }
}
