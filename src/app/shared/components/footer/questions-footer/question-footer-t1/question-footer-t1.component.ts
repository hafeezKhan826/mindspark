import { Component, OnInit } from '@angular/core';
import { AppSettings } from "../../../../../settings/app.settings";

@Component({
  selector: 'ms-question-footer-t1',
  templateUrl: './question-footer-t1.component.html',
  styleUrls: ['./question-footer-t1.component.scss']
})
export class QuestionFooterT1Component implements OnInit {
  sessionInformation: any;
  appSettings: any;

  constructor() {
    this.appSettings = AppSettings;
  }

  ngOnInit() {
  }

}
