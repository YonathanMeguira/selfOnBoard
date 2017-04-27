import {Component, OnInit} from '@angular/core';
import {ExceptionSettingsComponent, ExistingExceptionsComponent, NewExceptionComponent} from './templates/templates.component';
import {SecurityService} from '../security.service';
import {ExistingSettingsModel, NewSettingsModel} from '../Models';

@Component({
  selector: 'app-exception',
  templateUrl: './exception.component.html',
  styleUrls: ['./exception.component.css'],
  entryComponents: [ExceptionSettingsComponent, ExistingExceptionsComponent, NewExceptionComponent],
  providers: [SecurityService]
})

export class ExceptionComponent implements OnInit {
  newDepartment = false;
  settings: any = {'AttachementsProcessedLevels': {}, 'AttachementsWithoutCdr': {}};
  newSettings: NewSettingsModel;
  noSettingsExist = true;
  departments: any = [
    {'name': 'Accounting Department', 'users': 11},
    {'name': 'Executives', 'users': 8},
    {'name': 'Accounting Department', 'users': 10},
    {'name': 'Marketing Department', 'users': 5}
  ];

  constructor(private securityService: SecurityService) {
    this.loadSettings();
  };

  ngOnInit() {};
  cancelCreation = (cancel: boolean) => {
    this.newDepartment = cancel;
    console.log(this.settings);
    this.noSettingsExist = (Object.keys(this.settings).length === 0 && this.settings.constructor === Object) ? true : false;

  }
  newDptQuery = (newDpt: boolean) => {
    this.newDepartment = newDpt;
  }
  loadSettings = () => {
    this.securityService.GetPolicyExceptionsSettings().subscribe(
      result => {
        if (Object.keys(result).length === 0 && result.constructor === Object) {
          this.noSettingsExist = true;
          console.log(this.noSettingsExist);
        } else {
          this.noSettingsExist = false;
          this.settings = result;
        }
      }, error => {
        console.log('an error occurred');
      });
  };

  postNewSettings = (settings: any) => {
    console.log(settings);
    this.securityService.savePolicyExceptionSettings(settings).subscribe(
      success => {console.log(success); console.log('cool')},
      error => console.log(error)
    );
  }
}
