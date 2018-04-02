// class , function , properties , inheritance, polymorphism

var num = 100; 
// var num1:number  = num + " this information is a string "
var init: (s1:number,s2:number, s3:number) => void
init = function (s1,s2,s3){
    console.log(s1 + s2 + s3)
    return 20;
}

init(10,20,5);



import { Mechanic } from "./basics1";
class run extends Mechanic {
    runEngine:Mechanic;
    constructor( engine ) {
        super(engine);
        console.log(this.runEngine);
    }
}
var obj = new run('v7');
console.log(obj.start());
