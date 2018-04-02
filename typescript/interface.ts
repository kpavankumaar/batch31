export interface Machine {
    engine:string;
    start:() => void ;
    stop:() => void ;
}