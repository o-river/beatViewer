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
					// console.log(context);
					if(datalabelSwitch) return Math.round(value.y);
					if(context.dataIndex < 2) return '-';
					else {
						var t0 = context.dataset.data[context.dataIndex    ].x;
						var t1 = context.dataset.data[context.dataIndex - 1].x;
						var t2 = context.dataset.data[context.dataIndex - 2].x;
						return (Math.round((t0 - t1)/(t1 - t2)*100)/100).toFixed(2);
					}
				}
        // formatter: (value, context) => datalabelSwitch ? Math.round(value.y) : context.detaset.data[-1].x
			}
		},
		scales: {
			x: {
				type: 'realtime',
				realtime: {
					duration: 20000,
					onRefresh: chart => {
						chart.data.datasets.forEach(dataset => {
							dataset.data.push({
								x: Date.now(),
								y: Math.random() * 1024
							});
						});
					}
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