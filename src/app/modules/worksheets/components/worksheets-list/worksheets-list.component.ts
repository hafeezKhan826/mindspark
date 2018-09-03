import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../../../../shared/shared.service';
import { ContentService } from '../../../../shared/services/content/content.service';
import { WorksheetsService } from '../../services/worksheets.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ms-worksheets-list',
  templateUrl: './worksheets-list.component.html',
  styleUrls: ['./worksheets-list.component.scss']
})

export class WorksheetsListComponent {

  template: any;
  errorInfo: any;
  worksheetResult: any;
  endDate: boolean;

  private getTemplateService: Subscription;

  constructor(private sharedService: SharedService, private contentService: ContentService, private worksheetsService: WorksheetsService,
    private router: Router) {
    this.endDate = true;
    this.getWorksheetsList();
    this.sharedService.setSiteTitle('Worksheets');
    this.getTemplateService = this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
        this.sharedService.setBodyClass();
      },
      responseError => this.errorInfo = responseError
    );
  }

  ngDestroy() {
    this.getTemplateService.unsubscribe();
  }
  getWorksheetsList() {
    this.sharedService.showLoader();
    this.worksheetsService.getWorksheetsList().subscribe(
      result => {
        // const value = result;
        const status = this.contentService.validateResponse(result, {});
        this.sharedService.handleUnexpectedResponse(status);
        if (status === 'success') {
          this.worksheetResult = result;
          this.contentService.setTemplate(result);
          this.contentService.setBasicData(result);
        }
        this.sharedService.hideLoader();
      },
      error => this.errorInfo = this.sharedService.handleResponseError(error)
    );
  }

}
