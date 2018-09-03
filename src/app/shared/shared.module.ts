import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateService } from 'ng2-translate';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';
import { NgPipesModule } from 'ngx-pipes';
import { CookieModule } from 'ngx-cookie';
import { SharedService } from './shared.service';
import { ContentService } from './services/content/content.service';
import { ChangePasswordService } from './components/change-password/change-password.service';
import { TranslateLoader, TranslateStaticLoader } from 'ng2-translate/src/translate.service';

import { SearchFilterPipe } from '../modules/topics/filters/search-filter.pipe';
import { CommentPipe } from './components/comments/filters/comment.pipe';
import { GetFileNamePipe } from './pipes/getFileName/getFileName.pipe';

import { SharedComponent } from './shared.component';
import { AuthHeaderComponent } from './components/header/auth-header/auth-header.component';
import { AuthFooterComponent } from './components/footer/auth-footer/auth-footer.component';
import { DetailsHeaderComponent } from './components/header/details-header/details-header.component';
import { DetailsFooterComponent } from './components/footer/details-footer/details-footer.component';
import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HeaderT1Component } from './components/header/header/header-t1/header-t1.component';
import { HeaderT2Component } from './components/header/header/header-t2/header-t2.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeT1Component } from './components/home/home-t1/home-t1.component';
import { HomeT2Component } from './components/home/home-t2/home-t2.component';
import { TopicsTileComponent } from './components/topics-tile/topics-tile.component';
import { TopicsTileT1Component } from './components/topics-tile/topics-tile-t1/topics-tile-t1.component';
import { TopicsTileT2Component } from './components/topics-tile/topics-tile-t2/topics-tile-t2.component';
import { MyDetailsT1Component } from './components/my-mindspark/my-details/my-details-t1/my-details-t1.component';
import { MyDetailsT2Component } from './components/my-mindspark/my-details/my-details-t2/my-details-t2.component';
import { MyMindsparkTabsComponent } from './components/my-mindspark/my-tabs/my-tabs.component';
import { MyMindsparkTabsT1Component } from './components/my-mindspark/my-tabs/my-tabs-t1/my-tabs-t1.component';
import { MyMindsparkTabsT2Component } from './components/my-mindspark/my-tabs/my-tabs-t2/my-tabs-t2.component';
import { MenuT2Component } from './components/menu/menu-t2/menu-t2.component';
import { MenuT1Component } from './components/menu/menu-t1/menu-t1.component';
import { ProfileT1Component } from './components/profile/profile-t1/profile-t1.component';
import { ProfileT2Component } from './components/profile/profile-t2/profile-t2.component';
import { FooterT2Component } from './components/footer/footer/footer-t2/footer-t2.component';
import { FooterT1Component } from './components/footer/footer/footer-t1/footer-t1.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { MailboxT1Component } from './components/my-mindspark/mailbox/mailbox-t1/mailbox-t1.component';
import { MailboxT2Component } from './components/my-mindspark/mailbox/mailbox-t2/mailbox-t2.component';
import { ReadMailT1Component } from './components/my-mindspark/read-mail/read-mail-t1/read-mail-t1.component';
import { ReadMailT2Component } from './components/my-mindspark/read-mail/read-mail-t2/read-mail-t2.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentModalComponent } from './components/comments/comment-modal/comment-modal.component';
import { TopicListT2Component } from './components/topic-list/topic-list-t2/topic-list-t2.component';
import { TopicListT1Component } from './components/topic-list/topic-list-t1/topic-list-t1.component';
import { NotificationComponent } from './components/notification/notification.component';
import { CommentModalService } from './components/comments/comment-modal/comment-modal.service';
import { RewardsT1Component } from './components/my-mindspark/rewards/rewards-t1/rewards-t1.component';
import { RewardsT2Component } from './components/my-mindspark/rewards/rewards-t2/rewards-t2.component';
// tslint:disable-next-line:max-line-length
import { AchievementsT2Component } from './components/my-mindspark/rewards/components/achievements/achievements-t2/achievements-t2.component';
import { HighScoreT1Component } from './components/my-mindspark/rewards/components/high-score/high-score-t1/high-score-t1.component';
import { HighScoreT2Component } from './components/my-mindspark/rewards/components/high-score/high-score-t2/high-score-t2.component';
import { ChampionsT1Component } from './components/my-mindspark/rewards/components/champions/champions-t1/champions-t1.component';
import { ChampionsT2Component } from './components/my-mindspark/rewards/components/champions/champions-t2/champions-t2.component';
// tslint:disable-next-line:max-line-length
import { AchievementsT1Component } from './components/my-mindspark/rewards/components/achievements/achievements-t1/achievements-t1.component';
import { StarredQuestionsT1Component } from './components/my-mindspark/starred-questions/starred-questions-t1/starred-questions-t1.component';
// tslint:disable-next-line:max-line-length
import { StarredQuestionsT2Component } from './components/my-mindspark/starred-questions/starred-questions-t2/starred-questions-t2.component';
import { StarredNavbarT1Component } from './components/my-mindspark/starred-questions/components/starred-navbar-t1/starred-navbar-t1.component';
// tslint:disable-next-line:max-line-length
import { StarredNavbarT2Component } from './components/my-mindspark/starred-questions/components/starred-navbar-t2/starred-navbar-t2.component';
import { MyProgressT2Component } from './components/my-progress/my-progress-t2/my-progress-t2.component';
import { MonthlyProgressT2Component } from './components/my-progress/components/monthly-progress-t2/monthly-progress-t2.component';
import { WeeklyProgressT2Component } from './components/my-progress/components/weekly-progress-t2/weekly-progress-t2.component';
// tslint:disable-next-line:max-line-length
import { EarnedSparkiesT1Component } from './components/my-mindspark/rewards/components/earned-sparkies/earned-sparkies-t1/earned-sparkies-t1.component';
// tslint:disable-next-line:max-line-length
import { EarnedSparkiesT2Component } from './components/my-mindspark/rewards/components/earned-sparkies/earned-sparkies-t2/earned-sparkies-t2.component';

