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
  colorScheme = {domain: ['#326491', '#4D9CE3', '#234768', '#6CAEE8', '#ADD2F2']};
  pieChartTitle = 'Clean Replica By CDR';
  emailScoreColor = '#8BBFEF';
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
    return arr.slice(0, 5);
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
    switch (event) {
      case 'totals.totalCleanReplicaByCdr':
        this.graphData = [this.cleanReplica];
        this.colorScheme = {domain: ['#326491', '#4D9CE3', '#234768', '#6CAEE8', '#ADD2F2']};
        this.pieChartTitle = 'Clean Replica By CDR';
        this.pieData = this.dictionaryToObject(this.allData.TotalProcessedByCdr);
        break;
      case 'totals.attachmentOk':
        this.graphData = [this.attachmentOk];
        this.colorScheme.domain = ['#33796C', '#4FBDAA', '#25574E', '#429B8B', '#AFE1D8'];
        this.pieChartTitle = 'Original Attachment OK';
        this.pieData = this.dictionaryToObject(this.allData.TotalPassed);
        break;
      case 'totals.blockedByCDR':
        this.graphData = [this.blockedByCDR];
        this.colorScheme.domain = ['#C98F20', '#F4AE29', '#6F500D', '#F8CA72', '#FBE7C2'];
        this.pieChartTitle = 'Attachment Blocked by Policy';
        this.pieData = this.dictionaryToObject(this.allData.TotalBlockedByPolicy);
        break;
      case 'totals.attachmentBlockedByAntivirus':
        this.graphData = [this.attachmentBlockedByAntivirus];
        this.colorScheme.domain = ['#994110', '#EF661F', '#6D2F08', '#F1813C', '#F8B994'];
        this.pieChartTitle = 'Attachment Blocked By Antivirus';
        this.pieData = this.dictionaryToObject(this.allData.TotalBlockedByAntivirus);
        break;
    }
  }
  showAllGraphs = (event) => {
    this.graphData = [this.cleanReplica, this.attachmentBlockedByAntivirus, this.attachmentOk, this.blockedByCDR];
    this.colorScheme = {domain: ['#582662', '#893D99', '#3F1D45', '#9E5FAB', '#C9A6D1']};
    this.pieChartTitle = 'Total Passed Files';
  };
  ngOnDestroy() {
    if (this.getDashboardData) {
      this.getDashboardData.unsubscribe();
    }
  }

}
