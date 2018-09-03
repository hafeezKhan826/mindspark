import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';
import { AppSettings } from '../../../settings/app.settings';
import { ApiSettings } from '../../../settings/app.api-settings';

@Injectable()
export class ContentService {
    appSettings: any = AppSettings;
    private baseURL: string;
    errorInfo: any;
    private usernameBehaviorSubject: BehaviorSubject<any>;
    private secretQuestionsBehaviorSubject: BehaviorSubject<any>;
    private templateBS: BehaviorSubject<any>;
    private unexpectedErrorBS: BehaviorSubject<any>;
    private contentBS: BehaviorSubject<any>;
    private messagesBS: BehaviorSubject<any>;
    private messageCloseBS: BehaviorSubject<any>;
    private conditionalAlertBS: BehaviorSubject<any>;
    private passwordTypeBS: BehaviorSubject<any>;
    private newCommentBS: BehaviorSubject<any>;
    private questionSubmitBS: BehaviorSubject<any>;
    private questionContentBS: BehaviorSubject<any>;
    private translationContentBS: BehaviorSubject<any>;
    private setWorksheetQuesNavBS: BehaviorSubject<any>;
    private fetchFirstContentBS: BehaviorSubject<any>;
    private interactiveSubmitResponseBS: BehaviorSubject<any>;
    private activateNextBS: BehaviorSubject<any>;
    private voiceOverDisabledBS: BehaviorSubject<any>;
    private logoutSessionBS: BehaviorSubject<any>;
    private compatibleBrowserBS: BehaviorSubject<any>;
    private topicIdBS: BehaviorSubject<any>;
    private favouritesQuestionBS: BehaviorSubject<any>;
    private questionDataBS: BehaviorSubject<any>;
    private timerValueBS: BehaviorSubject<any>;
    private scoreSheetBS: BehaviorSubject<any>;
    private keyboardElementsBS: BehaviorSubject<any>;
    firstTimeUserDetails: any;

    constructor(private router: Router) {
        this.clearAllContentService();
    }

    setTemplate(result, type?: string, reset?: boolean) {
        let templateId = null;
        reset = (!reset) ? false : reset;
        if (!reset) {
            type = (type) ? type : '';
            let selectedTheme = '';
            if (type === 'login') {
                selectedTheme = _.get(result, 'selectedTheme', 'lowergrade').toLowerCase();
            } else {
                selectedTheme = _.get(result, 'userInformation.selectedTheme', 'lowergrade').toLowerCase();
            }
            templateId = _.get(AppSettings, 'GRADES_FOR_THEME.' + selectedTheme, null);
        } else {
            localStorage.removeItem('template');
        }
        if (templateId !== null) {
            localStorage.setItem('template', templateId);
            this.templateBS.next({
                template: templateId
            });
        }
    }
    getTemplate(): Observable<any> {
        return this.templateBS.asObservable();
    }
    getTemplateId(result) {
        return _.get(result, 'template', '1');
    }

    setUnexpectedError(state: string) {
        this.unexpectedErrorBS.next({ error: state });
    }
    getUnexpectedError(): Observable<any> {
        return this.unexpectedErrorBS.asObservable();
    }

    setBasicData(content) {
        this.contentBS.next({
            userInformation: content.userInformation,
            sessionInformation: content.sessionInformation,
            notifications: content.notifications,
            permittedNavs: content.permittedNavs,
            weeklySummary: content.weeklySummary,
            rewardSummary: content.rewardSummary
        });
    }
    getBasicData(): Observable<any> {
        return this.contentBS.asObservable();
    }

