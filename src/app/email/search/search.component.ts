import {Component, OnInit} from '@angular/core';
import {MailService} from '../email.service';
import {EmailComponent} from '../email.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../email.component.css'],
  providers: [MailService]
})
export class SearchComponent extends EmailComponent implements OnInit{

  emails: any = {};
  query: any = {};
  isFirstTime;
  noSearchInitiated = true;
  totalNumberOfMails: number;
  pullingData = false;
  noResultFound = false;
  fakeObject = {
    'SanitizationId': 34,
    'SanitizationDate': '05-07-17',
    'Reason Blocked': 'File not supported',
    'Recipient': 'jojo@jo.com',
    'Sender': 'urse@use.co',
    'Subject': 'urgent',
    'Attached Files': 'xls'
  };

  constructor(private mailService: MailService) {
    super();
  };
  ngOnInit() {
    //this.isFirstTime = (localStorage.getItem('isFirstTime') === 'false') ? false : true;
    this.isFirstTime = false;
    console.log(this.isFirstTime);
  }

  searchMails() {
    this.pullingData = true;
    this.mailService.searchMails(this.query).subscribe(
      success => {
        console.log(success);
        this.emails = success.List[0];
       // this.emails.SanitizationDate = new Date(success.List[0].SanitizationDate) || " ";
        this.totalNumberOfMails = success.Total;
        this.noResultFound = (this.totalNumberOfMails > 0) ? false : true;
        this.pullingData = false;
        this.noSearchInitiated = false;
      },
      error => {
        console.log(error);
      }
    );
  }

  performAction = (sanitizationId: number, action: string) => {
    const id = [sanitizationId];
    this.mailService.performAction(id, action).subscribe(
      success => {
        console.log(success);
      }, error => {
        console.log(error);
      }
    );
  }
  actionsAvailable = (selectionLength: number) => {
    if (selectionLength > 0) {
      return true;
    } else {
      return false;
    }
  }
  fakeSearch = () => {
    this.emails = this.fakeObject;
  }
}
