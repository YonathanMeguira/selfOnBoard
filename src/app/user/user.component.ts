import {Component, OnDestroy, ChangeDetectionStrategy} from '@angular/core';
import {Router, NavigationEnd, Event} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
import {AccountService} from '../account/account.service';
import {HTTPStateService} from '../shared/custom-http';
import {Subscription} from 'rxjs/Subscription';
import {TdLoadingService} from '@covalent/core';


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

  constructor(public dialogRef: MdDialogRef<UserChangePasswordComponent>,
              private accountService: AccountService) {

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
  private currentUrl: string;
  private username: string;
  private servername: string;
  showLoader = false;
  showPostLoader = false;
  conditionalId: string;
  overlayStarSyntax = false;
  getStateSubscription: Subscription;
  postStateSubscription: Subscription;
  // TODO:: change the value from the service
  isStripeUser = false;
  private dialogRef: MdDialogRef<any>;

  togglePostSpinner(): void {
    if (this.showPostLoader) {
      console.log('subscribing to post');
      this._loadingService.register('overlayStarSyntax');
    } else {
      console.log('resolving from post')
      this._loadingService.resolve('overlayStarSyntax');
    }
    this.overlayStarSyntax = !this.overlayStarSyntax;
  }

  constructor(private router: Router,
              iconReg: MdIconRegistry,
              sanitizer: DomSanitizer,
              public dialog: MdDialog,
              private httpState: HTTPStateService,
              private _loadingService: TdLoadingService) {

    this.getStateSubscription = this.httpState.getProtocolState$.subscribe(
      state => {
        this.showLoader = state;
      });

    this.postStateSubscription = this.httpState.postProtocolState$.subscribe(
      state => {
        this.showPostLoader = state;
        this.togglePostSpinner();
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

    iconReg.addSvgIcon('dashboard', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dashboard.svg'))
      .addSvgIcon('security', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/security_settings.svg'))
      .addSvgIcon('mails', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/mails.svg'))
      .addSvgIcon('settings', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/settings.svg'))
      .addSvgIcon('loginLogo', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/loginLogo'))
      .addSvgIcon('resecLogo', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/resecLogo.svg'))
      .addSvgIcon('help', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/info.svg'))

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
  }
}
