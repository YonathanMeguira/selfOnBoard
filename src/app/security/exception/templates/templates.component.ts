import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {ExistingSettingsModel, NewSettingsModel} from '../../Models';
import {FormControl} from '@angular/forms';
import {TdFileService, IUploadOptions} from '@covalent/core';

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

  stringIsEmail(email: string) {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
  }
}
;


@Component({
  selector: 'existing-exceptions',
  templateUrl: './existing-exceptions.component.html',
  styleUrls: ['../exception.component.css']
})
export class ExistingExceptionsComponent {
  @Input() exceptionsList: any;
  @Input() currentSettings: any;
  @Input() noSettingsExist: boolean;
  @Output() onSelect = new EventEmitter<any>();
  selectedPolicyName: string;
  validators: any;
  errorMessages: any;

  constructor() {
  };


  selectDepartment = (departmentName: string) => {
    this.selectedPolicyName = departmentName;
    this.onSelect.emit(departmentName);
  }

  isCurrentPolicy = (selectedPolicy: string) => {
    let isCurrentPolicy = false;
    if (selectedPolicy === this.currentSettings.PolicyName) {
      isCurrentPolicy = true;
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
  styleUrls: ['../exception.component.css'],
  providers: [TdFileService]
})
export class ExceptionSettingsComponent extends BaseComponent implements OnChanges {

  mainPolicyExceptionsSettings: any;

  @Input() settings: ExistingSettingsModel;
  @Output() onSave = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  fileSelectMsg = 'No file selected yet.';
  fileUploadMsg = 'No file uploaded yet.';
  users: any[];
  addedUsers: string;
  addingUsers: boolean;
  numberOfMaxItems = 1;

  constructor(private fileUploadService: TdFileService) {
    super();
    this.addingUsers = false;
  };

  ngOnChanges(...args: any[]) {
    const exceptions = args[0].settings.currentValue.Exceptions;
    this.users = exceptions.slice(0, this.numberOfMaxItems);
    console.log(exceptions);
  }

  addUsers(value: boolean) {
    this.addingUsers = value;
    if (!value && this.addedUsers) {
      // adding the users
      const splittedEmails = this.addedUsers.split(',');
      for (const email of splittedEmails) {
        const noSpaceEmail = email.replace(/\s+/g,'');
        if (this.stringIsEmail(noSpaceEmail)) {
          console.log('adding ', noSpaceEmail);
          if (!this.settings.Exceptions.includes(noSpaceEmail)) {
            this.settings.Exceptions.push(noSpaceEmail);
          }
        }
      }
      console.log(this.settings.Exceptions);
    }
  }

  moreItemsToDisplay(exceptions: Array<string>) {
    return (exceptions.length > this.numberOfMaxItems);
  }

  displayRemainingItems(exceptions: Array<string>) {
    const arrLength = exceptions.length;
    this.users = exceptions.slice(0, arrLength);
    this.numberOfMaxItems = arrLength;
  }

  displayLessItems(exceptions: Array<string>) {
    this.numberOfMaxItems = 1;
    this.users = exceptions.slice(0, 1);
  };

  deletePolicy = (policy: any) => {
    this.onDelete.emit(policy);
  }
  saveSettings = (settings: any) => {
    const users = this.users;
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
  settings: any = {'AttachementsProcessedLevels': {}, 'AttachementsWithoutCdr': {}, 'SpecialAttachments': {}};
  @Output() onCancel = new EventEmitter<any>();
  @Output() onSave = new EventEmitter<NewSettingsModel>();

  constructor() {
    super();
    this.settings.AttachementsProcessedLevels.Documents = 2;
    this.settings.AttachementsProcessedLevels.Images = 2;
    this.settings.AttachementsProcessedLevels.Presentations = 2;
    this.settings.AttachementsProcessedLevels.Spreadsheets = 2;
    this.settings.AttachementsWithoutCdr['Unrecognized Files'] = 0;
    this.settings.AttachementsWithoutCdr['Video/Sound'] = 0;
    this.settings.AttachementsWithoutCdr['Applications/Scripts'] = 0;
    this.settings.SpecialAttachments['Password Protected'] = 0;
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


