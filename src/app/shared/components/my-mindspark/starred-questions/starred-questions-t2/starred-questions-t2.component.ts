import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { StarredQuestionsService } from '../../../../../modules/my-mindspark/components/starred-questions/starred-questions.service';
import { StarredQuestionsComponent } from '../../../../../modules/my-mindspark/components/starred-questions/starred-questions.component';
import { QuestionDisplayReformService } from '../../../../services/question/questionDisplayReform.service';
import { ContentService } from '../../../../services/content/content.service';
import * as _ from 'lodash';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'ms-starred-questions-t2',
  templateUrl: './starred-questions-t2.component.html',
  styleUrls: ['./starred-questions-t2.component.scss']
})
export class StarredQuestionsT2Component implements OnInit, OnChanges {
  @Input('favouritesQuestion') favouritesQuestion: any;
  showingFrom: any;
  displayContent: any;
  title: string;
  favouritesList: any[] = [];
  showExplanation: boolean;
  moreExplanation: boolean[] = [];

  constructor(private starredQuestionsComponent: StarredQuestionsComponent,
    private contentService: ContentService, private starredQuestionsService: StarredQuestionsService,
    private questionDisplayReformService: QuestionDisplayReformService) {
  }

  ngOnInit() {
    this.questionDisplayReformService.loadJS();
  }

  ngOnChanges(changes: any): void {
    const changesValue = _.get(changes, 'favouritesQuestion.currentValue', {});
    if (changesValue !== null && changesValue !== undefined) {

      this.favouritesQuestion = changesValue;
      this.showExplanation = _.get(changesValue, 'settings[0].showAns', true);
      this.showingFrom = _.get(this.favouritesQuestion, 'showingFrom', 1);
      if (_.isEmpty(this.favouritesList)) {
        this.favouritesList = _.get(changesValue, 'favouritesList', []);
        this.callLoadJs();
      }
    }
  }
  callLoadJs() {
    this.questionDisplayReformService.loadJS().then(
      result => {
        if (result.result !== 'failed') {
          this.questionDisplayReformService.initContentService(this.favouritesList);
          setTimeout(() => this.displayContent = this.questionDisplayReformService.getQuestionsContent(), 200);
          this.showMoreExplanation(this.favouritesList);
        } else {
          this.callLoadJs();
        }
      }
    );
  }
  showMoreExplanation(favouritesList) {
    for (let i = 0; i < favouritesList.length; i++) {
      this.moreExplanation.push(false);
    }
    return this.moreExplanation;

  }

  toggleExplanation(i) {
    this.starredQuestionsComponent.toggleExplanation(i, this.moreExplanation);
  }

  generateOptionString(index) {
    return this.starredQuestionsComponent.generateOptionString(index);
  }

  removeFromFavourites(fav) {
    const removeFavouritesData = {
      contentId: fav.contentID,
      topicID: this.favouritesQuestion.topicID
    };
    this.starredQuestionsComponent.removeFromFavourites(removeFavouritesData);
  }
}
