import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ExistingSettingsModel, NewSettingsModel} from '../../Models';

@Component({
  selector: 'existing-exceptions',
  templateUrl: './existing-exceptions.component.html',
  styleUrls: ['../exception.component.css']
})
export class ExistingExceptionsComponent implements OnInit {
  @Input() departments: any;
  newDepartment = false;

  constructor() {
  };

  ngOnInit() {
  };
}
;

@Component({
  selector: 'exception-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['../exception.component.css']
})
export class ExceptionSettingsComponent implements OnInit {

  mainPolicyExceptionsSettings: any;

  @Input() settings: ExistingSettingsModel;
  @Output() onSave = new EventEmitter<any>();

  constructor() {
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
  }

}
;

@Component({
  selector: 'new-exception',
  templateUrl: './new-exception.html',
  styleUrls: ['../exception.component.css']
})

export class NewExceptionComponent {
  settings: any = {'AttachementsProcessedLevels': {}, 'AttachementsWithoutCdr': {}};
  @Output() onCancel = new EventEmitter<any>();
  @Output() onSave = new EventEmitter<NewSettingsModel>();

  constructor() {
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
    console.log(newSettings);
    this.onSave.emit(newSettings);
  }
}


