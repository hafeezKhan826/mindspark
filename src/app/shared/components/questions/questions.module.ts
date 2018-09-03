import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateService } from 'ng2-translate';
import { TranslateLoader, TranslateStaticLoader } from 'ng2-translate/src/translate.service';
import { RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions.component';
import { QuestionsStructureComponent } from './questions-structure/questions-structure.component';
import { QuestionsHeaderComponent } from '../header/questions-header/questions-header.component';
import { QuestionHeaderT1Component } from '../header/questions-header/question-header-t1/question-header-t1.component';
import { QuestionHeaderT2Component } from '../header/questions-header/question-header-t2/question-header-t2.component';
import { QuestionsFooterComponent } from '../footer/questions-footer/questions-footer.component';
import { QuestionFooterT1Component } from '../footer/questions-footer/question-footer-t1/question-footer-t1.component';
import { QuestionFooterT2Component } from '../footer/questions-footer/question-footer-t2/question-footer-t2.component';
import { DoneBtnModalComponent } from '../header/questions-header/components/done-btn-modal/done-btn-modal.component';
import { DoneModalT1Component } from '../header/questions-header/components/done-btn-modal/done-modal-t1/done-modal-t1.component';
import { DoneModalT2Component } from '../header/questions-header/components/done-btn-modal/done-modal-t2/done-modal-t2.component';
// tslint:disable-next-line:max-line-length
import { DoneModalWorksheetComponent } from '../header/questions-header/components/done-btn-modal/done-modal-worksheet/done-modal-worksheet.component';
import { QuestionConceptComponent } from '../header/questions-header/components/question-concept/question-concept.component';
import { QuestionNavigationComponent } from '../header/questions-header/components/question-navigation/question-navigation.component';
import { DefaultComponent } from '../header/questions-header/components/question-navigation/default/default.component';
import { TimeTestComponent } from '../header/questions-header/components/question-navigation/time-test/time-test.component';
import { WorksheetComponent } from '../header/questions-header/components/question-navigation/worksheet/worksheet.component';
import { SparkiesComponent } from '../header/questions-header/components/sparkies/sparkies.component';
import { FullwidthComponent } from './questions-structure/fullwidth/fullwidth.component';
import { FullwidthT2Component } from './questions-structure/fullwidth/fullwidth-t2/fullwidth-t2.component';
import { HalfwidthComponent } from './questions-structure/halfwidth/halfwidth.component';
import { HalfwidthT2Component } from './questions-structure/halfwidth/halfwidth-t2/halfwidth-t2.component';
import { QuestionTypeComponent } from './question-type/question-type.component';
import { QuestionExplanationComponent } from './question-explanation/question-explanation.component';
import { QuestionHintComponent } from './question-hint/question-hint.component';
import { QuestionAlertsComponent } from './question-alerts/question-alerts.component';
import { QuestionTimerComponent } from './question-timer/question-timer.component';
import { QuestionSidebarBtnComponent } from './question-sidebar-btn/question-sidebar-btn.component';
import { QuestionSidebarBtnT2Component } from './question-sidebar-btn/question-sidebar-btn-t2/question-sidebar-btn-t2.component';
import { WorsheetModalComponent } from './worsheet-modal/worsheet-modal.component';
import { ModalT1Component } from './worsheet-modal/modal-t1/modal-t1.component';
import { ModalT2Component } from './worsheet-modal/modal-t2/modal-t2.component';
import { SessionReportComponent } from './session-report/session-report.component';
import { SessionReportModalComponent } from './session-report/session-report-modal/session-report-modal.component';
import { MathButtonComponent } from '../math-button/math-button.component';

import { QuestionsService } from './questions.service';
import { SessionReportService } from './session-report/services/session-report/session-report-service.service';
import { MathsService } from '../../services/maths/maths.service';
import { ProgressBarModule } from 'ng2-progress-bar';
import { DoAPICallService } from '../../services/doAPICall/doAPICall.service';
import { MathQuillService } from '../../services/mathquill/mathquill.service';

import { MathsDirective } from '../../directives/maths/maths.directive';

import { MinutesSecondsPipe } from './session-report/filters/minutes-seconds.pipe';
import { OrdinalNamePipe } from '../../pipes/ordinalName/ordinalName.pipe';
import { MinuteSecondPipe } from '../../pipes/minuteSecond/minuteSecond.pipe';
import { SanitizeCodePipe } from '../../pipes/sanitize/sanitizeCode.pipe';
import { VernacularBtnComponent } from './vernacular-btn/vernacular-btn.component';


export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    RouterModule,
    MomentModule,
    ProgressBarModule

  ],
  exports: [
    QuestionsComponent,
    QuestionsStructureComponent,
    QuestionsHeaderComponent,
    QuestionHeaderT1Component,
    QuestionHeaderT2Component,
    QuestionConceptComponent,
    DoneBtnModalComponent,
    DoneModalT1Component,
    DoneModalT2Component,
    DoneModalWorksheetComponent,
    QuestionNavigationComponent,
    DefaultComponent,
    TimeTestComponent,
    WorksheetComponent,
    SparkiesComponent,
    QuestionsFooterComponent,
    QuestionFooterT1Component,
    QuestionFooterT2Component,
    FullwidthComponent,
    FullwidthT2Component,
    HalfwidthComponent,
    HalfwidthT2Component,
    QuestionTypeComponent,
    QuestionExplanationComponent,
    QuestionHintComponent,
    QuestionAlertsComponent,
    QuestionTimerComponent,
    QuestionSidebarBtnComponent,
    QuestionSidebarBtnT2Component,
    WorsheetModalComponent,
    ModalT1Component,
    ModalT2Component,
    SessionReportComponent,
    SessionReportModalComponent,
    MinutesSecondsPipe,
    OrdinalNamePipe,
    MinuteSecondPipe,
    SanitizeCodePipe,
    MathsDirective,
    MathButtonComponent,
    VernacularBtnComponent
  ],
  declarations: [
    QuestionsComponent,
    QuestionsStructureComponent,
    QuestionsHeaderComponent,
    QuestionHeaderT1Component,
    QuestionHeaderT2Component,
    QuestionConceptComponent,
    DoneBtnModalComponent,
    DoneModalT1Component,
    DoneModalT2Component,
    DoneModalWorksheetComponent,
    QuestionNavigationComponent,
    DefaultComponent,
    TimeTestComponent,
    WorksheetComponent,
    SparkiesComponent,
    QuestionsFooterComponent,
    QuestionFooterT1Component,
    QuestionFooterT2Component,
    FullwidthComponent,
    FullwidthT2Component,
    HalfwidthComponent,
    HalfwidthT2Component,
    QuestionTypeComponent,
    QuestionExplanationComponent,
    QuestionHintComponent,
    QuestionAlertsComponent,
    QuestionTimerComponent,
    QuestionSidebarBtnComponent,
    QuestionSidebarBtnT2Component,
    WorsheetModalComponent,
    ModalT1Component,
    ModalT2Component,
    SessionReportComponent,
    SessionReportModalComponent,
    MinutesSecondsPipe,
    OrdinalNamePipe,
    MinuteSecondPipe,
    SanitizeCodePipe,
    MathsDirective,
    MathButtonComponent,
    VernacularBtnComponent
  ],
  providers: [
    QuestionsService,
    SessionReportService,
    MathsService,
    DoAPICallService,
    MathQuillService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ModalT2Component, ModalT1Component, SessionReportModalComponent, SessionReportComponent]
})
export class QuestionsModule {

}
