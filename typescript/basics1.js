"use strict";
exports.__esModule = true;
var Mechanic = /** @class */ (function () {
    // engine = 'v8';
    function Mechanic(engine) {
        this.engine = engine;
        console.log(engine);
    }
    Mechanic.prototype.start = function () {
        console.log('start' + this.engine);
    };
    Mechanic.prototype.stop = function () {
        console.log('stop' + this.engine);
    };
    return Mechanic;
}());
exports.Mechanic = Mechanic;
var obj1 = new Mechanic('v8');
console.log(obj1);
function run() {
    console.log('run function');
}
