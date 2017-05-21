import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {AppStore} from '../app-store';
import {DashboardActions} from '../actions';
import {DashboardGraph} from '../../model';
import {DashboardService} from '../../dashboard/dashboard.service';

@Injectable()
export class DashboardEffects {
  constructor (
    private actions$: Actions,
    private categoryActions: DashboardActions,
    private svc: DashboardService
  ) {}

  @Effect()
  loadDashboardData$ = this.actions$
    .ofType(DashboardActions.LOAD_DASHBOARD_DATA)
    .switchMap((action) => this.svc.getDashboardData(action.payload))
    .map((dashboardData: any) => this.categoryActions.loadDashboardDataSuccess(dashboardData));

  @Effect()
  loadDashboardGraph$ = this.actions$
    .ofType(DashboardActions.LOAD_DASHBOARD_GRAPH)
    .switchMap((action) => this.svc.getDashboardData(action.payload))
    .map((categories: DashboardGraph) => this.categoryActions.loadDashboardGraphSuccess(categories));
}
