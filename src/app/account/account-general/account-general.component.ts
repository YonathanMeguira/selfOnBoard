import {Component, OnInit} from '@angular/core';
import {AccountService} from '../account.service';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
@Component({
  selector: 'change-password-modal-component',
  templateUrl: './changePassword.html',
  styleUrls: ['./account-general.component.css']
})

export class ChangePasswordModalComponent {
  resetPassword = false;
  forgotPassword = true;

  constructor(public dialogRef: MdDialogRef<ChangePasswordModalComponent>) {
  }

  switchToForgotPassword = () => {
    this.resetPassword = true;
    this.forgotPassword = false;
  }
}


class SettingsForm {
  name: string;
  phone: number;
  email: string;
  password?: string;
}
;

@Component({
  selector: 'app-account-general',
  templateUrl: './account-general.component.html',
  styleUrls: ['./account-general.component.css'],
  providers: [AccountService],
  entryComponents: [ChangePasswordModalComponent]
})
export class AccountGeneralComponent implements OnInit {

  private dialogRef: MdDialogRef<any>;
  testEmailSent = false;
// scroll down to see class SettingsForm
  settings: SettingsForm = new SettingsForm;
  admin: SettingsForm = new SettingsForm;

  constructor(private accountService: AccountService, public dialog: MdDialog) {
  }

  ngOnInit() {
    this.accountService.GetAccountGeneralSettings().subscribe(
      result => {
        console.log(result);
      }, error => {
        console.log(error);
      }
    );
  }

  sendTestEmail = () => {
    this.testEmailSent = true;
    setTimeout(() => {
      this.testEmailSent = !this.testEmailSent;
    }, 2500);
  }

  openChangePassword() {
    this.dialogRef = this.dialog.open(ChangePasswordModalComponent, {width: '40%'});
    this.dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}

