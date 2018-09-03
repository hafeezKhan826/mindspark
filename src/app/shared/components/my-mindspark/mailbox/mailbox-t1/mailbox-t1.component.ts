import { Component } from '@angular/core';
import { MailboxT2Component } from '../mailbox-t2/mailbox-t2.component';

@Component({
  selector: 'ms-mailbox-t1',
  templateUrl: './mailbox-t1.component.html',
  styleUrls: ['./mailbox-t1.component.scss']
})
export class MailboxT1Component extends MailboxT2Component { }
