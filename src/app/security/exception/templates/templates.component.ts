import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TdFileService} from '@covalent/core';
import {Policy} from '../../../model/company-policy';

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
  };

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


  @Input() settings: Policy;
  @Output() onSave = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  users: any[];
  addedUsers: string;
  addingUsers: boolean;
  numberOfMaxItems = 1;

  constructor() {
    super();
    this.addingUsers = false;
  };

  // TODO :: check if we can improve efficiency
  ngOnChanges(...args: any[]) {
    const exceptions = args[0].settings.currentValue.Exceptions;
    console.log(exceptions);
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
          if (!this.settings.exceptions.includes(noSpaceEmail)) {
            this.settings.exceptions.push(noSpaceEmail);
          }
        }
      }
      console.log(this.settings.exceptions);
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
    settings.exceptions = extractedUsers;
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
    const users = newSettings.exceptions;
    const extractedUsers = [];
    users.forEach((user) => {
      extractedUsers.push(user.value);
    });
    delete newSettings.exceptions;
    newSettings.exceptions = extractedUsers;
    this.onSave.emit(newSettings);
  }
}


