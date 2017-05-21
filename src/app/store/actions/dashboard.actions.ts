import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { AppStore } from '../app-store';
import {Action} from "@ngrx/store";
import {DashboardGraph} from "../../model/dashboard-graph";
//import { TagActions } from '../actions';
//import { TagService } from '../../services'

@Injectable()
export class DashboardActions {
  static LOAD_DASHBOARD_DATA: 'LOAD_DASHBOARD_DATA';
  loadDashboardData(timeFrame: number): Action {
    return {
      type: DashboardActions.LOAD_DASHBOARD_DATA,
      payload: timeFrame
    };
  }

  static LOAD_DASHBOARD_DATA_SUCCESS = 'LOAD_DASHBOARD_DATA_SUCCESS';
  loadDashboardDataSuccess(dashboardData : any): Action {
    return {
      type: DashboardActions.LOAD_DASHBOARD_DATA_SUCCESS,
      payload: dashboardData
    };
  }

  static LOAD_DASHBOARD_GRAPH = 'LOAD_DASHBOARD_GRAPH';
  loadDashboardGraph(): Action {
    return {
      type: DashboardActions.LOAD_DASHBOARD_GRAPH
    };
  }

  static LOAD_DASHBOARD_GRAPH_SUCCESS = 'LOAD_DASHBOARD_GRAPH_SUCCESS';
  loadDashboardGraphSuccess(dashboardGraph : DashboardGraph): Action {
    return {
      type: DashboardActions.LOAD_DASHBOARD_GRAPH_SUCCESS,
      payload: dashboardGraph
    };
  }
}
