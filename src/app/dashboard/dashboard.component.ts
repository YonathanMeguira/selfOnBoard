import {Component, OnInit} from '@angular/core';
import {DashboardService} from 'app/dashboard/dashboard.service';
import {
  TotalsTopComponent,
  GraphSelectorComponent,
  GraphComponent,
  PieChartsComponent,
  EmailSectionComponent,
  NewsFeedComponent
} from './templates/dashboard-templates/dashboard-templates.component';
import _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService],
  entryComponents: [TotalsTopComponent, GraphSelectorComponent,
    GraphComponent, PieChartsComponent, EmailSectionComponent, NewsFeedComponent]
})
export class DashboardComponent implements OnInit {

  totals: any = {};
  dataHasLoaded = false;
  allData: any = {};
  feeds: Array<any>;
  pieData: any = {};
  randomUsers: Array<any>;
  displayingSenders = false;
  displayingRecipients = true;
  cdrGradient: Array<string> = ['#1A237E', '#1D2A87', '#203291', '#233A9B', '#2642A5', '#2A4AAF', '#2D52B9',
    '#305AC3', '#3362CD', '#376AD7', '#3A72E1', '#3D7AEB', '#4082F5', '#448AFF'];
  colorScheme = {domain: this.cdrGradient};
  cdrFigureColor = '#ADE1D8';
  figureColor = this.cdrFigureColor;


  constructor(private dashboardService: DashboardService) {
  };

  ngOnInit() {
    this.loadData();
    this.GetFeed();
    this.GetRandomRecipients();
  };

  loadData = () => {
    this.dashboardService.GetDashboardData().subscribe(
      res => {
        console.log(res);
        this.allData = res;
        this.totals.TotalEmailsProcessed = res.TotalEmailsProcessed;
        this.totals.TotalUrls = res.TotalUrls;
        this.totals.totalCleanReplicaByCdr = this.addNumbersUp(res.TotalProcessedByCdr);
        this.pieData = this.dictionaryToObject(res.TotalBlockedByPolicy);
        this.totals.TotalAttachmentProcessed = res.TotalAttachmentProcessed;
        this.totals.totalPassedOk = this.addNumbersUp(res.TotalPassed);
        this.totals.BlockedByPolicy = this.addNumbersUp(res.TotalBlockedByPolicy);
        this.totals.TotalBlockedByAntivirus = this.addNumbersUp(res.TotalBlockedByAntivirus);
        this.dataHasLoaded = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  dictionaryToObject = (dictionary: any) => {
    const arr = [];
    _.each(dictionary, (value, key) => {
      const newObject = {
        'name': key,
        'value': value
      };
      arr.push(newObject);
    });
    return arr;
  }

  addNumbersUp = (collection: any) => {
    let i = 0;
    _.forEach(collection, (key, value) => {
      i += key;
    });
    return i;
  }

  GetRandomRecipients = () => {
    this.displayingSenders = false;
    this.displayingRecipients = true;
    this.dashboardService.GetRandomRecipients().subscribe(
      result => this.randomUsers = result,
      error => console.log(error)
    );
  }
  GetRandomSenders = () => {
    this.displayingSenders = true;
    this.displayingRecipients = false;
    this.dashboardService.GetRandomSenders().subscribe(
      result => this.randomUsers = result,
      error => console.log(error)
    );
  }
  GetFeed = () => {
    this.dashboardService.GetFeed().subscribe(
      feed => {
        const slicedArray = feed.articles.slice(0, 4);
        this.feeds = slicedArray;
        console.log(this.feeds);
      },
      error => console.log(error)
    );
  }
}
