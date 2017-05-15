import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {DialogsService} from './dialogs.service';
@Injectable()
export class ResponseHandlerService {

  constructor(private router: Router, private dialogs: DialogsService) {
  }

  handle401Error = () => {
    console.log('navigating back to login');
    this.dialogs.Logout('Session Expired', 'Your session has expired, you will be logged out in ').subscribe(
      res => {
        localStorage.clear();
        this.router.navigate(['']);
      }
    );
  }
}
