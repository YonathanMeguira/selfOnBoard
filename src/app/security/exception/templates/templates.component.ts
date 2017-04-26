import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'existing-exceptions',
  templateUrl: './existing-exceptions.component.html',
  styleUrls: ['../exception.component.css']
})
export class ExistingExceptionsComponent implements OnInit {
  @Input() departments: any;
  @Output() onNewDptQuery = new EventEmitter<boolean>();
  newDepartment = false;

  constructor() {
  };

  ngOnInit() {
  };

  askForNewDpt = (newDpt: boolean) => {
    this.onNewDptQuery.emit(newDpt);
    this.newDepartment = true;
  }
}
;


@Component({
  selector: 'exception-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['../exception.component.css']
})
export class ExceptionSettingsComponent implements OnInit {
  mainPolicyExceptionsSettings: any;
  @Input() newDepartment: boolean;
  @Input() cdrSettings: any;
  @Input() noCdrSettings: any;
  @Input() noSettingsExist: boolean;
  @Output() onCancel = new EventEmitter<boolean>();

  constructor() {};

  ngOnInit() {
  };

  cancelCreation = (cancel: boolean) => {
    this.onCancel.emit(cancel);
  };
  restoreDefaultNoCdr = () => {
    this.noCdrSettings['Unrecognized Files'] = 0;
    this.noCdrSettings['Video/Sound'] = 0;
    this.noCdrSettings['Applications/Scripts'] = 0;
  };
  restoreDefaultCdr = () => {
    this.cdrSettings.Documents = 2;
    this.cdrSettings.Images = 2;
    this.cdrSettings.Presentations = 2;
    this.cdrSettings.Spreadsheets = 2;
  };

}
;





