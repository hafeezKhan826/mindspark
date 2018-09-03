import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { ContentService } from '../../shared/services/content/content.service';
import { MyProgressService } from './my-progress.service';

@Component({
  selector: 'ms-my-progress',
  templateUrl: './my-progress.component.html',
  styleUrls: ['./my-progress.component.scss']
})
export class MyProgressComponent implements OnInit {
  template: string;
  errorInfo: any;
  myProgress: any;

  constructor(private sharedService: SharedService, private contentService: ContentService, private myProgressService: MyProgressService) {
    this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
        this.sharedService.setBodyClass();
      },
      responseError => this.errorInfo = responseError
    );
  }

  ngOnInit() {
    this.getMyProgressData();
  }

  getMyProgressData() {
    this.sharedService.showLoader();
    this.myProgressService.getMyProgressData().subscribe(
      result => {
        const status = this.contentService.validateResponse(result, {});
        this.sharedService.handleUnexpectedResponse(status);
        if (status === 'success') {
          this.myProgress = result;
          this.contentService.setTemplate(result);
          this.contentService.setBasicData(result);
        }
        this.sharedService.hideLoader();
      },
      responseError => this.errorInfo = this.sharedService.handleResponseError(responseError)
    );
  }

}
