import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../../../../../../shared.service';
import { ContentService } from '../../../../../../services/content/content.service';
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'lodash';

@Component({
  selector: 'ms-done-modal-worksheet',
  templateUrl: './done-modal-worksheet.component.html',
  styleUrls: ['../done-btn-modal.component.scss']
})
export class DoneModalWorksheetComponent implements OnDestroy {
  private getQuestionDataService: Subscription;
  private getTimerValueService: Subscription;

  questionData: any;
  endTimer: any;
  worksheetValue: any;


  constructor(private sharedService: SharedService, private contentService: ContentService) {
    this.getTimerValueService = this.contentService.getTimerValue().subscribe(
      result => {
        this.worksheetValue = _.get(result, 'worksheetValue', '');
        this.endTimer = _.get(result, 'endTimer', '');
      }
    );
    this.getQuestionDataService = this.contentService.getQuestionData().subscribe(
      result => {
        this.questionData = result;
      }
    );
  }

  ngOnDestroy() {
    this.getTimerValueService.unsubscribe();
    this.getQuestionDataService.unsubscribe();
  }
  open(content) {
    this.sharedService.open(content);
  }

  closeWorksheet() {
    this.contentService.setTimerValue({});
    this.questionData.timed = false;
    this.contentService.setQuestionData(this.questionData);
    document.getElementById('closeWorksheetModal').click();
  }

}
