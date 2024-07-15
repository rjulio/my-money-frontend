import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectTab, showTabs } from '../common/tab/tabActions';
import { create } from '@/billingCycle/billingCycleActions';

import ContentHeader from '@template/contentHeader';
import Content from '@template/content';
import Tabs from '@/common/tab/tabs';
import TabsHeader from '@/common/tab/tabsHeader';
import TabHeader from '@/common/tab/tabHeader';
import TabsContent from '@/common/tab/tabsContent';
import TabContent from '@/common/tab/tabContent';
import List from '@/billingCycle/list';
import Form from '@/billingCycle/form';

class BillingCycle extends Component {

	componentWillMount() {
		this.props.selectTab('tabList');
		this.props.showTabs('tabList', 'tabCreate');
	};

	render() {
		return (
			<div>
				<ContentHeader title="Ciclos de pagamento" small="Cadastro" />
				<Content>
					<Tabs>
						<TabsHeader>
							<TabHeader label="Lista" icon="bars" target="tabList" />
							<TabHeader label="Incluir" icon="plus" target="tabCreate" />
							<TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
							<TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
						</TabsHeader>
						<TabsContent>
							<TabContent id="tabList">
								<List />
							</TabContent>
							<TabContent id="tabCreate">
								<Form onSubmit={ this.props.create } />
							</TabContent>
							<TabContent id="tabUpdate"><h1>Update</h1></TabContent>
							<TabContent id="tabDelete"><h1>Delete</h1></TabContent>
						</TabsContent>
					</Tabs>
				</Content>
			</div>
		);
	}
}

const mapDispatchToProps = (dipatch) => bindActionCreators({selectTab, showTabs, create}, dipatch);
export default connect(null, mapDispatchToProps)(BillingCycle);