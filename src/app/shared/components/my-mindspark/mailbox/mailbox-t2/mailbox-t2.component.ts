import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { AppSettings } from '../../../../../settings/app.settings';
import { SharedService } from '../../../../shared.service';
import { MailboxComponent } from '../../../../../modules/my-mindspark/components/mailbox/mailbox.component';
import * as _ from 'lodash';
import { QuestionDisplayReformService } from '../../../../services/question/questionDisplayReform.service';

@Component({
  selector: 'ms-mailbox-t2',
  templateUrl: './mailbox-t2.component.html',
  styleUrls: ['./mailbox-t2.component.scss']
})
export class MailboxT2Component implements OnInit, OnChanges {
  @Input('mailbox') mailBox: any;
  mailCount: number;
  textlimit: number;
  templateClass: string;
  constructor(private sharedService: SharedService, private mailboxComponent: MailboxComponent,
    private questionDisplayReformService: QuestionDisplayReformService) {
    this.templateClass = this.sharedService.getClassName();
  }

  ngOnInit() {
    this.textlimit = AppSettings.TEXT_LIMIT;
    this.questionDisplayReformService.loadJS();
  }

  ngOnChanges(changes: any): void {
    const changesValue = _.get(changes, 'mailBox.currentValue', null);
    if (changesValue !== undefined && changesValue !== null) {
      this.mailBox = changesValue;
      this.mailCount = _.get(this.mailBox, 'mails', []).length;
    }
  }

  open() {
    this.mailboxComponent.open();
  }

  readMail(mail) {
    this.mailboxComponent.readMail(mail);
  }

}
