import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';

import { init } from './billingCycleActions';
import labelInput from '@/common/form/labelInput';
import ItemList from './itemList';
import Summary from './summary';

class BillingCycleForm extends Component {

	calculaSummary() {
		const sum = (t, v) => t + v;
		return {
			creditSum: this.props.credits.map((credit) => +credit.value || 0).reduce(sum),
			debitSum: this.props.debits.map((debit) => +debit.value || 0).reduce(sum)
		};
	}

	render() {
		const { handleSubmit, readOnly, credits, debits } = this.props;
		const { creditSum, debitSum } = this.calculaSummary();
		return (
			<form role="form" onSubmit={ handleSubmit }>
				<div className="box-body">
					<Field 
						name="name" 
						component={ labelInput }
						readOnly={ readOnly }
						label="Name" cols="12 4" placeholder="Informe o nome" />
					<Field 
						name="month" 
						component={ labelInput }
						readOnly={ readOnly }
						label="Month" cols="12 4" placeholder="Informe o mes" />
					<Field 
						name="year" 
						component={ labelInput }
						readOnly={ readOnly }
						label="Year" cols="12 4" placeholder="Informe o ano" />

					<Summary credit={ creditSum } debit={ debitSum } />

					<ItemList 
						cols="12 6"
						readOnly={ readOnly }
						list={ credits }
						field="credits"
						legend="Créditos" />
					<ItemList 
						cols="12 6"
						readOnly={ readOnly }
						list={ debits }
						field="debits"
						legend="Débitos"
						showStatus={ true } />
				</div>
				<div className="box-footer">
					<button type="submit" className={`btn btn-${ this.props.submitClass }`}>
						{ this.props.submitLabel }
					</button>
					<button
						type="button" 
						className="btn btn-default"
						onClick={ this.props.init }>Cancel</button>
				</div>
			</form>
		);
	}
}

BillingCycleForm = reduxForm({ form: 'BillingCycleForm', destroyOnUnmount: false })(BillingCycleForm);
const selector = formValueSelector('BillingCycleForm');
const mapStateToProps = (state) => ({
	credits: selector(state, 'credits'),
	debits: selector(state, 'debits')
});
const mapDispatchToProps = (dipatch) => bindActionCreators({ init }, dipatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);