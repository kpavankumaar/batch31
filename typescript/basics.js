"use strict";
// class , function , properties , inheritance, polymorphism
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var num = 100;
// var num1:number  = num + " this information is a string "
var init;
init = function (s1, s2, s3) {
    console.log(s1 + s2 + s3);
    return 20;
};
init(10, 20, 5);
var basics1_1 = require("./basics1");
var run = /** @class */ (function (_super) {
    __extends(run, _super);
    function run(engine) {
        var _this = _super.call(this, engine) || this;
        console.log(_this.runEngine);
        return _this;
    }
    return run;
}(basics1_1.Mechanic));
var obj = new run('v7');
console.log(obj.start());
