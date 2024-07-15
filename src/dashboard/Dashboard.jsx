import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSummary } from '@/dashboard/dashboardActions'
import ContentHeader from '@template/contentHeader';
import Content from '@template/content';
import Row from '@/common/layout/row';
import ValueBox from '@/common/widget/valueBox';

class Dashboard extends Component {
	componentWillMount() {
		this.props.getSummary();
	}

	render() {
		const { summary } = this.props;
		return (
			<div>
				<ContentHeader title="Dashboard" small="Versao 1.0" />
				<Content>
					<Row>
						<ValueBox 
							cols="12 4" 
							color="green" 
							icon="bank"
							value={`R$ ${summary.credit}`}
							text="Total de créditos" />
						<ValueBox 
							cols="12 4" 
							color="red" 
							icon="credit-card"
							value={`R$ ${summary.debit}`}
							text="Total de débitos" />
						<ValueBox 
							cols="12 4" 
							color="blue" 
							icon="money"
							value={`R$ ${ summary.credit - summary.debit }`}
							text="Valor consolidado" />
					</Row>
				</Content>
			</div>
		);
	}
}

const mapStatesToProps = (state) => ({summary: state.dashboard.summary});
const mapDispatchToProps = (dispatch) => bindActionCreators({ getSummary }, dispatch);

export default connect(mapStatesToProps, mapDispatchToProps)(Dashboard);