    validateResponse(response: any, request: any) {
        this.setUnexpectedError('close');
        const resultCode = _.get(response, 'resultCode', '').toLowerCase();
        let status = 'false';
        switch (resultCode) {
            case 'c001': status = 'success';
                break;
            case 'c002': status = 'unknown';
                break;
            case 'c004': status = 'redirect';
                this.redirectToLocation(response, request);
                break;
            case 'c007': status = 'upload_failure';
                break;
            case 'cl001': status = 'password_mismatch';
                break;
            case 'cl002': status = 'username_not_found';
                break;
            case 'cl010': status = 'session_creation_failed';
                break;
            case 'cl011': status = 'no_product_access';
                break;
            case 'cl018': status = 'details_mismatch';
                break;
            default: status = 'unexpected';
                this.setUnexpectedError(status);
        }
        return status;
    }
    private redirectToLocation(response, request) {
        const redirectionCode = _.get(response, 'redirectionCode', '').toLowerCase();
        let url: string = _.get(AppSettings, 'REDIRECT_CODE[' + redirectionCode + ']', '');
        switch (redirectionCode) {
            case 'contentpage':
            case 'closecontent':
                url = '';
                break;
            default:
                break;
        }
        this.redirectToPath(url);
    }
    private redirectToPath(url) {
        if (url !== '') {
            this.router.navigate([url]);
        }
    }

    setMessages(messages: any) {
        this.messagesBS.next({
            messages: messages
        });
    }
    getMessages(): Observable<any> {
        return this.messagesBS.asObservable();
    }

    setMessageClose(value: boolean) {
        this.messageCloseBS.next({
            closed: value
        });
    }
    getMessageClose(): Observable<any> {
        return this.messageCloseBS.asObservable();
    }

    setConditionalAlert(value: string) {
        this.conditionalAlertBS.next({
            message: value
        });
    }
    getConditionalAlert(): Observable<any> {
        return this.conditionalAlertBS.asObservable();
    }

    setNewComment(status: boolean) {
        this.newCommentBS.next({
            added: status
        });
    }
    getNewComment(): Observable<any> {
        return this.newCommentBS.asObservable();
    }
    /**
     * This is a submit service in case of Blanks & Dropdowns.
     * Whereas a skip service for Games.
     *
     * @param value boolean
     */
    setQuestionSubmit(value: boolean) {
        this.questionSubmitBS.next({
            submit: value
        });
    }
    getQuestionSubmit(): Observable<any> {
        return this.questionSubmitBS.asObservable();
    }

    setQuestionContent(value: any) {
        this.questionContentBS.next({
            from: _.get(value, 'from', ''),
            mode: _.get(value, 'mode', ''),
            action: _.get(value, 'action', ''),
            context: _.get(value, 'context', ''),
            topicID: _.get(value, 'topicID', ''),
            conceptID: _.get(value, 'conceptID', ''),
            contentId: _.get(value, 'contentId', ''),
            contentSeqNum: _.get(value, 'contentSeqNum', ''),
            contentType: _.get(value, 'contentType', ''),
            contentMode: _.get(value, 'contentMode', ''),
            revisionNo: _.get(value, 'revisionNo', ''),
            contentAttempted: _.get(value, 'contentAttempted', ''),
            dynamicParameters: _.get(value, 'dynamicParameters', ''),
            displayMessages: _.get(value, 'displayMessages', ''),
            contentName: _.get(value, 'contentName', ''),
            templateContent: _.get(value, 'templateContent', ''),
            hasTranslation: _.get(value, 'hasTranslation', false)
        });
    }
    getQuestionContent(): Observable<any> {
        return this.questionContentBS.asObservable();
    }

    setTranslationContent(data) {
        this.translationContentBS.next({
            language: _.get(data, 'language', null),
            hasTranslation: _.get(data, 'hasTranslation', false),
            showTranslation: _.get(data, 'showTranslation', false),
            displayContent: _.get(data, 'displayContent', {})
        });
    }
    getTranslationContent(): Observable<any> {
        return this.translationContentBS.asObservable();
    }

