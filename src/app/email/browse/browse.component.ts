import {Component, OnInit} from '@angular/core';
import {MailService} from '../email.service';
import {
  ITdDataTableColumn,
  ITdDataTableSortChangeEvent,
  IPageChangeEvent,
  ITdDataTableSelectEvent,
  ITdDataTableSelectAllEvent
} from '@covalent/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
  providers: [MailService]
})
export class BrowseComponent implements OnInit {
  emails: Array<any> = [];
  isEmailEmpty = true;
  totalNumberOfMails: number;
  selectedMails: number[] = [];
  columns: ITdDataTableColumn[] = [
    {name: 'Ticket ID', label: 'Ticket Id', numeric: true, format: v => v.toFixed(2)},
    {name: 'Reason Blocked', label: 'Reason Blocked'},
    {name: 'SanitizationDate', label: 'Date'},
    {name: 'Recipient', label: 'Recipient'},
    {name: 'Sender', label: 'Sender'},
    {name: 'Subject', label: 'Subject'},
    {name: 'Attached Files', label: 'Attached File(s)'},

  ];
  query: any = {
    sortField: 'SanitizationDate',
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
        this.emails = result.List;
        this.totalNumberOfMails = result.Total;
        this.isEmailEmpty = false;
      }, error => {
        console.log(error);
      }
    );

  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    console.log(sortEvent);
    this.query.sortField = sortEvent.name;
    this.query.sortOrder = sortEvent.order;
    this.BrowseMails();
  }

  page(pagingEvent: IPageChangeEvent): void {
    console.log(pagingEvent);
    this.query.PageSize = pagingEvent.pageSize;
    this.query.PageIndex = pagingEvent.page;
    this.BrowseMails();
  }

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
  }

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
  }

  performAction = (action: string) => {
    this._mailService.performAction(this.selectedMails, action).subscribe(
      success => {
        console.log(success);
      }, error => {
        console.log(error);
      }
    )
  }
}
