//object type 
// known as POJO 
// and unordedred collection of key-value pairs
// you can use is to store values with keys 
// keys should be strings and uniguw
// values that can be anythign strings arrays ect 

// order is not gaurenteed you many not get them back in the same order 


testObject['key'] = 10; 

//'key' = key string 
//10  = value

let obj {}

// can use variables as keys when setting keys
let obj {}
let string = "apple"
object [string] = "apple"



// dot notatin 

testObject.key2 = 20; // should this key be in a string 

// if you try to access a key that does not exist it will return undefined 

// to test is the key exist

testObject['key7']
> undefined 

let contestants = [
    'Kelly Clarkson',
    'Rubben Studdard',
    'Fantasia Barrino',
    'Carrie Underwood',
];
// contestant 3 please step forward
console.log(contestants[3]); //Carrie Underwood

let roomOfRichPeople = {
    Importantpersonson: "That's me!",  // left side is key right side is valuie 
    Bezos: 'Yes?',
    Gates: "That's my hat!",
};

let thePersonWhoLostTheirHat = 'Gates';

// Mr. Importantpersonson, are you here?
console.log(roomOfRichPeople['Importantpersonson']); // prints "thats's me!"
console.log(roomOfRichPeople.Importantpersonson); // prints "That's me!"

// Excuse me, someone lost their hat...
console.log(roomOfRichPeople[thePersonWhoLostTheirHat]); // prints "That's my Hat!"
                                // because keys are strings so the varuables oiunts to the key and looking 
                                // the key it prints the value associated with that key 

// arrays can be inside of objects and objects and be inside of arrays 




























//////////////////////// Primitive Data Types ////////////////////////

// priomitive datay types 
// booLeans 
// Null
// undefined
// Number
// string 

// Primitive data types are immutable meaning they cannont be changed in memory 

//////////////one refernce Data Type ////////////////////////////

// objects 
// singular refrence type in JS
// arrays are a type of object 

// are mutable they can be changed 

// actually pointing to the object itself if you change the object every variable pointing at it will change




// destructure 

// wrap around an array witht the variables you want it 