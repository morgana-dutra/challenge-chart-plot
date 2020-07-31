/* Page's Footer */

import React from 'react';
import PropTypes from 'prop-types';

import './footer.css';

const Footer = props => (	
	<footer className = "footer">
		<button 
			onClick = {props.buttonClick}>
			GENERATE CHART
		</button>
	</footer>
);

Footer.propTypes = {
	buttonClick: PropTypes.func.isRequired
};

export default Footer;