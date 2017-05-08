import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
  };
  users = [139, 140, 141, 142, 143, 144, 145];
  billing: any  = {};
}
