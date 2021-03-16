

                // Git Vocab

// Add - Include a file in git which wasn't there before
// Clone - Create a local copy of a git repository which is hosted in an online service (e.g. GitHub)
// Commit (verb) - To lock in a set of changes
// Commit (noun) - A set of changes that has been locked in
// Modified - Status of a file that has changes in it
// Origin - Default name for the remote server
// Pull - Retrieve the latest files from online service (a.k.a. "pull from origin")
// Push - Send the latest files to the online service (a.k.a. "push to origin")
// Remove - Take a file out of git which was previously added
// Repository - Collection of files in git that belong together - called "repo", for short; for example,


//comands

git add README.md // To include a single file (README.md) in the current directory

git add src // To include all files changed or created in the src directory and all directories underneath it; use with caution as it might do more than you intend

git restore //The restore command will undo file changes that you have not yet committed.

    Syntax 1: git restore --staged <file>

    Syntax 2: git restore <file>

    // It is recommended that you use git restore on one file at a time. If you use,
    //  git status, then you can copy and paste the filename with its full path.
    //  If everything goes wrong and you want to undo everthing since, the last
    //  commit, then you can run git restore --staged . followed by git restore .
    //  (the . in both cases refers to the current directory, which should be the
    //     project directory you cloned from GitHub).


// using .gitignore file

// ignore directories and files by their name
// put any name of the file or directory that you dont want commited
// if it is a directory name put slash at the end
    node_modules/


  //what does this mean?
    You could end here but your interviewer might point
    out that splice() can get rather expensive if the array
    is large.

// The Object type

//An object is a data structure that stores other data, similar to how an
//array stores elements.

//An object differs in that each value stored in an object is
//associated with a key. Keys are almost always strings

//values can be any data type: numbers, strings, functions,
//arrays, other objects, anything at all!

    // Create objects using correct syntax with a variety of values.

    // Identify that an object is an unordered collection of values.

    // Key into an object to receive a single value using both Bracket and Dot notation.

    // Use Bracket notation to set a variable as a key in a Object.

    // Implement a check to see if a key already exists within an Object.

    // Understand how object precedence fits in with dot notation for objects.

//n other programming languages similar data structures to the Object type are referred to as 'dictionaries',
//'maps', or 'associative arrays'.

// objects are diffrent from arrays in two diffrent ways

    //1. Instead of accessing values within an object through an index with numbers,
    //objects are indexed using keys.
        //This allows us to access values quickly and efficiently. We'll be talking a bit more about this point later on in the course.

    //2.Order is not guaranteed within an Object. When you iterate through the values in an object, they may not be in the same order
    //as when they were entered

//Objects are defined by using curly braces: {}

    let car = {};
    undefined

    console.log(car{}); // => {}

//For instance think about a car. A real life car can have a color, a number of wheels, a number of seats, a weight, etc. So a real life car
//has a number of different properties that you wouldn't list in any particular order, though all those properties define the characteristics of that car.

//Thinking of a car, let's create a car object to represent that collection of properties. We can create new key-value pairs using bracket notation
// [] and assignment =. Notice that the key inside the brackets is represented with a string:

    // here "color" is the key
    > car["color"] = "Blue";
    "Blue"

    > car["seats"] = 2;
    2

    // accessing out object at the key of color
    > car ["color"]
    "Blue"

    > car ["seats"]
    2

    > car
    {color: "Blue" , seats: 2}

//When we enter car["color"], we are using "color" as our key. You can think of keys and values in an object just like a lock and
//key in real life. The "color" key "unlocks" the corresponding value to give us our car's color, "Blue"!


//Keys withous values

//if we try to access a key that is not inside an object we get undefined. This falls right into place with our understanding of
//where undefined shows up in JavaScript. It's the common default value for a lot of things. The undefined type is the default
//for unassigned variables, functions without a return, out-of-array elements, and non-existent object values.

// A keys default value is undefined


// you can check if a key exist by

    > car
    {color: "Blue" , seats: 2}

    > car ["color"] === undefined;
    flase

    >car ['weight'] === undefined;
    true


// use in operator to check if an object exist within a key

> car
{color: "blue", seats:2}

>"color" in car;
true

>"model" in car;
false


//////////// using variables as keys ///////////////////

//what happens if we assign a variable with a string value
//as a key within an Object?

