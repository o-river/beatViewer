config = {
	type: 'line',
	data: {
		datasets: []
	},
	options: {
		animation: false,
		stepped: true,
		interaction: {
			intersect: true,
			mode: 'nearest',
			axis: 'xy'
		},
		pointRadius: 4,
		plugins: {
			legend: {
				position: 'right',
				title: {
					display: true,
					font: {
						size: 18,
						weight: 'bold'
					},
					text: "ID"
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
				}
			},
			y: {
				beginAtZero: true,
				max: 1050,
				ticks: {
					stepSize: 128
				}
			}
		}
	}
};