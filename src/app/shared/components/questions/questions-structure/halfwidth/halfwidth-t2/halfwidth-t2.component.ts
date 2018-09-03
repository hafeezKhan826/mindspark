import { Component, OnInit, OnChanges, DoCheck, OnDestroy, Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { QuestionsComponent } from '../../../questions.component';
import { ModalT1Component } from '../../../worsheet-modal/modal-t1/modal-t1.component';
import { ModalT2Component } from '../../../worsheet-modal/modal-t2/modal-t2.component';
import { ContentService } from '../../../../../services/content/content.service';
import { SharedService } from '../../../../../shared.service';
import { environment } from '../../../../../../../environments/environment';
import { ProgressBarModule } from 'ng2-progress-bar';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import * as _ from 'lodash';
import { IMathQuill } from 'mathquill-typescript';
import { MathQuillService } from '../../../../../services/mathquill/mathquill.service';
import { MathquillEditorOptions } from '../../../mathquill-editor-options.model';

@Component({
  selector: 'ms-halfwidth-t2',
  templateUrl: './halfwidth-t2.component.html',
  styleUrls: ['../../questions-structure.component.scss']
})
export class HalfwidthT2Component implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input('questionContent') question: any;
  @Input('displayType') displayType: any;

  private currentQuestion: any;
  private getTemplateService: Subscription;
  private getQuestionSubmitService: Subscription;
  private getMessagesService: Subscription;
  private getMessageCloseService: Subscription;
  private getInteractiveSubmitResponseService: Subscription;
  private getVoiceOverDisabledService: Subscription;
  private getQuestionContentService: Subscription;
  private getQuestionDataService: Subscription;
  private getTimerValueService: Subscription;
  private getTranslationContentService: Subscription;
  private getKeyboardElementsService: Subscription;
  private firstElementFocusCount = 0;
  private audio: HTMLAudioElement;
  private timedTestData: any;
  private timedTestTemplate: any;
  private scrollToExplanationTimeout: any;
  private mathQuillConfig: any = {
    spaceBehavesLikeTab: true,
    handlers: {}
  };
  private scrollDownInterval: any;
  questionContent: any;
  translationContent: any;
  mcqChoices: any;
  startTimer: any;
  endTimer: any;
  idk: boolean;
  questionField: any;
  evaluationResult: any = null;
  evaluationOutput: any[];
  invalidFormElement: any = {};
  hints: any[] = [];
  errorInfo: any;
  templateClass: any;
  questionStyle: any;
  questionTemplate: string;
  template: string;
  voDisabled: string;
  from: any;
  timed: any;
  toDisable = false;
  isDevice: boolean;
  keyboardOptions: MathquillEditorOptions = {
    buttonLatexContents: []
  };
  keyboardElements: any;
  mq: IMathQuill;
  latexSource: string;

  constructor(private questionsComponent: QuestionsComponent, private contentService: ContentService,
    private sharedService: SharedService, private idle: Idle, private mathQuillService: MathQuillService) {
    this.getTemplateService = this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
        this.templateClass = this.sharedService.getClassName();
      },
      responseError => this.errorInfo = responseError
    );
    this.getQuestionSubmitService = this.contentService.getQuestionSubmit().subscribe(
      result => {
        if (result.submit) {
          if (this.oneOfFormTemplates()) {
            this.submitFormAnswer();
          } else if (this.oneOfIframeTemplates() && this.questionTemplate.toLowerCase() === 'interactive') {
            this.evaluateInteractiveContent();
          } else if (this.questionTemplate && this.questionTemplate.toLowerCase() === 'timedtest') {
            this.evaluateTimedTestContent();
          }
          /* Else condition for this funtions is available in questions.component.ts */
        }
      },
      responseError => this.errorInfo = responseError
    );
    this.getMessagesService = this.contentService.getMessages().subscribe(
      result => this.setQuestionHeight(100)
    );
    this.getMessageCloseService = this.contentService.getMessageClose().subscribe(
      result => this.onCloseSetFocus(result.closed)
    );
    this.getInteractiveSubmitResponseService = this.contentService.getInteractiveSubmitResponse().subscribe(
      result => { if (result.result) { this.submitFormContent(result.result); } }
    );
    this.getVoiceOverDisabledService = this.contentService.getVoiceOverDisabled().subscribe(
      result => {
        this.voDisabled = result.state;
        if (this.voDisabled) { this.pauseAudio(); }
      }
    );
    this.getQuestionContentService = this.contentService.getQuestionContent().subscribe(
      result => {
        this.questionContent = result;
        this.from = _.get(result, 'from', '').toLowerCase();
        this.questionTemplate = _.get(result, 'templateContent', '').toLowerCase();
      }
    );
    this.getQuestionDataService = this.contentService.getQuestionData().subscribe(
      result => {
        this.timed = _.get(result, 'timed', '');
      }
    );
    this.getTimerValueService = this.contentService.getTimerValue().subscribe(
      result => {
        this.startTimer = _.get(result, 'worksheetValue', '');
        this.endTimer = _.get(result, 'endTimer', '');
        if (this.startTimer) {
          if (this.endTimer <= 0) {
            this.startTimer = false;
          }
        }
      }
    );
    this.getTranslationContentService = this.contentService.getTranslationContent().subscribe(
      result => {
        this.translationContent = result;
        this.setMCQChoices('translation');
      }
    );
    /* MathQuill Keyboard Start */
    this.getKeyboardElementsService = this.contentService.getKeyboardElements().subscribe(
      result => {
        this.keyboardElements = result;
        this.isDevice = _.get(this.keyboardElements, 'isDevice', null);
        setTimeout(() => { this.displayKeyboard(); }, 500);
      },
      responseError => this.errorInfo = responseError
    );
    mathQuillService.mqpromise.then((mq: IMathQuill) => {
      this.mq = mq.getInterface(2);
      this.refreshLatex();
    });
    this.getKeyboardButtons();
    /* MathQuill Keyboard End */
  }

  ngOnInit() { }

  ngOnChanges(changes: any): void {
    const changeQuestion = _.get(changes, 'question.currentValue', null);
    const changeDisplayType = _.get(changes, 'displayType.currentValue', null);
    if (changeQuestion !== undefined && changeQuestion !== null) {
      this.question = changeQuestion;
      this.initializeQuestionDetails();
    }
    if (changeDisplayType !== undefined && changeDisplayType !== null) {
      this.displayType = changeDisplayType;
    }
  }

  ngDoCheck(): void {
    const currentQuestionField = _.get(this.currentQuestion, 'questionField', '');
    const questionField = _.get(this.question, 'questionField', '');
    if (currentQuestionField !== questionField) {
      this.initializeQuestionDetails();
    }
  }

  ngOnDestroy() {
    this.getTemplateService.unsubscribe();
    this.getQuestionSubmitService.unsubscribe();
    this.getInteractiveSubmitResponseService.unsubscribe();
    this.getMessagesService.unsubscribe();
    this.getMessageCloseService.unsubscribe();
    this.getVoiceOverDisabledService.unsubscribe();
    this.getQuestionContentService.unsubscribe();
    this.getQuestionDataService.unsubscribe();
    this.getTimerValueService.unsubscribe();
    this.getTranslationContentService.unsubscribe();
    this.getKeyboardElementsService.unsubscribe();
  }

  /* Common Functions Start */
  private onInit() {
    this.currentQuestion = _.cloneDeep(this.question);
    this.initializeContent();
    this.setQuestion(this.question, 'questionField');
    this.setMCQChoices('question');
    this.setHints(this.question, 'hint');
    this.loadTimerModal();
    this.idk = false;
  }

  private oneOfFormTemplates() {
    if (this.questionTemplate) {
      return this.questionsComponent.oneOfFormTemplates(this.questionTemplate);
    }
    return false;
  }

  private oneOfIframeTemplates() {
    if (this.questionTemplate) {
      return this.questionsComponent.oneOfIframeTemplates(this.questionTemplate);
    }
    return false;
  }

  private initializeContent() {
    this.questionStyle = {};
    this.evaluationResult = {};
    this.invalidFormElement = {};
    this.evaluationOutput = [];
    this.hints = [];
    this.contentService.setQuestionSubmit(false);
  }

  private initializeQuestionDetails() {
    this.timedTestData = _.get(this.question, 'timedTestData', {});
    this.timedTestTemplate = _.get(this.timedTestData, 'questionTemplate', '');
    this.firstElementFocusCount = 0;
    this.onInit();
    if (this.scrollDownInterval) { clearInterval(this.scrollDownInterval); }
  }

  private setQuestion(content, object) {
    let template;
    this.questionField = _.get(content, object, '');
    this.setQuestionHeight();
    this.setFormElements();
    this.scrollToTop();
    if (this.isDevice) {
      if (this.questionTemplate.toLowerCase() === 'timedtest') {
        template = this.timedTestTemplate.toLowerCase();
      } else {
        template = this.questionTemplate.toLowerCase();
      }
      if (template === 'blank' || template === 'blank_dropdown') {
        setTimeout(() => { this.refreshLatex(); }, 500);
      }
    }
  }

  private setQuestionHeight(time?: number) {
    if (window.innerWidth > 767) {
      time = isNaN(time) ? 500 : time;
      setTimeout(
        () => {
          this.questionStyle = { 'min-height': 'calc(100vh - ' + this.questionsComponent.getQuestionBodyHeight() + 'px)' };
          if (this.oneOfIframeTemplates()) {
            if (this.questionTemplate.toLowerCase() !== 'interactive') { this.scrollToIframe(); }
          }
        }, time);
    }
  }

  getQuestionStyle(type: string) {
    let mathQuillKeyboard: any, mathQuillKeyboardHeight, isKeyboard: boolean;
    if (this.questionStyle) {
      if (this.displayType === 'fullwidth' && (type === 'primary' || type === 'vernacular')) {
        isKeyboard = _.get(this.keyboardElements, 'isKeyboard', false);
        mathQuillKeyboardHeight = 0;
        if (type === 'primary' && isKeyboard) {
          mathQuillKeyboard = document.getElementsByClassName('mathquill-editor-wrapper');
          if (mathQuillKeyboard) {
            mathQuillKeyboard = document.getElementsByClassName('mathquill-editor-wrapper')[0];
            if (mathQuillKeyboard) {
              mathQuillKeyboardHeight = mathQuillKeyboard.offsetHeight;
            }
          }
        }
        this.questionStyle['margin-bottom'] = mathQuillKeyboardHeight + 'px';
        return this.questionStyle;
      } else if (this.displayType === 'halfwidth' && type === 'secondary') {
        return this.questionStyle;
      }
    }
    return {};
  }

  private setHints(content, object) {
    this.hints = _.get(content, object, []);
  }

  private setFormElements() {
    let responseElements, questionIndex, options;
    if (this.questionTemplate !== (undefined && null && '')) {
      const template = this.questionTemplate.toLowerCase();
      if (template === 'mcq') {
        this.evaluationOutput = [];
        ({ responseElements, questionIndex } = this.getResponseElements());
        options = _.get(this.question, 'responseElements.mcqPattern.choices', []);
        for (let i = 0; i < options.length; i++) {
          this.evaluationOutput.push('');
        }
      } else if (this.oneOfFormTemplates()) {
        this.setFirstEmptyElementFocus();
      } else if (this.timedTestTemplate !== (undefined && null && '') &&
        this.questionsComponent.oneOfFormTemplates(this.timedTestTemplate)) {
        setTimeout(() => { this.setFirstEmptyElementFocus(); }, 200);
      }
    } else {
      setTimeout(() => this.setFormElements(), 500);
    }
  }

  getFullWidthContainerClass(type) {
    let className = '', showTranslation, hasTranslation;
    hasTranslation = _.get(this.translationContent, 'hasTranslation', false);
    showTranslation = _.get(this.translationContent, 'showTranslation', false);
    if (hasTranslation && showTranslation) {
      className = (type === 'primary') ? 'vernacular fullwidth' : 'col-lg-6 col-md-6 vernacular-col';
    } else {
      if (type === 'primary') {
        className = (this.displayType === 'fullwidth') ? 'top-spacing bottom-spacing fullwidth' : 'halfwidth full-height';
      } else {
        className = (this.displayType === 'fullwidth') ? 'col-sm-12' : ' col-lg-7 col-md-7 col-sm-12';
      }
    }
    return className;
  }

  getContainerRowClass(type) {
    let className = '';
    switch (type) {
      case 'primary':
        className = (this.displayType === 'fullwidth') ? '' : 'main-row';
        break;
      case 'secondary':
        className = (this.displayType === 'fullwidth') ? 'main-row' : '';
        break;
    }
    return className;
  }

  playAudio(audioLink) {
    this.pauseAudio();
    if (!this.voDisabled) {
      this.audio = new Audio(audioLink);
      this.audio.play();
    }
  }

  pauseAudio() {
    if (!_.get(this.audio, 'paused', true)) {
      this.audio.pause();
    }
  }

  getVoiceOverTitle() {
    let titleText;
    if (this.voDisabled) {
      titleText = 'Disabled, as answer is already submitted';
    } else {
      titleText = 'Read Out Loud';
    }
    return titleText;
  }

  private submitFormContent(evaluationResult, elements?: string[]) {
    this.evaluationResult = (_.isEmpty(this.evaluationResult)) ? evaluationResult : this.evaluationResult;
    const itemResult = _.get(evaluationResult, 'itemResult', null);
    this.submitOptionAnswer(evaluationResult);
    if (typeof (elements) !== 'undefined') {
      this.setElementResponseState(evaluationResult, elements);
    } else {
      this.contentService.setInteractiveSubmitResponse(null);
    }
    this.setHints(evaluationResult, 'hints');
    this.contentService.setQuestionSubmit(false);
    if (!environment.production) { console.log('submitFormContent', evaluationResult); }
  }

  scrollToExplanation() {
    if (this.from !== 'worksheet') {
      let heightCheck = window.scrollY;
      const eachScroll = 10;
      const height = document.getElementById('questionForm').offsetHeight + document.getElementById('questionHeader').offsetHeight;
      // if (document.getElementById('questionAlert') !== null) { height += document.getElementById('questionAlert').offsetHeight + 40; }
      this.scrollDownInterval = setInterval(() => {
        window.scrollTo(0, heightCheck);
        heightCheck += eachScroll;
        if (heightCheck >= height) { clearInterval(this.scrollDownInterval); }
      }, 20);
    }
  }

  scrollToTop() {
    let height = 0;
    if (window.innerHeight <= 600) {
      height = document.getElementById('questionHeader').offsetHeight;
    }
    window.scrollTo(0, height);
  }

  scrollToIframe() {
    // let iframeElement: any = document.getElementsByClassName('block-iframe-parent');
    // if (iframeElement && iframeElement.length > 0) {
    //   iframeElement = iframeElement[0];
    //   iframeElement.scrollIntoView();
    // } else {
    //   this.scrollToIframe();
    // }
    const extraTop = (20 + 45);
    let height = document.getElementById('questionHeader').offsetHeight;
    // if (document.getElementById('questionAlert') !== null) { height += document.getElementById('questionAlert').offsetHeight + 40; }
    height += extraTop;
    window.scrollTo(0, height);
  }

  showCorrectAnswer(result) {
    const isFirstChallengeAnswer = this.questionsComponent.isFirstChallenge();
    if (isFirstChallengeAnswer) {
      return result;
    }
    return true;
  }

  hideIDontKnow() {
    return this.questionsComponent.hideIDontKnow();
  }
  iDontKnow() {
    this.idk = true;
    this.questionsComponent.iDontKnow();
  }

  showTimer() {
    let show = false;
    if ((this.from === 'worksheet' && this.timed) ||
      (this.questionTemplate && this.questionTemplate.toLowerCase() === 'timedtest')) {
      show = true;
    }
    return show;
  }

  /* setFieldStyle(style: string) {
    const outputStyle: any = {};
    if (style !== null && style !== undefined) {
      const tempStyle = style.split(';');
      for (let styleIndex = 0; styleIndex < tempStyle.length; styleIndex++) {
        if (tempStyle[styleIndex] !== '' && tempStyle[styleIndex] !== null) {
          const eachStyle = tempStyle[styleIndex].trim();
          const styleContent = eachStyle.split(':');
          outputStyle[styleContent[0].trim()] = styleContent[1].trim();
        }
      }
    }
    return outputStyle;
  } */
  /* Common Functions End */

  /* MCQ Functions Start */
  setMCQChoices(type) {
    let sequenceNo, questions, currentQuestion, mcqChoices;
    switch (type) {
      case 'translation':
        questions = _.get(this.translationContent, 'displayContent', {});
        this.translationContent.mcqChoices = [];
        break;
      case 'question':
        questions = this.question;
        this.mcqChoices = [];
        break;
    }
    if (this.questionTemplate) {
      const template = this.questionTemplate.toLowerCase();
      if (template === 'timedtest' && this.timedTestTemplate === 'mcq') {
        sequenceNo = _.get(this.timedTestData, 'questionSequenceNo', null);
        if (sequenceNo !== null) {
          currentQuestion = _.get(questions, 'questions[' + sequenceNo + ']');
          mcqChoices = _.get(currentQuestion, 'responseElements.mcqPattern.choices', []);
        }
      } else if (template === 'mcq') {
        mcqChoices = _.get(questions, 'responseElements.mcqPattern.choices', []);
      }
      if (type === 'translation') {
        this.translationContent.mcqChoices = mcqChoices;
      } else {
        this.mcqChoices = mcqChoices;
      }
    } else {
      setTimeout(() => { this.setMCQChoices(type); }, 200);
    }
  }

  generateOptionString(index) {
    return this.questionsComponent.generateOptionString(index);
  }

  evaluateOption(option) {
    let timerAvailable = true;
    const canEvaluate = this.canEvaluateOption(this.evaluationResult);
    if (this.from === 'worksheet') {
      if (this.endTimer <= 0) { timerAvailable = false; }
    }
    if (canEvaluate && !this.idk && timerAvailable) {
      if (this.questionTemplate === 'timedtest') {
        this.evaluateTimedTestContent(option);
      } else {
        this.evaluationResult = this.questionsComponent.evaluateOption(option);
        this.evaluationOutput[option] = (this.evaluationResult.result) ? '1' : '0';
        this.submitOptionAnswer(this.evaluationResult);
        this.contentService.setQuestionSubmit(false);
        this.setHints(this.evaluationResult, 'hints');
      }
    }
  }
  canEvaluateOption(result) {
    const canEvaluate = !_.get(result, 'noMoreAttempts', false);
    const currentResult = _.get(result, 'result', false);
    return (canEvaluate && !currentResult);
  }

  getOptionsSectionClass() {
    let template: string, orientation: string, currentQuestion, sequenceNo, hasTranslation, showTranslation,
      optionsSectionClassName = this.templateClass;
    if (this.question && this.questionTemplate) {
      template = this.questionTemplate.toLowerCase();
      hasTranslation = _.get(this.translationContent, 'hasTranslation', false);
      showTranslation = _.get(this.translationContent, 'showTranslation', false);
      if (template === 'timedtest') {
        template = this.timedTestTemplate;
        sequenceNo = _.get(this.timedTestData, 'questionSequenceNo', null);
        currentQuestion = _.get(this.question, 'questions[' + sequenceNo + ']', {});
        orientation = _.get(currentQuestion, 'optionsOrientation', 'regular').toLowerCase();
      } else {
        orientation = _.get(this.question, 'optionsOrientation', 'regular').toLowerCase();
      }
      if (!hasTranslation || !showTranslation) {
        if (template === 'mcq' && orientation === '2x2') {
          optionsSectionClassName += ' ' + 'option2x2';
        }
      }
    }
    return optionsSectionClassName;
  }

  setOptionsClass(output, choice) {
    let className = 'option-default';
    if (!this.idk) {

      switch (output) {
        case '':
          const cannotEvaluate = _.get(this.evaluationResult, 'noMoreAttempts', false);
          const currentResult = _.get(this.evaluationResult, 'result', false);
          const correctOption = this.getCorrectOption(this.evaluationResult, this.question);
          const showCorrectAnswer = this.showCorrectAnswer(currentResult);
          if (showCorrectAnswer && (correctOption === choice.toString())) {
            className = 'option-correct';
          } else {
            if (cannotEvaluate || (currentResult && !showCorrectAnswer)) {
              className = 'option-disabled';
            }
          }
          break;
        case '1':
          className = 'option-correct';
          break;
        case '0':
          className = 'option-incorrect';
          break;
      }
    } else {
      className = 'option-disabled';
    }
    return className;
  }
  private getCorrectOption(result, question) {
    let option = null;
    if (result.correctAnswer !== '' && !result.result) {
      const correctAnswer = result.correctAnswer;
      option = this.questionsComponent.getAnswerKey(correctAnswer, 'id');
    }
    return option;
  }

  submitOptionAnswer(result) {
    const noMoreAttempts = _.get(result, 'noMoreAttempts', false);
    const currentResult: any = _.get(result, 'result', false);
    if (noMoreAttempts || (currentResult === true || currentResult === 'correct')) {
      if (!environment.production) { console.log('submitAnswer', result); }
      this.pauseAudio();
      if (typeof (this.scrollToExplanationTimeout) !== 'undefined') { clearTimeout(this.scrollToExplanationTimeout); }
      this.scrollToExplanationTimeout = setTimeout(() => { this.scrollToExplanation(); }, 2000);
      if (this.from === 'worksheet') {
        this.questionsComponent.callSubmitWorksheet();
      } else {
        this.questionsComponent.callSubmitAnswer();
      }
    }
  }
  /* MCQ Functions End */

  /* Blank, Dropdown Functions Start */
  submitFormAnswer() {
    let element, elementContent, elementType, htmlInputElement, responseElements, questionIndex;
    const submit: string[] = [], data = {};
    ({ responseElements, questionIndex } = this.getResponseElements());
    const elements = _.keys(responseElements);
    const values = _.values(responseElements);
    for (let i = 0; i < elements.length; i++) {
      element = elements[i];
      elementContent = values[i];
      elementType = _.get(elementContent, 'type', '').toLowerCase();
      htmlInputElement = (<HTMLInputElement>document.getElementById(element));
      this.setElementClass(htmlInputElement, null);
      if (this.isDevice && elementType === 'blank') {
        data[element] = (htmlInputElement) ? htmlInputElement.innerText : '';
      } else {
        data[element] = (htmlInputElement) ? htmlInputElement.value : '';
      }
      submit[i] = this.questionsComponent.validateFormElement(data[element], elementContent);
      if (submit[i] === 'empty') {
        break;
      }
    }
    if (this.isValidAnswers(submit)) {
      this.evaluationResult = this.questionsComponent.evaluateFormElement(data, questionIndex);
      if (this.questionTemplate === 'timedtest') {
        if (this.isDevice && (this.timedTestTemplate === 'blank' || this.timedTestTemplate === 'blank_dropdown')) {
          this.hideKeyboard();
        }
        this.submitTimedTestQuestion(this.evaluationResult);
      } else {
        if (this.isDevice && (this.questionTemplate === 'blank' || this.questionTemplate === 'blank_dropdown')) {
          this.hideKeyboard();
        }
        this.submitFormContent(this.evaluationResult, elements);
      }
    } else {
      this.checkEmptyElements(elements);
      this.questionsComponent.showValidationAlerts(submit);
    }
    this.setFirstEmptyElementFocus();
  }
  private getResponseElements() {
    let responseElements: any, questionIndex: any;
    if (this.questionTemplate === 'timedtest') {
      questionIndex = _.get(this.timedTestData, 'questionSequenceNo', 0);
      responseElements = _.get(this.question, 'questions[' + questionIndex + '].responseElements', {});
    } else {
      responseElements = _.get(this.question, 'responseElements', {});
    }
    return { responseElements, questionIndex };
  }

  private checkEmptyElements(elements) {
    let element, value, htmlInputElement;
    for (let i = 0; i < elements.length; i++) {
      element = elements[i];
      htmlInputElement = (<HTMLInputElement>document.getElementById(element));
      value = _.get(htmlInputElement, 'value', '');
      if (value === '' || value === null || value === undefined || value.trim() === '') { this.setElementClass(htmlInputElement, false); }
    }
  }
  setElementResponseState(evaluationResult, elements) {
    let element, htmlInputElement, answer, noMoreAttempts;
    const result = _.get(evaluationResult, 'itemResult', {});
    const currentResult = _.get(evaluationResult, 'result', false);
    const showCorrectAnswer = this.showCorrectAnswer(currentResult);
    for (let i = 0; i < elements.length; i++) {
      element = elements[i];
      htmlInputElement = (<HTMLInputElement>document.getElementById(element));
      answer = _.get(result, '[' + element + ']correct', false);
      noMoreAttempts = _.get(evaluationResult, 'noMoreAttempts', false);
      answer = (showCorrectAnswer) ? answer : false;
      this.setElementClass(htmlInputElement, answer);
      this.disableElements(htmlInputElement, noMoreAttempts);
    }
  }
  private setElementClass(htmlElement, state) {
    let i, className: string, classNames: any;
    classNames = htmlElement.classList.value;
    classNames = classNames.split(' ');
    switch (state) {
      case true:
        classNames = this.removeClassName(htmlElement, classNames, 'response-failure');
        htmlElement.classList.value = classNames.join(' ') + ' response-success';
        classNames.push('response-success');
        break;
      case false:
        classNames = this.removeClassName(htmlElement, classNames, 'response-success');
        htmlElement.classList.value = classNames.join(' ') + ' response-failure';
        classNames.push('response-failure');
        break;
      default:
        classNames = this.removeClassName(htmlElement, classNames, 'response-failure');
        classNames = this.removeClassName(htmlElement, classNames, 'response-success');
        htmlElement.classList.value = classNames.join(' ');
        break;
    }
    if (classNames.length > 0) {
      for (i = 0; i < classNames.length; i++) {
        className = classNames[i];
        if (className !== '' && className !== null && className !== undefined) {
          htmlElement.classList.add(className);
        }
      }
    }
  }
  private disableElements(htmlElement, noMoreAttempts) {
    if (noMoreAttempts) { htmlElement.disabled = true; }
  }
  private isValidAnswers(response) {
    let result = true;
    for (let i = 0; i < response.length; i++) {
      result = (response[i] !== '') ? false : result;
      if (!result) {
        break;
      }
    }
    return result;
  }
  private removeClassName(htmlElement, classNames, name) {
    const classNameIndex: number = classNames.indexOf(name);
    if (classNameIndex > -1) {
      htmlElement.classList.remove(classNameIndex);
      htmlElement.classList.remove(name);
      delete classNames[classNameIndex];
    }
    return classNames;
  }

  setFirstEmptyElementFocus() {
    let responseElements, questionIndex, formElements, focusSet = false;
    ({ responseElements, questionIndex } = this.getResponseElements());
    formElements = _.keys(responseElements);
    if (formElements.length > 0) {
      for (let i = 0; i < formElements.length; i++) {
        if (!focusSet) {
          focusSet = this.setElementFocus(formElements[i], false);
        }
      }
      if (!focusSet) {
        focusSet = this.setElementFocus(formElements[0], true);
      }
    }
    if (!focusSet) {
      if (this.firstElementFocusCount < 50) {
        setTimeout(() => { this.setFirstEmptyElementFocus(); }, 200);
        this.firstElementFocusCount++;
      } else {
        this.firstElementFocusCount = 0;
      }
    }
  }
  private setElementFocus(element: any, ignoreValue: boolean) {
    let elementValue, htmlInputElement, questionElement, focusSet = false;
    htmlInputElement = (<HTMLInputElement>document.getElementById(element));
    questionElement = (<HTMLElement>document.getElementsByClassName('question')[0]);
    if (htmlInputElement && !htmlInputElement.disabled && questionElement.style.visibility === '') {
      elementValue = htmlInputElement.value;
      if (elementValue === '' || ignoreValue) {
        this.setFocus(htmlInputElement);
        focusSet = true;
      }
    }
    return focusSet;
  }
  setFocus(htmlElement: HTMLInputElement) {
    if (htmlElement) { htmlElement.focus(); }
  }

  private onCloseSetFocus(status) {
    if (status) {
      setTimeout(() => {
        this.setFirstEmptyElementFocus();
      }, 500);
      this.contentService.setMessageClose(false);
    }
  }
  /* Blank, Dropdown Functions End */

  /* Game, Interaction Functions Start */
  skipContent() {
    this.questionsComponent.skipContent();
  }

  evaluateInteractiveContent() {
    this.contentService.setQuestionSubmit(false);
    this.questionsComponent.evaluateAnswer(null);
  }
  isDisable() {
    return this.toDisable = true;
  }
  /* Game, Interaction Functions End */

  /* Timed Test Start */
  evaluateTimedTestContent(option?) {
    let questionTemplate: string, sequenceNo;
    this.contentService.setQuestionSubmit(false);
    questionTemplate = _.get(this.timedTestData, 'questionTemplate', '').toLowerCase();
    if (this.questionsComponent.oneOfFormTemplates(questionTemplate)) {
      this.submitFormAnswer();
    } else if (questionTemplate === 'mcq') {
      sequenceNo = _.get(this.timedTestData, 'questionSequenceNo', null);
      this.evaluationResult = this.questionsComponent.evaluateOption(option, sequenceNo);
      this.submitTimedTestQuestion(this.evaluationResult);
    }
  }

  submitTimedTestQuestion(result) {
    let finished;
    finished = _.get(result, 'finished', false);
    if (finished) {
      this.questionsComponent.callSubmitAnswer();
    } else {
      this.questionsComponent.loadNextTimedTestQuestion(result);
    }
  }

  private loadTimerModal() {
    this.sharedService.dismissOpenModal();
    let modal: any;
    if (this.template && this.questionTemplate && this.from) {
      if (!this.startTimer && (this.questionTemplate === 'timedtest' || this.from === 'worksheet')) {
        switch (this.template) {
          case '1': modal = ModalT1Component; break;
          case '2': modal = ModalT2Component; break;
        }
        setTimeout(() => { this.sharedService.open(modal, ['backDropStop']); }, 100);
      }
    } else {
      setTimeout(() => {
        this.loadTimerModal();
      }, 100);
    }
  }
  /* Timed Test End */

  /* MathQuill Keyboard Start */
  refreshLatex() {
    let selectedInput, isKeyboard, i, element, allInputs;
    allInputs = _.get(this.keyboardElements, 'allInputs', null);
    if (this.isDevice) {
      if (!allInputs) {
        setTimeout(() => { this.refreshLatex(); }, 200);
      } else {
        selectedInput = _.get(this.keyboardElements, 'selectedInput', null);
        isKeyboard = _.get(this.keyboardElements, 'isKeyboard', null);
        if (selectedInput !== null && isKeyboard) {
          element = document.getElementById(selectedInput);
          const innerLatexMath = this.mq.MathField(element);
          const latex = innerLatexMath.latex();
          this.latexSource = latex;
        } else {
          for (i = 0; i < allInputs.length; i++) {
            element = document.getElementById(allInputs[i]);
            this.mq.MathField(element, this.mathQuillConfig);
          }
        }
      }
    }
  }
  displayKeyboard() {
    let selectedInput, isKeyboard, element;
    if (this.isDevice) {
      selectedInput = _.get(this.keyboardElements, 'selectedInput', null);
      isKeyboard = _.get(this.keyboardElements, 'isKeyboard', null);
      if (selectedInput !== null && isKeyboard) {
        element = document.getElementById(selectedInput);
        const innerLatexMath = this.mq.MathField(element);
        const latex = innerLatexMath.latex();
        this.latexSource = latex;
        this.getKeyboardButtons();
      }
    }
  }
  getCurrentKeyboard() {
    return this.mathQuillService.getCurrentKeyboard();
  }
  clicked(insert: string) {
    let currentKeyboard, selectedInput, element, insertLower;
    insertLower = insert.toLowerCase();
    selectedInput = _.get(this.keyboardElements, 'selectedInput', null);
    element = document.getElementById(selectedInput);
    switch (insertLower) {
      case '123':
        this.setKeyboardType('numeric');
        break;
      case 'abc':
        this.setKeyboardType('alpha');
        break;
      case 'capslock':
        currentKeyboard = this.mathQuillService.getCurrentKeyboard();
        if (currentKeyboard && currentKeyboard.toLowerCase() === 'alpha') {
          this.setKeyboardType('smallAlpha');
        } else {
          this.setKeyboardType('alpha');
        }
        break;
      case 'del':
        this.mq.MathField(element).keystroke('Backspace');
        this.refreshLatex();
        break;
      case 'space':
        this.mq.MathField(element).typedText(' ');
        this.refreshLatex();
        break;
      case '←':
        this.mq.MathField(element).keystroke('Shift-Left');
        this.refreshLatex();
        break;
      case '→':
        this.mq.MathField(element).keystroke('Shift-Right');
        this.refreshLatex();
        break;
      default:
        this.mq.MathField(element).write(insert);
        this.refreshLatex();
    }
    return false;
  }

  setKeyboardType(type, dontGetButtons?: boolean) {
    this.mathQuillService.setCurrentKeyboard(type);
    if (!dontGetButtons) {
      this.getKeyboardButtons();
    }
  }

  getKeyboardButtons() {
    let selectedInput, responseElements, questionIndex, numeric, keyboard, buttonLatexContents, isKeyboardSet = false;
    if (this.question) {
      if (this.isDevice) {
        selectedInput = _.get(this.keyboardElements, 'selectedInput', null);
        if (selectedInput) {
          ({ responseElements, questionIndex } = this.getResponseElements());
          numeric = _.get(responseElements, selectedInput + '.attributes.numeric', false);
          if (numeric) {
            isKeyboardSet = true;
            this.setKeyboardType('numeric', true);
            keyboard = this.mathQuillService.getKeyboard();
            this.keyboardOptions.buttonLatexContents = _.cloneDeep(keyboard);
            if (this.keyboardOptions.buttonLatexContents.length > 0) {
              buttonLatexContents = this.keyboardOptions.buttonLatexContents[1];
              buttonLatexContents.shift();
            }
          }
        }
        if (!isKeyboardSet) {
          keyboard = this.mathQuillService.getKeyboard();
          this.keyboardOptions.buttonLatexContents = _.cloneDeep(keyboard);
        }
      }
    } else {
      setTimeout(() => { this.getKeyboardButtons(); }, 200);
    }
  }

  hideKeyboard() {
    this.questionsComponent.hideKeyboard();
  }
  /* MathQuill Keyboard End */

}
