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




///////////////// why objects ////////////////////////////

// instant lookup time 
// allows us a term/definition (key-value)


let arrUser = ['Mylo', 7000, 'Module Instructor', 'Rural America'];

let arrAge;

for (let i = 0; i < arrUser.length; i++) {
    let ele = arrUser[i];
    if (typeof ele === 'number') {
        arrAge = ele;
    }
}
console.log(arrAge);

let user = {
    name: 'Mylo',
    age: 7000,
    job: 'Module Instructor',
    address: 'Rural America',
};

console.log(user.age);

























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

//////////////////Destructuring /////////////////

let {person, animal} = {person: "Mylo", animal: "elephant"}
// let person = (the Object).person // Mylo 
// let animal = (the Object).animal // 
console.log(person, animal)




// origional way to destructure

let array = ['blue', 'red','yellow','pink']

let firstColor = array[0]; 
let secondColor = array [1];

console.log(firstColor); // => blue 
console.log(secondColor); // => red 

// insted of deving seperate value 
// destructuring syntax war around an array witht the names of the variables you want the valuew to bw associated with
// make that equal to the array itself 

let array = ['blue', 'red','yellow','pink']

let [firstColor, secondColor, thirdColor] = array;

// it assigns the variable name to the values in order BECAUSE it is an array 

console.log(firstColor); // => blue 
console.log(secondColor); // => red 
console.log(thirdColor); // = > yellow

let music = {tempo: 120, genre: "March"}
let {tempo, genre} = music;
console.log(tempo, genre);



/////////Destructuring objects //////////////////

let obj = { names: "sandy", instruments: ['guitar', 'uke']}

// destructure into 2 objects one with name and one with value 

let {names, instruments} = obj

console.log(names); // sandy 
console.log(insturments) // ['gutair' , 'uke' ]


////aliest destructuirng////
//change the variable name 

let obj = { names: "sandy", instruments: ['guitar', 'uke']}
let {names, instruments: music} = obj

console.log(names); // sandy 
console.log(music) // ['gutair' , 'uke' ]


/////////destructuing nested objects/////////

let zooAnimals = {
    animalId: 12, 
    species: "hippo";
    favoriteFood: "watermelon";
    fullname: {
        fname:"fiona";
        lname: "theCuetHippo"
    }

};




///////// Rest and Spread /////////////////////
// rest is paremeter 
// spread is the operator 

// rest will take in a bunch of parameters and combine them into a single array 

// spread takes dayty structure and spreads it out

/////////rest//////////////

function colorPicker(color){
    let string = ' I picked the following colors:' + color ; 
    return string 


}

console.log(colorPicker("red," "blue")) // I picked the following colors: red

// functions can take in an unlimited number of arguments but if only pays attention to the ones specified by the paremeters

// ['blue', 'yellow' 

// alwasys define rest paremeter last and only in the functions parameters ()


fucntion colorPicker(color, ...otherColors){
    let stirng = 'I picked the following colors: ' + color;

    otherColors.foreach(function(arg)){
        string = string + ", " + arg; 
    });
    return string; 
}

console.log(colorPicker("red," "blue", 'yellow' , 'green'] 
// I picked the following colors: red, blue, yellow, green 

let makeThemBig = function (...strings) {
    //console.log(Array.isArray(strings));
    let result = strings.map(function (string) {
        return string.toUpperCase();
    });
    return result.join(' ');
};

console.log(makeThemBig('hello', 'world')); 
console.log(makeThemBig('hello'));
console.log(makeThemBig('Hello', 'world,', "how's", 'it', 'going', 'today?'));

////////////spread/////////////

let arr1 = ['whale', 'bison' , 'parrot'];
let arr2 = ["lion " , "lizard" ," panther"]; 

let arr3 = [...arr1, ...arr2];
console.log(arr3); // => ['whale', "bison" , 'parrot', 'lion', 'lizard', 'panther']


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [0, arr1, arr2];
let arr4 = [0, ...arr1, ...arr2];
console.log(arr3); [ 0,[ 1, 2, 3] ]
console.log(arr4); []

let obj1 = { name: 'Mylo' };
let obj2 = { animal: 'elephant', game: 'Dota 2' };
let obj3 = { obj1, obj2, movie: 'Fantastic Mr. Fox' };
let obj4 = { ...obj1, ...obj2, movie: 'Fantastic Mr. Fox' };

console.log(obj3); { obj1:{name: "mylo"} obj2 {animal: 'elephants' , game: 'dota 2'} movie: "Mr. Fantastic Fox"}
console.log(obj4); {name: "mylo", animals: 'elephant', game:"Dota 2", movie: "Mr. Fantastic Fox" }

