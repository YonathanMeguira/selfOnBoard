import {Component} from '@angular/core';
import {MailService} from '../email.service';
import {ITdDataTableColumn} from '@covalent/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../email.component.css'],
  providers: [MailService]
})
export class SearchComponent {
  emails: any = [];
  query: any  = {
    PageSize: 10,
    PageIndex: 1,
    sortOrder: 'Asc',
  };
  totalNumberOfMails: number;
  isEmailEmpty = true;
  columns: ITdDataTableColumn[] = [
    { name: 'Ticket ID', label: 'Ticket Id'},
    { name: 'Reason Blocked', label: 'Reason Blocked'},
    { name: 'SanitizationDate', label: 'Date'},
    { name: 'Recipient', label: 'Recipient'},
    { name: 'Sender', label: 'Sender'},
    { name: 'Subject', label: 'Subject'},
    { name: 'Attached Files', label: 'Attached File(s)'},

  ];
  filters = ['Email With Blocked Attachments', 'All Emails', 'Blocked Emails', 'Emails With Reconstructed Attachments'];

  public loadingIndicator = false;

  constructor(private mailService: MailService) {

  }


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
