/* Displays the Charts accordingly to the information given in the Editor */

import React from 'react';
import {Line} from 'react-chartjs-2';
import PropTypes from 'prop-types';

import {chartDefaultOptions} from '../../../../services/Utils/chart.js';
import './chart.css';

class Chart extends React.Component{

	constructor(props){
		super(props);
		this.chartRef = [];
		this.legendRef = [];
	}

	componentDidUpdate(prevProps, prevState){
		for(let i = 0; i < this.chartRef.length; i++)
			if( this.chartRef[i] && this.legendRef[i] )
				this.legendRef[i].innerHTML = this.chartRef[i].chartInstance.generateLegend();
	}

	render(){

		const {eventStreamList} = this.props;

		return(
			<div>
				{eventStreamList.getList().map( (v, k) => {
					
					const data = {
						datasets: v.datasets.toChartFormat()
					};
					
					return(
						<div className = "chart-position" key = {k}>
							<div className = "chart-size">
								<Line 
									data    = {data}
									width   = {600}
									height  = {265} 
									key     = {k}
									ctx     = {undefined}
									options = {chartDefaultOptions}
									ref     = {ref => this.chartRef[k] = ref}/>
							</div>
							<div 
								className   = "subtitle"
								ref         = {ref => this.legendRef[k] = ref}>
							</div>
						</div>
					);

				})}
			</div>
		);
	}
};

Chart.propTypes = {
	eventStreamList: PropTypes.object.isRequired
};

export default Chart;