import { QuestionsModule } from './components/questions/questions.module';
import { TopicDetailsT2Component } from './components/topic-details/topic-details-t2/topic-details-t2.component';
import { TopicTrailT2Component } from './components/topic-trail/topic-trail-t2/topic-trail-t2.component';
import { GameListT2Component } from './components/game-list/game-list-t2/game-list-t2.component';
import { WorksheetReportT2Component } from './components/worksheet-report/worksheet-report-t2/worksheet-report-t2.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { ImageErrorDirective } from './directives/imageError/imageError.directive';
import { NotificationModalComponent } from './components/notification-modal/notification-modal.component';
import { NotificationModalT2Component } from './components/notification-modal/notification-modal-t2/notification-modal-t2.component';
import { PicturePasswordComponent } from './components/login/picture-password/picture-password.component';
import { PicturePasswordSuccessComponent } from './components/login/picture-password-success/picture-password-success.component';
import { TextPasswordComponent } from './components/login/text-password/text-password.component';
import { SecretQuestionDobComponent } from './components/login/secret-question-dob/secret-question-dob.component';
import { WorksheetListT1Component } from './components/worksheet-list/worksheet-list-t1/worksheet-list-t1.component';
import { GameTileComponent } from './components/game-list/game-tile/game-tile.component';
import { WorksheetListT2Component } from './components/worksheet-list/worksheet-list-t2/worksheet-list-t2.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { LeaderboardComponent } from './components/my-mindspark/rewards/components/high-score/leaderboard/leaderboard.component';
import { WorksheetTileComponent } from './components/worksheet-tile/worksheet-tile.component';
import { WorksheetTileT2Component } from './components/worksheet-tile/worksheet-tile-t2/worksheet-tile-t2.component';
import { WorksheetTileT1Component } from './components/worksheet-tile/worksheet-tile-t1/worksheet-tile-t1.component';
import { FilterWrongPipe } from './pipes/filterWrong/filter-wrong.pipe';
import { QuestionDisplayReformService } from './services/question/questionDisplayReform.service';
import { PaginationComponent } from './components/pagination/pagination.component';


