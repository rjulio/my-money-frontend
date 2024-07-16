import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';

import { init } from './billingCycleActions';
import labelInput from '@/common/form/labelInput';

class BillingCycleForm extends Component {
	render() {
		const { handleSubmit, readOnly } = this.props;
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
				</div>
				<div className="box-footer">
					<button type="submit" className="btn btn-primary">Submit</button>
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
const mapDispatchToProps = (dipatch) => bindActionCreators({ init }, dipatch);
export default connect(null, mapDispatchToProps)(BillingCycleForm);