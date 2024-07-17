import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { init, create, update, remove } from '@/billingCycle/billingCycleActions';

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
		this.props.init();
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
								<Form 
									onSubmit={ this.props.create }
									submitClass="success"
									submitLabel="Criar" />
							</TabContent>
							<TabContent id="tabUpdate">
								<Form 
									onSubmit={ this.props.update }
									submitClass="info"
									submitLabel="Alterar" />
							</TabContent>
							<TabContent id="tabDelete">
								<Form 
									onSubmit={ this.props.remove } 
									readOnly={true}
									submitClass="danger"
									submitLabel="Excluir" />
							</TabContent>
						</TabsContent>
					</Tabs>
				</Content>
			</div>
		);
	}
}

const mapDispatchToProps = (dipatch) => bindActionCreators({ init, create, update, remove }, dipatch);
export default connect(null, mapDispatchToProps)(BillingCycle);