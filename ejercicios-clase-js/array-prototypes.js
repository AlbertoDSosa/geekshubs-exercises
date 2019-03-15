// Array Prototypes Custom

// Crea los métodos de Array.prototype con las mismas funcionalidades
// como hemos hecho con length y push.

var arr = new Array();

var Vector = function () {
    var _value = [];

    this.valueOf = function () {
        return _value;
    };

    this.length = function () {
        var contador= 0;
        for(var _ of _value) {
            contador++;
        }
        return contador;
    }

    this.push = function (n) {
        _value[this.length()] = n
        return this.length();
    }
}

var vector = new Vector();


console.log(vector.length());
