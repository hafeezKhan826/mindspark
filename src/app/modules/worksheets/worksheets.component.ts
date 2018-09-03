import { Component, OnDestroy } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { ContentService } from '../../shared/services/content/content.service';

@Component({
  selector: 'ms-worksheets',
  templateUrl: './worksheets.component.html',
  styleUrls: ['./worksheets.component.scss']
})
export class WorksheetsComponent implements OnDestroy {

  private getTemplateService: any;

  template: string;
  errorInfo: any;

  constructor(private sharedService: SharedService, private contentService: ContentService) {
    this.getTemplateService = this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
        this.sharedService.setBodyClass();
      },
      responseError => this.errorInfo = responseError
    );
  }


  ngOnDestroy() {
    this.getTemplateService.unsubscribe();
  }
}
