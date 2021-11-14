const multiply = (num1, num2) =>{
    return num1 * num2
}

const square = (num1)=>{
    multiply(num1, num1)
}

const printSquare = (num) =>{
    console.log(square(num))
}

printSquare()

// Here, in this stack, it's last in, first out and
// ASync Functions 

// JS Callbacks
/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".

    SOOOO...why do we need them?

    The reason for this is, because of the JavaScript Event Loop. In a nutshell
    JavaScript is an event driven language so this means, that instead of waiting for 
    a response before moving on, JS will keep executing while listening for other events.
*/

console.log('================================')
// basic example

function first(){
    console.log(1)
}

function second(){
    console.log(2)
}

first()
second()
console.log('================================')

function first_delay(){
    setTimeout(first,0) // waits 5 seconds and then wiat for the stack to clear then run function
}

// first_delay()
// second()
// printSquare()
// printSquare()
// printSquare()
// printSquare()
// printSquare()
// printSquare()

function doHomework(subject, callback){
    setTimeout(()=>{console.log(`starting my ${subject} homework`); callback()}, 5000)
    
}

function myCallback(){
    console.log("I have finished my hw - time for a beer.")
}

doHomework("python", myCallback)

first()
second()
first()
second()
first()
second()
first()
second()

// 

const isEvenNumber = (num) =>{
    return new Promise(
        (resolve, reject)=>{
            if(num % 2 ==0){
                resolve(true)
            }else{
                reject(false)
            }
        }
    )
}

isEvenNumber(10).then(
    (result) => {
        console.log(`Is Even Number is ${result}`)
    }
).catch(
    (error)=>{
        console.log(`is Even Number is ${error}`)
    }
)

// Async and await

//normal old function 
function increase_salary(base, increase){
    const new_salary = base + increase;
    console.log(`Your new salary is ${new_salary}`)
    return new_salary
}

console.log(increase_salary(30000, 3000))

// 

function slow_addition(n1,n2){
    return new Promise(
        (resolve)=>{
            setTimeout(()=>resolve(n1+n2),2000)
        }
    )
}

async function increase_salary_slowly(base, increase){
    const new_salary = await slow_addition(base,increase)
    console.log(`Your new salary is ${new_salary}`)
    return new_salary
}
console.log("before")
increase_salary_slowly(40000,4000)
console.log("after")