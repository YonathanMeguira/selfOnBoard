import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ExistingSettingsModel, NewSettingsModel} from '../../Models';
import {FormControl} from '@angular/forms'

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
};


@Component({
  selector: 'existing-exceptions',
  templateUrl: './existing-exceptions.component.html',
  styleUrls: ['../exception.component.css']
})
export class ExistingExceptionsComponent implements OnInit {
  @Input() exceptionsList: any;
  @Input() currentSettings: any;
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
    if (selectedPolicy === this.currentSettings.PolicyName){
      isCurrentPolicy = true
    }else {
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

  @Input() settings: ExistingSettingsModel;
  @Output() onSave = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  constructor() {
    super();

  };

  ngOnInit() {
  };

  restoreDefaultCdr = () => {
    this.settings.AttachementsProcessedLevels.Documents = 2;
    this.settings.AttachementsProcessedLevels.Images = 2;
    this.settings.AttachementsProcessedLevels.Presentations = 2;
    this.settings.AttachementsProcessedLevels.Spreadsheets = 2;
  }
  restoreDefaultNoCdr = () => {
    this.settings.AttachementsWithoutCdr['Unrecognized Files'] = 0;
    this.settings.AttachementsWithoutCdr['Video/Sound'] = 0;
    this.settings.AttachementsWithoutCdr['Applications/Scripts'] = 0;
  };
  deletePolicy = (policy: any) => {
    this.onDelete.emit(policy);
  }


}
;

@Component({
  selector: 'new-exception',
  templateUrl: './new-exception.html',
  styleUrls: ['../exception.component.css']
})

export class NewExceptionComponent extends BaseComponent{
  settings: any = {'AttachementsProcessedLevels': {}, 'AttachementsWithoutCdr': {}};
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


