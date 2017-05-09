import {Component, OnInit} from '@angular/core';
import { DashboardService } from 'app/dashboard/dashboard.service';
import { TdDigitsPipe } from '@covalent/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {

  totals: any = {};
  dataHasLoaded = false;
  constructor(private d: DashboardService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData = () => {
    this.d.GetDashboardData().subscribe(
      res => {
        this.dataHasLoaded = true;
        this.totals = {'emails': res.emails, 'urls': res.urls, 'total': res.totalFiles, 'emailsTrend': res.emails.trend};
        console.log(this.totals);
      },
      error => {
        console.log(error);
      }
    );
  }

}
