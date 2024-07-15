import '../common/template/dependencies';
import React from 'react';

import Routes from './routes';
import Header from '../common/template/header';
import Sidebar from '../common/template/sidebar';
import Footer from '../common/template/footer';
import Messages from '../common/msg/messages';

export default function App(props) {
	return (
		<div className="wrapper">
			<Header />
			<Sidebar />
			<div className="content-wrapper">
				<Routes />
			</div>
			<Footer />
			<Messages />
		</div>
	);
}