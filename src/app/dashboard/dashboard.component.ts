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
  senders: Array<string>;
  recipients: Array<string>;
  displayingSenders = false;
  displayingRecipients = true;
  colorScheme = {domain: ['#326491', '#4D9CE3', '#234768', '#6CAEE8', '#ADD2F2']};
  graphColor = {
    domain: ['#9A1796', '#EE5F12', '#7BBDEE', '#F9C453']
  };
  pieChartTitle = 'Clean Replica By CDR';
  emailScoreColor = '#8BBFEF';
  private cleanReplica: any;
  private attachmentOk: any;
  private blockedByCDR: any;
  private attachmentBlockedByAntivirus: any;
  timeFrame = 7;

  constructor(private dashboardService: DashboardService, private store: Store<AppStore>,
              private dashboardActions: DashboardActions) {
    // this.getDashboardData = store.select(s => s.dashboardData).subscribe(
    this.dashboardService.getDashboardData(this.timeFrame).subscribe(
      res => {
        if (!res) {
          return;
        }
        this.allData = res;
        console.log(this.allData);
        this.totals.TotalEmailsProcessed = res.TotalEmailsProcessed;
        this.pieData = this.dictionaryToObject(res.TotalBlockedByPolicy);
        this.totals.TotalUrls = res.TotalUrls;
        this.totals.TotalAttachmentProcessed = res.TotalAttachmentProcessed;
        this.recipients = res.TopTenCleanCdrReplicaRecipients;
        this.senders = res.TopTenCleanCdrReplicaSenders;
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
      },
      () => {
        console.log('data has finished loaded')
        this.dataHasLoaded = true;
      });
    // now actually calling for the store
    //  this.store.dispatch(this.dashboardActions.loadDashboardData(this.timeFrame));
  };

  ngOnInit() {
    this.GetFeed();
    // this.store.dispatch(this.dashboardActions.loadDashboardData(this.timeFrame));
  };

  changeTimeFrame = (newTime: number) => {
    this.timeFrame = newTime;
    this.store.dispatch(this.dashboardActions.loadDashboardData(newTime));
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
    return arr.slice(0, 5);
  }
  generateThreeDifferentRandomNumbers() {
    let arr = [];
    while (arr.length < 3) {
      const randomnumber = Math.ceil(Math.random() * 9);
      if (arr.indexOf(randomnumber) > -1) continue;
      arr[arr.length] = randomnumber;
    }
    return arr;
  }
  makeArrayOfRandomFeeds(arrayOfFeeds: Array<any>): Array<any> {
    const randomFeeds = [];
    const randomNumbers = this.generateThreeDifferentRandomNumbers();
    for (const i of randomNumbers) {
      console.log(i);
      randomFeeds.push(arrayOfFeeds[i]);
    }
    ;
    console.log(arrayOfFeeds);
    return randomFeeds;
  }
  GetFeed = () => {
    this.dashboardService.GetFeed().subscribe(
      res => {
        const feed = res.response.results;
        this.feeds = this.makeArrayOfRandomFeeds(feed);
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
        this.graphColor = {domain: ['#326491']};
        this.pieChartTitle = 'Clean Replica By CDR';
        this.pieData = this.dictionaryToObject(this.allData.TotalModified.TopFiveFileTypes);
        break;
      case 'totals.attachmentOk':
        this.graphData = [this.attachmentOk];
        this.colorScheme.domain = ['#33796C', '#4FBDAA', '#25574E', '#429B8B', '#AFE1D8'];
        this.graphColor = {domain: ['#33796C']};
        this.pieChartTitle = 'Original Attachment OK';
        this.pieData = this.dictionaryToObject(this.allData.TotalPassed.TopFiveFileTypes);
        break;
      case 'totals.blockedByPolicy':
        this.graphData = [this.blockedByCDR];
        this.graphColor = {domain: ['#C98F20']};
        this.colorScheme.domain = ['#C98F20', '#F4AE29', '#6F500D', '#F8CA72', '#FBE7C2'];
        this.pieChartTitle = 'Attachment Blocked by Policy';
        this.pieData = this.dictionaryToObject(this.allData.TotalBlockedByPolicy.TopFiveFileTypes);
        break;
      case 'totals.attachmentBlockedByAntivirus':
        this.graphData = [this.attachmentBlockedByAntivirus];
        this.colorScheme.domain = ['#994110', '#EF661F', '#6D2F08', '#F1813C', '#F8B994'];
        this.graphColor = {domain: ['#994110']};
        this.pieChartTitle = 'Attachment Blocked By Antivirus';
        this.pieData = this.dictionaryToObject(this.allData.TotalBlockedByAntivirus.TopFiveFileTypes);
        break;
    }
  }

  showAllGraphs = (event) => {
    this.graphData = [this.cleanReplica, this.attachmentBlockedByAntivirus, this.attachmentOk, this.blockedByCDR];
    this.colorScheme = {domain: ['#582662', '#893D99', '#3F1D45', '#9E5FAB', '#C9A6D1']};
    this.graphColor = {
      domain: ['#9A1796', '#EE5F12', '#7BBDEE', '#F9C453']
    };
    this.pieChartTitle = 'Total Passed Files';
  };

  ngOnDestroy() {
    if (this.getDashboardData) {
      this.getDashboardData.unsubscribe();
    }
  }

}
