import {Component, OnInit} from '@angular/core';
import {DashboardService} from 'app/dashboard/dashboard.service';
import {
  TotalsTopComponent,
  GraphSelectorComponent,
  GraphComponent,
  PieChartsComponent
} from './templates/dashboard-templates/dashboard-templates.component';
import {Store} from "@ngrx/store";
import {AppStore} from "app/store/app-store";
import {DashboardActions} from "../store/actions/dashboard.actions";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  // providers: [DashboardService,Store],
  entryComponents: [TotalsTopComponent, GraphSelectorComponent, GraphComponent, PieChartsComponent]
})
export class DashboardComponent implements OnInit {
  graphData: any;//GraphLine[];//{ 'name': string; 'series': { 'name': string; 'value': number; }[]; }[];
  currGraphData: any;//GraphLine[];//{ 'name': string; 'series': { 'name': string; 'value': number; }[]; }[];
  totals: any = {};
  dataHasLoaded = false;
  allData: any = {};
  pieData: any = {};
  getDashboardData: any;

  private cleanReplica: any;
  private attachmentOk: any;
  private blockedByCDR: any;
  private attachmentBlockedByAntivirus: any;

  constructor(private dashboardService: DashboardService, private store: Store<AppStore>,
              private dashboardActions: DashboardActions) {

    this.getDashboardData = store.select(s => s.dashboardData).subscribe( res => {
        if (!res || res.length == 0){
          return;
        }

        this.allData = res;
        this.totals.TotalEmailsProcessed = res.TotalEmailsProcessed;
        this.pieData = res.TotalProcessedByCdr;
        this.totals.TotalUrls = res.TotalUrls;
        this.totals.totalCleanReplicaByCdr = this.getCollectionSum(res.TotalProcessedByCdr);
        this.totals.TotalAttachmentProcessed = res.TotalAttachmentProcessed;
        this.totals.totalPassedOk = this.getCollectionSum(res.TotalPassed);
        this.totals.BlockedByPolicy = this.getCollectionSum(res.TotalBlockedByPolicy);
        this.totals.TotalBlockedByAntivirus = this.getCollectionSum(res.TotalBlockedByAntivirus);
        this.dataHasLoaded = true;
        //this.store.dispatch(this.dashboardActions.loadDashboardData());

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
        }
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

  selectedGraphChanged(event){
    if (this.graphData !== this.currGraphData){
      this.graphData = this.currGraphData;
      return;
    }

    switch(event){
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

  ngOnInit() {
    this.store.dispatch(this.dashboardActions.loadDashboardData());
  };

  // loadData = () => {
  //   this.dashboardService.getDashboardData().subscribe(
  //
  //   );
  // };

  getCollectionSum = (collection: any) => {
    let sum = 0;
    for (var key in collection) {
      sum = sum + collection[key];
    }
    return sum;
  }
}

export class Series {
  name: string;
  value: number;
}

export class GraphLine {
  name: string;
  series: Series[];
}