    setQuestionData(data) {
        this.questionDataBS.next({
            questionData: _.get(data, 'questionData', []),
            remainingTime: _.get(data, 'remainingTime', null),
            totalTime: _.get(data, 'totalTime', null),
            timed: _.get(data, 'timed', false),
            name: _.get(data, 'name', ''),
            pedagogyStatus: _.get(data, 'pedagogyStatus', '')
        });
    }
    getQuestionData(): Observable<any> {
        return this.questionDataBS.asObservable();
    }

    setWorksheetQuesNav(data) {
        this.setWorksheetQuesNavBS.next({
            navValue: _.get(data, 'navValue', ''),
            value: _.get(data, 'value', ''),
            action: _.get(data, 'action', '')
        });
    }
    getWorksheetQuesNav(): Observable<any> {
        return this.setWorksheetQuesNavBS.asObservable();
    }

    setTimerValue(data) {
        this.timerValueBS.next({
            worksheetValue: _.get(data, 'worksheetValue', false),
            endTimer: _.get(data, 'remainingTime', null),
        });
    }
    getTimerValue() {
        return this.timerValueBS.asObservable();
    }

    setScoreSheet(data) {
        this.scoreSheetBS.next({
            open: _.get(data, 'open', false),
            finished: _.get(data, 'finished', false),
            duration: _.get(data, 'duration', null),
            timeTaken: _.get(data, 'timeTaken', null),
            totalAttempted: _.get(data, 'totalAttempted', null),
            totalCorrect: _.get(data, 'totalCorrect', null),
            totalQuestions: _.get(data, 'totalQuestions', null),
        });
    }
    getScoreSheet(): Observable<any> {
        return this.scoreSheetBS.asObservable();
    }

    setKeyboardElements(data) {
        this.keyboardElementsBS.next({
            isDevice: _.get(data, 'isDevice', null),
            isKeyboard: _.get(data, 'isKeyboard', null),
            allInputs: _.get(data, 'allInputs', null),
            selectedInput: _.get(data, 'selectedInput', null)
        });
    }
    getKeyboardElements(): Observable<any> {
        return this.keyboardElementsBS.asObservable();
    }

    setInteractiveSubmitResponse(data) {
        this.interactiveSubmitResponseBS.next({
            result: data
        });
    }
    getInteractiveSubmitResponse(): Observable<any> {
        return this.interactiveSubmitResponseBS.asObservable();
    }

    setActivateNext(next: boolean) {
        this.activateNextBS.next({
            next: next
        });
    }
    getActivateNext(): Observable<any> {
        return this.activateNextBS.asObservable();
    }

    setVoiceOverDisabled(state: boolean) {
        this.voiceOverDisabledBS.next({
            state: state
        });
    }
    getVoiceOverDisabled(): Observable<any> {
        return this.voiceOverDisabledBS.asObservable();
    }

    setLogoutSession(type: number) {
        this.logoutSessionBS.next({
            type: type
        });
    }
    getLogoutSession(): Observable<any> {
        return this.logoutSessionBS.asObservable();
    }

    setFirstTimeUserDetails(details) {
        this.firstTimeUserDetails = details;
    }
    getFirstTimeUserDetails() {
        return this.firstTimeUserDetails;
    }

    setFetchFirstContent(value) {
        this.fetchFirstContentBS.next({ fetch: value });
    }
    getFetchFirstContent(): Observable<any> {
        return this.fetchFirstContentBS.asObservable();
    }

    setRouterDetails(property: any) {
        this.compatibleBrowserBS.next({
            compatible: _.get(property, 'compatible', false),
            cookies: _.get(property, 'cookies', false),
            localStorage: _.get(property, 'localStorage', false),
            sessionStorage: _.get(property, 'sessionStorage', false),
            dragDrop: _.get(property, 'dragDrop', false),
            firewall: _.get(property, 'firewall', false)
        });
    }
    getRouterDetails(): Observable<any> {
        return this.compatibleBrowserBS.asObservable();
    }
    setTopicId(topicId) {
        this.topicIdBS.next({
            topicId: topicId
        });
    }
    getTopicId(): Observable<any> {
        return this.topicIdBS.asObservable();
    }
    setFavouritesQuestionIndex(data) {
        this.favouritesQuestionBS.next({
            startFrom: _.get(data, 'startFrom', 1),
            limit: _.get(data, 'limit', AppSettings.PAGINATION_LIMIT),
            topicID: _.get(data, 'topicID', null)
        });
    }
    getFavouritesQuestionIndex(): Observable<any> {
        return this.favouritesQuestionBS.asObservable();
    }

