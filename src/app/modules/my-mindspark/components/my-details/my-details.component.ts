import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { MyDetailsService } from './my-details.service';
import { SharedService } from '../../../../shared/shared.service';
import { ContentService } from '../../../../shared/services/content/content.service';
import { DOBValidator } from '../../../../shared/validators/dob/dob.validator';
import { AppSettings } from '../../../../settings/app.settings';
import * as _ from 'lodash';

@Component({
  selector: 'ms-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.scss']
})
export class MyDetailsComponent implements OnInit {
  template: string;
  myDetails: any;
  errorInfo: any;
  private items: any[] = [];

  constructor(private sharedService: SharedService, private contentService: ContentService, private myDetailsService: MyDetailsService,
    @Inject(DOCUMENT) private document: Document) {
    this.sharedService.setSiteTitle('My Details');
    this.contentService.getTemplate().subscribe(
      result => {
        this.template = this.contentService.getTemplateId(result);
      },
      responseError => this.errorInfo = responseError
    );
  }

  ngOnInit() {
    this.getMyDetailsData();
  }

  getMyDetailsData() {
    this.sharedService.showLoader();
    this.myDetailsService.getMyDetailsData().subscribe(
      result => {
        const status = this.contentService.validateResponse(result, {});
        this.sharedService.handleUnexpectedResponse(status);
        if (status === 'success') {
          this.myDetails = result;
          this.contentService.setTemplate(result);
          this.contentService.setBasicData(result);
        }
        this.sharedService.hideLoader();
      },
      responseError => this.errorInfo = this.sharedService.handleResponseError(responseError)
    );
  }

  initializeMyDetailFormData() {
    return new FormGroup({
      dateOfBirth: new FormControl(''),
      monthOfBirth: new FormControl(''),
      yearOfBirth: new FormControl(''),
      motherName: new FormControl(''),
      fatherName: new FormControl(''),
      parentEmail: new FormControl(''),
      parentMobile: new FormControl(''),
      parentISD: new FormControl(''),
      securityQuestion: new FormControl(''),
      securityAns: new FormControl('')
    });
  }

