import { DashboardGraph } from '../model';
import { dashboardGraphReducer, dashboardDataReducer } from './reducers';

import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

export interface AppStore {
  dashboardData: any;
  dashboardGraph: DashboardGraph;
}

export default compose(combineReducers)({
  dashboardGraph: dashboardGraphReducer,
  dashboardData: dashboardDataReducer,
});
