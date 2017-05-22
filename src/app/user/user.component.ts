import {Component} from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute, Event} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
import {AccountService} from "../account/account.service";

@Component({
  selector: 'app-user-change-password',
  templateUrl: './changePassword.html',
  providers: [AccountService],
  styleUrls: ['./user.component.css']
})

export class UserChangePasswordComponent {
  changePassword = true;
  forgotPassword = false;
  passwordsToSend: any = {};

  constructor(public dialogRef: MdDialogRef<UserChangePasswordComponent>, private accountService: AccountService) {
  }

  switchToForgotPassword = () => {
    this.changePassword = false;
    this.forgotPassword = true;
  }

  applyChangePassword() {
    this.accountService.ChangePassword(this.passwordsToSend).subscribe(
      result => {
        console.log(result);
        const newToken = 'Bearer ' + result.AccessToken;
        localStorage.setItem('token', newToken);
        this.dialogRef.close();
      }, error => {
        console.log(error);
      }
    )
  }
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html?v=${new Date().getTime()',
  styleUrls: ['./user.component.css?v=${new Date().getTime()'],
  entryComponents: [UserChangePasswordComponent]
})

export class UserComponent {
  currentUrl: string;
  username: string;
  private dialogRef: MdDialogRef<any>;

  constructor(private router: Router,
              iconReg: MdIconRegistry,
              sanitizer: DomSanitizer,
              private activatedRoute: ActivatedRoute,
              public dialog: MdDialog) {


    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
      const user = localStorage.getItem('username');
      if (user) {
        this.username = user.charAt(0).toUpperCase() + user.slice(1);
      }
    });

    iconReg.addSvgIcon('dashboard', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dashboard.svg'))
      .addSvgIcon('security', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/security_settings.svg'))
      .addSvgIcon('mails', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/mails.svg'))
      .addSvgIcon('settings', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/settings.svg'))
      .addSvgIcon('loginLogo', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/loginLogo'))
      .addSvgIcon('resecLogo', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/resecLogo.svg'));

  }

  logout = () => {
    localStorage.clear();
    // goes to default route which is login
    this.router.navigate(['']);
  };

  testRoute = (parent: string) => {
    if (this.currentUrl) {
      return this.currentUrl.indexOf(parent) >= 0;
    }
  }

  openChangePassword() {
    this.dialogRef = this.dialog.open(UserChangePasswordComponent, {width: '40%'});
  };
}



