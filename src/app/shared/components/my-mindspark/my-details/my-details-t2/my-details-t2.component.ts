import { Component, OnInit, OnChanges, DoCheck, ViewChild, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MyDetailsComponent } from '../../../../../modules/my-mindspark/components/my-details/my-details.component';
import { SharedService } from '../../../../shared.service';
import { AppSettings } from '../../../../../settings/app.settings';
import { CountryCode } from '../../../../../settings/country-code';
import * as _ from 'lodash';

@Component({
  selector: 'ms-my-details-t2',
  templateUrl: './my-details-t2.component.html',
  styleUrls: ['./my-details-t2.component.scss']
})
export class MyDetailsT2Component implements OnInit, OnChanges, DoCheck {
  @ViewChild('avatarFile') avatarFile;
  @ViewChild('successDetails') successDetails;
  @ViewChild('countryDropdown') countryDropdown;
  @ViewChild('countryDropdownMenu') countryDropdownMenu;
  @Input('myDetails') myDetails: any;
  genderPics = _.get(AppSettings, 'ERROR_PROFILE_IMAGE', ['', '']);
  countries: any;
  securityQuestions: any;
  myDetail: FormGroup;
  profilePicError: string;
  profileImage: string;

  constructor(private sharedService: SharedService, private myDetailsComponent: MyDetailsComponent) {
    this.myDetail = this.myDetailsComponent.initializeMyDetailFormData();
    this.countries = CountryCode.allCountries;
  }

  ngOnInit() { }

  ngOnChanges(changes: any): void {
    const changesValue = _.get(changes, 'myDetails.currentValue', null);
    if (changesValue !== undefined && changesValue !== null) {
      this.myDetails = changesValue;
      this.securityQuestions = _.get(this.myDetails, 'profileInformation.secretQuestions', []);
      this.myDetail = this.myDetailsComponent.setMyDetailFormData();
      const countryCode = _.get(this.myDetail, 'value.parentISD', '+91');
      this.setCountry(countryCode);
    }
  }

  ngDoCheck(): void {
    const image = _.get(this.myDetails, 'profileInformation.avatar', null);
    const picError = _.get(this.myDetails, 'profilePicError', '');
    if (this.profileImage !== image) { this.profileImage = image; }
    if (picError !== '') {
      this.profilePicError = picError;
      this.myDetails.profilePicError = '';
      setTimeout(() => this.profilePicError = '', 3000);
    }
  }

  updateMyDetails() {
    this.myDetailsComponent.updateMyDetails(this.myDetail, this.successDetails);
  }

  createDateRange(type: string) {
    return this.myDetailsComponent.createDateRange(type);
  }

  getFormElement(elem) {
    return this.myDetailsComponent.getFormElement(this.myDetail, elem);
  }

  checkMyDetailIsInvalid() {
    return this.myDetailsComponent.checkMyDetailIsInvalid(this.myDetail);
  }

  uploadProfilePic() {
    this.myDetailsComponent.uploadProfilePic(this.avatarFile);
  }

  imageError() {
    const profileInfo = _.get(this.myDetails, 'profileInformation', null);
    if (profileInfo) {
      const image: string = this.sharedService.setDefaultProfilePic(profileInfo);
      this.myDetails.profileInformation.avatar = image;
    }
  }

  toggleCountryDropdown() {
    const dropdownClass: string[] = _.get(this.countryDropdown, 'nativeElement.classList', []);
    this.toggleClass(dropdownClass, 'active');
  }

  selectCountry(country) {
    const dropdownMenuClass: string[] = _.get(this.countryDropdownMenu, 'nativeElement.classList', []);
    this.setSelectedCountryName(country);
    this.myDetail.value.parentISD = country[2];
    this.myDetail.markAsTouched();
    this.toggleClass(dropdownMenuClass, 'showMenu');
    this.toggleCountryDropdown();
  }

  private setSelectedCountryName(country: any) {
    const dropdownNativeElement: string = _.get(this.countryDropdown, 'nativeElement', '');
    const countryText = `<span class="` + country[1] + ` flag"></span><span class="code">` + country[2] + `</span>`;
    if (!_.isEmpty(dropdownNativeElement)) {
      this.countryDropdown.nativeElement.innerHTML = countryText;
    }
  }

  setCountry(code) {
    if (code !== '') {
      let country;
      _.forEach(this.countries, function (value) {
        if (value[2] === code) {
          country = value;
        }
      });
      this.setSelectedCountryName(country);
    }
  }

  private toggleClass(classList, className) {
    classList.toggle(className);
    return classList;
  }
}
