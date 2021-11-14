// == (just value) . === ( value and DATA TYPE)

console.log("1"==1);
console.log("1"===1);

// Date Function
let day = new Date();
console.log(day);
console.log(day.getDay());
day = day.getDay()

let literal_day = new Date().toString();
console.log(literal_day.split(" ")[0]) // this grabs "Tue"

// 0 is Sunday - 3 Wed - etc

// Switch Case Satement
switch(day){
    case 0:
        console.log("Go To Church");
        break;
    case 1:
        console.log("Write Code... It's Monday")
        break;
    case 2:
        console.log("Test Code Tuesday")
        break;
    case 3:
        console.log("Test more hump day Code!!")
        break;
    case 4:
        console.log("Write a Feature for App on Thurs!")
        break;
    case 5:
        console.log("Teat Feature on Friday!!!")
        break;
    case 6:
        console.log("Slee on Sats")
        break;
    default:
        console.log("You are making that up!")
}

//

let person = {
    name:"John",
    age:28,
    fav_color:'Red'
}

console.log(person)
// bracket notation


console.log(person['fav_color'])

// Dot notation  - prefered
console.log(person.fav_color)

// Print Blue
// c++
// LA Rams
// Chicago Fire

let person2 = {
    name: "Max",
    age:31,
    prog_languages:['JavaScript','Python','C++', 'Java'],
    fav_color: "Blue",
    teams:[
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball:['Chicago Bulls','Chicago Sky'],
            soccer:['Chicago Fire', 'Naperville Yellowjacks']
        },
        {
            baseball:'Toronto Bluejays',
            football: 'LA Rams',
            basketball: 'Milwalkee Bucks',
            soccer: ['Manchester United','Liverpool']
        }
    ]
}

console.log(person2.fav_color) // Blue
console.log(person2.prog_languages[2]) // c++
console.log(person2.teams[1].football) // LA Rams
console.log(person2.teams[0].soccer[0]) // Chicago Fire

//

console.log(Object.keys(person2)) // will get al the keys
console.log(Object.values(person2)) // get all values

// loop thorugh object.. old an ugly way

for(let i=0; i < Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i]) // gives us the keys
    console.log(person2[Object.keys(person2)[i]])
}

// for IN LOOp - NOT THE SAME AS PYTHON!!!!

for (let key in person2){
    console.log(key)
    console.log(person2[key])
}

// List Values from the person2 object that are arrays

for (let key in person2){
    if (Array.isArray(person2[key])){
        console.log(person2[key])
    }
    
}