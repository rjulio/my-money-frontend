const INITIAL_STATE = {
	selected: '',
	visible: {}
};

export default (state = INITIAL_STATE, actions) => {
	const actionsObj = {
		'TAB_SELECTED': { ...state, selected: actions.payload },
	 	'TAB_SHOW': { ...state, visible: actions.payload }
	}

	return actionsObj[actions.type] || state;
}