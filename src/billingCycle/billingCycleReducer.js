const INITIAL_STATE = {};

export default (state = INITIAL_STATE, actions) => {
	switch(actions.type) {
		case "BILLING_CYCLES_FETCHED":
			return { ...state, list: actions.payload.data }
		default:
			return state;
	}
}