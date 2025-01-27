export function selectTab(tabId) {
	return {
		type: 'TAB_SELECTED',
		payload: tabId
	}
}

export function showTabs(...tabsIds) {
	const tabsToShow = {};
	tabsIds.forEach((tab) => {
		tabsToShow[tab] = true;
	});
	return {
		type: 'TAB_SHOW',
		payload: tabsToShow
	}
}