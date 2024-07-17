const INITIAL_STATE = {};

export default (state = INITIAL_STATE, actions) => {
	const billingObjs = {
		'BILLING_CYCLES_FETCHED': { ...state, list: actions.payload ? actions.payload.data : [] }
	};

	return billingObjs[actions.type] || state;
}