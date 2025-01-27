import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from '@/common/tab/tabActions';

const BASE_URL = 'http://localhost:3003/api';
const INITIAL_VALUES = { credits: [{}], debits: [{}] };

export function getList() {
	const request = axios.get(`${BASE_URL}/billingCycles`);
	return {
		type: 'BILLING_CYCLES_FETCHED',
		payload: request
	};
}

export function create(values) {
	return submit(values, 'post');
}

export function update(values) {
	return submit(values, 'put');
}

export function remove(values) {
	return submit(values, 'delete');
}

function submit(values, method) {
	return dispatch => {
		const id = values._id || '';
		axios[method](`${BASE_URL}/billingCycles/${id}`, values).then(
			(res) => {
				toastr.success('Sucesso', 'Operação realizada com sucesso!');
				dispatch(init());
			}
		).catch((e) => {
			e.response.data.errors.forEach((error) => toastr.error('Error', error));
		});
	}
}

function showFn(tabName, form, data) {
	return [
		showTabs(tabName),
		selectTab(tabName),
		initialize(form, data),
	];
}

export function showUpdate(billingCycle) {
	return showFn('tabUpdate', 'BillingCycleForm', billingCycle);
}

export function showDelete(billingCycle) {
	return showFn('tabDelete', 'BillingCycleForm', billingCycle)
}

export function init() {
	return [
		showTabs('tabList', 'tabCreate'),
		selectTab('tabList'),
		getList(),
		initialize('BillingCycleForm', INITIAL_VALUES)
	];
}