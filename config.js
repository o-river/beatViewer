config = {
	type: 'line',
	data: {
		datasets: []
	},
	plugins: [
		ChartDataLabels
	],
	options: {
		responsive: true,
		maintainAspectRatio: false,
		animation: false,
		stepped: true,
		interaction: {
			intersect: false,
			mode: 'nearest',
			axis: 'xy'
		},
		pointRadius: 4,
		plugins: {
			legend: {
				display: false,
				position: 'right',
				title: {
					display: true,
					font: {
						size: 18,
						weight: 'bold'
					},
					text: "ID"
				},
				labels: {
					usePointStyle: true,
					pointStyle: 'line'
					
				}
			},
			zoom: {
				pan: {
					enabled: true
				},
				zoom: {
					mode: 'x',
					wheel: {
						enabled: true
					},
					pinch: {
						enabled: true
					}
				},
				limit: {

				}
			},
			datalabels: {
				backgroundColor: context => context.dataset.borderColor,
        padding: 4,
        borderRadius: 4,
        clip: true,
        color: 'white',
        font: {
          weight: 'bold'
        },
				formatter: function(value, context) {
					console.log(context);
					if(datalabelSwitch) return Math.round(value.y);
					if(context.dataIndex < 2) return '-';
					else return context.dataset.data[context.dataIndex].r.toFixed(2) + '\ne=' + context.dataset.data[context.dataIndex].e;
				},
				textAlign: 'center',
				align: 'end'
			}
		},
		scales: {
			x: {
				type: 'realtime',
				realtime: {
					duration: 20000,
					// onRefresh: chart => {
					// 	chart.data.datasets.forEach((dataset, id) => {
					// 		var timestamp = Date.now();
					// 		var newdata = Math.random() * 1024;
					// 		var obj = getDataAnalisys(timestamp, id);
					// 		dataset.data.push({
					// 			x: timestamp,
					// 			y: newdata,
					// 			e: obj.e,
					// 			r: obj.r
					// 		});
					// 	});
					// }
				},
				titie: {
					display: true,
					text: 'Time'
				}
			},
			y: {
				beginAtZero: true,
				max: 1050,
				ticks: {
					stepSize: 128
				},
				title: {
					display: true,
					text: 'duty (Luminance of Lights)'
				}
			}
		}
	}
};