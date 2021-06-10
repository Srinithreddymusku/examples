interface Person{
    age:number
}
interface Musician{
    instrument:string
}
class Drummer implements Musician, Person{
    age:number =30;
    instrument:string ='drums';    
}
let drummer = new Drummer();
console.log(drummer.age, drummer.instrument)
