import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import constants from '@/constants';

export function login(values) {
	return submit(values, `${ constants.OAPI_URL }/login`);
}

export function signup(values) {
	return submit(values, `${ constants.OAPI_URL }/signup`);
}

function submit(values, url) {
	return (dispatch) => {
		axios.post(url, values)
			.then(
				(res) => dispatch([{ type: 'USER_FETCHED', payload: res.data }])
			)
			.catch((e) => {
				e.response.data.errors.forEach((err) => toastr.error('Error', err));
			});
	};
}

export function logout(values) {
	return {
		type: 'TOKEN_VALIDATED',
		payload: false
	};
}

export function validateToken(token) {
	return (dispatch) => {
		const obj = { type: 'TOKEN_VALIDATED', payload: false };
		if (token) {
			axios.post(`${ constants.OAPI_URL }/validateToken`, { token })
				.then(
					(res) => dispatch({ ...obj, payload: res.data.valid })
				)
				.catch((err) => dispatch(obj));
		} else {
			dispatch(obj);
		}
	};
}