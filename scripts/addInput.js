String.prototype.formatUnicorn = String.prototype.formatUnicorn ||
    function () {
        "use strict";
        var str = this.toString();
        if (arguments.length) {
            var t = typeof arguments[0];
            var key;
            var args = ("string" === t || "number" === t) ?
                Array.prototype.slice.call(arguments)
                : arguments[0];

            for (key in args) {
                str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
            }
        }

        return str;
    };

fields = 0;
function addInput() {
    if (fields != 10) {
        str = fields.toString()
        // document.getElementById('text').innerHTML += "<input type='text' id='{0}' value='' /><br />".formatUnicorn(str);
        myFunction(str)
        fields += 1;
    } else {
        document.getElementById('text').innerHTML += "<br />Только 10 графиков доступно для добавления.";
        document.form.add.disabled = true;
    }
}

function myFunction(str) {

    var x = document.createElement("br");
    document.body.appendChild(x);

    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "x");
    x.setAttribute("id", str);
    document.body.appendChild(x);

    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "Введите название графика");
    x.setAttribute("id", "name"+str);
    document.body.appendChild(x);

    var y = document.createElement("input");
    y.setAttribute("onclick", "addFunc("+str+")");
    y.setAttribute("type", "button");
    y.setAttribute("value", "Add");
    document.body.appendChild(y);
}