// data.js

function addPlot() {
    var value = Number(document.getElementById("duty").value);
    var cid = Number(document.getElementById("cid").value);
    config.data.datasets[cid].data.push({x: new Date(), y: value + cid*100});
    // config.data.datasets.forEach(dataset => {
    //     dataset.data.push({x: new Date(), y: value});
    // });
    myChart.update();
};

function appendDataToChart(timestamp, newdata = 0, id = 1) {
    config.data.datasets[id].data.push({x: timestamp, y: newdata});
    myChart.update();
}