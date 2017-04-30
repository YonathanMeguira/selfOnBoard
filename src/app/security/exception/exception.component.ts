import {Component, OnInit} from '@angular/core';
import {
  ExceptionSettingsComponent,
  ExistingExceptionsComponent,
  NewExceptionComponent
} from './templates/templates.component';
import {SecurityService} from '../security.service';

@Component({
  selector: 'app-exception',
  templateUrl: './exception.component.html',
  styleUrls: ['./exception.component.css'],
  entryComponents: [ExceptionSettingsComponent, ExistingExceptionsComponent, NewExceptionComponent],
  providers: [SecurityService]
})

export class ExceptionComponent implements OnInit {
  newDepartment = false;
  dataIsLoading: boolean;
  settings: any = {'AttachementsProcessedLevels': {}, 'AttachementsWithoutCdr': {}};
  exceptionsList: Array<any>;
  noSettingsExist = true;
  allSettings: any;

  constructor(private securityService: SecurityService) {
    this.loadSettings();
  };

  ngOnInit() {
  };

  selectDepartment = (departmentName: string) => {
    this.settings = this.allSettings[departmentName];
    console.log(this.settings);
  }
  deletePolicy = (policy: any) => {
    console.log('deleting')
    this.securityService.deletePolicyExceptionSettings(policy).subscribe(
      result => {
        console.log(result);
        const policyName = policy.PolicyName;
        delete this.allSettings[policyName];
        this.settings = this.allSettings[Object.keys(this.allSettings)[0]];
      },
      error => {
        console.log(error)
      }
    );
  }
  cancelCreation = (cancel: boolean) => {
    this.newDepartment = cancel;
    console.log(this.settings);
    this.noSettingsExist = (Object.keys(this.settings).length === 0 && this.settings.constructor === Object) ? true : false;

  }
  newDptQuery = (newDpt: boolean) => {
    this.newDepartment = newDpt;
  }
  loadSettings = () => {
    this.dataIsLoading = true;
    this.securityService.GetPolicyExceptionsSettings().subscribe(
      result => {
        if (Object.keys(result).length === 0 && result.constructor === Object) {
          this.noSettingsExist = true;
          console.log(this.noSettingsExist);
        } else {
          this.noSettingsExist = false;
          // accessing the first object of the collection
          this.allSettings = result;
          this.settings = result[Object.keys(result)[0]];
          this.exceptionsList = result;
          console.log(this.exceptionsList);
          this.dataIsLoading = false;
        }
      }, error => {
        console.log('an error occurred');
        this.dataIsLoading = false;
      }
    );
  }

  postNewSettings = (settings: any) => {
    console.log(settings);
    this.securityService.savePolicyExceptionSettings(settings).subscribe(
      success => {
        console.log(success);
        console.log('cool');
        const policyName = settings.PolicyName;
        this.allSettings[policyName] = settings;
        this.newDepartment = false;
        this.settings = this.allSettings[policyName];
      },
      error => console.log(error)
    );
  }
}
