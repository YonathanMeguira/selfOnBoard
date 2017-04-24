import {Component, OnInit} from '@angular/core';
import {UserService} from 'app/services/users.service';
import {Router, ActivatedRoute, Params} from '@angular/router';


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
    this.userService.login(this.user.server, this.user.username, this.user.password)
      .subscribe(
        success => {
          console.log(success);
          const token = 'Bearer ' + success.AccessToken;
          localStorage.setItem('token', token);
          localStorage.setItem('serverName', this.user.server);
          this.checkingUser = false;
          this.router.navigate(['/user/dashboard']);
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
