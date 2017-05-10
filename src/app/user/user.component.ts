import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {}
  logout = () => {
    localStorage.clear();
    // goes to default route which is login
    this.router.navigate(['']);
  }
clearCache = () => {
    console.log(localStorage);
    localStorage.setItem("token", "qsdfbf");
}
}
