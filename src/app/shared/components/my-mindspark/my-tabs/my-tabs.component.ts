import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ms-my-tabs',
  templateUrl: './my-tabs.component.html',
  styleUrls: ['./my-tabs.component.scss']
})
export class MyMindsparkTabsComponent implements OnInit {
  @Input('template') template: string;

  constructor() { }

  ngOnInit() {
  }

}
