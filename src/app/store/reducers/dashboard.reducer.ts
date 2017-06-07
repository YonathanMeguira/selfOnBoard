import { Observable } from 'rxjs/Observable';
import {Action} from '@ngrx/store';

import { DashboardActions } from '../actions';
import { DashboardGraph } from '../../model';

export const dashboardGraphReducer = (state: any = [], action: Action): DashboardGraph => {
  switch (action.type) {
    case DashboardActions.LOAD_DASHBOARD_GRAPH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const dashboardDataReducer = (state: any = [], action: Action): any => {
  switch (action.type) {
    case DashboardActions.LOAD_DASHBOARD_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
