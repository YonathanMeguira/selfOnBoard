import {Component, Input, Output, EventEmitter, Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TdFileService} from '@covalent/core';
import {Policy} from '../../../model/company-policy';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

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

@Component({
  selector: 'existing-exceptions',
  templateUrl: './existing-exceptions.component.html',
  styleUrls: ['../exception.component.css']
})
export class ExistingExceptionsComponent {
  @Input() exceptionsList: any;
  @Input() currentSettings: any;
  @Input() noSettingsExist: boolean;
  @Input() newDepartmentRequired: boolean;
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
    if (selectedPolicy === this.currentSettings.policyName) {
      isCurrentPolicy = true;
    } else {
      isCurrentPolicy = false;
    }
    return isCurrentPolicy;
  }
}

@Component({
  selector: 'app-confirm-exception-deletion',
  template: ` <h3 md-dialog-title>Delete {{data}} ?</h3>
  <md-dialog-content>This action is irreversible</md-dialog-content>
  <md-dialog-actions>
    <button md-button md-dialog-close (click)="dialogRef.close(false)">Don't Delete</button>
    <!-- Can optionally provide a result for the closing dialog. -->
    <button md-button [style.color]="'red'" (click)="dialogRef.close(true)">Delete</button>
  </md-dialog-actions>
  `,
})
export class DeleteExceptionDialog {
  constructor(public dialogRef: MdDialogRef<DeleteExceptionDialog>, @Inject(MD_DIALOG_DATA) public data: any) {
  }
}

@Component({
  selector: 'exception-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['../exception.component.css'],
  providers: [TdFileService],
  entryComponents: [DeleteExceptionDialog]
})
export class ExceptionSettingsComponent extends BaseComponent {

  @Input() settings: Policy;
  @Output() onSave = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  users: any[];
  addedUsers: string;
  addingUsers: boolean;
  numberOfMaxItems = 1;

  constructor(public dialog: MdDialog) {
    super();
    this.addingUsers = false;
  };


  addUsers(value: boolean) {
    this.addingUsers = value;
    if (!value && this.addedUsers) {
      // adding the users
      const splittedEmails = this.addedUsers.split(',');
      for (const email of splittedEmails) {
        const noSpaceEmail = email.replace(/\s+/g, '');
        if (this.stringIsEmail(noSpaceEmail)) {
          if (!this.settings.exceptions.includes(noSpaceEmail)) {
            this.settings.exceptions.push(noSpaceEmail);
          }
        }
      }
    }
  }

  moreItemsToDisplay(exceptions: Array<string>) {
    if (exceptions) {
      return (exceptions.length > this.numberOfMaxItems);
    }
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

  deletePolicy = (policy: Policy) => {
    const dialogRef = this.dialog.open(DeleteExceptionDialog, {
      data: policy.policyName
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result){ // result => boolean : true or false
        this.onDelete.emit(policy);
      }
    });
  }
  saveSettings = (settings: Policy) => {
    this.onSave.emit(settings);
  }
}
@Component({
  selector: 'new-exception',
  templateUrl: './new-exception.html',
  styleUrls: ['../exception.component.css']
})
export class NewExceptionComponent extends BaseComponent {
  settings: Policy = new Policy();
  addedUsers = '';
  @Output() onCancel = new EventEmitter<any>();
  @Output() onSave = new EventEmitter<Policy>();
  constructor() {
    super();
    this.settings.AttachmentsProcessedLevels.documents = 1;
    this.settings.AttachmentsProcessedLevels.images = 1;
    this.settings.exceptions = [];
    this.settings.AttachmentsProcessedLevels.presentations = 1;
    this.settings.AttachmentsProcessedLevels.spreadsheets = 1;
    this.settings.AttachmentsWithoutCdr.unrecognizedFiles = 0;
    this.settings.AttachmentsWithoutCdr.videoSound = 0;
    this.settings.AttachmentsWithoutCdr.applicationsScripts = 0;
    this.settings.SpecialAttachments.passwordProtected = 0;
  };
  cancelCreation = (cancel: boolean) => {
    this.onCancel.emit(cancel);
  }
  saveSettings = (newSettings: any) => {
    const splittedEmails = this.addedUsers.split(',');
    for (const email of splittedEmails) {
      const noSpaceEmail = email.replace(/\s+/g, '');
      if (this.stringIsEmail(noSpaceEmail)) {
        this.settings.exceptions.push(noSpaceEmail);
      }
    }
    this.onSave.emit(newSettings);
  }
  newExceptionHasEmail() {
    return this.addedUsers.length < 5;
  }
}


