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

  constructor(private accountService: AccountService, private router: Router) {
  };

  changePassword = () => {
    this.accountService.ChangePassword(this.passwords).subscribe(
      result => this.router.navigate(['user/firstTime']),
      error => console.log(error)
    );
  }
}
