import { Component, OnInit } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { MailService } from '../email.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [MailService]
})
export class SearchComponent  {
  public search = {} as any;
  SDoptions: DatePickerOptions;
  EDoptions: DatePickerOptions;
  rows: Object[];
  columns: Object[];

  public loadingIndicator = false;
  constructor(private mailService: MailService) {
    this.SDoptions = new DatePickerOptions();
    this.EDoptions = new DatePickerOptions();
  }

  onSubmit() {
    this.mailService.searchMails(this.search).subscribe(
      success => {
        console.log(success);
      },
      error => {
        console.log(error);
      }
    );
    this.rows = [];
    this.columns = [
      { prop: 'Ticket Id' },
      { prop: 'Reason Blocked' },
      { prop: 'Date' },
      { prop: 'Recipient' },
      { prop: 'Sender' },
      { prop: 'Subject' },
      { prop: 'Attached File' }
    ];
  }

}
