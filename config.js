config = {
	type: 'line',
	data: {
		datasets: []
	},
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
			}
		},
		scales: {
			x: {
				type: 'realtime',
				realtime: {
					duration: 20000,
					// onRefresh: chart => {
					// 	chart.data.datasets.forEach(dataset => {
					// 		dataset.data.push({
					// 			x: Date.now(),
					// 			y: Math.random() * 1024
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