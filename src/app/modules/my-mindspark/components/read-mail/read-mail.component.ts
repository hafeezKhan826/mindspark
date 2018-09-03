import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentModalService } from '../../../../shared/components/comments/comment-modal/comment-modal.service';
import { SharedService } from '../../../../shared/shared.service';
import { ContentService } from '../../../../shared/services/content/content.service';
import { MailboxService } from '../mailbox/mailbox.service';
import { AppSettings } from '../../../../settings/app.settings';
import * as _ from 'lodash';

@Component({
  selector: 'ms-read-mail',
  templateUrl: './read-mail.component.html',
  styleUrls: ['./read-mail.component.scss'],
})
export class ReadMailComponent implements OnInit {
  template: string;
  readmail: any;
  errorInfo: any;

  constructor(private route: ActivatedRoute, private commentModalService: CommentModalService, private mailBoxService: MailboxService,
    private sharedService: SharedService, private contentService: ContentService) {
    this.sharedService.setSiteTitle('ReadMail');
    this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
      },
      responseError => this.errorInfo = responseError
    );
  }

  ngOnInit() { }

  getMessageTrailData(messageID) {
    /* check if messaege id not empty, else show error in an alert and return to mailbox */
    this.sharedService.showLoader();
    this.mailBoxService.getMessageTrailData(messageID).subscribe(
      result => {
        const status = this.contentService.validateResponse(result, messageID);
        this.sharedService.handleUnexpectedResponse(status);
        if (status === 'success') {
          this.readmail = result;
          this.contentService.setTemplate(result);
          this.contentService.setBasicData(result);
        }
        this.sharedService.hideLoader();
      },
      responseError => this.errorInfo = this.sharedService.handleResponseError(responseError)
    );
  }

  getCommentId() {
    return this.route.snapshot.url[1].path;
  }

  showQuestion(showQue) {
    return (showQue === 'SHOW') ? 'HIDE' : 'SHOW';
  }

  updateSelectedFiles(attachFile) {
    const files = [];
    if (attachFile) {
      const file = attachFile.nativeElement;
      if (file.files && file.files[0]) {
        const uploadFile = file.files;
        for (let i = 0; i < uploadFile.length; i++) {
          const thisFile = uploadFile[i];
          files.push({ filename: thisFile.name });
        }
      }
    }
    return files;
  }

  removeFile(attachFile) {
    if (attachFile) {
      attachFile.nativeElement.value = '';
    }
    return [];
  }

  saveCommentRating(rating, commentId) {
    this.sharedService.showLoader();
    const data = {
      'rating': rating,
      'commentID': commentId
    };
    this.mailBoxService.saveRating(data).subscribe(
      result => {
        const status = this.contentService.validateResponse(result, data);
        this.sharedService.handleUnexpectedResponse(status);
        if (status === 'success') {
          console.log('Rating updated.');
        }
        this.sharedService.hideLoader();
      },
      responseError => this.errorInfo = this.sharedService.handleResponseError(responseError)
    );
  }

  replyToMessage(replyMessage, messageID, attachFile) {
    this.sharedService.showLoader();
    let uploadFileError = '';
    let uploadFileState = '';
    const maxFileUpload = AppSettings.MAX_IMAGE_SIZE;
    const formData = new FormData();
    if (attachFile) {
      const file = attachFile.nativeElement;
      if (file.files && file.files[0]) {
        const uploadFile = file.files;
        for (let i = 0; i < uploadFile.length; i++) {
          const thisFile = uploadFile[i];
          if (thisFile.type.indexOf('image') !== 0) {
            uploadFileState = 'invalidType';
          } else {
            const fileSize = thisFile.size / 1024;
            if (fileSize > maxFileUpload * 1024) {
              uploadFileState = 'fileSize';
            }
          }
        }
        if (uploadFileState === '') {
          for (let i = 0; i < uploadFile.length; i++) {
            formData.append('attachments[]', uploadFile[i]);
          }
        } else if (uploadFileState === 'invalidType') {
          const acceptedTypes = AppSettings.IMAGE_FORMAT.join(' or ');
          uploadFileError = 'Upload only files of type ' + acceptedTypes + '.';
        } else if (uploadFileState === 'fileSize') {
          uploadFileError = 'File size should not be greater than ' + maxFileUpload + 'MB.';
        }
      } else {
        console.log('No file selected.');
      }
    }
    if (uploadFileState === '') {
      formData.append('replyBody', replyMessage.value.replyBody);
      formData.append('messageID', messageID);

      this.commentModalService.replyToMessage(formData).subscribe(
        result => {
          const status = this.contentService.validateResponse(result, {});
          this.sharedService.handleUnexpectedResponse(status);
          if (status === 'success') {
            this.getMessageTrailData(messageID);
          }
          this.sharedService.hideLoader();
        },
        responseError => this.errorInfo = this.sharedService.handleResponseError(responseError)
      );
      return { result: 'success', message: '' };
    } else {
      this.sharedService.hideLoader();
      return { result: 'error', message: uploadFileError };
    }
  }

  open(imageBoxModal, fileName) {
    this.sharedService.open(imageBoxModal);
    return fileName;
  }

  disableSend(replyMessage) {
    return replyMessage.invalid;
  }

}
