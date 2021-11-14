// Object Prototypes ES5

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;

    // method
    this.printInfo = function(wheels = 0, color){
        console.log(`this is a ${this.year}, ${this.make}, ${this.model}, and has ${wheels} wheels and is color ${color}`)
    }

}

let myCar = new Car('Toyota', 'Tundar', '1995')
console.log(myCar)
console.log(myCar.make)
console.log(myCar.something="something else") // add a key and value
console.log(myCar)
myCar.make="Honda"  // change something
console.log(myCar)


myCar.printInfo()
myCar.printInfo(4)
myCar.printInfo(4,"red")

myCar.drive = function(){console.log("VROOOM")}

myCar.drive()

// string method

String.prototype.first_letter = function(){return this[0]}

console.log("Jerry".first_letter())

//
// 
// JavaScript Classes
class Human{
    constructor(name, age, gender){
        this.name = name,
        this.age = age,
        this.gender = gender
    }
    returnInfo(){
        return `Name: ${this.name}\nAge: ${this.age}\nGender: ${this.gender}`
    }
}

let wilma = new Human('Wilma', '25', 'Female')
console.log(wilma)
console.log(wilma.returnInfo())

// Inheritance class 
class Baby extends Human{
    constructor(name,age,gender,walking){
        super(name,age,gender) // gets things from parent class
        this.walking = walking // new item // this is a bool
    }
    isBabyWalking(){
        if(this.walking){
            return "Baby is walking"
        }else{
            return "Baby ain't walkin' yet"
        }
    }
}

let bambam = new Baby('BamBam',1,'Male',true)
console.log(bambam.returnInfo())
console.log(bambam.walking)
console.log(bambam.isBabyWalking())

//
//
// JavaScript Closures
let countUp = function(){
    let counter = 2;
    console.log('Hit')
    function addOne(){
        return counter++;
    }
    return addOne
}
myAddOne=countUp()
console.log(myAddOne())
console.log(myAddOne())
console.log(myAddOne())
console.log(myAddOne())
console.log(myAddOne())
console.log(myAddOne())

