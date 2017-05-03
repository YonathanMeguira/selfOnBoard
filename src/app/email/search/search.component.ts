import {Component} from '@angular/core';
import {MailService} from '../email.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../email.component.css'],
  providers: [MailService]
})
export class SearchComponent {

  emails: any = [];
  query: any = {
    PageSize: 10,
    PageIndex: 1,
    sortOrder: 'Asc',
  };
  totalNumberOfMails: number;
  isEmailEmpty = true;
  filters = ['Email With Blocked Attachments', 'All Emails', 'Blocked Emails', 'Emails With Reconstructed Attachments'];

  constructor(private mailService: MailService) {
  };



  searchMails() {
    this.mailService.searchMails(this.query).subscribe(
      success => {
        console.log(success);
        this.emails = success.List;
        this.totalNumberOfMails = success.Total;
        this.isEmailEmpty = (this.emails.length > 0) ? false : true;
      },
      error => {
        console.log(error);
      }
    );
  }
  clearResults = () => {
    this.emails = [];
    this.isEmailEmpty = true;
  }

}
