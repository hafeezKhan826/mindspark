import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { SharedService } from '../../../../../../shared.service';
import { ContentService } from '../../../../../../services/content/content.service';
import { QuestionsComponent } from '../../../../../questions/questions.component';
import * as _ from 'lodash';

@Component({
  selector: 'ms-default',
  templateUrl: './default.component.html',
  styleUrls: ['../question-navigation.component.scss']
})
export class DefaultComponent implements OnInit, OnChanges {
  @Input('pedagogyContent') pedagogyContent: any;
  pedagogyChild: any;
  private contentDetails: any;
  template: string;
  templateClass: string;
  contentName: string;
  leftPosition: any = {};
  maxProgressList = 14;
  errorInfo: any;

  private getTemplateService: any;
  private getQuestionContentService: any;

  constructor(private sharedService: SharedService, private contentService: ContentService,
    private questionsComponent: QuestionsComponent) {
    this.getTemplateService = this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
        this.templateClass = this.sharedService.getClassName();
      },
      responseError => this.errorInfo = responseError
    );
    this.getQuestionContentService = this.contentService.getQuestionContent().subscribe(
      result => {
        this.contentDetails = result;
        this.setContentName();
        this.showConceptProgress();
      },
      responseError => this.errorInfo = responseError
    );
  }

  ngOnInit() { }

  ngOnChanges(changes: any): void {
    const changePedagogyContent = _.get(changes, 'pedagogyContent.currentValue', null);
    if (changePedagogyContent !== undefined && changePedagogyContent !== null) {
      this.pedagogyContent = changePedagogyContent;
      this.pedagogyChild = _.get(changePedagogyContent, 'child', {});
      this.setContentName();
      this.setLeftPosition(this.pedagogyChild);
    }
  }

  setContentName() {
    this.contentName = _.get(this.contentDetails, 'contentName', '');
  }

  showConceptProgress(): boolean {
    const templateContent = _.get(this.contentDetails, 'templateContent', '').toLowerCase();
    if ((this.questionsComponent.oneOfIframeTemplates(templateContent) && templateContent !== 'interactive') ||
      templateContent === 'timedtest') {
      return false;
    }
    return true;
  }

  setLeftPosition(lists) {
    this.leftPosition = {};
    if (this.showConceptProgress()) {
      const perUnit = 20, minUnit = 40;
      let totalUnits = 0, position = 0;
      const progress = _.get(lists, 'progress', []);
      const progressCount = progress.length;
      if (progressCount > this.maxProgressList) {
        // progressCount -= this.maxProgressList;
        _.forEach(progress, function (list, key) {
          if (list.state === 'in-progress') {
            position = parseInt(key.toString(), 10);
          }
        });
        position = (position < this.maxProgressList) ? 0 : (position - this.maxProgressList);
        totalUnits = minUnit - (position * perUnit);
        this.leftPosition = {
          'left': totalUnits + 'px',
          'position': 'absolute',
          'top': '-3px'
        };
      }
    }
  }

  showTimedTest() {
    const templateContent = _.get(this.contentDetails, 'templateContent', '').toLowerCase();
    if (templateContent === 'timedtest') {
      return true;
    }
    return false;
  }
}
