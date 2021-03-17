////////////////////Basic Objects///////////////////////////////////////////
1.// Write a function catBuilder(name, color, toys) 
// that returns a cat object object with the corresponding 
// properties.

function catBuilder(name, color, toys) {
    let cat = {
    name: name, 
    color: color, 
    toys: toys,
    };
      return cat; 
  }

  console.log(catBuilder("Whiskers", "black", ["scratching-post", "yarn"]));
  console.log(catBuilder("Nyan", "rainbow", ["poptarts"]));



  2.// Write a function printObject(obj) that prints out all key-value pairs 
// of an object. The format should be key - value. 
//HINT: use a for loop

function printObject(obj) {
    for(let key in obj){            // for loop to loop thought all the keys in values since there is no firm index dont set i = 0
    let value = obj[key];			// let value equal the curernt key in object 
    console.log(key + "-" + value);
    }
  }
  
  let bootcamp = {
    name: "App Academy",
    color: "Red",
    population: 120
  };
  
  printObject(bootcamp); // prints
  // name - App Academy
  // color - Red
  // population - 120

3. // define an array contining 6 various elements, destructure the array by assigning 
//variables to ever valus in the array return a destructured array concatinated witht a string. 

let array = []
let [firstEl, secondEl] = array 

let newArr = [...]
return (array + "")

console.log(newArr); 
// prints: 