  setMyDetailFormData() {
    let dateOfBirth: any;
    const motherName = _.get(this.myDetails, 'profileInformation.parentDetails.mother.name', '');
    const fatherName = _.get(this.myDetails, 'profileInformation.parentDetails.father.name', '');
    const parentEmail = _.get(this.myDetails, 'profileInformation.parentDetails.parent.email.email', '');
    const parentISD = _.get(this.myDetails, 'profileInformation.parentDetails.parent.mobile.extension', '');
    const parentMobile = _.get(this.myDetails, 'profileInformation.parentDetails.parent.mobile.number', '');
    const securityQuestion = _.get(this.myDetails, 'profileInformation.selectedQuest', '');
    const securityAns = _.get(this.myDetails, 'profileInformation.secretAnswer', '');
    let dob: any = _.get(this.myDetails, 'profileInformation.dob', '');
    if (dob !== '') {
      dob = dob.split('-');
      dateOfBirth = {
        year: parseInt(dob[0], 10),
        month: parseInt(dob[1], 10),
        date: parseInt(dob[2], 10)
      };
    } else {
      dateOfBirth = {
        year: 0,
        month: 0,
        date: 0
      };
    }

    return new FormGroup({
      dateOfBirth: new FormControl(dateOfBirth.date),
      monthOfBirth: new FormControl(dateOfBirth.month),
      yearOfBirth: new FormControl(dateOfBirth.year),
      motherName: new FormControl(motherName, Validators.pattern('^[a-z A-Z]+$')),
      fatherName: new FormControl(fatherName, Validators.pattern('^[a-z A-Z]+$')),
      parentEmail: new FormControl(parentEmail, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')),
      parentMobile: new FormControl(parentMobile, Validators.pattern('^[0-9]{8,12}$')),
      parentISD: new FormControl(parentISD),
      securityQuestion: new FormControl(securityQuestion),
      securityAns: new FormControl(securityAns)
    }, DOBValidator.checkDOB);
  }

  getFormElement(myDetail, elem) {
    return myDetail.get(elem);
  }

  updateMyDetails(myDetail, successDetails) {
    if (!this.checkMyDetailIsInvalid(myDetail)) {
      const data = Object.assign({}, myDetail.value);
      data.dateOfBirth = data.yearOfBirth + '-' + this.sharedService.padPrefix(data.monthOfBirth, 2, '0') +
        '-' + this.sharedService.padPrefix(data.dateOfBirth, 2, '0');
      delete data.yearOfBirth;
      delete data.monthOfBirth;
      this.updateMyDetailsData(data, successDetails);
    }
  }

  updateMyDetailsData(data, successDetails) {
    this.sharedService.showLoader();
    this.myDetailsService.updateMyDetailsData(data).subscribe(
      result => {
        const status = this.contentService.validateResponse(result, data);
        this.sharedService.handleUnexpectedResponse(status);
        if (status === 'success') {
          this.sharedService.hideLoader();
          this.getMyDetailsData();
          this.sharedService.open(successDetails);
        }
      },
      responseError => this.errorInfo = this.sharedService.handleResponseError(responseError)
    );
  }

  createDateRange(type: string) {
    switch (type) {
      case 'date':
        this.generateDate();
        break;
      case 'month':
        this.generateMonth();
        break;
      case 'year':
        this.generateYear();
        break;
      default:
        this.generateDate();
        break;
    }
    return this.items;
  }

  generateDate() {
    this.items = [];
    for (let i = 1; i < 32; i++) {
      this.items.push(i);
    }
  }

  generateMonth() {
    this.items = [];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    this.items = months;
  }

  generateYear() {
    this.items = [];
    const date: Date = new Date();
    const year: number = date.getFullYear();
    for (let i = year; i >= AppSettings.DOB_MIN_YEAR; i--) {
      this.items.push(i);
    }
  }

  checkMyDetailIsInvalid(myDetail) {
    return myDetail.invalid || myDetail.untouched;
  }

  uploadProfilePic(avatarFile) {
    this.sharedService.showLoader();
    let profilePicError = '';
    const maxFileUpload = AppSettings.MAX_IMAGE_SIZE;
    if (avatarFile) {
      const file = avatarFile.nativeElement;
      if (file.files && file.files[0]) {
        const uploadFile = file.files[0];
        if (this.sharedService.checkFileExtension(uploadFile.type, 'image')) {
          const fileSize = uploadFile.size / 1024;
          if (fileSize <= maxFileUpload * 1024) {
            const formData = new FormData();
            formData.append('avatarFile', uploadFile);
            this.myDetailsService.uploadProfilePic(formData).subscribe(
              result => {
                const status = this.contentService.validateResponse(result, {});
                this.sharedService.handleUnexpectedResponse(status);
                if (status === 'success') {
                  this.myDetails.profileInformation.avatar = _.get(result, 'avatar', '');
                } else if (status === 'upload_failure') {
                  profilePicError = 'Profile picture upload failed.';
                }
                this.myDetails.profilePicError = profilePicError;
                this.sharedService.hideLoader();
              },
              responseError => this.errorInfo = this.sharedService.handleResponseError(responseError)
            );
          } else {
            profilePicError = 'File size should not be greater than ' + maxFileUpload + 'MB.';
          }
        } else {
          const acceptedTypes = AppSettings.IMAGE_FORMAT.join(' or ');
          profilePicError = 'Upload only files of type ' + acceptedTypes + '.';
        }
      } else {
        this.sharedService.hideLoader();
        console.log('No file selected.');
      }
    }
    if (profilePicError !== '') {
      this.myDetails.profilePicError = profilePicError;
      this.sharedService.hideLoader();
    }
  }

  private isEmptyContent(data) {
    return (data === '' || data === null || data === undefined);
  }

}
