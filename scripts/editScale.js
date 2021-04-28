var x1 = -10;
var x2 = 10;
var y1 = -10;
var y2 = 10;

function editScale() {
    x1 = document.getElementById('x1').value;
    x2 = document.getElementById('x2').value;
    y1 = document.getElementById('y1').value;
    y2 = document.getElementById('y2').value;

    alert(x1);
    Plotly.plot('graph', [], {
        xaxis: {range: [x1, x2]},
        yaxis: {range: [y1, y2]},

        // updatemenus: [{
        //     buttons: [
        //         {method: 'animate', args: [['sine']], label: 'sine'},
        //         {method: 'animate', args: [['cosine']], label: 'cosine'},
        //         {method: 'animate', args: [['circle']], label: 'circle'}
        //     ]
        // }]
    }, {});
}