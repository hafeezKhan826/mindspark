import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ms-home-t2',
  templateUrl: './home-t2.component.html',
  styleUrls: ['./home-t2.component.scss']
})
export class HomeT2Component implements OnInit {
  @Input('for') for: string;
  @Input('homeTileList') homeTileList = [];
  @Input('isProfileVisible') isProfileVisible: boolean;
  @Input('template') template: string;

  constructor() { }

  ngOnInit() {
  }

}
