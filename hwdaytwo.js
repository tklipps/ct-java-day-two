//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// I was not able to figure out how to detect if there was an internal object (dictionary) and would love some guidance on this
for (const key in person3) {
    if (person3.hasOwnProperty(key)) {
        const value = person3[key];
        if (Array.isArray(value)){
            for (let val of value){                
                    console.log(val);                
                }                
        }else if (value.hasOwnProperty(key)){
            let v = value[key];
            console.log(v);
        }else{console.log(value)
        }
        }
    }

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function Person(name, age){
    this.name = name;
    this.age = age;
    this.printInfo = () => {console.log(`This person's name is: ${name} and thier age is: ${this.age}`)};
    this.year = () => {return this.age++}
};

let tim = new Person("Tim", 37)
let steve = new Person("Stephon", 48)

tim.printInfo()
tim.year()
tim.printInfo()
tim.year()
tim.printInfo()
steve.printInfo()


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let tenLetterWord = (word) => {
    return new Promise(
        (resolve, reject) =>{
            if (word.length > 10){
                resolve (console.log('Big Word'))
            }else if (word.length<=10){
                resolve (console.log('Small Number'))
            }else{
                reject (console.log('error'))
                }
                            }
                    )
                            };

console.log(tenLetterWord("three"))