import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { ContentService } from '../../services/content/content.service';

@Component({
  selector: 'ms-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  // @Input()
  menuList: any;
  errorInfo: any;
  @Input('template') template: any;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getBasicData().subscribe(
      result => this.menuList = result.permittedNavs,
      responseError => this.errorInfo = responseError
    );
  }

}
