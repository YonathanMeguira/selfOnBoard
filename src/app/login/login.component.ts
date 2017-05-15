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
  }

  onSubmit() {
    this.submitted = true;
    this.CheckLogin();
  }

  CheckLogin() {
    this.checkingUser = true;
    this.wrongId = false;
    this.userService.login(this.user.server, this.user.username, this.user.password)
      .subscribe(
        success => {
          console.log(success);
          if (success.UserRole !== 'SelfOnBoard') {
            this.wrongId = true;
            this.submitted = false;
            this.checkingUser = false;
          } else {
            localStorage.setItem('userRole', success.UserRole);
            const token = 'Bearer ' + success.AccessToken;
            const isFirstTime = success.UserAdditionalData.IsFirstTime;
            // Local storage only accepts string and not booleans, thus i convert this value to boolean to decide where to send user
            const isFirstTimeBool = (success.UserAdditionalData.IsFirstTime === 'true') ? true : false;
            localStorage.setItem('isFirstTime', isFirstTime);
            localStorage.setItem('token', token);
            localStorage.setItem('serverName', this.user.server);
            this.checkingUser = false;
            if (isFirstTimeBool) {
              this.router.navigate(['user/firstTime']);
            } else {
              this.router.navigate(['/user/dashboard']);
            }
          }
        },
        error => {
          console.log(error);
          this.wrongId = true;
          this.submitted = false;
          this.checkingUser = false;
        }
      );

    console.log(this.router);
  }
}
