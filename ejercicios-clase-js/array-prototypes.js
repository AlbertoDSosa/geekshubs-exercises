// Array Prototypes Custom

// Crea los métodos de Array.prototype con las mismas funcionalidades
// como hemos hecho con length y push.

var Vector = function () {
    let _value = [];

    function _setArguments(args, arr) {
        arr = arr || [];
        if(args.length) {
            for(i = 0; i < args.length; i++) {
                arr[i] = args[i.toString()];
            }
        }
        return arr;
    }

    function _setValues(deleteVector, _in, _out) {

        for(let i = _in; i < _out; i++) {
            deleteVector.push(_value[i]);
        } 
    }

    _setArguments(arguments, _value);

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

    this.concat = function () {
        let args = _setArguments(arguments);
        let _valueLength = this.length();
        let _newValue = [];
    
        for(value of args){
            for(val of value) {
                this.push(val);
            }
        }

        _newValue = _value;
        _value = [];

        for(let i = 0; i < _valueLength; i++) {
            this.push(_newValue[i]);
        }

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
        let _deleteVector = new Vector();
        let _newVector = new Vector;
        let _deleteValue = _deleteVector.valueOf();
        let _valueLength = this.length();

        let end = start + deleteCount;
        let _start = _valueLength + start;

        if(deleteCount === undefined) {
            deleteCount = _valueLength;
            end = deleteCount;
        }
        

        let _leftValue = [];
        let _rightValue = [];
        let args = [];
        let countArgs = 0;
        
        if(arguments[2]) {
            for(let i = 2; i < arguments.length; i++) {
               args[countArgs++] = arguments[i.toString()];
            }
        }

        if(start >= 0 && deleteCount > 0) {
            _setValues(_deleteVector, start, end);
            _leftValue = this.slice(0, start);
            _rightValue= this.slice(end, _valueLength);
            _value = _newVector.concat(_leftValue, args, _rightValue);
        } else if(start < 0 && deleteCount > 0) {
            end = _start + deleteCount;
            _setValues(_deleteVector,_start, end);
            _leftValue = this.slice(0, _start);
            _rightValue= this.slice(end, _valueLength);
            _value = _newVector.concat(_leftValue, args, _rightValue);
        } else if(deleteCount <= 0 || typeof(deleteCount) !== 'number') {
            _deleteValue = [];
        }
        
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
console.log('---> Vector2 Instance');
var Vector2 = new Vector('value5', 'value6', 'value7');
// console.log('Vector2 instance return: ', Vector2);

console.log('---> Vector3 Instance');
var Vector3 = new Vector('value8', 'value9', 'value10');
// console.log('Vector3 instance return: ', Vector3);

// console.log('--------- Push');
var vectorLength = vector.push( 'value3', 'value4');
// console.log('Vector .push() return: ', vectorLength);
// console.log('Vector valueOf return: ', vector.valueOf());

// console.log('--------- Lenght');
// console.log('Vector .length() return: ', vector.length());
// console.log('Vector valueOf return: ', vector.valueOf());
// console.log('Vector2 .length() return: ', Vector2.length());

var vector2 = Vector2.valueOf();
var vector3 = Vector3.valueOf();
// console.log('--------- Concat');
// console.log('Vector valueOf before: ', vector.valueOf());
// console.log('Vector2 valueOf before: ', Vector2.valueOf());
// console.log('Vector3 valueOf before: ', Vector2.valueOf());
// console.log('Vector .concat(otherVector) return:', vector.concat(vector2, vector3));
// console.log('Vector valueOf after: ', vector.valueOf());
// console.log('Vector2 valueOf after: ', Vector2.valueOf());
// console.log('Vector3 valueOf after: ', Vector3.valueOf());

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
console.log('Vector .splice(1, 2) return:', vector.splice(1, 2, 'arg1', 'arg2'));
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

console.log('--------- Splice');
console.log('Array valueOf() before', arr.valueOf());
console.log('Array .splice(1, 2) return:', arr.splice(-1, 2, 'arg1', 'arg2'));
console.log('Array valueOf() after', arr.valueOf());

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
