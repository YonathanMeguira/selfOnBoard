import {Component, OnInit} from '@angular/core';
import {DashboardService} from 'app/dashboard/dashboard.service';
import {
  TotalsTopComponent,
  GraphSelectorComponent,
  GraphComponent,
  PieChartsComponent
} from './templates/dashboard-templates/dashboard-templates.component';
import _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService],
  entryComponents: [TotalsTopComponent, GraphSelectorComponent, GraphComponent, PieChartsComponent]
})
export class DashboardComponent implements OnInit {

  totals: any = {};
  dataHasLoaded = false;
  allData: any = {};
  pieData: any = {};

  constructor(private d: DashboardService) {
  };

  ngOnInit() {
    this.loadData();
  };

  loadData = () => {
    this.d.GetDashboardData().subscribe(
      res => {
        console.log(res);
        this.allData = res;
        this.totals.TotalEmailsProcessed = res.TotalEmailsProcessed;
        this.pieData = res.TotalProcessedByCdr;
        this.totals.TotalUrls = res.TotalUrls;
        this.totals.totalCleanReplicaByCdr = this.addNumbersUp(res.TotalProcessedByCdr);
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
  addNumbersUp = (collection: any) => {
    let i = 0;
    _.forEach(collection, (key, value) => {
      i += key;
    });
    return i;
  }


}
