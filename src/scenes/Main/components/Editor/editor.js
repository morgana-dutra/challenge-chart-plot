/*Editor input code*/

import React from 'react';

import AceEditor from 'react-ace';
import PropTypes from 'prop-types';

import 'brace/mode/java';
import 'brace/theme/monokai';
import './editor.css';

class Editor extends React.Component{
	
	render(){
		return (
			<div 
				className = "editor"
				ref 	  = {el => this.editorWrapper = el}>
				<AceEditor
					height		= "200px"
				    theme		= "monokai"
				    name		= "editor"
				    width  		= "100%"
				    onChange	= {this.props.onChange}
				    fontSize	= "16px"
				    value   	= {this.props.value}
				/>
  			</div>
		);
	}
};

Editor.propTypes = {
	defaultValue: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

export default Editor;