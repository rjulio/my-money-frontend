import React from 'react';

import If from '@/common/operator/if';

export default (props) => (
	<If test={ !props.hide }>
		<div className="form-group has-feedback">
			<input 
				{...props.input}
				type={ props.type } 
				className="form-control"
				placeholder={ props.placeholder } 
				readOnly={ props.readOnly }/>
			<span className={`
				glyphicon glyphicon-${props.icon} form-control-feedback
			`}></span>
		</div>
	</If>
);