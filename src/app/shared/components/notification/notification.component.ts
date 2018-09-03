import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SharedService } from '../../shared.service';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ms-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],

})
export class NotificationComponent implements OnInit {
  showPopup = true;
  closeResult: string;
  constructor(private sharedService: SharedService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {

  }
  open(content) {
    this.sharedService.open(content);
    document.querySelector('.modal-content').classList.add('animatePopUp');
    // document.querySelector('.left-image-ct').classList.add('animatePopUp');
    // this.showPopup = !this.showPopup;

  }

}
