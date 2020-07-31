/* ChartJS options */

export const chartDefaultOptions = {
	
	legend: false,
	
	legendCallback: function (chart) {
		const lis = chart.data.datasets.map(dataset => {	
			return `<li style = "color:${dataset.backgroundColor}";>
						<span style = "background-color:${dataset.backgroundColor}";></span>
						${dataset.label}
					</li>`;

		}).join("");

		return `<ul class="${chart.id}-legend">${lis}</ul>`;
	},

	scales:{
		
		yAxes: [{
			ticks: {
				beginAtZero: true,
			},	
		}],

		xAxes: [{
			type: 'time',
			time: {
				unit: 'minute',
				displayFormats:{
					minute: 'HH:mm'
				},
			},
			ticks:{
        		beginAtZero: true
			}
		}]
	},

	maintainAspectRatio: false, 
	
}

/* Removes colored area under chart lines */
export const commonDatasetOptions = {
	fill: false,
}