import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-user-update-plan',
  templateUrl: './upgrade-plan.html',
  styleUrls: ['./billing.component.css']
})

export class UpdatePlanComponent {
  changePassword = true;
  forgotPassword = false;
  constructor(public dialogRef: MdDialogRef<UpdatePlanComponent>) {
  };
}


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
  entryComponents: [UpdatePlanComponent]

})
export class BillingComponent implements OnInit {
  private dialogRef: MdDialogRef<any>;
  users = [139, 140, 141, 142, 143, 144, 145];
  billing: any  = {};
  constructor(public dialog: MdDialog) {
  }
  ngOnInit() {
  };

  openUpgradePlan() {
    this.dialogRef = this.dialog.open(UpdatePlanComponent, {width: '50%'});
  };
}
