import {Component, OnInit, OnDestroy} from '@angular/core';
import {DashboardService} from 'app/dashboard/dashboard.service';
import _ from 'lodash';

import {
  TotalsTopComponent,
  GraphSelectorComponent,
  GraphComponent,
  PieChartsComponent,
  EmailSectionComponent,
  NewsFeedComponent
} from './templates/dashboard-templates/dashboard-templates.component';
import {Store} from '@ngrx/store';
import {AppStore} from 'app/store/app-store';
import {DashboardActions} from '../store/actions/dashboard.actions';
import {Observable} from '../../../node_modules/rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService],
  entryComponents: [TotalsTopComponent, GraphSelectorComponent,
    GraphComponent, PieChartsComponent, EmailSectionComponent, NewsFeedComponent]
})
export class DashboardComponent implements OnInit, OnDestroy {
  graphData: any;
  currGraphData: any;
  getDashboardData: any;
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

  private cleanReplica: any;
  private attachmentOk: any;
  private blockedByCDR: any;
  private attachmentBlockedByAntivirus: any;

  constructor(private dashboardService: DashboardService, private store: Store<AppStore>,
              private dashboardActions: DashboardActions) {

    this.getDashboardData = store.select(s => s.dashboardData).subscribe(
      res => {
        if (!res || res.length === 0) {
          return;
        }


        this.allData = res;
        this.totals.TotalEmailsProcessed = res.TotalEmailsProcessed;
        this.pieData = this.dictionaryToObject(res.TotalBlockedByPolicy);
        console.log(this.pieData);
        this.totals.TotalUrls = res.TotalUrls;
        this.totals.totalCleanReplicaByCdr = this.getCollectionSum(res.TotalProcessedByCdr);
        this.totals.TotalAttachmentProcessed = res.TotalAttachmentProcessed;
        this.totals.totalPassedOk = this.getCollectionSum(res.TotalPassed);
        this.totals.BlockedByPolicy = this.getCollectionSum(res.TotalBlockedByPolicy);
        this.totals.TotalBlockedByAntivirus = this.getCollectionSum(res.TotalBlockedByAntivirus);
        this.dataHasLoaded = true;
        // this.store.dispatch(this.dashboardActions.loadDashboardData());
        this.cleanReplica = {
          'name': 'Clean Replica by CDR',
          'series': [
            {
              'name': 'April',
              'value': 41
            },
            {
              'name': 'May',
              'value': 54
            },
            {
              'name': 'June',
              'value': 60
            }
          ]
        };
        this.attachmentOk = {
          'name': 'Original Attachment OK',
          'series': [
            {
              'name': 'April',
              'value': 70
            },
            {
              'name': 'May',
              'value': 20
            },
            {
              'name': 'June',
              'value': 13
            },
          ]
        };
        this.blockedByCDR = {
          'name': 'Attachment Blocked By CDR',
          'series': [
            {
              'name': 'April',
              'value': 30
            },
            {
              'name': 'May',
              'value': 45
            },
            {
              'name': 'June',
              'value': 90
            },
          ]
        };
        this.attachmentBlockedByAntivirus = {
          'name': 'Attachment Blocked By Antivirus',
          'series': [
            {
              'name': 'April',
              'value': 23
            },
            {
              'name': 'May',
              'value': 15
            },
            {
              'name': 'June',
              'value': 34
            },
          ]
        };
        this.currGraphData =
          [
            this.cleanReplica, this.attachmentBlockedByAntivirus, this.attachmentOk, this.blockedByCDR
          ];

        this.graphData = this.currGraphData;
        // GraphComponent.Multi =
      },
      error => {
        console.log(error);
      });
  };

  ngOnInit() {
    this.GetFeed();
    this.store.dispatch(this.dashboardActions.loadDashboardData());
    this.GetRandomRecipients();
  };

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

  getCollectionSum = (collection: any) => {
    let sum = 0;
    for (const key in collection) {
      sum = sum + collection[key];
    }
    return sum;
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
        const slicedArray = feed.articles.slice(0, 3);
        this.feeds = slicedArray;
        console.log(this.feeds);
      },
      error => console.log(error)
    );
  }

  selectedGraphChanged(event) {
    if (this.graphData !== this.currGraphData) {
      this.graphData = this.currGraphData;
      return;
    }

    switch (event) {
      case 'totals.totalCleanReplicaByCdr':
        this.graphData = [this.cleanReplica];
        break;
      case 'totals.attachmentOk':
        this.graphData = [this.attachmentOk];
        break;
      case 'totals.blockedByCDR':
        this.graphData = [this.blockedByCDR];
        break;
      case 'totals.attachmentBlockedByAntivirus':
        this.graphData = [this.attachmentBlockedByAntivirus];
        break;
    }
  }
  ngOnDestroy(){
    if (this.getDashboardData){
      this.getDashboardData.unsubscribe();
    }
  }
}
