//////Callbacks: Using a Function as an Argument
//Previously we explored how functions are first class objects,
// first class objects can be stored in variables
// ex numbers strings booleans



////////////////// Array.forEach////////////////
//The forEach() method executes a provided function once
//for each array element.
//the .forEach() is a basicaly a key word for a whole for loop

let arra1 = [1,2,3,4,];

array1.forEach(element => console.log(element)):

> 1
> 2
> 3
> 4


////////////////Array.map/////////////////////
//The map() method creates a new array populated with the results of
// calling a provided function on every element in the calling array./
//

////////////////callback//////

// call backs are fucntions that are given to another function

let foo = function(callbackFunction) {
    console.log("before we call callback ");
    callbackFunction();
    console.log('after callback is called');
};

let bar = function(){
    console.log('intresting...');
}

foo(bar);

// prints
// before we call callback
//intresting...
//after callback is called 
