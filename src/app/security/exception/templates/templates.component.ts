import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms'
import {Policy} from "../../../model/company-policy";

class BaseComponent {
  validators = [this.isEmail];
  errorMessages = {
    'mustbeEmail': 'Please enter valid email addresses'
  };

  isEmail(control: FormControl) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(control.value)) {
      return {
        'mustbeEmail': true
      };
    }
    return null;
  };
}
;


@Component({
  selector: 'existing-exceptions',
  templateUrl: './existing-exceptions.component.html',
  styleUrls: ['../exception.component.css']
})
export class ExistingExceptionsComponent implements OnInit {
  @Input() exceptionsList: any;
  @Input() currentSettings: any;
  @Input() noSettingsExist: boolean;
  @Output() onSelect = new EventEmitter<any>();
  selectedPolicyName: string;
  validators: any;
  errorMessages: any;

  constructor() {
  };

  ngOnInit() {
  }
  ;

  selectDepartment = (departmentName: string) => {
    this.selectedPolicyName = departmentName;
    this.onSelect.emit(departmentName);
  };

  isCurrentPolicy = (selectedPolicy: string) => {
    let isCurrentPolicy = false;
    if (selectedPolicy === this.currentSettings.PolicyName) {
      isCurrentPolicy = true
    } else {
      isCurrentPolicy = false;
    }
    return isCurrentPolicy;
  }
}
;

@Component({
  selector: 'exception-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['../exception.component.css']
})
export class ExceptionSettingsComponent extends BaseComponent implements OnInit {

  mainPolicyExceptionsSettings: any;

  @Input() settings: Policy;
  @Output() onSave = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  constructor() {
    super();

  };

  ngOnInit() {
  };

  // restoreDefaultCdr = () => {
  //   this.settings.AttachementsProcessedLevels.Documents = 2;
  //   this.settings.AttachementsProcessedLevels.Images = 2;
  //   this.settings.AttachementsProcessedLevels.Presentations = 2;
  //   this.settings.AttachementsProcessedLevels.Spreadsheets = 2;
  // }
  // restoreDefaultNoCdr = () => {
  //   this.settings.AttachementsWithoutCdr['Unrecognized Files'] = 0;
  //   this.settings.AttachementsWithoutCdr['Video/Sound'] = 0;
  //   this.settings.AttachementsWithoutCdr['Applications/Scripts'] = 0;
  //   this.settings.SpecialAttachments['Password Protected'] = 0;
  // };
  deletePolicy = (policy: any) => {
    this.onDelete.emit(policy);
  }
  restoreDefaultSpecial = () => {
    console.log('service not ready yet..');
  }
  saveSettings = (settings: any) => {
    const users = settings.Exceptions;
    console.log(settings);
    const extractedUsers = [];
    users.forEach((user) => {
      if (user !== null && typeof user === 'object') {
        extractedUsers.push(user.value);
      } else {
        extractedUsers.push(user);
      }
    });
    settings.Exceptions = extractedUsers;
    this.onSave.emit(settings);
  }

}
;

@Component({
  selector: 'new-exception',
  templateUrl: './new-exception.html',
  styleUrls: ['../exception.component.css']
})

export class NewExceptionComponent extends BaseComponent {
  settings: Policy;
  @Output() onCancel = new EventEmitter<any>();
  @Output() onSave = new EventEmitter<Policy>();

  constructor() {
    super();
    this.settings.AttachmentsProcessedLevels.documents = 2;
    this.settings.AttachmentsProcessedLevels.images = 2;
    this.settings.AttachmentsProcessedLevels.presentations = 2;
    this.settings.AttachmentsProcessedLevels.spreadsheets = 2;
    this.settings.AttachmentsWithoutCdr.unrecognizedFiles = 0;
    this.settings.AttachmentsWithoutCdr.videoSound = 0;
    this.settings.AttachmentsWithoutCdr.applicationsScripts = 0;
    this.settings.SpecialAttachments.passwordProtected = 0;
  };

  cancelCreation = (cancel: boolean) => {
    this.onCancel.emit(cancel);
  }
  saveSettings = (newSettings: any) => {
    const users = newSettings.Exceptions;
    const extractedUsers = [];
    users.forEach((user) => {
      extractedUsers.push(user.value);
    });
    delete newSettings.Exceptions;
    newSettings.Exceptions = extractedUsers;
    this.onSave.emit(newSettings);
  }
}


