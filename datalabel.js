labelstyle = [
    {
        name: "none",
        style: {
            display: false,
        }
    },
    {
        name: "duty",
        style: {
            display: true,
            formatter: function(value, context) {
                return Math.round(value.y);
            }
        }
    },
    {
        name: "error",
        style: {
            display: true,
            formatter: function(value, context) {
                if(context.dataIndex < 2) return '-';
				else return context.dataset.data[context.dataIndex].e;
            }
        }
    },
    {
        name: "ratio&error",
        style: {
            display: true,
            formatter: function(value, context) {
                if(context.dataIndex < 2) return '-';
				else return context.dataset.data[context.dataIndex].r.toFixed(2)
				 + '\ne=' + context.dataset.data[context.dataIndex].e;
            }
        }
    },
    {
        name: "interval",
        style: {
            display: true,
            formatter: function(value, context) {
                if(context.dataIndex < 2) return '-';
				else return (   Number(context.dataset.data[context.dataIndex].tau) 
                             * (Number(context.dataset.data[context.dataIndex].e + 1))).toFixed(0);
            }
        }
     
    }
];

function setDatalabelStyleSelector() {
    var selector = document.getElementById("datalabel-mode");
    labelstyle.forEach(mode => {
        var opt = document.createElement("option");
        opt.text = opt.value = mode.name;
        selector.appendChild(opt);
    });
    selector.addEventListener("change", function() {
        const selectedOption = selector.options[selector.selectedIndex];
        setDatalabelStyle(selectedOption.value);
    });
}

function getStyleByName(name, originalObject) {
    const dataItem = originalObject.find(item => item.name === name);
    if (dataItem) {
      return dataItem.style;
    }
    return null; // もしくは必要に応じて適切なデフォルト値を返す
}

function setDatalabelStyle(stylename) {
    var style = getStyleByName(stylename, labelstyle);
    Object.assign(config.options.plugins.datalabels, style);
}

