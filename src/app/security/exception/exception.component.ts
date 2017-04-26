import {Component, OnInit} from '@angular/core';
import {ExceptionSettingsComponent, ExistingExceptionsComponent} from './templates/templates.component';
import {SecurityService} from '../security.service';


@Component({
  selector: 'app-exception',
  templateUrl: './exception.component.html',
  styleUrls: ['./exception.component.css'],
  entryComponents: [ExceptionSettingsComponent, ExistingExceptionsComponent],
  providers: [SecurityService]
})

export class ExceptionComponent implements OnInit {
  newDepartment = false;
  settings: any;
  emptySettings = {"AttachementsProcessedLevels": {}, "AttachementsWithoutCdr": {}}
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

  newDptQuery = (newDpt: boolean) => {
    this.newDepartment = newDpt;
    this.noSettingsExist = !this.noSettingsExist;
  }
  loadSettings = () => {
    this.securityService.GetPolicyExceptionsSettings().subscribe(
      result => {
        if (Object.keys(result).length === 0 && result.constructor === Object) {
          this.noSettingsExist = true;
          this.settings = this.emptySettings;
        } else {
          this.settings = result;
        }
      }, error => {
        console.log('an error occurred');
      });
  }
}
