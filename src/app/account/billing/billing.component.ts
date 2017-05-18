import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {ElementRef,Renderer2, ViewChild} from '@angular/core';
import {AccountService} from "../account.service";
// @ViewChild('someVar') el:ElementRef;
//
// constructor(private rd: Renderer2) {}
//
// ngAfterViewInit() {
//   console.log(this.rd);
//   this.el.nativeElement.focus();      //<<<=====same as oldest way
// }



@Component({
  selector: 'app-user-update-plan',
  templateUrl: './upgrade-plan.html',
  styleUrls: ['./billing.component.css']
})

export class UpdatePlanComponent {
  selectedPlan: any;
  currentPlan: string;
  changePassword = true;
  forgotPassword = false;
  currentRd : Renderer2;
  config:any;
  //selected:"btn btn-upgrade-selected"

  //   {
  //   std :"btn btn-upgrade-selected" ,
  //   pro:"btn btn-upgrade-selected",
  //   pre:"btn btn-upgrade-selected"
  // };

  // @ViewChild('standardBtn') stdBtn:ElementRef;
  // @ViewChild('professionalBtn') proBtn:ElementRef;
  // @ViewChild('premiumBtn') preBtn:ElementRef;
  constructor(public dialogRef: MdDialogRef<UpdatePlanComponent>, private rd: Renderer2, private accountService: AccountService) {
    this.currentRd = rd;
    this.config = this.dialogRef._containerInstance.dialogConfig.data;
    this.currentPlan = this.config.accountData.CurrentPlan;
   // this.clearSelections();

    // switch(this.currentPlan){
    //   case 'Standard':
    //     this.updateSelection(this.stdBtn);
    //     break;
    //   case 'Professional':
    //     this.updateSelection(this.proBtn);
    //     break;
    //   case 'Premium':
    //     this.updateSelection(this.preBtn);
    //     break;
    // }
  };

  // clearSelections(){
  //   this.preBtn.nativeElement.class ="btn btn-upgrade-unselected";
  //   this.proBtn.nativeElement.class ="btn btn-upgrade-unselected";
  //   this.stdBtn.nativeElement.class ="btn btn-upgrade-unselected";
  // }

  // updateSelection(element:ElementRef){
  //   element.nativeElement.class = "class='btn btn-purple'";
  // }

  selected(event:any){
    this.selectedPlan = event;
    console.log(event);
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;

    this.selectedPlan = value;
    console.log(target);
  }

  getCSSClasses(str:string){
    if (str === this.currentPlan){
      return "btn btn-upgrade-selected"
    }
    return "btn btn-upgrade-unselected";
  }

  isButtonDisabled(){
    return this.selectedPlan !== this.currentPlan;
  }

  saveAccountPlan(){
    this.accountService.updateBillingData(this.selectedPlan).subscribe(()=>{

    },
    error => {
      // TODO:: throw error message to user.
      console.log(error)
    });
  }
}

class BillingData{
  numOfUsers:string;
  fee:string;
  planName:string;
}



@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
  entryComponents: [UpdatePlanComponent],
  providers: [AccountService]

})
export class BillingComponent implements OnInit {
  accountData: any;
  private dialogRef: MdDialogRef<any>;
  users = [139, 140, 141, 142, 143, 144, 145];
  billingData: BillingData;

  constructor(public dialog: MdDialog, private accountService: AccountService) {

  }

  ngOnInit() {
    this.accountService.getAccountGeneralSettings().subscribe(
      result => {
        if (result == null) {
          return;
        }

        this.accountData = result;

        if (!this.accountData.StripeSubscriptionToken){
          return;
        }

        // fetch the relevant billing info
        this.accountService.getBillingData(this.accountData.StripeSubscriptionToken).subscribe(
          billingResult => {
            if (billingResult == null) {
              return;
            }

            this.billingData.fee = billingResult.FeeDesc;
            this.billingData.numOfUsers = billingResult.UsersQuantity;
            this.billingData.planName = billingResult.PlanName;
          });
      });
  };

  openUpgradePlan() {
    this.dialogRef = this.dialog.open(UpdatePlanComponent, {width: '50%', data:{accountData:this.accountData,billingData:this.billingData}});

    // if (dialogResult == null) {
    //   return;
    // }
  };
}
