import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ContentService } from '../../../services/content/content.service';
import { environment } from '../../../../../environments/environment';
import * as _ from 'lodash';

@Component({
  selector: 'ms-questions-structure',
  templateUrl: './questions-structure.component.html',
  styleUrls: ['./questions-structure.component.scss']
})
export class QuestionsStructureComponent implements OnInit, OnChanges, OnDestroy {

  @Input('template') template: string;
  @Input('questionContent') questionContent: any;
  @Input('type') type;
  @Input('from') from: string;
  private translationContent: any;
  private getTranslationContentService: Subscription;
  orientation: string;

  constructor(private contentService: ContentService) {
    this.getTranslationContentService = this.contentService.getTranslationContent().subscribe(
      result => this.translationContent = result
    );
  }

  ngOnInit() {
    this.checkQuestionStructure();
  }

  ngOnChanges(changes: any): void {
    const changeQuestionContent = _.get(changes, 'questionContent.currentValue', null);
    const changeFrom = _.get(changes, 'from.currentValue', null);
    if (changeQuestionContent !== undefined && changeQuestionContent !== null) {
      this.questionContent = changeQuestionContent;
      this.checkQuestionStructure();
    }
    if (changeFrom !== undefined && changeFrom !== null) {
      this.from = changeFrom;
    }
  }

  ngOnDestroy() {
    this.getTranslationContentService.unsubscribe();
  }

  checkQuestionStructure() {
    let data, type, template, currentQuestion, sequenceNo;
    if (!environment.production) { console.log('questionContent in structure', this.questionContent); }
    if (this.questionContent) {
      data = this.questionContent;
      type = _.get(data, 'contentType', '').toLowerCase();
      template = _.get(data, 'template', '').toLowerCase();
      if (template === 'timedtest') {
        sequenceNo = _.get(data, 'timedTestData.questionSequenceNo', null);
        currentQuestion = _.get(data, 'questions[' + sequenceNo + ']', {});
        this.orientation = _.get(currentQuestion, 'optionsOrientation', 'regular').toLowerCase();
      } else {
        this.orientation = _.get(data, 'optionsOrientation', 'regular').toLowerCase();
      }
    }
  }

  isAllowedOrientation(orientation: string, type: string) {
    let showTranslation, hasTranslation;
    hasTranslation = _.get(this.translationContent, 'hasTranslation', false);
    showTranslation = _.get(this.translationContent, 'showTranslation', false);
    if (hasTranslation && showTranslation) {
      if (type === 'full') { return true; }
    } else if (type === 'half') {
      return (orientation === 'right');
    } else if (type === 'full') {
      return (orientation === 'regular' || orientation === 'mathinput' || orientation === '2x2');
    }
    return false;
  }

  getDisplayType(orientation: string) {
    let showTranslation, hasTranslation, type = 'fullwidth';
    hasTranslation = _.get(this.translationContent, 'hasTranslation', false);
    showTranslation = _.get(this.translationContent, 'showTranslation', false);
    if (hasTranslation && showTranslation) {
    } else if (orientation === 'right') {
      type = 'halfwidth';
    }
    return type;
  }

}
