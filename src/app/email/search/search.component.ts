import {Component, OnInit} from '@angular/core';
import {MailService} from '../email.service';
import {EmailComponent} from '../email.component';

class Query {
  ticketId: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../email.component.css'],
  providers: [MailService]
})
export class SearchComponent extends EmailComponent implements OnInit {

  emails: any = {};
  query: Query = new Query();
  isFirstTime;
  noSearchInitiated = true;
  totalNumberOfMails: number;
  pullingData = false;
  noResultFound = false;

  constructor(private mailService: MailService) {
    super();
  };
  ngOnInit() {
    this.isFirstTime = false;
    console.log(this.isFirstTime);

  }

  searchMails() {
    this.pullingData = true;
    const noWhiteSpaceTicketId = this.query.ticketId.replace(/ /g, '');
    this.query.ticketId = noWhiteSpaceTicketId;
    this.mailService.searchMails(this.query).subscribe(
      success => {
        console.log(success);
        this.emails = success.List[0];
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
  outcomesAreNotNull(object: Object){
    return object ! == null;
  }
  fieldNotEmpty(field: any){
    return field !== null;
  }
}
