import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AccountService} from '../account/account.service';
@Component({
  selector: 'app-new-user-password',
  templateUrl: './new-user-password.component.html',
  styleUrls: ['./new-user-password.component.css'],
  providers: [AccountService]
})
export class NewUserPasswordComponent {
  passwords: { CurrentPassword: string, NewPassword: string, ConfirmNewPassword: string } = {
    CurrentPassword: '',
    NewPassword: '',
    ConfirmNewPassword: ''
  };
  private currentAccount: any;

  constructor(private accountService: AccountService, private router: Router) {
    this.accountService.getAccountGeneralSettings().subscribe(
      result => {
        if (result == null){
          return;
        }

        this.currentAccount = result;
      });
  }

  changePassword = () => {
    var thisObject = this;
    this.accountService.ChangePassword(this.passwords).subscribe(
      result => {
        var updatedBlob = thisObject.currentAccount;
        updatedBlob.IsFirstLogin = false;
        thisObject.accountService.postAccountGeneralSettings(updatedBlob).subscribe(()=> {
            this.router.navigate(['user/dashboard'])
          },
          (error) => console.log(error))}
          ),
      (error) => console.log(error);
  }
}
