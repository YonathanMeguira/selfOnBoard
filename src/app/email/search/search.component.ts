import {Component} from '@angular/core';
import {MailService} from '../email.service';

import {
  ITdDataTableColumn,
  ITdDataTableSortChangeEvent,
  IPageChangeEvent,
  ITdDataTableSelectEvent,
  ITdDataTableSelectAllEvent
} from '@covalent/core';
import {EmailComponent} from '../email.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../email.component.css'],
  providers: [MailService]
})
export class SearchComponent extends EmailComponent{

  emails: Array<any> = [];
  query: any = {
    sortField: 'SanitizationDate',
    PageSize: 10,
    PageIndex: 1,
    sortOrder: 'Asc',
  };
  totalNumberOfMails: number;
  selectedMails: number[] = [];
  isEmailEmpty = true;
  filters = ['Email With Blocked Attachments', 'All Emails', 'Blocked Emails', 'Emails With Reconstructed Attachments'];
  columns: ITdDataTableColumn[] = [
    {name: 'Ticket ID', label: 'Ticket Id', numeric: true},
    {name: 'Reason Blocked', label: 'Reason Blocked'},
    {name: 'SanitizationDate', label: 'Date', format: rawDate => this.convertToDate(rawDate)},
    {name: 'Recipient', label: 'Recipient'},
    {name: 'Sender', label: 'Sender'},
    {name: 'Subject', label: 'Subject'},
    {name: 'Attached Files', label: 'Attached File(s)'},
  ];
  constructor(private mailService: MailService) {
    super();
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
  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    console.log(sortEvent);
    this.query.sortField = sortEvent.name;
    this.query.sortOrder = sortEvent.order;
    this.searchMails();
  };
  page(pagingEvent: IPageChangeEvent): void {
    console.log(pagingEvent);
    this.query.PageSize = pagingEvent.pageSize;
    this.query.PageIndex = pagingEvent.page;
    this.searchMails();
  };
  selectMail(selectEvent: ITdDataTableSelectEvent) {
    console.log(selectEvent);
    if (selectEvent.selected) {
      this.selectedMails.push(selectEvent.row.SanitizationId);
      console.log(this.selectedMails);
    } else {
      const idx = this.selectedMails.indexOf(selectEvent.row.SanitizationId);
      this.selectedMails.splice(idx, 1);
      console.log(this.selectedMails);
    }
  };
  selectAllMails(selection: ITdDataTableSelectAllEvent) {
    console.log(selection);
    if (!selection.selected) {
      this.selectedMails = [];
      console.log(this.selectedMails);
    } else {
      this.selectedMails = [];
      for (const row of selection.rows) {
        this.selectedMails.push(row.SanitizationId);
        console.log(this.selectedMails);
      }
    }
  };
  performAction = (action: string) => {
    this.mailService.performAction(this.selectedMails, action).subscribe(
      success => {
        console.log(success);
      }, error => {
        console.log(error);
      }
    );
  }
  actionsAvailable = (selectionLength: number) => {
    if (selectionLength > 0){
      return true;
    }else {
      return false;
    }
  };
}
