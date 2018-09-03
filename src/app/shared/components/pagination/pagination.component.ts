import { Component, OnInit, Input } from '@angular/core';
import { AppSettings } from '../../../settings/app.settings';
import * as _ from 'lodash';

@Component({
  selector: 'ms-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  showingFrom: number;
  currentPage: number;
  collectionSize: number;
  totalPagesCount: any;
  maxPageSize: any;
  @Input('paginationData') paginationData: any;
  constructor() {
    this.maxPageSize = AppSettings.PAGINATION_MAX_SIZE;
    this.totalPagesCount = AppSettings.PAGINATION_LIMIT;
  }

  ngOnInit() {
    this.collectionSize = _.get(this.paginationData, 'totalQuestion', 1);
    this.currentPage = _.get(this.paginationData, 'currentPage', 1);
  }

  loadPage(page) { }

}
