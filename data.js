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

function setLatestErrorcount(id, e = 0) {
    config.data.datasets[id].data.slice(-1)[0].e = e
}

function convertToLux(beatInterval) {
    var bcount = 30000 / beatInterval;
    return 63.2 * bcount + 86.8;
}

function getBeatIntervalRatio(t0, t1, t2, e1) {
    return (t0 - t1)/(t1 - t2) * (e1+1);
}

function getErrorcount(r) {
    for (var n=1; ; n++) {
        if(r*(2*n + 1) < 2*n*(n+1)) return n-1;
    }
    return r > 1 ? Math.round(r) - 1 : 0;
}

function getDataAnalisys(timestamp, id){
    var e0 = 0;
    var ratio = null;
    var tau_hat = null;
    var lux = null;
    if(config.data.datasets[id].data.length >= 2) {  
        var d = config.data.datasets[id].data.slice(-2);
        var t2 = d[0].x;
        var t1 = d[1].x;
        var t0 = timestamp;
        var e1 = d[1].e;
        ratio = getBeatIntervalRatio(t0, t1, t2, e1);
        e0 = getErrorcount(ratio);
        tau_hat = (t0 - t1) / (e0+1);
        lux = convertToLux(tau_hat);
    }
    return {r: ratio, e: e0, tau: tau_hat, lux: lux};
}

function appendDataToChart(timestamp, newdata = 0, id = 1) {
    var obj = getDataAnalisys(timestamp, id);
    config.data.datasets[id].data.push({x: timestamp, y: newdata, e: obj.e, r: obj.r, tau: obj.tau, lux: obj.lux});
    myChart.update();
}