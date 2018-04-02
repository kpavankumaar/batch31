import { Machine } from './interface';
export class Mechanic implements Machine {
    // engine = 'v8';
    constructor(public engine) {
        console.log(engine)
    }
    start (){
        console.log('start' + this.engine);
    }
    stop (){
        console.log('stop' + this.engine);
    }

}
var obj1 = new Mechanic('v8');
console.log(obj1);
function run(){
    console.log('run function')
}