/* This component plots a time line chart, given an input json string. */

import React from 'react';

import Header from '../../components/header.js';
import Footer from '../../components/footer.js';

import ErrorAlert from '../../components/error.js';

import Editor from './components/Editor/editor';
import Chart from './components/Chart/chart.js';

import EventStringParser from '../../services/EventStringParser';
import {defaultValue} from '../../services/Utils/ace.js';

class Main extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			hasError: {},
			codeEditor:{
				defaultValue,
				value: defaultValue
			},
			chart: {
				eventStreamList: new EventStringParser()
			}
		};
	}

	/* starts the chart */
	componentDidMount(){
		this.buttonClick();
	}

	/* updates editor */
	editorOnChange = value => {

		this.setState( prevState => ({
			...prevState,
			codeEditor: {
				...prevState.Editor,
				value
			}
		}));
	}

	/* Close Error */
	dismissError = () => {
		this.setState(prev => ({
			...prev,
			hasError: {}
		}));
	}

	/* Generates a new chart */
	buttonClick = () => {

		try{

			const {value} = this.state.codeEditor;

			const eventStreamList = new EventStringParser(value);
			
			eventStreamList.process();

			this.setState(prevState => ({
				...prevState,
				chart:{
					eventStreamList
				}
			}));

		}catch(err){
			
			this.setState(prev => ({
				...prev,
				hasError: err
			}));
		}
	}

	render() {
		return (
			<ErrorAlert
				error = {this.state.hasError}
				dismiss = {this.dismissError}>
				
				<Header />
				
				<Editor
					onChange =  {this.editorOnChange}
					{...this.state.codeEditor} />
				
				{!this.props.test && 
					(<Chart 
						{...this.state.chart}/>)
				}

				<Footer 
					buttonClick = {this.buttonClick}/>

			</ErrorAlert>
		);
	}
}

export default Main;