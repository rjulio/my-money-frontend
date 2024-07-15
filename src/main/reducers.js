import { combineReducers } from 'redux';

import dashboardReduders from '@/dashboard/dashboardReducers';
import tabReduder from '@/common/tab/tabReducer';

const rootReducers = combineReducers({
	dashboard: dashboardReduders,
	tab: tabReduder
});

export default rootReducers;