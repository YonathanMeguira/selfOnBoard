import {Component, OnInit} from '@angular/core';
import {UserService} from 'app/shared/users.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  user: any = {};
  public wrongId = false;
  public submitted = false;
  public checkingUser = false;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    localStorage.clear();
  }

  onSubmit() {
    this.submitted = true;
    this.CheckLogin();
  }

  checkState() {
    const servername = localStorage.getItem('serverName');
    const token = localStorage.getItem('token');
    console.log('here it is ', servername);
    console.log('token', token)
    if (servername && token.length > 14) {
      return true;
    }
    return false;
  }

  CheckLogin() {
    console.log(localStorage)
    this.checkingUser = true;
    this.wrongId = false;
    this.userService.login(this.user.server, this.user.username, this.user.password)
      .subscribe(
        success => {
          if (success.UserRole !== 'SelfOnBoard') {
            this.wrongId = true;
            this.submitted = false;
            this.checkingUser = false;
          } else {
            localStorage.setItem('serverName', this.user.server);
            localStorage.setItem('userRole', success.UserRole);
            const token = 'Bearer ' + success.AccessToken;
            const isFirstTime = success.UserAdditionalData.IsFirstTime;
            // Local storage only accepts string and not booleans, thus i convert this value to boolean to decide where to send user
            const isFirstTimeBool = (success.UserAdditionalData.IsFirstTime === 'true') ? true : false;
            localStorage.setItem('isFirstTime', isFirstTime);
            localStorage.setItem('token', token);
            localStorage.setItem('username', this.user.username);
            this.checkingUser = false;
            // is local storage has above values then go into the next code
            if (this.checkState()) {
              if (isFirstTimeBool) {
                this.router.navigate(['user/firstTimeChangePassword']);
              } else {
                console.log(localStorage);
                this.router.navigate(['/user/dashboard']);
              }
            }
          }
        },
        error => {
          console.log(error);
          this.wrongId = true;
          this.submitted = false;
          this.checkingUser = false;
        }
      )
    ;
  }
}
