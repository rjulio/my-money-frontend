import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import promise from 'redux-promise';

import reducers from '@/main/reducers';
import  Route from '@/main/routes';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools);

ReactDOM.render(
	<Provider store={ store }>
		<Route />
	</Provider>,
	document.getElementById('app'));