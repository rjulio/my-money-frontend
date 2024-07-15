import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getList } from './billingCycleActions';

class List extends Component {
	componentWillMount() {
		this.props.getList();
	}

	renderRows() {
		const list = this.props.list || [];
		return list.map(
			(item) => (
				<tr key={ item._id }>
					<td>{ item.name }</td>
					<td>{ item.month }</td>
					<td>{ item.year }</td>
				</tr>
			)
		)
	}

	render() {
		return (
			<div>
				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Month</th>
							<th>Year</th>
						</tr>
					</thead>
					<tbody>
						{ this.renderRows() }
					</tbody>
				</table>
			</div>
		);
	};
}

const mapStatetoProps = (state) => ({ list: state.billingCycle.list });
const mapDispatchToProps = (dipatch) => bindActionCreators({getList}, dipatch);
export default connect(mapStatetoProps, mapDispatchToProps)(List);