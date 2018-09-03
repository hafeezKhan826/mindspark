import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { WorksheetsRoutes } from './worksheets.routing';

import { WorksheetsComponent } from './worksheets.component';
import { WorksheetsListComponent } from './components/worksheets-list/worksheets-list.component';
import { WorksheetReportComponent } from './components/worksheet-report/worksheet-report.component';
import { WorksheetListT1Component } from '../../shared/components/worksheet-list/worksheet-list-t1/worksheet-list-t1.component';
import { TopicsTileComponent } from '../../shared/components/topics-tile/topics-tile.component';
import { SlugifyPipe } from 'ngx-pipes';
import { WorksheetsService } from './services/worksheets.service';
import { TopicsListComponent } from '../topics/components/topics-list/topics-list.component';
import { WorksheetTileComponent } from '../../shared/components/worksheet-tile/worksheet-tile.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(WorksheetsRoutes)
  ],
  exports: [
    RouterModule,
    WorksheetsComponent,
    WorksheetsListComponent,
    WorksheetReportComponent
  ],
  declarations: [
    WorksheetsComponent,
    WorksheetsListComponent,
    WorksheetReportComponent
  ],
  providers: [
    WorksheetTileComponent,
    SlugifyPipe,
    WorksheetsService,
    WorksheetsListComponent,
    TopicsListComponent,
    TopicsTileComponent,
    WorksheetReportComponent

  ]
})
export class WorksheetsModule { }
