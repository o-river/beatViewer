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

function getBeatIntervalRatio(t0, t1, t2, e1) {
    return (t0 - t1)/(t1 - t2) * (e1+1);
}

function getErrorcount(r) {
    // todo: 新しいエラー回数丸め込み関数に置き換え
    return r > 1 ? Math.round(r) - 1 : 0;
}

function getDataAnalisys(timestamp, id){
    var e0 = 0;
    var ratio = null;
    if(config.data.datasets[id].data.length >= 2) {  
        var d = config.data.datasets[id].data.slice(-2);
        var t2 = d[0].x;
        var t1 = d[1].x;
        var t0 = timestamp;
        var e1 = d[1].e;
        ratio = getBeatIntervalRatio(t0, t1, t2, e1);
        e0 = getErrorcount(ratio);
    }
    return {r: ratio, e: e0};
}

function appendDataToChart(timestamp, newdata = 0, id = 1) {
    var obj = getDataAnalisys(timestamp, id);
    config.data.datasets[id].data.push({x: timestamp, y: newdata, e: obj.e, r: obj.r});
    //myChart.update();
}