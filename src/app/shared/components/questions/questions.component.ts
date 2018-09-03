import { Component, OnInit, OnDestroy, NgZone, Inject, HostListener, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from 'ng2-translate';
import { SessionReportModalComponent } from './session-report/session-report-modal/session-report-modal.component';
import { SharedService } from '../../shared.service';
import { ContentService } from '../../services/content/content.service';
import { QuestionsService } from './questions.service';
import { WorksheetsService } from '../../../modules/worksheets/services/worksheets.service';
import { environment } from '../../../../environments/environment';
import { AppSettings } from '../../../settings/app.settings';
import { AppMessageSettings } from '../../../settings/app.messages';
import * as _ from 'lodash';

@Component({
  selector: 'ms-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, OnDestroy {
  private thisQuestion: any;
  private nextQuestion: any;
  private contentManipulation: any = null;
  private questionInitiate: any;
  private questionIndex: number;
  private timeTestIndex: number;
  private questionService: any;
  private formTemplates: string[];
  private iframeTemplates: string[];
  private contentDetails: any;
  private contentResponse: any;
  private allowEnter: boolean;
  private hideIDKButton: boolean;
  private timedtestKeyDownCheck: any;
  private translationContent: any;
  private keyboardElements: any;
  private getTemplateService: Subscription;
  private getMessagesService: Subscription;
  private getQuestionContentService: Subscription;
  private getFetchFirstContentService: Subscription;
  private getQuestionSubmitService: Subscription;
  private getTimerValueService: Subscription;
  private getTranslationContentService: Subscription;
  private getKeyboardElementsService: Subscription;

  endTime: any;
  blockNext: any;
  remainingTime: any;
  worksheetResult: any;
  contentId: string;
  contentType: string;
  template: string;
  headerContent: any;
  templateContent: any;
  displayContent: any;
  displayMessages: any;
  evaluationResult: any;
  errorInfo: any;
  from: any;
  initializeQuestionContent: boolean;
  selectedInput: string;
  isDevice: boolean;
  isKeyboard: boolean;

  constructor(private questionsService: QuestionsService, private contentService: ContentService, private sharedService: SharedService,
    private router: Router, private _ngZone: NgZone, @Inject(DOCUMENT) private document: Document, private translate: TranslateService,
    private worksheetsService: WorksheetsService) {
    this.sharedService.setSiteTitle('Questions');
    this.iframeTemplates = AppSettings.IFRAMETEMPLATES;
    this.formTemplates = AppSettings.FORMTEMPLATES;
    this.getTemplateService = this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
        this.sharedService.setBodyClass(null, ['questions']);
      },
      responseError => this.errorInfo = responseError
    );
    this.getMessagesService = this.contentService.getMessages().subscribe(
      result => this.displayMessages = result.messages,
      responseError => this.errorInfo = responseError
    );
    this.getQuestionContentService = this.contentService.getQuestionContent().subscribe(
      result => this.contentDetails = result,
      responseError => this.errorInfo = responseError
    );
    this.getFetchFirstContentService = this.contentService.getFetchFirstContent().subscribe(
      result => { if (result.fetch) { this.callFetchFirstContent(); } }
    );
    this.getQuestionSubmitService = this.contentService.getQuestionSubmit().subscribe(
      result => {
        if (result.submit) { this.callSkipContent(); }
      },
      responseError => this.errorInfo = responseError
    );
    this.getTimerValueService = this.contentService.getTimerValue().subscribe(
      result => {
        this.blockNext = _.get(result, 'worksheetValue', '');
        this.endTime = _.get(result, 'endTimer', '');
      }
    );
    this.getTranslationContentService = this.contentService.getTranslationContent().subscribe(
      result => this.translationContent = result,
      responseError => this.errorInfo = responseError
    );
    this.getKeyboardElementsService = this.contentService.getKeyboardElements().subscribe(
      result => this.keyboardElements = result,
      responseError => this.errorInfo = responseError
    );
    window['angularComponent'] = {
      validateNumeric: (elementId, event) => this.checkNumeric(elementId, event),
      detectTimedTestAutoSubmit: (elementId, event) => this.checkTimedTestAutoSubmit(elementId, event),
      saveDataCallBack: (result) => this.saveActivityCallBack(result),
      completeDataCallBack: (result) => this.completeActivityCallBack(result),
      setResultCallback: (result) => this.setInteractiveCallBack(result),
      displayKeyboard: (id) => this.displayKeyboard(id),
      zone: this._ngZone,
      component: this
    };
  }

  ngOnInit() {
    this.callLoadJS();
    this.checkIsDevice();
  }

  ngOnDestroy() {
    this.getTemplateService.unsubscribe();
    this.getMessagesService.unsubscribe();
    this.getQuestionContentService.unsubscribe();
    this.getFetchFirstContentService.unsubscribe();
    this.getQuestionSubmitService.unsubscribe();
    this.getTimerValueService.unsubscribe();
    this.getTranslationContentService.unsubscribe();
    this.getKeyboardElementsService.unsubscribe();
    this.resetQuestionService();
    this.resetTimedTestContent();
  }

  /* Common Functions Start */
  @HostListener('document:keydown', ['$event'])
  private keydown(e: KeyboardEvent) {
    const noMoreAttempts = _.get(this.evaluationResult, 'noMoreAttempts', false);
    let submitQuestion: boolean, finished: boolean, autoSubmit: boolean, template: string, replaceAction = false;
    const keyCode = _.get(event, 'keyCode', null);
    const key = _.get(event, 'key', '').toLowerCase();
    if (this.allowEnter && (key === 'enter' || keyCode === 13)) {
      if (!noMoreAttempts) {
        submitQuestion = false;
        if (this.templateContent.toLowerCase() === 'timedtest') {
          finished = _.get(this.questionService, 'userAttemptInfo.finished', false);
          autoSubmit = _.get(this.displayContent, 'autoSubmit', false);
          template = _.get(this.questionService, 'childObjects[' + this.timeTestIndex + '].template', '').toLowerCase();
          if (!finished && !autoSubmit && this.oneOfFormTemplates(template)) { submitQuestion = true; }
        } else if (this.oneOfFormTemplates(this.templateContent)) {
          submitQuestion = true;
        }
        if (submitQuestion) {
          this.contentService.setQuestionSubmit(true);
          replaceAction = true;
        }
      } else {
        this.updateAnswer();
        replaceAction = true;
      }
      if (replaceAction) {
        e.preventDefault();
      }
    }
  }

  private callFetchFirstContent() {
    this.from = _.get(this.contentDetails, 'from', '').toLowerCase();
    if (this.from !== '') {
      if (this.from === 'worksheet') {
        const resultValue = this.contentDetails;
        this.fetchWorksheetContent();
      } else {
        this.resetQuestionService();
        this.fetchFirstContent();
      }
    } else {
      setTimeout(() => { this.callFetchFirstContent(); }, 200);
    }
  }

  private callLoadJS() {
    this.loadJS().then(
      result => {
        if (result.result !== 'failed') {
          this.contentService.setFetchFirstContent(true);
        } else {
          this.callLoadJS();
        }
      },
      responseError => this.errorInfo = responseError
    );
  }

  private loadJS(): Promise<any> {
    const response = { result: 'failed' };
    if (typeof (window['ContentService']) === 'undefined') {
      const appBaseURL = _.get(environment, 'appBaseURL', '');
      const dynamicScripts = [appBaseURL + 'assets/js/contentService.js'];
      try {
        for (let i = 0; i < dynamicScripts.length; i++) {
          const node = document.createElement('script');
          node.src = dynamicScripts[i];
          node.type = 'text/javascript';
          node.async = false;
          node.charset = 'utf-8';
          document.getElementsByTagName('head')[0].appendChild(node);
        }
        response.result = 'success';
      } catch (error) { }
    } else {
      response.result = 'loaded';
    }
    return Promise.resolve(response);
  }

  useHint() {
    return this.questionService.hintsTaken();
  }

  setDefaultNull(content) {
    return (content) ? content : null;
  }
  /* Common Functions End */

  /* Common Question Initialization Start */
  fetchFirstContent() {
    this.allowEnter = false;
    this.questionIndex = 0;
    this.timeTestIndex = 0;
    this.contentService.setFetchFirstContent(false);
    this.sharedService.showLoader();
    this.questionsService.fetchFirstContent().subscribe(
      result => {
        const status = this.contentService.validateResponse(result, {});
        this.sharedService.handleUnexpectedResponse(status, 'home');
        if (status === 'success') {
          this.contentService.setTemplate(result);
          this.contentService.setBasicData(result);
          this.initContentService(result);
        } else if (status === 'redirect') {
          this.handleContentError(result);
        }
        this.sharedService.hideLoader();
      },
      responseError => this.errorInfo = this.sharedService.handleResponseError(responseError)
    );
  }
  fetchWorksheetContent(data?: any) {
    this.allowEnter = false;
    this.questionIndex = 0;
    this.timeTestIndex = 0;
    this.contentService.setFetchFirstContent(false);
    if (typeof (data) === 'undefined') {
      data = {};
    }
    this.questionsService.fetchWorksheetContent(data).subscribe(
      result => {
        this.worksheetResult = result;
        const status = this.contentService.validateResponse(result, {});
        this.sharedService.handleUnexpectedResponse(status, 'home');
        if (status === 'success') {
          this.contentService.setTemplate(result);
          this.contentService.setBasicData(result);
          this.initContentService(result);
        } else if (status === 'redirect') {
          this.handleContentError(result);
        }
        this.sharedService.hideLoader();
      },
      responseError => this.errorInfo = this.sharedService.handleResponseError(responseError)
    );
  }
  private handleContentError(response) {
    this.contentResponse = null;
    const data = _.get(response, 'redirectionData', {});
    if (!_.isEmpty(data)) {
      this.closeContent(data);
    }
    /**
     *
     *  On Error or Click of Done => APIs to be called
     *    1. Close Content
     *    2. Get Topic Session Report
     *    3. QuitTopicHigherLevel - called only when the user is in higher level and clicks NO in overlay.
     *
     */
  }

  closeContent(data) {
    this.sharedService.showLoader();
    this.questionsService.closeContent(data).subscribe(
      contentResult => {
        this.setQuestionTopicIdData(contentResult);
        this.topicSessionReport(contentResult);
      },
      responseError => this.errorInfo = this.sharedService.handleResponseError(responseError)
    );
  }

  quitTopicHigherLevel() {
    this.questionsService.quitTopicHigherLevel().subscribe(
      contentResult => {
        this.setQuestionTopicIdData(contentResult);
        this.topicSessionReport(contentResult);
      }
    );
  }

  private topicSessionReport(contentResult: any) {
    const status = this.contentService.validateResponse(contentResult, {});
    this.sharedService.handleUnexpectedResponse(status, 'home');
    if (status === 'redirect') {
      const code = _.get(contentResult, 'redirectionCode', '').toLowerCase();
      const redirectionData = _.get(contentResult, 'redirectionData', null);
      if (redirectionData) {
        if (code === 'topicsessionreport') {
          this.sharedService.open(SessionReportModalComponent, ['backDropStop']);
        } else {
          this.sharedService.hideLoader();
          this.contentService.contentPageRedirect(contentResult);
        }
      }
    }
  }

  /**
   * Initialize Content Service.
   *
   * @param content any
   */
  private initContentService(content) {
    if (window['ContentService']) {
      this.contentManipulation = window['ContentService'];
      this.setQuestionsContent(content);
    } else {
      setTimeout(() => this.initContentService(content), 200);
    }
  }

  /**
   * Set all the Question Content prameters that are required.
   *
   * @param content any
   */
  private setQuestionsContent(content) {
    this.hideIDKButton = false;
    if (this.contentManipulation) {
      this.thisQuestion = content;
      this.contentId = _.get(content, 'contentData.contentId', '');
      this.contentType = _.get(content, 'contentData.contentType', '');
      this.evaluationResult = {};
      const data = _.get(content, 'contentData.data', {});
      if (!_.isEmpty(data)) {
        this.initializeQuestionContent = this.doInitializeQuestionContent();
        if (this.initializeQuestionContent) {
          this.questionInitiate = new this.contentManipulation(data);
          this.questionService = this.questionInitiate[this.questionIndex];
        }
        this.headerContent = this.setHeaderContent(content);
        this.templateContent = this.questionService.getTemplate();
        this.displayContent = this.generateDisplayContent(content);
        this.setTimedTestContent(content, this.from.toLowerCase());
        this.setQuestionContentServiceData(content);
        this.questionService.startContentTimer();
        if (this.oneOfIframeTemplates(this.templateContent)) {
          if (this.templateContent.toLowerCase() === 'interactive') {
            this.questionService.setResultCallback(window['angularComponent'].setResultCallback);
          } else {
            this.questionService.setSaveDataCallback(window['angularComponent'].saveDataCallBack);
            this.questionService.setCompleteCallback(window['angularComponent'].completeDataCallBack);
          }
        }
      }
      this.allowEnter = true;
    } else {
      setTimeout(() => this.setQuestionsContent(content), 200);
    }
  }
  doInitializeQuestionContent() {
    let status = true;
    if (this.templateContent && this.templateContent.toLowerCase() === 'timedtest') {
      status = _.get(this.questionService, 'userAttemptInfo.finished', false);
    }
    return (status || !this.questionService);
  }

  setQuestionContentServiceData(content, setContentAttempted?: boolean) {
    let name = '';
    const questionContent = this.contentDetails;
    if (!environment.production) { console.log('oldQuestionContent', questionContent); }
    setContentAttempted = (setContentAttempted) ? setContentAttempted : false;
    if (!setContentAttempted) {
      questionContent.context = _.get(content, 'userInformation.language', '');
      questionContent.contentSeqNum = _.get(content, 'contentData.contentSeqNum', '');
      questionContent.contentType = _.get(content, 'contentData.contentType', '');
      questionContent.contentMode = _.get(content, 'contentData.contentMode', '');
      questionContent.revisionNo = _.get(content, 'contentData.data.[' + this.questionIndex + '].revisionNo', '').toString();
      questionContent.displayMessages = _.get(content, 'contentHeaderInfo.pedagogyMessages', '');
      questionContent.dynamicParameters = _.get(content, 'contentData.data.[' + this.questionIndex + '].dynamicParameters', '');
      if (this.oneOfFormTemplates(this.templateContent) || this.templateContent.toLowerCase() === 'mcq' ||
        this.templateContent.toLowerCase() === 'interactive') {
        name = _.get(content, 'contentHeaderInfo.pedagogyChild.name', '');
      } else if (this.oneOfIframeTemplates(this.templateContent) && this.templateContent.toLowerCase !== 'interactive') {
        name = _.get(content, 'contentData.data.[' + this.questionIndex + '].name', '');
      } else if (this.templateContent.toLowerCase() === 'timedtest') {
        name = _.get(content, 'contentData.data.[' + this.questionIndex + '].title', '');
      }
      questionContent.contentName = name;
      questionContent.templateContent = this.templateContent;
      questionContent.hasTranslation = _.get(content, 'contentData.contentTranslationFlag', false);
      this.setTranslationContentServiceData(content, questionContent.hasTranslation);
    }
    questionContent.contentId = this.contentId;
    questionContent.conceptID = _.get(content, 'contentHeaderInfo.pedagogyChild.id', '');
    questionContent.contentAttempted = setContentAttempted;
    this.contentService.setVoiceOverDisabled(setContentAttempted);
    if (!environment.production) { console.log('newQuestionContent', questionContent); }
    this.contentService.setQuestionContent(questionContent);
  }

  setQuestionTopicIdData(content) {
    const questionContent = this.contentDetails;
    if (!environment.production) { console.log('oldQuestionContent', questionContent); }
    let topicId = _.get(content, 'redirectionData.ID', '');
    if (topicId === '') {
      topicId = _.get(content, 'redirectionData.topicID', '');
    }
    questionContent.topicID = topicId;
    if (!environment.production) { console.log('newQuestionContent', questionContent); }
    this.contentService.setQuestionContent(questionContent);
  }

  /**
   * Get Display Object from ContentService and get various
   * other paramenter that are required to display Questions.
   *
   * @param content any
   * @returns any
   */


  private generateDisplayContent(content) {
    let displayContent = this.questionService.getDisplayObject();
    displayContent.showHint = (displayContent.hint) ? true : false;
    displayContent.contentType = this.contentType;
    displayContent.sequence = _.get(content, 'contentData.contentSeqNum', '');
    displayContent.mode = _.get(content, 'contentData.contentMode', '');
    displayContent.messages = this.getDisplayMessages(content);
    displayContent.permittedNavs = this.setPermittedNav(content);
    displayContent.timedTestData = this.getTimedTestHeaderData();
    displayContent.template = (displayContent.template) ? displayContent.template : this.templateContent.toLowerCase();
    displayContent = this.reformDisplayContent(displayContent);
    return displayContent;
  }

  /**
   * Changing the question display content so as to show all
   * types of questions in the section.
   *
   * @param displayContent any
   * @returns any
   */
  private reformDisplayContent(displayContent) {
    let outputQuestion = '', question = '', template = '';
    const questionPattern = new RegExp(/\[[a-zA-Z0-9_]+\]/g);
    const templateContent = this.templateContent.toLowerCase();
    if (templateContent === 'timedtest') {
      question = _.get(displayContent, 'questions[' + this.timeTestIndex + '].question', '');
      template = _.get(displayContent, 'questions[' + this.timeTestIndex + '].template', '').toLowerCase();
    } else {
      question = _.get(displayContent, 'question', '');
      template = templateContent;
    }
    const tempArray: any[] = question.split(questionPattern);
    const matches = question.match(questionPattern);
    if (template === 'blank' || template === 'blank_dropdown') {
      this.setInputKeyboardElements(displayContent, matches);
    } else {
      this.unsetKeyboardElements();
    }
    for (let i = 0; i < tempArray.length; i++) {
      outputQuestion += tempArray[i] + this.generateElement(displayContent, matches, i);
      /* outputQuestion.push({
        type: 'text',
        value: tempArray[i]
      });
      if (matches && matches[i]) {
        const match = matches[i].substr(1, (matches[i].length - 2));
        const ques_resp = _.get(displayContent, 'responseElements.' + match, {});
        const attributes = _.get(ques_resp, 'attributes', {});
        const ques_type = _.get(ques_resp, 'type', '');
        const quesChoices = [];
        if (ques_type.toLowerCase() === 'dropdown') {
          const choices = _.get(ques_resp, 'choices', []);
          for (let j = 0; j < choices.length; j++) {
            const choice = choices[j];
            quesChoices.push(choice.value);
          }
        }
        const questionField: any = {
          attributes: attributes,
          type: ques_type.toLowerCase(),
          value: matches[i],
          key: match
        };
        if (quesChoices.length > 0) {
          questionField.choices = quesChoices;
        }
        outputQuestion.push(questionField);
      } */
    }
    outputQuestion = outputQuestion.replace(/<iframe/g, '<div class="block-iframe-parent"><div class="block-iframe"></div><iframe');
    outputQuestion = outputQuestion.replace(/<\/iframe>/g, '</iframe></div>');
    displayContent.questionField = outputQuestion;
    if (!environment.production) { console.log('displayContent', displayContent); }
    return displayContent;
  }

  /**
   * Generate the question elements in case of
   *    ► Blank
   *    ► Dropdown
   *
   * @param displayContent any
   * @param matches string[]
   * @param i number
   * @returns string
   */
  private generateElement(displayContent, matches, i) {
    let match, ques_resp, attributes, ques_type, choices, isDevice, keyDown = '', param = '', element = '', options = '';
    const directAttributes = ['style', 'size', 'maxlength'];
    const elementWrapper = { 'start': '', 'end': '' };
    if (matches && matches[i]) {
      isDevice = this.isDevice;
      match = matches[i].substr(1, (matches[i].length - 2));
      if (this.templateContent.toLowerCase() === 'timedtest') {
        ques_resp = _.get(displayContent, 'questions[' + this.timeTestIndex + '].responseElements.' + match, {});
      } else {
        ques_resp = _.get(displayContent, 'responseElements.' + match, {});
      }
      attributes = _.get(ques_resp, 'attributes', {});
      ques_type = _.get(ques_resp, 'type', '');
      /* Set attributes for the element */
      param = 'id="' + match + '" name="' + match + '"';
      _.forEach(attributes, function (value: any, key: any) {
        switch (key.toLowerCase()) {
          case 'style':
          case 'maxlength':
            param += ' ' + key.toLowerCase() + '="' + value + '"';
            break;
          case 'size':
            if (isDevice) {
              param += ' style="width:' + (value * 11) + 'px"';
            } else {
              param += ' ' + key.toLowerCase() + '="' + value + '"';
            }
            break;
          case 'texttype':
            elementWrapper.start = '<' + value + '>';
            elementWrapper.end = '</' + value + '>';
            break;
          case 'numeric':
            keyDown = 'angularComponent.validateNumeric(' + match + ', event);';
            break;
        }
      });
      /* Set choices for select */
      choices = _.get(ques_resp, 'choices', []);
      _.forEach(choices, function (choice: any, key: any) {
        options = (options === '') ? '<option value="">Select...</option>' : options;
        options += '<option value="' + choice.id + '">' + choice.value + '</option>';
      });
      switch (ques_type.toLowerCase()) {
        case 'blank':
          keyDown += (keyDown === '') ? '' : ' ';
          keyDown += 'angularComponent.detectTimedTestAutoSubmit(' + match + ', event)';
          param += ' onkeydown="' + keyDown + '"';
          if (isDevice) {
            param += (!_.includes(param, 'style="width')) ? ' style="width:99px"' : '';
            element = `<div class="mathquill-editor">
                <div ` + param + ` onClick="angularComponent.displayKeyboard(` + match + `)" class="mathquill-math-field"></div>
              </div>`;
          } else {
            param += (!_.includes(param, 'size')) ? ' size="9"' : '';
            element = '<input type="text" ' + param + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
          }
          break;
        case 'dropdown':
          param += ' onchange = "angularComponent.detectTimedTestAutoSubmit(' + match + ', event)"';
          element = '<select ' + param + '>' + options + '</select>';
          break;
      }
    }
    element = elementWrapper.start + element + elementWrapper.end;
    return element;
  }

  /**
   * Set the header details for the question
   *
   * @param result any
   * @returns any
   */
  private setHeaderContent(result) {
    let pedagogyContent = { pedagogyContentLeft: {}, pedagogyContentRight: {} };
    if (result.contentHeaderInfo) {
      pedagogyContent = {
        pedagogyContentLeft: {
          id: _.get(result, 'contentHeaderInfo.pedagogyID', null),
          type: _.get(result, 'contentHeaderInfo.pedagogyType', null),
          name: _.get(result, 'contentHeaderInfo.pedagogyName', null),
          progress: _.get(result, 'contentHeaderInfo.pedagogyProgress', null),
          higherLevelStatus: _.get(result, 'contentHeaderInfo.pedagogyHigherLevelStatus', null),
          pedagogyMessages: _.get(result, 'contentHeaderInfo.pedagogyMessages', [])
        },
        pedagogyContentRight: {
          id: _.get(result, 'contentHeaderInfo.pedagogyID', null),
          child: _.get(result, 'contentHeaderInfo.pedagogyChild', null),
          sparkie: _.get(result, 'contentHeaderInfo.rewardInfo.sparkie', null),
          higherLevelStatus: _.get(result, 'contentHeaderInfo.pedagogyHigherLevelStatus', null),
          contentMode: _.get(result, 'contentData.contentMode', 'regular'),
          timedTestData: this.getTimedTestHeaderData()
        }
      };
    }
    return pedagogyContent;
  }

  private getTimedTestHeaderData() {
    const contentType: string = this.questionService.getContentType().toLowerCase();
    let timedTestData: any = {};
    /* This sections is for Timed Test - Start */
    if (contentType === 'group') {
      timedTestData = {
        'questionSequenceNo': this.timeTestIndex,
        'questionTemplate': _.get(this.questionService, 'childContents[' + this.timeTestIndex + '].template', '').toLowerCase(),
        'totalAttempts': _.get(this.questionService, 'totalAttempts', ''),
        'totalCorrect': _.get(this.questionService, 'totalCorrect', ''),
        'totalQuestions': _.get(this.questionService, 'totalQuestions', '')
      };
    }
    /* This sections is for Timed Test - End */
    return timedTestData;
  }

  private setPermittedNav(result) {
    const permittedNav = _.get(result, 'permittedNavs', '');
    return { showFavorites: _.get(permittedNav, 'myFavourities', false), showComment: _.get(permittedNav, 'message', false) };
  }

  getQuestionBodyHeight() {
    let height = 0;
    const header = document.getElementById('questionHeader');
    const footer = document.getElementById('questionFooter');
    height += (header) ? header.offsetHeight : 0;
    height += (footer) ? footer.offsetHeight : 0;
    // if (document.getElementById('questionAlert') !== null) { height += document.getElementById('questionAlert').offsetHeight + 40; }
    return height;
  }

  oneOfFormTemplates(template) {
    return (_.indexOf(this.formTemplates, template.toLowerCase()) >= 0);
  }

  oneOfIframeTemplates(template) {
    return (_.indexOf(this.iframeTemplates, template.toLowerCase()) >= 0);
  }

  addToFavourities() {
    const contentInfo = this.questionService.getContentInfo();
    contentInfo.dynamicParameters = this.contentDetails.dynamicParameters;
    const data = {
      topicID: this.contentDetails.topicID,
      conceptID: this.contentDetails.ConceptID,
      contentInfo: contentInfo
    };
    this.questionsService.addToFavourities(data).subscribe(
      result => {
        const status = this.contentService.validateResponse(result, data);
        this.sharedService.handleUnexpectedResponse(status, 'home');
        if (status === 'success') {
          console.log('added content to favorites');
        }
      },
      responseError => this.errorInfo = this.sharedService.handleResponseError(responseError)
    );
  }

  resetQuestionService() {
    this.questionService = null;
    this.unsetKeyboardElements();
  }
  /* Common Question Initialization End */

  /* Common Submit Start */
  private checkEvaluationResult(result: any) {
    const resultState: any = result.result;
    if ((resultState === false || resultState !== 'correct') && !result.noMoreAttempts) {
      const alertMessage = _.get(result, 'alertMessage', '');
      const errorMessage = (resultState === 'unattempted') ? 'empty' : 'result_error';
      this.showValidationAlerts([errorMessage], alertMessage);
    }
  }

  evaluateAnswer(answer, sequenceNo?: number) {
    answer = (answer !== null) ? JSON.stringify(answer) : answer;
    if (sequenceNo !== (undefined && null && '')) {
      this.evaluationResult = this.questionService.evaluateAnswer(answer, sequenceNo);
    } else {
      this.evaluationResult = this.questionService.evaluateAnswer(answer);
    }
    this.updateMessages();
    return this.evaluationResult;
  }

  callSubmitAnswer(submitData?: any) {
    // this.sharedService.showLoader();
    this.setQuestionContentServiceData(this.thisQuestion, true);
    if (typeof (submitData) === 'undefined') {
      submitData = this.questionService.getSubmitData();
    } else {
      this.hideIDKButton = true;
    }
    submitData.contentSeqNum = this.displayContent.sequence;
    submitData.mode = _.get(this.contentDetails, 'mode', '');
    this.disableIframes();
    this.callSubmitAnswerAction();
    this.questionsService.submitAnswer(submitData).subscribe(
      result => {
        this.contentResponse = result;
        this.handleSubmitAnswerResponse(result, submitData);
        // this.sharedService.hideLoader();
      },
      responseError => this.errorInfo = this.sharedService.handleResponseError(responseError)
    );
  }

  callSubmitWorksheet() {
    this.sharedService.showLoader();
    this.setQuestionContentServiceData(this.thisQuestion, true);
    const submitData = this.questionService.getSubmitData();
    submitData.contentSeqNum = _.get(this.worksheetResult, 'contentData.contentSeqNum', '');
    submitData.remainingTime = _.get(this.worksheetResult, 'contentHeaderInfo.remainingTime', '');
    this.disableIframes();
    // this.callSubmitAnswerAction();
    this.questionsService.submitWorksheetQuestion(submitData).subscribe(
      result => {
        this.contentResponse = result;
        // const quesData = _.get(this.contentResponse, 'contentHeaderInfo.pedagogyProgress', '');
        // this.contentService.setQuestionData(quesData);
        this.handleSubmitAnswerResponse(result, submitData);
        this.sharedService.hideLoader();
      },
      responseError => this.errorInfo = this.sharedService.handleResponseError(responseError)
    );
  }

  private disableIframes() {
    const iframes = (document.getElementsByClassName('block-iframe'));
    _.forEach(iframes, (frame) => {
      frame = <HTMLElement>frame;
      frame.classList.add('blocked');
    });
  }

  private handleSubmitAnswerResponse(result: any, submitData: any) {
    const status = this.contentService.validateResponse(result, submitData);
    this.sharedService.handleUnexpectedResponse(status, 'home');
    if (this.templateContent.toLowerCase() === 'timedtest') {
      const userAttempt: any = _.get(submitData, 'timedTestInfo.userAttemptInfo', {});
      userAttempt.open = true;
      userAttempt.duration = _.get(this.displayContent, 'duration', 0);
      this.contentService.setScoreSheet(userAttempt);
      this.resetTimedTestContent();
    }
    if (status === 'success') {
      this.contentService.setBasicData(result);
      this.nextQuestion = result;
      if (this.from === 'worksheet') {
        if (this.endTime > 0) {
          this.loadNextContent();
        }
      }
    } else if (status === 'redirect') { }
  }
  resetTimedTestContent() {
    this.contentService.setTimerValue({});
    this.contentService.setQuestionData({});
    this.initializeQuestionContent = true;
    this.timeTestIndex = 0;
  }

  private callSubmitAnswerAction() {
    if (this.oneOfIframeTemplates(this.templateContent) && this.templateContent.toLowerCase() !== 'interactive') {
      const isSkipped = _.get(this.questionService, 'isSkipped', false);
      if (isSkipped) {
        this.updateAnswer();
      } else {
        if (this.from !== 'worksheet' && this.templateContent.toLowerCase() !== 'timedtest') {
          this.contentService.setActivateNext(true);
        }
      }
    }
  }

  updateAnswer(explanationRating?: any, userExplanation?: any, feedbackResponse?: any) {
    this.allowEnter = false;
    explanationRating = this.setDefaultNull(explanationRating);
    userExplanation = this.setDefaultNull(userExplanation);
    feedbackResponse = this.setDefaultNull(feedbackResponse);
    this.contentService.setActivateNext(false);
    if (this.oneOfFormTemplates(this.templateContent) || this.templateContent.toLowerCase() === 'mcq' ||
      this.templateContent.toLowerCase() === 'interactive') {
      const submitData = this.questionService.getUpdateData(explanationRating, userExplanation, feedbackResponse);
      if (this.from !== 'worksheet') {
        this.questionsService.updateAnswer(submitData).subscribe(result => {
          const resultStatus = this.contentService.validateResponse(result, submitData);
          this.sharedService.handleUnexpectedResponse(resultStatus);
          if (resultStatus === 'success') {
            if (this.contentResponse) {
              const contentResponseStatus = this.contentService.validateResponse(this.contentResponse, {});
              this.sharedService.handleUnexpectedResponse(contentResponseStatus);
              if (contentResponseStatus === 'redirect') {
                this.handleContentError(this.contentResponse);
              }
            }
          }
          // this.sharedService.hideLoader();
        }, responseError => this.errorInfo = this.sharedService.handleResponseError(responseError));
      }
    }
    this.loadNextContent();
  }
  private loadNextContent() {
    if (this.nextQuestion) {
      this.sharedService.hideLoader();
      if (this.from === 'worksheet') {
        if (this.nextQuestion.contentData.contentSeqNum > 25) {
          const data = {
            navValue: 'true',
            value: 1,
            action: 'next'
          };
          this.contentService.setWorksheetQuesNav(data);
          // this.worksheetComponent.changeQuestions('next');
          // this.worksheetComponent.changeQuestions('next');
        }
      }
      if (this.templateContent.toLowerCase() === 'game') {
        this.setQuestionsContent(this.nextQuestion);
        this.contentService.setActivateNext(false);
      } else {
        // this.sharedService.showLoader();
        this.setQuestionsContent(this.nextQuestion);
        this.updateMessages(true);
      }
      this.nextQuestion = null;
    } else {
      if (this.contentResponse !== null) {
        const status = this.contentService.validateResponse(this.contentResponse, {});
        this.sharedService.handleUnexpectedResponse(status, 'home');
        if (status === 'redirect') {
          this.handleContentError(this.contentResponse);
        } else {
          this.sharedService.showLoader();
          setTimeout(() => {
            this.loadNextContent();
          }, 500);
        }
      }
    }
  }

  isFirstChallenge() {
    let displayMessages: string[] = _.get(this.contentDetails, 'displayMessages', []);
    if (displayMessages) {
      displayMessages = displayMessages.join('----').toLowerCase().split('----');
      const contentMode: string = _.get(this.contentDetails, 'contentMode', '');
      const isFirstAttempt: boolean = _.indexOf(displayMessages, 'challengeattempt1') > -1;
      return (contentMode === 'challenge' && isFirstAttempt);
    }
  }

  hideIDontKnow() {
    const noMoreAttempts = _.get(this.evaluationResult, 'noMoreAttempts', false);
    if (noMoreAttempts) {
      return true;
    } else {
      const hideIDK = (typeof (this.hideIDKButton) === 'undefined') ? false : this.hideIDKButton;
      const mode: string = _.get(this.displayContent, 'mode', '').toLowerCase();
      return (!(_.indexOf(['challenge', 'assessment'], mode) > -1) || hideIDK);
    }
  }

  iDontKnow() {
    let element: any, elements: any, htmlElement: any;
    const submitData = this.questionService.skipThis();
    this.callSubmitAnswer(submitData);
    if (this.from !== 'worksheet') {
      this.contentService.setActivateNext(true);
    }
    if (this.oneOfFormTemplates(this.templateContent)) {
      elements = _.get(this.displayContent, 'responseElements', null);
      if (elements) {
        elements = _.keys(elements);
        for (let i = 0; i < elements.length; i++) {
          element = elements[i];
          htmlElement = (<HTMLInputElement>document.getElementById(element));
          htmlElement.disabled = true;
        }
      }
    }
  }
  /* Common Submit End */

  /* MCQ Start */
  /**
   * Evaluate the MCQ response.
   *
   * @param option string | number
   */
  evaluateOption(option, sequenceNo?: number) {
    let result: any = {};
    if (this.questionService) {
      const answer = [{ value: option }];
      if (sequenceNo !== (undefined && null && '')) {
        result = this.evaluateAnswer(answer, sequenceNo);
      } else {
        result = this.evaluateAnswer(answer);
      }
      this.checkEvaluationResult(result);
    }
    if (!environment.production) { console.log('evaluateOption', result); }
    return result;
  }

  generateOptionString(index) {

    if (index !== null && index !== undefined) {
      index = parseInt(index.toString(), 10);
      return String.fromCharCode(65 + index);
    }
  }

  getAnswerKey(correctAnswer, value?: string) {
    value = (value === undefined) ? 'key' : value;
    let answer = null;
    if (correctAnswer !== '' && correctAnswer !== null && correctAnswer !== undefined) {
      const choices = _.get(this.displayContent, 'responseElements.mcqPattern.choices', []);
      const newThis = this;
      _.forEach(choices, function (choice, key) {
        if (correctAnswer.toString() === choice.id.toString()) {
          if (value === 'key') {
            answer = newThis.generateOptionString(key);
          } else if (value === 'id') {
            answer = choice.id.toString();
          }
        }
      });
    }
    return answer;
  }
  /* MCQ End */

  /* Blank, Dropdown Start */
  validateFormElement(data, element) {
    let submit = '';
    submit = (data === null || data === undefined || data === '' || data.trim() === '') ? 'empty' : submit;
    if (submit === '') {
      const numeric = _.get(element, 'attributes.numeric', false);
      if (numeric) {
        submit = (isNaN(data)) ? 'not_numeric' : submit;
      }
    }
    return submit;
  }

  evaluateFormElement(data, sequenceNo?: number) {
    let result: any = {};
    const answer: any = [];
    if (this.questionService) {
      Object.keys(data).forEach(function (key) {
        const eachAnswer = { name: key, value: data[key] };
        answer.push(eachAnswer);
      }, (data));
      if (!environment.production) { console.log('answer', answer); }
      if (sequenceNo !== (undefined && null && '')) {
        result = this.evaluateAnswer(answer, sequenceNo);
      } else {
        result = this.evaluateAnswer(answer);
      }
      if (this.templateContent.toLowerCase() !== 'timedtest') {
        this.checkEvaluationResult(result);
      }
    }
    if (!environment.production) { console.log('form result', result); }
    return result;
  }

  checkNumeric(elementId: string, event: any) {
    let key: string = _.get(event, 'key', '');
    if (key === '') {
      const keyCode: number = parseInt(_.get(event, 'keyCode', '0'), 10);
      if (keyCode >= 48 && keyCode <= 57) {
        key = (keyCode - 48).toString();
      } else if (keyCode >= 96 && keyCode <= 105) {
        key = (keyCode - 96).toString();
      } else {
        switch (keyCode) {
          case 8: key = 'Backspace'; break;
          case 109:
          case 189: key = '-'; break;
          case 110:
          case 190: key = '.'; break;
        }
      }
    }
    const ctrl = _.get(event, 'ctrlKey', '');
    const notNumber = key === '' || key === null || key === undefined || (isNaN(parseInt(key, 10)) && key.length === 1 && !ctrl);
    const allowedSplChar = key === '-' || key === '.';
    if (notNumber && !allowedSplChar) {
      event.preventDefault();
      this.showValidationAlerts(['not_numeric']);
    }
  }
  /* Blank, Dropdown End */

  /* Game, Interative Start */
  skipContent() {
    this.contentService.setQuestionSubmit(false);
    this.questionService.skipThis();
  }

  callSkipContent() {
    if (typeof (this.templateContent) !== 'undefined' && this.templateContent !== (null && '')) {
      if (this.oneOfIframeTemplates(this.templateContent) && this.templateContent.toLowerCase() !== 'interactive') {
        this.skipContent();
        /* Else condition for this funtions is available in halfwidth-t2.component.ts */
      }
    } else {
      setTimeout(() => { this.callSkipContent(); }, 100);
    }
  }

  saveActivityCallBack(data) {
    data.contentSeqNum = this.getSequenceNumber();
    this.questionsService.saveActivity(data).subscribe(
      result => { if (!environment.production) { console.log(result); } },
      responseError => this.errorInfo = this.sharedService.handleResponseError(responseError)
    );
    if (!environment.production) { console.log('saveActivityCallBack', data); }
  }

  completeActivityCallBack(data) {
    data.contentSeqNum = this.getSequenceNumber();
    this.callSubmitAnswerAction();
    this.questionsService.submitActivity(data).subscribe(
      result => {
        this.contentResponse = result;
        this.handleSubmitAnswerResponse(result, data);
      },
      responseError => this.errorInfo = this.sharedService.handleResponseError(responseError)
    );
    if (!environment.production) { console.log('completeActivityCallBack', data); }
  }

  setInteractiveCallBack(data) {
    if (!environment.production) { console.log('setInteractiveCallBack', data); }
    this.checkEvaluationResult(data);
    if (data.result.toLowerCase() !== 'unattempted') {
      this.contentService.setInteractiveSubmitResponse(data);
    }
  }

  private getSequenceNumber() {
    const sequence = _.get(this.displayContent, 'sequence', null);
    return sequence;
  }
  /* Game, Interative End */

  /* Worksheet Actions Start */
  quitWorksheets() {
    this.sharedService.showLoader();
    this.worksheetsService.quitWorksheet().subscribe(
      result => {
        this.sharedService.hideLoader();
        const status = this.contentService.validateResponse(result, {});
        this.sharedService.handleUnexpectedResponse(status, 'home');
      }
    );
  }
  /* Worksheet Actions End */

  /* TimedTest Actions Start */
  loadNextTimedTestQuestion(result: any) {
    this.nextQuestion = _.cloneDeep(this.thisQuestion);
    this.timeTestIndex++;
    this.loadNextContent();
  }

  private setTimedTestContent(data, from) {
    let time: any, questionData = {};
    if (from === 'worksheet') {
      questionData = {
        questionData: _.get(data, 'contentHeaderInfo.pedagogyProgress.unitList', []),
        remainingTime: _.get(data, 'contentHeaderInfo.remainingTime', 0),
        totalTime: _.get(data, 'contentHeaderInfo.totalTime', 0),
        timed: _.get(data, 'contentHeaderInfo.timed', false),
        name: _.get(data, 'contentHeaderInfo.pedagogyName', ''),
        pedagogyStatus: _.get(data, 'contentHeaderInfo.pedagogyStatus', '')
      };
    } else if (this.templateContent.toLowerCase() === 'timedtest') {
      // Converting minutes to seconds
      if (this.initializeQuestionContent) {
        time = {
          total: _.get(this.displayContent, 'duration', 0) * 60,
          remaining: _.get(this.displayContent, 'duration', 0) * 60
        };
      } else {
        time = {
          total: _.get(this.displayContent, 'duration', 0) * 60,
          remaining: --this.endTime
        };
      }
      questionData = {
        questionData: [],
        remainingTime: time.remaining,
        totalTime: time.total,
        timed: true,
        name: _.get(this.displayContent, 'timedTestTitle', ''),
        pedagogyStatus: 'in-progress'
      };
    }
    this.contentService.setQuestionData(questionData);
  }

  checkTimedTestAutoSubmit(elementId, event) {
    let autoSubmit;
    if (this.timedtestKeyDownCheck) {
      clearTimeout(this.timedtestKeyDownCheck);
    }
    if (this.templateContent.toLowerCase() === 'timedtest') {
      const timedTestTemplate = _.get(this.displayContent, 'timedTestData.questionTemplate', '').toLowerCase();
      autoSubmit = _.get(this.displayContent, 'autoSubmit', false);
      if (this.oneOfFormTemplates(timedTestTemplate) && autoSubmit) {
        this.timedtestKeyDownCheck = setTimeout(() => {
          this.contentService.setQuestionSubmit(true);
        }, 2000);
      }
    }
  }
  /* TimedTest Actions End */

  /* Vernacular Start */
  setTranslationContentServiceData(content, hasTranslation) {
    this.translationContent.hasTranslation = hasTranslation;
    if (hasTranslation) {
      this.translationContent.language = _.get(content, 'contentData.translationLanguage', null);
      this.translationContent.displayContent = this.getTranslationData(content);
    }
    this.contentService.setTranslationContent(this.translationContent);
  }

  getTranslationData(content) {
    let translatedQuestion;
    translatedQuestion = this.questionService.getTranslatedDisplayObject();
    translatedQuestion.showHint = (translatedQuestion.hint) ? true : false;
    translatedQuestion.contentType = this.contentType;
    translatedQuestion.sequence = _.get(content, 'contentData.contentSeqNum', '');
    translatedQuestion.mode = _.get(content, 'contentData.contentMode', '');
    translatedQuestion.timedTestData = this.getTimedTestHeaderData();
    translatedQuestion.template = (translatedQuestion.template) ? translatedQuestion.template : this.templateContent.toLowerCase();
    translatedQuestion = this.reformDisplayContent(translatedQuestion);
    if (!environment.production) { console.log(translatedQuestion); }
    return translatedQuestion;
  }

  getTranslatedExplanation() {
    return this.questionService.getTranslatedExplanation();
  }

  getTranslatedHints() {
    return this.questionService.getTranslatedHints();
  }
  /* Vernacular End */

  /* Handle Alert Messages Start */
  /**
   * Store the display messages that are available in
   * pedagogy messages.
   *
   * @param content any
   * @returns any
   */
  private getDisplayMessages(content) {
    const displayMessages = {};
    if (this.initializeQuestionContent) {
      const appMessage = _.cloneDeep(AppMessageSettings);
      const messages = _.get(content, 'contentHeaderInfo.pedagogyMessages', []);
      _.forEach(messages, function (value, key) {
        displayMessages[value] = _.get(appMessage, value, {});
      });
    }
    return displayMessages;
  }

  updateMessages(discardAll?: boolean) {
    let condition, display;
    discardAll = (discardAll) ? discardAll : false;
    const result: any = this.evaluationResult;
    for (let index = 0; index < this.displayMessages.length; index++) {
      const message = this.displayMessages[index];
      const beforeConditions = _.get(message, 'beforeSubmit.conditions', ['default']);
      const afterConditions = _.get(message, 'afterSubmit.conditions', ['default']);
      for (let beforeIndex = 0; beforeIndex < beforeConditions.length; beforeIndex++) {
        condition = beforeConditions[beforeIndex];
        display = _.get(message, 'beforeSubmit.messages.' + condition + 'Display', false);
        if (display || discardAll) { this.displayMessages[index].beforeSubmit.messages[condition + 'Close'] = true; }
        if (this.checkBeforeSubmit(condition, result)) {
          this.displayMessages[index].beforeSubmit.messages[condition + 'Display'] = true;
        }
      }
      for (let afterIndex = 0; afterIndex < afterConditions.length; afterIndex++) {
        condition = afterConditions[afterIndex];
        display = _.get(message, 'afterSubmit.messages.' + condition + 'Display', false);
        if (display || discardAll) { this.displayMessages[index].afterSubmit.messages[condition + 'Close'] = true; }
        if (this.checkAfterSubmit(condition, result)) {
          this.displayMessages[index].afterSubmit.messages[condition + 'Display'] = true;
        }
      }
    }
    this.discardOldMessages(this.displayMessages, discardAll);
  }

  private checkAfterSubmit(condition, result) {
    let status;
    const noMoreAttempts = _.get(result, 'noMoreAttempts', false);
    const resultStatus = _.get(result, 'result', false);
    switch (condition) {
      case 'default':
        status = true;
        break;
      case 'result_true':
        status = (noMoreAttempts) ? this.checkAfterSubmitResult(resultStatus, true) : false;
        break;
      case 'result_false':
        status = (noMoreAttempts) ? this.checkAfterSubmitResult(resultStatus, false) : false;
        break;
      default: status = false;
    }
    return status;
  }
  private checkBeforeSubmit(condition, result) {
    let status;
    switch (condition) {
      case 'default':
        status = true;
        break;
      default: status = false;
    }
    return status;
  }

  private checkAfterSubmitResult(result, status) {
    result = (result === 'correct') ? true : result;
    result = (result === 'incorrect') ? false : result;
    return (result === status);
  }

  discardOldMessages(displayMessages, discardAll?) {
    let message, messageText, afterMessages, beforeMessages, afterConditions, beforeConditions, condition, close;
    if (discardAll) {
      this.displayMessages = [];
    } else {
      for (let index = 0; index < this.displayMessages.length; index++) {
        message = this.displayMessages[index];
        beforeConditions = _.get(message, 'beforeSubmit.conditions', ['default']);
        afterConditions = _.get(message, 'afterSubmit.conditions', ['default']);
        for (let beforeIndex = 0; beforeIndex < beforeConditions.length; beforeIndex++) {
          condition = beforeConditions[beforeIndex];
          messageText = _.get(message, 'beforeSubmit.messages.' + condition, '');
          close = _.get(message, 'beforeSubmit.messages.' + condition + 'Close', false);
          if (messageText === '' || close) {
            delete this.displayMessages[index].beforeSubmit.messages[condition];
            delete this.displayMessages[index].beforeSubmit.messages[condition + 'Close'];
            delete this.displayMessages[index].beforeSubmit.messages[condition + 'Display'];
          }
        }
        for (let afterIndex = 0; afterIndex < afterConditions.length; afterIndex++) {
          condition = afterConditions[afterIndex];
          messageText = _.get(message, 'beforeSubmit.messages.' + condition, '');
          close = _.get(message, 'beforeSubmit.messages.' + condition + 'Close', false);
          if (messageText === '' || close) {
            delete this.displayMessages[index].beforeSubmit.messages[condition];
            delete this.displayMessages[index].beforeSubmit.messages[condition + 'Close'];
            delete this.displayMessages[index].beforeSubmit.messages[condition + 'Display'];
          }
        }
      }
      beforeMessages = _.get(message, 'beforeSubmit.messages', {});
      afterMessages = _.get(message, 'afterSubmit.messages', {});
      if (_.isEmpty(beforeMessages) && _.isEmpty(afterMessages)) {
        this.displayMessages = [];
      }
    }
    this.contentService.setMessages(this.displayMessages);
  }

  showValidationAlerts(messageTypes: string[], alertMessage?: string) {
    let message, messageId = '';
    const appMessage = _.cloneDeep(AppMessageSettings);
    alertMessage = (typeof (alertMessage) !== 'string' || alertMessage === '') ? '' : alertMessage;
    if (alertMessage !== '') {
      this.contentService.setConditionalAlert(alertMessage);
    }
    this.updateMessages();
    for (let typeIndex = 0; typeIndex < messageTypes.length; typeIndex++) {
      const messageType = messageTypes[typeIndex];
      switch (messageType) {
        case 'empty':
          messageId = 'submitEmptyBlank';
          break;
        case 'not_numeric':
          messageId = 'alphabetInNumericBlank';
          break;
        case 'result_error':
          messageId = 'moreThanOneTrial';
          break;
        default:
          messageId = '';
          break;
      }
      if (messageId !== '') {
        message = _.get(appMessage, messageId, {});
        this.generateDisplayMessages([message]);
      }
    }
  }

  generateDisplayMessages(messages: any) {
    const messageKeys = _.keys(messages);
    for (let i = 0; i < messageKeys.length; i++) {
      const key = messageKeys[i];
      const message = messages[key];
      const beforeMessages = _.get(message, 'beforeSubmit.messages', {});
      const beforeConditions = _.get(message, 'beforeSubmit.conditions', ['default']);
      const afterMessages = _.get(message, 'afterSubmit.messages', {});
      const afterConditions = _.get(message, 'afterSubmit.conditions', ['default']);
      const displayMessage = {
        beforeSubmit: {
          where: _.get(message, 'beforeSubmit.where', 'ribbonGreen').toLowerCase(),
          action: _.get(message, 'beforeSubmit.action', ''),
          conditions: beforeConditions,
          messages: this.getRandomMessage('before', beforeMessages, beforeConditions)
        },
        afterSubmit: {
          where: _.get(message, 'afterSubmit.where', 'ribbonGreen').toLowerCase(),
          action: _.get(message, 'afterSubmit.action', ''),
          conditions: afterConditions,
          messages: this.getRandomMessage('after', afterMessages, afterConditions)
        }
      };
      this.displayMessages.push(displayMessage);
    }
    this.contentService.setMessages(this.displayMessages);
  }

  generateMessageString(messages, when, whereBase) {
    let message, messageContent, setMessage, where;
    for (let i = 0; i < messages.length; i++) {
      setMessage = false;
      message = messages[i];
      where = _.get(message, when + 'Submit.where', '').toLowerCase();
      switch (whereBase) {
        case 'ribbon':
          setMessage = (where === 'ribbongreen' || where === 'ribbonred'); break;
        case 'overlay':
          setMessage = (where === 'overlay'); break;
      }
      if (setMessage) {
        messageContent = this.getMessageString(message, when, messageContent);
      }
    }
    return {
      action: _.get(messageContent, 'action', ''),
      class: where,
      close: false,
      message: _.get(messageContent, 'messageText', '')
    };
  }

  private getMessageString(message, when, messageContent) {
    let messageData, messageText = '', conditions, condition, action;
    conditions = _.get(message, when + 'Submit.conditions', ['default']);
    for (let conditionalIndex = 0; conditionalIndex < conditions.length; conditionalIndex++) {
      condition = conditions[conditionalIndex];
      action = _.get(message, when + 'Submit.action', '');
      messageData = {
        message: _.get(message, when + 'Submit.messages.' + condition, ''),
        close: _.get(message, when + 'Submit.messages.' + condition + 'Close', false),
        display: _.get(message, when + 'Submit.messages.' + condition + 'Display', false),
      };
      if (messageData.display && !messageData.close) {
        messageText += (messageText !== '') ? '<br>' : '';
        messageText += messageData.message;
      }
    }
    if (messageText !== '') {
      return { messageText: messageText, action: action };
    } else {
      return messageContent;
    }
  }

  getRandomMessage(type, messages, conditions) {
    let condition, messagesLength, randomKey, message;
    for (let i = 0; i < conditions.length; i++) {
      condition = conditions[i];
      messagesLength = _.get(messages, condition, []).length;
      randomKey = this.generateRandomNumber(0, (messagesLength - 1));
      message = _.get(messages, condition + '.' + randomKey, '');
      this.sharedService.translateMessage(message).subscribe(res => {
        messages[condition] = res;
      });
      messages[condition + 'Display'] = (type === 'before' && condition === 'default') ? true : false;
      messages[condition + 'Close'] = false;
    }
    return messages;
  }

  private generateRandomNumber(min, max) {
    if (min === max) { return min; }
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  /* Handle Alert Messages End */

  /* MathQuill Keyboard Start */
  checkIsDevice() {
    if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
      this.isDevice = true;
    } else {
      this.isDevice = false;
    }
  }

  setInputKeyboardElements(displayContent, matches) {
    let i: number, match: string, type: string, keyboardElements: any;
    const allInputs: string[] = [];
    for (i = 0; i < matches.length; i++) {
      match = matches[i].substr(1, (matches[i].length - 2));
      if (this.templateContent.toLowerCase() === 'timedtest') {
        type = _.get(displayContent, 'questions[' + this.timeTestIndex + '].responseElements.' + match + '.type', '').toLowerCase();
      } else {
        type = _.get(displayContent, 'responseElements.' + match + '.type', '').toLowerCase();
      }
      if (type === 'blank') {
        allInputs.push(match);
      }
    }
    keyboardElements = {
      isDevice: this.isDevice,
      isKeyboard: null,
      allInputs: allInputs,
      selectedInput: null
    };
    this.contentService.setKeyboardElements(keyboardElements);
  }

  displayKeyboard(element) {
    this.keyboardElements.selectedInput = _.get(element, 'id', '');
    this.keyboardElements.isKeyboard = true;
    this.contentService.setKeyboardElements(this.keyboardElements);
  }

  unsetKeyboardElements() {
    this.contentService.setKeyboardElements({});
  }

  hideKeyboard() {
    this.keyboardElements.isKeyboard = false;
    this.contentService.setKeyboardElements(this.keyboardElements);
  }
  /* MathQuill Keyboard End */

}
