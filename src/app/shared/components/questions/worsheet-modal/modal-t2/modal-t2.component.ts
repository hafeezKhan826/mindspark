import { Component, OnDestroy, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContentService } from '../../../../services/content/content.service';
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'lodash';
@Component({
  selector: 'ms-modal-t2',
  templateUrl: './modal-t2.component.html',
  styleUrls: ['../worsheet-modal.component.scss']
})
export class ModalT2Component implements OnDestroy {

  @Input('timed') timed: any;

  showTimer: any;
  worksheetName: any;
  remainingTime: any;
  totalTime: any;
  endTimer: any;
  totalQuestions: number;
  startWorksheetValue: any;
  contentType: string;

  private getTimerValueService: Subscription;
  private getQuestionService: Subscription;
  private getQuestionContentService: Subscription;

  constructor(public activeModal: NgbActiveModal, private contentService: ContentService) {
    this.startWorksheetValue = false;
    this.getTimerValueService = this.contentService.getTimerValue().subscribe(
      result => {
        this.startWorksheetValue = _.get(result, 'worksheetValue', false);
        this.endTimer = _.get(result, 'endTimer', null);
      }
    );
    this.getQuestionService = this.contentService.getQuestionData().subscribe(
      result => {
        this.remainingTime = _.get(result, 'remainingTime', '');
        this.totalQuestions = _.get(result, 'questionData.length', null);
        this.totalTime = _.get(result, 'totalTime', '');
        this.worksheetName = _.get(result, 'name', '');
        // this.timed = _.get(result, 'timed', '');
      }
    );
    this.getQuestionContentService = this.contentService.getQuestionContent().subscribe(
      result => {
        let from: string, templateContent: string;
        from = _.get(result, 'from', '').toLowerCase();
        templateContent = _.get(result, 'templateContent', '').toLowerCase();
        this.contentType = (from === 'worksheet') ? from : templateContent;
      }
    );
    this.showTimer = this.timed;
  }

  ngOnDestroy() {
    this.getTimerValueService.unsubscribe();
    this.getQuestionService.unsubscribe();
    this.getQuestionContentService.unsubscribe();
  }

  startWorksheet() {
    this.startWorksheetValue = true;
    const data = {
      worksheetValue: this.startWorksheetValue,
      remainingTime: this.remainingTime
    };
    this.contentService.setTimerValue(data);
    this.activeModal.dismiss();
    this.contentService.setMessageClose(true);
  }
  closeWorksheet() {
    // this.startWorksheetValue = false;
    this.activeModal.dismiss();
  }
}
