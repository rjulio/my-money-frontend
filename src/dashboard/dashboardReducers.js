const INITIAL_STATE = {
	summary: {
		credit: 0,
		debit: 0
	}
};

export default (state = INITIAL_STATE, action) => {
	const dashboardObj = {
		'BILLING_SUMMARY_FETCH': { ...state, summary: action.payload ? action.payload.data : {} }
	};

	return dashboardObj[action.type] || state;
}