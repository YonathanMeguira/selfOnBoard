import {Component, OnInit} from '@angular/core';
import {MailService} from '../email.service';
import {ITdDataTableColumn} from '@covalent/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
  providers: [MailService]
})
export class BrowseComponent implements OnInit {
  mails: Array<any> = [];
  isEmailEmpty = true;
  totalNumberOfMails: number;
  columns: ITdDataTableColumn[] = [
    { name: 'Ticket ID', label: 'Ticket Id'},
    { name: 'Reason Blocked', label: 'Reason Blocked'},
    { name: 'SanitizationDate', label: 'Date'},
    { name: 'Recipient', label: 'Recipient'},
    { name: 'Sender', label: 'Sender'},
    { name: 'Subject', label: 'Subject'},
    { name: 'Attached Files', label: 'Attached File(s)'},

  ];
  query: any  = {
    sortField: 'Date',
    PageSize: 10,
    PageIndex: 1,
    sortOrder: 'Asc',
    Stage: 'All'
  };
  constructor(private _mailService: MailService) {
  }

  ngOnInit() {
    this.BrowseMails();
  }

  BrowseMails = () => {
    this._mailService.searchMails(this.query).subscribe(
      result => {
        console.log(result);
        this.mails = result.List;
        this.totalNumberOfMails = result.Total;
        this.isEmailEmpty = false;
      }, error => {
        console.log(error);
      }
    );

  }
}
