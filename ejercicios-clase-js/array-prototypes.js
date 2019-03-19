// Array Prototypes Custom

// Crea los métodos de Array.prototype con las mismas funcionalidades
// como hemos hecho con length y push.

var Vector = function () {
    let _value = [];

    function _setValues(newVector, _in, _out) {
        for(let i = _in; i < _out; i++) {
            newVector.push(_value[i]); 
        } 
    }

    if(arguments.length) {
        for(let i = 0; i < arguments.length; i++) {
            _value[i] = arguments[i.toString()];
        }
    }

    this.valueOf = function () {
        return _value;
    };
    
    this.length = function () {
        let count = 0;
        for(let _ of _value) {
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
        // Guardo el valor de _value en _newValue
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
        let _newVector = new Vector();

        if(end === undefined) {
            end = this.length(); 
        }

        let _start = this.length() + start;
        let _end = this.length() + end;

        if(start >= 0 && end >= 0) {
            _setValues(_newVector, start, end);
        } else if(start < 0 && end >= 0) {
            _setValues(_newVector, _start, end);
        } else if(start >= 0 && end <= 0) {
            _setValues(_newVector, start, _end);
        } else if(start < 0 && end <= 0) {
            _setValues(_newVector, _start, _end);
        }
        
        return _newVector.valueOf();
    }

    this.splice = function (start, deleteCount) {
        let _newVector = new Vector();
        let _newValue = [];
        let _deleteValue = _newVector.valueOf();
        let _valueLength = this.length();
        let end = start + deleteCount;

        if(deleteCount === undefined) {
            deleteCount = _valueLength;
            end = deleteCount;
        }
        
        let _start = _valueLength + start;

        if(start >= 0 && deleteCount > 0) {
            _setValues(_newVector, start, end);
        } else if(start < 0 && deleteCount > 0) {
            end = _start + deleteCount;
            _setValues(_newVector,_start, end);
        } else if(deleteCount <= 0 || typeof(deleteCount) !== 'number') {
            _deleteValue = [];
        }

        let _deleteValueLength = _newVector.length();
        let args = [];
        let countArgs = 0;
        let newValueLength = _deleteValueLength + _valueLength + countArgs;
        
        if(arguments[2]) {
            for(let i = 2; i < arguments.length; i++) {
               args[countArgs++] = arguments[i.toString()];
            }
        }

        // Hacer filtro (puede que sea la misma dinamica para .filter)
       
        let count = 0;

        for(let index = 0; index < _valueLength; index++) {
            for(let i = 0; i < _deleteValueLength; i++) {
                if(_value[index] !== _deleteValue[i]) {
                    _newValue[count++] = _value[index];
                }

                if(_value[index] === _deleteValue[i] && args[0]){
                    console.log('Ya no se como seguir', _value[index])
                }

            }
        }

        _value = _newValue;

        return  _deleteValue;
    }

    this.shift = function () {
        let _newVector = new Vector();
        let _newValue = _newVector.valueOf();
        let _valueLength = this.length();
        let _deleteValue = _value[0];

        for(let i = 1; i < _valueLength; i++) {
            _newVector.push(_value[i]);
        }

        _value = _newValue;

        return _deleteValue;
    }

    this.unshift = function () {
        let _newVector = new Vector()

        if(arguments.length) {
            for(key in arguments) {
                _newVector.push(arguments[key]);
            }
        }

        _value = _newVector.concat(_value);

        return this.length();
    }

    this.reverse = function () {
        let _newValue = [];
        let index = this.length() - 1;
        let count = 0;

        for(let i = index; i >= 0; i--) {
            _newValue[count++] = _value[i];
        }

        return _newValue;
    }

    this.join = function (separator) {
        let _newValue = _value
                            .toString()
                            .replace(/,/g, separator);

        return _newValue;
    }

    this.pop = function () {
        let _newValue = [];
        let _valueLength = this.length();
        let _lastItem = _valueLength - 1;
        let _deleteValue = _value[_lastItem];

        for(let i = 0; i < _lastItem; i++) {
            _newValue[i] = _value[i];
        }

        _value = _newValue;

        return _deleteValue;
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
// console.log('Vector instance return: ', vector);

// console.log('--------- Lenght');

// console.log('Vector .length() return: ', vector.length());
// console.log('Vector valueOf return: ', vector.valueOf());
// console.log('otherVector .length() return: ', otherVector.length());

// console.log('--------- Push');

var vectorLength = vector.push( 'value3', 'value4');
// console.log('Vector .push() return: ', vectorLength);
// console.log('Vector valueOf return: ', vector.valueOf());


// console.log('---> otherVector Instance');
// var otherVector = new Vector('value5', 'value6', 'value7');
// console.log('otherVector instance return: ', otherVector);

// console.log('--------- Concat');
// var vector2 = otherVector.valueOf();
// console.log('Vector valueOf before: ', vector.valueOf());
// console.log('otherVector valueOf before: ', otherVector.valueOf());

// console.log('Vector .concat(otherVector) return:', vector.concat(vector2));

// console.log('Vector valueOf after: ', vector.valueOf());
// console.log('otherVector valueOf after: ', otherVector.valueOf());

// console.log('--------- Slice');
// console.log('Vector valueOf before: ', vector.valueOf());
// console.log('Vector .slice(2) return:', vector.slice(2));
// console.log('Vector .slice(-1) return:', vector.slice(-1));
// console.log('Vector .slice(0, 2) return:', vector.slice(0, 2));
// console.log('Vector .slice(-2, 4) return:', vector.slice(-2, 4));
// console.log('Vector .slice(2, -1) return:', vector.slice(2, -1));
// console.log('Vector .slice(-2, -1) return:', vector.slice(-2, -1));
// console.log('Vector valueOf after: ', vector.valueOf());

console.log('--------- Splice');
console.log('Vector valueOf before: ', vector.valueOf());
console.log('Vector .splice(0, 2) return:', vector.splice(-3, 1, 'arg1', 'arg2'));
console.log('Vector valueOf after: ', vector.valueOf());

// console.log('--------- Reverse');
// console.log('Vector valueOf before: ', vector.valueOf());
// console.log('Vector .reverse() return:', vector.reverse());
// console.log('Vector valueOf after: ', vector.valueOf());

// console.log('--------- Join');
// console.log('Vector valueOf before: ', vector.valueOf());
// console.log('Vector .join() return:', vector.join('-'));
// console.log('Vector valueOf after: ', vector.valueOf());

// console.log('--------- Shift');
// console.log('Vector valueOf before: ', vector.valueOf());
// console.log('Vector .shift() return:', vector.shift());
// console.log('Vector valueOf after: ', vector.valueOf());

// console.log('--------- Unshift');
// console.log('Vector valueOf before: ', vector.valueOf());
// console.log('Vector .unshift() return:', vector.unshift('value5', 'value6', 'value7'));
// console.log('Vector valueOf after: ', vector.valueOf());

// console.log('--------- Pop');
// console.log('Vector valueOf before: ', vector.valueOf());
// console.log('Vector .pop() return:', vector.pop());
// console.log('Vector valueOf after: ', vector.valueOf());

var arr = new Array('value1', 'value2');
console.log('-----> Array Instance');
// console.log(arr)

// console.log('--------- Length');
// console.log(arr.length);

var arrLength = arr.push('value3', 'value4');
// console.log('--------- Push');
// console.log(arrLength);

var otherArr = ['value5', 'value6', 'value7'];
// console.log('--------- Concat');
// console.log(arr.concat(otherArr));


// console.log('--------- Slice');
// console.log('Array valueOf() before', arr.valueOf());
// console.log('Array .slice(2) return:', arr.slice(2));
// console.log('Array .slice(-1) return:', arr.slice(-1));
// console.log('Array .slice(0, 2) return:', arr.slice(0, 2));
// console.log('Array .slice(-2, 4) return:', arr.slice(-2, 4));
// console.log('Array .slice(2, -1) return:', arr.slice(2, -1));
// console.log('Array .slice(-2, -1) return:', arr.slice(-2, -1));
// console.log('Array valueOf() after', arr.valueOf());

// console.log('--------- Splice');
// console.log('Array valueOf() before', arr.valueOf());
// console.log('Array .splice(0, 2) return:', arr.splice(-3, 1, 'arg1', 'arg2'));
// console.log('Array valueOf() after', arr.valueOf());

// console.log('--------- Reverse');
// console.log('Array valueOf before: ', arr.valueOf());
// console.log('Array .reverse() return:', arr.reverse());
// console.log('Array valueOf after: ', arr.valueOf());

// console.log('--------- Join');
// console.log('Array valueOf before: ', arr.valueOf());
// console.log('Array .join() return:', arr.join('-'));
// console.log('Array valueOf after: ', arr.valueOf());

// console.log('--------- Shift');
// console.log('Array valueOf before: ', arr.valueOf());
// console.log('Array .shift() return:', arr.shift());
// console.log('Array valueOf after: ', arr.valueOf());

// console.log('--------- Unshift');
// console.log('Array valueOf before: ', arr.valueOf());
// console.log('Array .unshift() return:', arr.unshift('value5', 'value6', 'value7'));
// console.log('Array valueOf after: ', arr.valueOf());

// console.log('--------- Pop');
// console.log('Array valueOf before: ', arr.valueOf());
// console.log('Array .pop() return:', arr.pop());
// console.log('Array valueOf after: ', arr.valueOf());

// arr.forEach(function (value, index, array) {
//     console.log1
//         'Value: ' + value + '\n',
//         'Index: ' + index + '\n',
//         'Array: ' + array
//     )
// });
