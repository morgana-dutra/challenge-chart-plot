/* displays a box informing an error. */

import React from 'react';
import PropTypes from 'prop-types';

import './error.css';

function ErrorAlert(props){
	const open = props.error.hasOwnProperty('message');
	return(
		<React.Fragment>
			<div className = {`modal${open ? " open" : ""}`}></div>
			<div className = {`modal1${open ? " open" : ""}`}>
				<div className = "content">
					<div className = "title">An error has occurred!</div>
					<div className = "error-message">
						{props.error && (props.error.message)}
					</div>
					<div className = "stack">
						{props.error && (props.error.stack)}
					</div>
					<div className = "btn">
						<button onClick = {props.dismiss}>Dismiss</button>
					</div>
				</div>
			</div>
			{props.children}
		</React.Fragment>
	);
};

ErrorAlert.propTypes = {
	error: PropTypes.object.isRequired,
	dismiss: PropTypes.func.isRequired
};

export default ErrorAlert;