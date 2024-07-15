import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import dashboardReduders from '@/dashboard/dashboardReducers';
import tabReduder from '@/common/tab/tabReducer';
import billingCyeclesReduder from '@/billingCycle/billingCycleReducer';

const rootReducers = combineReducers({
	dashboard: dashboardReduders,
	tab: tabReduder,
	billingCycle: billingCyeclesReduder,
	form: formReducer,
	toastr: toastrReducer
});

export default rootReducers;