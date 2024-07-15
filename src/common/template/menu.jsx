import React from 'react';

import MenuItem from '@template/menuItem';
import MenuTree from '@template/menuTree';

export default function Menu(props) {
	return (
		<ul className="sidebar-menu">
			<MenuItem path="#" label="Dashboard" icon="dashboard" />
			<MenuTree label="Cadastro" icon="edit">
				<MenuItem path="/#/billingCycle" label="Ciclos de Pagamento" icon="usd" />
			</MenuTree>
		</ul>
	);
}