import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
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

export class ExceptionComponent {
  newDepartment = false;
  dataIsLoading = true;
  settings: any = {'AttachementsProcessedLevels': {}, 'AttachementsWithoutCdr': {}};
  exceptionsList: any = {};
  noSettingsExist = true;

  constructor(private securityService: SecurityService, private detectorRef: ChangeDetectorRef) {
    this.loadSettings();
  };
  loadSettings = () => {
    this.securityService.GetPolicyExceptionsSettings().subscribe(
      (result) => {
        if (Object.keys(result).length === 0 && result.constructor === Object) {
          this.noSettingsExist = true;
        } else {
          this.noSettingsExist = false;
          this.settings = result[Object.keys(result)[0]];
          this.exceptionsList = result;
          console.log(this.exceptionsList);
          console.log('result are not empty');
        }
      }, (error) => {
        console.log('an error occurred');
      },
      () => {
        this.dataIsLoading = false;
        this.detectorRef.detectChanges();
      }
    );
  }
  selectDepartment = (departmentName: string) => {
    this.settings = this.exceptionsList[departmentName];
    console.log(this.settings);
  }
  deletePolicy = (policy: any) => {
    console.log('deleting');
    this.securityService.deletePolicyExceptionSettings(policy).subscribe(
      result => {
        console.log(result);
        const policyName = policy.PolicyName;
        delete this.exceptionsList[policyName];
        if (Object.keys(this.exceptionsList).length === 0) {
          this.noSettingsExist = true;
        } else {
          this.settings = this.exceptionsList[Object.keys(this.exceptionsList)[0]];
        }
      },
      error => {
        console.log(error);
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
  postNewSettings = (settings: any) => {
    console.log(settings);
    this.securityService.savePolicyExceptionSettings(settings).subscribe(
      success => {
        console.log(success);
        const policyName = settings.PolicyName;
        this.exceptionsList[policyName] = success;
        this.newDepartment = false;
        this.settings = success;
        this.noSettingsExist = false;
      },
      error => console.log(error)
    );
  }
}
