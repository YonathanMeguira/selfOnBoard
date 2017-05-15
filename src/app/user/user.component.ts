import {Component} from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  constructor(private router: Router,
              iconReg: MdIconRegistry,
              sanitizer: DomSanitizer,
              private activatedRoute: ActivatedRoute,) {

    this.router.events
     // .filter(event => event instanceof NavigationEnd)
     // .map(() => this.activatedRoute)
      .subscribe((event) => console.log(event));

    iconReg.addSvgIcon('dashboard', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dashboard.svg'))
      .addSvgIcon('security', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/security_settings.svg'))
      .addSvgIcon('mails', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/mails.svg'))
      .addSvgIcon('settings', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/settings.svg'));
  }

  logout = () => {
    localStorage.clear();
    // goes to default route which is login
    this.router.navigate(['']);
  };
}
