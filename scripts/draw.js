function addFunc(str){
    var f = document.getElementById(str);
    var name = document.getElementById('name'+str);
    // document.write('name'+str)
    // alert(f.value.toString())
    // document.write(n.value.toString())

    var fr = [
        {name: str, data: [{x: [], y: []}]}
    ];

    var dt = 0.01;
    var i = 0;
    for (var dot = x1; dot < x2;) {
        let node2 = math.parse(f.value.toString());
        let code2 = node2.compile();
        let scope = {
            x: dot,
        };
        fr[0].data[0].x[i] = scope.x;
        fr[0].data[0].y[i] = code2.evaluate(scope);
        // document.write(fr[0].data[0].x[i]);
        // document.write(fr[0].data[0].y[i]);
        // document.writeln('');
        dot+=dt;
        i++;
    }


    Plotly.plot('graph', [
        {
            x: fr[0].data[0].x,
            y: fr[0].data[0].y,
            line: {simplify: false},
            name: name.value.toString(),
        },
    ], {
        // xaxis: {range: [-Math.PI, Math.PI]},
        // yaxis: {range: [-1.2, 1.2]},
        showlegend: true,
        legend: {"orientation": "h"},
        // updatemenus: [{
        //     buttons: [
        //         {method: 'animate', args: [['sine']], label: 'sine'},
        //         {method: 'animate', args: [['cosine']], label: 'cosine'},
        //         {method: 'animate', args: [['circle']], label: 'circle'}
        //     ]
        // }]
    }, {displayModeBar: false}).then(function() {
        Plotly.addFrames('graph', frames);
    });
}