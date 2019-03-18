// Array Prototypes Custom

// Crea los métodos de Array.prototype con las mismas funcionalidades
// como hemos hecho con length y push.

var Vector = function () {
    let _value = [];

    if(arguments.length) {
        if(Array.isArray(arguments['0'])) {
            _value = arguments['0'];
        }

        for(var i = 0; i < arguments.length; i++) {
            _value[i] = arguments[i.toString()];
        }
    }

    this.valueOf = function () {
        return _value;
    };
    
    this.length = function () {
        let count = 0;
        for(var _ of _value) {
            count++;
        }
        return count;
    };
    

    this.push = function () {
        if(arguments.length) {
            for(key in arguments) {
                _value[this.length()] = arguments[key];
            }
        }

        return this.length();
    }

    this.concat = function (vector) {
        // Me guardo el lenght de value.
        let _valueLength = this.length();
        // Sumo el array que se pasa por parametro a value.
        for(value of vector) {
            this.push(value);
        }
        // Declaro un nuevo valor
        let _newValue = [];
        // Guardo el valor de _value en newValue
        _newValue = _value;
        // Borro o sobreescribo _value
        _value = [];
        // Relleno _value con el length que había guardado
        for(let i = 0; i < _valueLength; i++) {
            this.push(_newValue[i]);
        }
        // Retorno el valor nuevo
        return _newValue;
    }
    
    this.slice = function (start, end) {
        var _newVector = new Vector();

        function _setValues(_in, _out) {
            for(var i = _in; i < _out; i++) {
                _newVector.push(_value[i]); 
            } 
        }

        if(end === undefined) {
            end = end || this.length(); 
        }
    
        if(start >= 0 && end >= 0) {
            _setValues(start, end);
        } else if(start < 0 && end >= 0) {
            var _in = this.length() + start;
            _setValues(_in, end);
        } else if(start >= 0 && end < 0) {
            var _out = this.length() + end;
            _setValues(start, _out);
        }
        
        return _newVector.valueOf();
    }
    
    
    // Iterables
    
    this.forEach = function (callback) {
        for(let index = 0; index < this.length(); index++) {
           callback(_value[index], index, _value); 
        }
    }
}

console.log('---> Vector Instance');
var vector = new Vector('value1', 'value2');
console.log('Vector instance return: ', vector);

console.log('--------- Lenght');

console.log('Vector .length() return: ', vector.length());
console.log('Vector valueOf return: ', vector.valueOf());
// console.log('otherVector .length() return: ', otherVector.length());

console.log('--------- Push');

var vectorLength = vector.push( 'value3', 'value4');
console.log('Vector .push() return: ', vectorLength);
console.log('Vector valueOf return: ', vector.valueOf());


console.log('---> otherVector Instance');
var otherVector = new Vector('value5', 'value6', 'value7');
console.log('otherVector instance return: ', otherVector);

console.log('--------- Concat');
var vector2 = otherVector.valueOf();
console.log('Vector valueOf before: ', vector.valueOf());
console.log('otherVector valueOf before: ', otherVector.valueOf());

console.log('Vector .concat(otherVector) return:', vector.concat(vector2));

console.log('Vector valueOf after: ', vector.valueOf());
console.log('otherVector valueOf after: ', otherVector.valueOf());

console.log('--------- Slice');
console.log('Vector valueOf before: ', vector.valueOf());
console.log('Vector .slice(0, 2) return:', vector.slice(0, 2));
console.log('Vector .slice(-2, 4) return:', vector.slice(-2, 4));
console.log('Vector .slice(2, -1) return:', vector.slice(2, -1));
console.log('Vector valueOf after: ', vector.valueOf());

console.log('-----> Array Instance');
var arr = new Array('value1', 'value2');
var arrLength = arr.push('value3', 'value4');

console.log('--------- Slice');
console.log('Array valueOf() before', arr.valueOf());
console.log('Array .slice(0, 2) return:', arr.slice(0, 2));
console.log('Array .slice(-2, 4) return:', arr.slice(-2, 4));
console.log('Array .slice(2, -1) return:', arr.slice(2, -1));
console.log('Array valueOf() after', arr.valueOf());

// var otherArr = ['value5', 'value6', 'value7'];

// console.log(arr.length);
// console.log(arrLength);
// console.log(arr.concat(otherArr));
// console.log(arr)


// arr.forEach(function (value, index, array) {
//     console.log1
//         'Value: ' + value + '\n',
//         'Index: ' + index + '\n',
//         'Array: ' + array
//     )
// });
