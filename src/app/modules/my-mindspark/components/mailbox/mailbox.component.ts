import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { SharedService } from '../../../../shared/shared.service';
import { ContentService } from '../../../../shared/services/content/content.service';
import { MailboxService } from './mailbox.service';
import { CommentModalComponent } from '../../../../shared/components/comments/comment-modal/comment-modal.component';

@Component({
  selector: 'ms-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss']
})
export class MailboxComponent implements OnInit, OnDestroy {
  template: string;
  mailbox: any;
  errorInfo: any;

  private getTemplateService: Subscription;
  private getNewCommentService: Subscription;

  constructor(private router: Router, private mailBoxService: MailboxService,
    private sharedService: SharedService, private contentService: ContentService) {
    this.sharedService.setSiteTitle('Mailbox');
    this.getTemplateService = this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
      },
      responseError => this.errorInfo = responseError
    );
    this.getNewCommentService = this.contentService.getNewComment().subscribe(
      result => {
        if (result.added) {
          this.getmailBoxData();
        }
      }
    );
  }

  ngOnInit() {
    this.getmailBoxData();
  }

  ngOnDestroy(): void {
    this.getTemplateService.unsubscribe();
    this.getNewCommentService.unsubscribe();
  }

  getmailBoxData() {
    this.sharedService.showLoader();
    this.mailBoxService.getMailboxData().subscribe(
      result => {
        const status = this.contentService.validateResponse(result, {});
        this.sharedService.handleUnexpectedResponse(status);
        if (status === 'success') {
          this.mailbox = result;
          this.contentService.setTemplate(result);
          this.contentService.setBasicData(result);
        }
        this.sharedService.hideLoader();
      },
      responseError => this.errorInfo = this.sharedService.handleResponseError(responseError)
    );
  }

  open() {
    this.sharedService.open(CommentModalComponent);
  }

  readMail(mail) {
    this.router.navigate(['my-mindspark/mailbox/' + mail.messageID]);
  }
}
