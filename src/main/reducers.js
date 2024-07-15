import { combineReducers } from 'redux';

import dashboardReduders from '@/dashboard/dashboardReducers';

const rootReducers = combineReducers({
	dashboard: dashboardReduders
});

export default rootReducers;