export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    RouterModule,
    NgbModule.forRoot(),
    MomentModule,
    NgPipesModule,
    QuestionsModule,
    CookieModule.forRoot(),
    Ng2OrderModule
  ],
  exports: [
    ImageErrorDirective,
    TopicListT1Component,
    TopicListT2Component,
    SharedComponent,
    QuestionsModule,
    LogoComponent,
    AuthHeaderComponent,
    AuthFooterComponent,
    DetailsHeaderComponent,
    DetailsFooterComponent,
    HeaderComponent,
    HeaderT1Component,
    HeaderT2Component,
    FooterComponent,
    FooterT1Component,
    FooterT2Component,
    MenuComponent,
    ProfileComponent,
    HomeT1Component,
    HomeT2Component,
    TopicsTileComponent,
    TopicsTileT1Component,
    TopicsTileT2Component,
    MyDetailsT1Component,
    MyDetailsT2Component,
    MyMindsparkTabsComponent,
    MyMindsparkTabsT1Component,
    MyMindsparkTabsT2Component,
    MenuT1Component,
    MenuT2Component,
    ProfileT1Component,
    ProfileT2Component,
    ChangePasswordComponent,
    MailboxT1Component,
    MailboxT2Component,
    ReadMailT1Component,
    ReadMailT2Component,
    CommentsComponent,
    CommentModalComponent,
    NotificationComponent,
    RewardsT1Component,
    RewardsT2Component,
    AchievementsT1Component,
    AchievementsT2Component,
    HighScoreT1Component,
    HighScoreT2Component,
    ChampionsT1Component,
    ChampionsT2Component,
    StarredQuestionsT1Component,
    StarredQuestionsT2Component,
    StarredNavbarT1Component,
    StarredNavbarT2Component,
    MyProgressT2Component,
    WeeklyProgressT2Component,
    MonthlyProgressT2Component,
    EarnedSparkiesT1Component,
    EarnedSparkiesT2Component,
    TopicDetailsT2Component,
    TopicTrailT2Component,
    GameListT2Component,
    WorksheetReportT2Component,
    ErrorsComponent,
    NotificationModalComponent,
    NotificationModalT2Component,
    PicturePasswordComponent,
    PicturePasswordSuccessComponent,
    TextPasswordComponent,
    SecretQuestionDobComponent,
    WorksheetListT1Component,
    WorksheetListT2Component,
    GameTileComponent,
    FilterWrongPipe,
    LeaderboardComponent,
    WorksheetTileComponent,
    WorksheetTileT2Component,
    WorksheetTileT1Component,
    PaginationComponent
  ],
  declarations: [
    ImageErrorDirective,
    TopicListT1Component,
    TopicListT2Component,
    SharedComponent,
    LogoComponent,
    AuthHeaderComponent,
    AuthFooterComponent,
    DetailsHeaderComponent,
    DetailsFooterComponent,
    HeaderComponent,
    HeaderT1Component,
    HeaderT2Component,
    FooterComponent,
    FooterT1Component,
    FooterT2Component,
    MenuComponent,
    ProfileComponent,
    HomeT1Component,
    HomeT2Component,
    TopicsTileComponent,
    TopicsTileT1Component,
    TopicsTileT2Component,
    MyDetailsT1Component,
    MyDetailsT2Component,
    MyMindsparkTabsComponent,
    MyMindsparkTabsT1Component,
    MyMindsparkTabsT2Component,
    MenuT1Component,
    MenuT2Component,
    ProfileT1Component,
    ProfileT2Component,
    ChangePasswordComponent,
    MailboxT1Component,
    MailboxT2Component,
    ReadMailT1Component,
    ReadMailT2Component,
    SearchFilterPipe,
    FilterWrongPipe,
    CommentsComponent,
    CommentModalComponent,
    CommentPipe,
    GetFileNamePipe,
    NotificationComponent,
    RewardsT1Component,
    RewardsT2Component,
    AchievementsT1Component,
    AchievementsT2Component,
    HighScoreT1Component,
    HighScoreT2Component,
    ChampionsT1Component,
    ChampionsT2Component,
    StarredQuestionsT1Component,
    StarredQuestionsT2Component,
    StarredNavbarT1Component,
    StarredNavbarT2Component,
    MyProgressT2Component,
    WeeklyProgressT2Component,
    MonthlyProgressT2Component,
    EarnedSparkiesT1Component,
    EarnedSparkiesT2Component,
    NotificationComponent,
    TopicDetailsT2Component,
    TopicTrailT2Component,
    GameListT2Component,
    WorksheetReportT2Component,
    ErrorsComponent,
    NotificationModalComponent,
    NotificationModalT2Component,
    PicturePasswordComponent,
    PicturePasswordSuccessComponent,
    TextPasswordComponent,
    SecretQuestionDobComponent,
    WorksheetListT1Component,
    WorksheetListT2Component,
    GameTileComponent,
    LeaderboardComponent,
    WorksheetTileComponent,
    WorksheetTileT2Component,
    WorksheetTileT1Component,
    PaginationComponent
  ],
  providers: [
    SharedService,
    ContentService,
    ChangePasswordService,
    CommentModalService,
    QuestionDisplayReformService
  ],
  entryComponents: [NotificationModalT2Component]
})
export class SharedModule { }