    contentPageRedirect(response) {
        const redirectionCode = _.get(response, 'redirectionCode', '').toLowerCase();
        const url: string = _.get(AppSettings, 'REDIRECT_CODE[' + redirectionCode + ']', '');
        if (url !== '') { this.router.navigate([url]); } else { console.log('redirection Data', response); }
    }
    clearAllContentService() {
        this.setTemplate('', '', true);
        this.usernameBehaviorSubject = new BehaviorSubject({ username: 'Student', category: 'teacher', retailUser: false });
        this.secretQuestionsBehaviorSubject = new BehaviorSubject({ secretQuestion: [''] });
        this.templateBS = new BehaviorSubject({ template: null });
        this.unexpectedErrorBS = new BehaviorSubject({ error: null });
        this.contentBS = new BehaviorSubject({
            userInformation: {}, sessionInformation: {}, notifications: {},
            permittedNavs: {}, weeklySummary: {}, rewardSummary: {}
        });
        this.messagesBS = new BehaviorSubject({ messages: [] });
        this.messageCloseBS = new BehaviorSubject({ closed: false });
        this.conditionalAlertBS = new BehaviorSubject({ message: null });
        this.passwordTypeBS = new BehaviorSubject({ type: 'picture' });
        this.newCommentBS = new BehaviorSubject({ added: false });
        this.questionSubmitBS = new BehaviorSubject({ submit: false });
        this.questionContentBS = new BehaviorSubject({
            from: '', mode: '', action: '', context: '', topicID: '', conceptID: '', contentId: '',
            contentSeqNum: '', contentType: '', contentMode: '', revisionNo: '',
            contentAttempted: '', dynamicParameters: '', displayMessages: [],
            contentName: '', templateContent: '', hasTranslation: null
        });
        this.translationContentBS = new BehaviorSubject({
            language: null, showTranslation: false, displayContent: {}
        });
        this.setWorksheetQuesNavBS = new BehaviorSubject({ navValue: false, value: 1, action: 'next' });
        /**
         * To get the api's remaining time
         */
        this.questionDataBS = new BehaviorSubject({
            questionData: [], remainingTime: null, totalTime: null, timed: false,
            name: '', pedagogyStatus: ''
        });
        /**
         *To get the timer remaining time
         */
        this.timerValueBS = new BehaviorSubject({ worksheetValue: false, remainingTime: null });
        this.scoreSheetBS = new BehaviorSubject({
            open: false, finished: false, duration: null, timeTaken: null,
            totalAttempted: null, totalCorrect: null, totalQuestions: null,
        });
        this.keyboardElementsBS = new BehaviorSubject({
            isDevice: null, isKeyboard: null, allInputs: null, selectedInput: null
        });
        this.interactiveSubmitResponseBS = new BehaviorSubject({ result: null });
        this.activateNextBS = new BehaviorSubject({ next: false });
        this.voiceOverDisabledBS = new BehaviorSubject({ state: false });
        this.logoutSessionBS = new BehaviorSubject({ type: null });
        this.fetchFirstContentBS = new BehaviorSubject({ fetch: false });
        this.compatibleBrowserBS = new BehaviorSubject({
            cookies: null, localStorage: null, sessionStorage: null,
            dragDrop: null, firewall: null, compatible: null
        });
        this.topicIdBS = new BehaviorSubject({ topicId: null });
        this.favouritesQuestionBS = new BehaviorSubject({
            startFrom: 1, limit: AppSettings.PAGINATION_LIMIT, topicID: ''
        });
    }

}
