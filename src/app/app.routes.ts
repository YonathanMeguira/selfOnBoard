/**
 * Created by if_found_call_0586288454 on 24/04/2017 ap. J.-C..
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { SecurityComponent } from './security/security.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailComponent } from './email/email.component';
import { AccountComponent } from './account/account.component';
import { AccountGeneralComponent } from './account/account-general/account-general.component';

import { GeneralComponent } from './security/general/general.component';
import { ExceptionComponent } from './security/exception/exception.component';
import { SearchComponent } from './email/search/search.component';
import { BrowseComponent } from './email/browse/browse.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'security', component: SecurityComponent,
        children: [
          { path: '', redirectTo: 'general', pathMatch: 'full' },
          { path: 'general', component: GeneralComponent },
          { path: 'exceptions', component: ExceptionComponent }
        ]
      },
      {
        path: 'emails', component: EmailComponent,
        children: [
          { path: '', redirectTo: 'search', pathMatch: 'full' },
          { path: 'search', component: SearchComponent },
          { path: 'browse', component: BrowseComponent }
        ]
      },
      { path: 'account', component: AccountComponent,
        children: [
          { path: '', redirectTo: 'account', pathMatch: 'full' },
          { path: 'account', component: AccountGeneralComponent }
        ]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
