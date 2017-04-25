import {Component, OnInit} from '@angular/core';
import {AccountService} from '../account.service';
@Component({
  selector: 'app-account-general',
  templateUrl: './account-general.component.html',
  styleUrls: ['./account-general.component.css'],
  providers: [AccountService]
})
export class AccountGeneralComponent implements OnInit {

  AccountGeneralSettings: any = {"Admin": {}, "Company": {}}

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.accountService.GetAccountGeneralSettings().subscribe(
      result => {
        this.AccountGeneralSettings = result.data;
      }
    );
  }

  SaveSettings = () => {
    this.accountService.PostAccountGeneralSettings(this.AccountGeneralSettings)
      .subscribe(response => {
        console.log("all good");
      }, error => {
        console.log('could ot save settings');
        console.log(error);
      });
  }

}
