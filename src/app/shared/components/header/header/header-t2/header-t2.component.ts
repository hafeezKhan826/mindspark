import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { CommentModalComponent } from '../../../comments/comment-modal/comment-modal.component';
import { SharedService } from '../../../../shared.service';
import { ContentService } from '../../../../services/content/content.service';
import { Router } from '@angular/router';
import { NotificationModalT2Component } from '../../../notification-modal/notification-modal-t2/notification-modal-t2.component';
import { HeaderComponent } from '../header.component';
import * as _ from 'lodash';

@Component({
  selector: 'ms-header-t2',
  templateUrl: './header-t2.component.html',
  styleUrls: ['./header-t2.component.scss']
})

export class HeaderT2Component implements OnInit, OnChanges {

  @Input('notifications') notifications: any;
  @Input('permittedNavs') permittedNavs: any;
  @Input('formValue') formValue: any;

  unreadNotifications: boolean;
  navs: any = {};
  isHeight: any;
  moreNotifications: boolean;
  isProfileVisible = false;

  constructor(private router: Router, private sharedService: SharedService, private contentService: ContentService,
    private headerComponent: HeaderComponent) {
    this.isProfileVisible = !this.isProfileVisible;
  }

  ngOnInit() {
    this.moreNotifications = false;
    this.isHeight = false;
  }

  ngOnChanges(changes: any): void {
    const notificationChange = _.get(changes, 'notifications.currentValue', []);
    const permittedNavsChange = _.get(changes, 'permittedNavs.currentValue', {});
    if (notificationChange !== undefined && notificationChange !== null) {
      this.notifications = notificationChange;
      if (this.notifications.length > 3) {
        this.moreNotifications = true;
      }
      this.checkRead();
    }
    if (permittedNavsChange !== undefined && permittedNavsChange !== null) {
      this.permittedNavs = permittedNavsChange;
    }
  }

  checkRead() {
    if (this.notifications) {
      this.unreadNotifications = false;
      for (let i = 0; i < this.notifications.length; i++) {
        if (this.notifications[i].status === 'unread') {
          this.unreadNotifications = true;
        }
      }
    }
  }

  logout() {
    this.sharedService.setReloadRestrict('blockReload');
    this.headerComponent.logout();
  }

  goToMailbox() {
    this.router.navigate(['./my-mindspark/mailbox']);
    event.stopImmediatePropagation();
  }

  showAllNotification() {
    this.isHeight = true;
  }

  open() {
    const modalRef = this.sharedService.open(CommentModalComponent);
  }
  champNotify() {
    const modalRef = this.sharedService.open(NotificationModalT2Component);
  }
}
