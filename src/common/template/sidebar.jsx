import React from 'react';

import Menu from './menu';

export default function Sidebar(props) {
	return (
		<aside className="main-sidebar">
			<section className="sidebar">
				<Menu />
			</section>
		</aside>
	);
}