> car
{colr: "blue", seats:2;}

> let newVariable = "color";
undefined

>newVariable
"color"

> car[newVariable]
"Blue"

>car["color"]
"Blue"

//A variable always evaluates to the value we assigned it.
//So car[newVariable] and car["color"] are equivalent! Why
//is this useful? We know that variables can change; so now
//the keys we use for objects can change!

// whatch what happens when the variable changes

> car
{color: "BLe" , seats:2}

>newVariable
"color"

>newVariable = "weight";
undefined

> car[newVariable]
undefined

//car dosent change because we didnt assign the new variable key
// in our object
>car
{color: "Blue" seats: 2}

//We can now use our newly assigned variable to set a new key in our object:

> car
{color: "BLe" , seats:2}

>newVariable
"weight"

// assigning a key value pair using a variable
>car [newVariable] = 1000;
1000

>car
{color: "Blue" , seats: 2, weight: 1000}

// The second way we can access values within
// an object is called Dot Notation. We can use .
// to assign and access our key-value pairs. The
// easiest difference to notice is when we use dot
// notation, we don't need to use string quotation
// marks for the key:


>let dog = {};
undefined

> dog.bark = "bowowowo";
"bowowowo"

>dog.bark
"bowowowo"

>dog
{ bark: "bowowowo"}


//Bracket notation vs Dot notation

//Dot notation:

    //easier to read
    //easier to write because we don't have to deal with using quotation marks
    //cannot use variables as keys
    //keys can't contain numbers as their first character (object.1key doesn't work!)

// Bracket notation:

//     you can use variables (assigned to string values) as keys!
//     It is okay to use variables and Strings that start with numbers as
//     keys (use object['1key'] does work, while object.1key does not)



let myDog = {};
myDog.name = "Fido";

// lets use a variable as our key and some bracket notation

let myKey = "name";
console.log(myDog); // prints `{name: "Fido"}`
console.log(myDog[myKey]); // prints `Fido`

//what if we try to use the variable in dot notaiton:
// the below is intrepreted as myDog['myKey']
console.log(myDog.myKey); // prints: undefined

//When we use dot notation to write myDog.myKey, myKey will not be
//interpreted by JavaScript as a variable. The text we write after the .
//will be used as the literal key. Remember that if we try to use a key that
//does not exist in an object, we get back the default value of undefined.

// continued from above
console.log(myDogs.myKey); // prints `undefined`
myDog.myKey = "???"
console.log(myDog); // prints `???`


//We can also create an entire object in a single statement:
 let myDog = {
     name: "fido",
     type: "doge",
     age: 2,
     favoriteToys: ["bone","ball"]
 };

 console.log(myDog.age); // prints 2
 console.log(myDog[favoriteToys]); // prints ["bone", "ball"]

///////////////////operator precedence revisit/////////////
 // Associativity determines the order of operation, along with precedence.
//There are two types of associativity: right-associativity and left-associativity.

//Right-associativity is when code is evaluated right-to-left. Let's take a closer look at what is
// happening in the line of code below:

a = b = 1;

// Variable b is assigned as 1.
// Variable a is assigned as b = 1.
// b = 1 returns the value 1, so variable a is now assigned as 1.

//The assignment of variables takes lowest precedence, which is why we evaluate the return value of b = 1 before completing
// the assignment of variable a


//The example below is left-associativity is when code is evaluated left-to-right. It evaluates the document.getElementById
//method before accessing value.

let id = "header";
let element = document.getElementById(id).Value;

//1.We resolve the document variable to be the document object.

//2.We use dot notation to retrieve the getElementById function. (The function is a property of the document object).

//3.We attempt to call it, but before the call can proceed we must first evaluate the function's arguments.

//4.We resolve the id variable to be the string "header".

//5.The getELementById function returns an HTMLElement object and then uses dot notation to access value.

//6.Finally we do assignment which is the LOWEST precedence (that's why assignment happens last). Its associativity is

//7.right to left, so we take the value on the right and assign it to the left.


// take a look at thte example below

add (number1, number2) + number3;

//1.number3 is resolved to its value.
//2.The function is invoked, but its variables need to be resolved.
//3.number1 and number2 are resolved to their values.
//4.The function is invoked so number1, number2, and number3 are finally added together!
