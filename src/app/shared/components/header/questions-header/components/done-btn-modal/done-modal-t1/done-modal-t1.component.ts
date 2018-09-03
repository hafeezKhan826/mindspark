import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { DoneBtnModalComponent } from '../done-btn-modal.component';
import { SharedService } from '../../../../../../shared.service';
import { ContentService } from '../../../../../../services/content/content.service';
import * as _ from 'lodash';

@Component({
  selector: 'ms-done-modal-t1',
  templateUrl: './done-modal-t1.component.html',
  styleUrls: ['../done-btn-modal.component.scss']
})
export class DoneModalT1Component implements OnInit, OnChanges {

  @Input('pedagogyContentMode') pedagogyContentMode: any;

  template: string;
  templateClass: string;
  errorInfo: any;

  constructor(private doneBtnModalComponent: DoneBtnModalComponent,
    private sharedService: SharedService, private contentService: ContentService) {
    this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
        this.templateClass = this.sharedService.getClassName();
      },
      responseError => this.errorInfo = responseError
    );
  }

  ngOnInit() { }

  ngOnChanges(changes: any): void {
    const changePedagogyContentMode = _.get(changes, 'pedagogyContentMode.currentValue', null);
    if (changePedagogyContentMode !== undefined && changePedagogyContentMode !== null) {
      this.pedagogyContentMode = changePedagogyContentMode.toLowerCase();
    }
  }

  doneQuestion(content) {
    // this.doneBtnModalComponent.open(content, this.pedagogyContentMode);
  }

}
