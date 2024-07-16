import React from 'react';

import Grid from '@/common/layout/grid';

export default (props) => (
	<Grid cols={ props.cols }>
		<div className="form-group">
			<label htmlFor={props.name} className="">{props.label}</label>
			<input 
				{ ...props.input } 
				className="form-control" 
				placeholder={props.placeholder} 
				readOnly={ props.readOnly }
				type={props.type} />
		</div>
	</Grid>
);