import {Component, OnDestroy} from '@angular/core';
import {Router, NavigationEnd, Event} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
import {AccountService} from '../account/account.service';
import {HTTPStateService} from '../shared/custom-http';
import {Subscription} from 'rxjs/Subscription';
import {TdLoadingService} from '@covalent/core';
import {PasswordMethods, PasswordModel} from '../model/passwords.model';
import {SuccessDialog, ErrorGetDialog, ErrorPostDialog} from '../shared/system.dialogs';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './changePassword.html',
  providers: [AccountService],
  styleUrls: ['./user.component.css']
})

export class UserChangePasswordComponent extends PasswordMethods {
  changePassword = true;
  forgotPassword = false;
  passwordsToSend: PasswordModel = new PasswordModel();

  constructor(public dialogRef: MdDialogRef<UserChangePasswordComponent>,
              private accountService: AccountService) {
    super();
  }

  switchToForgotPassword = () => {
    this.changePassword = false;
    this.forgotPassword = true;
  }

  fieldIsValid(password: string) {
    return this.passwordIsValid(password);
  }

  oldPasswordIsValid(currentPassword: string) {
    return this.currentPasswordIsValid(currentPassword);
  }

  passwordsAreValid(newPassword: string, confirmNewPassword: string) {
    return this.bothPasswordsAreValidAndMatch(newPassword, confirmNewPassword);
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
  entryComponents: [UserChangePasswordComponent, SuccessDialog],
  providers: [AccountService]
})

export class UserComponent implements OnDestroy{
  private currentUrl: string;
  private username: string;
  private servername: string;
  showLoader = false;
  showPostLoader = false;
  conditionalId: string;
  overlayStarSyntax = false;
  getStateSubscription: Subscription;
  postStateSubscription: Subscription;
  getErrorStateSubscription: Subscription;
  postErrorStateSubscription: Subscription;
  postRequestHasStarted: Subscription;

  // TODO:: change the value from the service
  isStripeUser = false;
  private dialogRef: MdDialogRef<any>;

  showSuccessDialog() {
    const dialogRef = this.dialog.open(SuccessDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }
  showGetErrorDialog() {
    const dialogRef = this.dialog.open(ErrorGetDialog);
    console.log('about to open it up')
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }
  showPostErrorDialog() {
    const dialogRef = this.dialog.open(ErrorPostDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }


  togglePostSpinner(): void {
    if (!this.showPostLoader) {
      this._loadingService.resolve('overlayStarSyntax');
    } else {
      this._loadingService.register('overlayStarSyntax');
    }
    this.overlayStarSyntax = !this.overlayStarSyntax;
  }

  constructor(private router: Router,
              iconReg: MdIconRegistry,
              sanitizer: DomSanitizer,
              public dialog: MdDialog,
              public accountService: AccountService,
              private httpState: HTTPStateService,
              private _loadingService: TdLoadingService) {

    this.getStateSubscription = this.httpState.getProtocolState$.subscribe(
      state => {
        this.showLoader = state;
      });
    this.getErrorStateSubscription = this.httpState.getErrorState$.subscribe(
      error => {
        console.log(error);
        this.showLoader = !this.showLoader;
        this.showGetErrorDialog();
      });
    this.postErrorStateSubscription = this.httpState.postErrorState$.subscribe(
      state => {
        console.log('post error occurred');
        this.showPostErrorDialog();
      });
    this.postRequestHasStarted = this.httpState.postStartState$.subscribe(
      state => {
        this.showPostLoader = state;
        this.togglePostSpinner();
      });

    this.postStateSubscription = this.httpState.postProtocolState$.subscribe(
      state => {
        console.log('the state is '+ state);
        if (!state) {
          console.log('no error occurred');
          this.showSuccessDialog();
        };
        // this.togglePostSpinner();
      });

    this.servername = localStorage.getItem('serverName');
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        this.setConditionalIdForAppContainer(event.url);
      }
      const user = localStorage.getItem('username');
      if (user) {
        this.username = user.charAt(0).toUpperCase() + user.slice(1);
      }
    });

    this.accountService.getAccountGeneralSettings().subscribe(
      result => {
        if (result == null) {
          return;
        }

        this.isStripeUser = result.StripeSubscriptionToken ? true : false;
      }, error => {
        console.log(error);
      });

    iconReg.addSvgIcon('dashboard', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dashboard.svg'))
      .addSvgIcon('security', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/security_settings.svg'))
      .addSvgIcon('mails', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/mails.svg'))
      .addSvgIcon('settings', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/settings.svg'))
      .addSvgIcon('loginLogo', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/loginLogo'))
      .addSvgIcon('resecLogo', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/resecLogo.svg'))
      .addSvgIcon('help', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/info.svg'))
      .addSvgIcon('releaseMail', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/releaseMail.svg'))
      .addSvgIcon('forwardMail', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/forwardMail.svg'))
      .addSvgIcon('successIcon', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/success.svg'))
      .addSvgIcon('serverError', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/serverError.svg'))
  }

  setConditionalIdForAppContainer(currentRoute: string) {
    this.conditionalId = (currentRoute === '/user/security/exceptions') ? 'securityId' : 'userAppContainer';
  }


  defineUserOrigin() {
    let hasLoggedWithParamInUrl: boolean;
    const lsValue = localStorage.getItem('urlHasServer');
    hasLoggedWithParamInUrl = (lsValue === 'true') ? true : false;
    return hasLoggedWithParamInUrl;
  }

  logout = () => {
    if (this.defineUserOrigin()) {
      this.router.navigate(['login'], {queryParams: {s: this.servername}});
    } else {
      this.router.navigate(['login']);
    }
    ;
    localStorage.clear();
  };

  testRoute = (parent: string) => {
    if (this.currentUrl) {
      return this.currentUrl.indexOf(parent) >= 0;
    }
  }
  openChangePassword() {
    this.dialogRef = this.dialog.open(UserChangePasswordComponent, {width: '40%'});
  };
  ngOnDestroy() {
    this.getStateSubscription.unsubscribe();
    this.postStateSubscription.unsubscribe();
    this.getErrorStateSubscription.unsubscribe();
    this.postErrorStateSubscription.unsubscribe();
    this.postRequestHasStarted.unsubscribe();
  }
}
