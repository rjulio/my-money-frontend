import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getList, showUpdate, showDelete } from './billingCycleActions';

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
					<td className="table-actions">
						<button 
							className="btn btn-warning" 
							onClick={ () => this.props.showUpdate(item) }>
							<i className="fa fa-pencil"></i>
						</button>

						<button 
							className="btn btn-danger" 
							onClick={ () => this.props.showDelete(item) }>
							<i className="fa fa-trash-o"></i>
						</button>
					</td>
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
							<th>Ações</th>
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
const mapDispatchToProps = (dipatch) => bindActionCreators({getList, showUpdate, showDelete }, dipatch);
export default connect(mapStatetoProps, mapDispatchToProps)(List);