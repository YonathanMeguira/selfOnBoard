import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-dashboard-top-totals',
  templateUrl: './totals-top.component.html',
  styleUrls: ['./dashboard-templates.component.css']
})
export class TotalsTopComponent implements OnInit {
  @Input() totals;
  colorScheme: any = {
    domain: ['#1565C0', '#03A9F4', '#FFA726', '#FFCC80'],
  };
  constructor() {
  }
  ngOnInit() {
  }


}
