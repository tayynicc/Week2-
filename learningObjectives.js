//1.Label variables as either Primitive vs. Reference

// primitive /////
// these are immutable data types,
//strings
//numbers
//booleans

// refrence /////
// there is only one refrence variable and that is
// object

// object is a data type used to store various keyed collections


//2.Identify when to use . vs [] when accessing values of an object

// dot notation vs bracket notation
// Dot notation is easier to write as it uses less code and with that makeing it easier to read
// but when using it you can not use variables as keys
//and the keays cannot contain numbers as their first character
// dot notation is used INSIDE the object wheres bracket notation is used to call on the key
    object.key

    //////////5 Examples of Dot Notation ///////////

      1. let myDog = {
      myDog.name = "Yo-yo";
      myDog.breed = "Mutt";
      myDog.color = "Brown";
      myDog.sizelb = 70;
      myDog.age = 10;
      }
  //  object key  value


      console.log(myDog);
      // prints {name:'Yo-yo' , breed: 'Mutt', color: 'brown', sizelb: 70 , age: 10}

//where as bracet notation you can use variables that are assigned to string values.
// it is also okay to use variables and stienfs tohat star with numbers

    object['1key']

  /////////// 5 Examples of Bracket Notation//////////////

    let myCat ={
      name: "onyx",
      color: "grey",
      weightlbs: 9,
      food: {wet: "fancy feast", dry:"Iams" }
    }

    console.log(myCat);
    // prints {
    //   name: "onyx",
    //   color: "grey",
    //   weightlbs: 9,
    //   food: {wet: "fancy feast", dry:"Iams" }
    // }


3.Use the obj[key] !== undefined pattern to check if a given variable that contains a key exists in an object
// first what is obj[key] !== undefined saying?
    //if key is in object is not eaqual to undefined then that
    // key value can be found in the object

  ////////////5 pratice problems////////////////////
1.
  let myCat ={
    name: "onyx",
    color: "grey",
    weightlbs: 9,
    food: {wet: "fancy feast", dry:"Iams" }
  }

  function ifTrue(obj, key ){
    if (obj[key] !== undefined){
      return true;
    } else{
      return false;
    }
  }

  console.log(ifTrue(myCat,"color")); // => true
  console.log(ifTrue(myCat, "eye color")) // => false

2.
let obj1 = {
  name : "taylor",
  age: 21 ,
  height: 5.5,
  eyeColor: "hazel",
}

let obj2 = {
  name : "Dillon",
  age: 18,
  height: 6,
  eyeColor: "blue",
}

  function trueOTwo(obj, key){
    if(obj[key] !== undefined){
      return true;
    } else {
      return false;
    }
  }

  console.log(treuOfTwo((obj1,obj2), "age")); // => true
  console.log(trueOfTwo(obj1, "job")); // => flase
  console.log(trueOfTwo(obj2, "height")); // => true
  console.log(trueOTwo((obj1, obj2), "location")); // false


  3.
  let obj1 = {
    name : "taylor",
    age: 21 ,
    height: 5.5,
    eyeColor: "hazel",
  }

  let obj2 = {
    name : "Dillon",
    age: 18,
    height: 6,
    eyeColor: "blue",
  }

  function doSomething(obj, key,){
    if (obj[key] === undefined){
      return "invalid search term";
    } else{
      return obj[key];        // this is returning th value of key when that key is found
    }
  }

  console.log(doSomething(obj2, "age")); // => 18
  console.log(doSomething(obj1, "job")); // => invalid search term
  console.log(doSomething((obj1, obj2), "name")); // Dillon


  3.

  let obj1 = {
    name : "taylor",
    age: 21 ,
    height: 5.5,
    eyeColor: "hazel",
  }

  let obj2 = {
    name : "Dillon",
    age: 18,
    height: 6,
    eyeColor: "blue",
  }

  function conCat(obj, key){
    let value = obj[key];
    if (obj[key] !== undefined){
      return obj + key + "=" + value;
    } else {
      return "key not found";
    }
  }

  console.log(conCat(obj1, "eyeColor"));
  console.log(conCat(obj1, "name", "age"));
  console.log(conCat(obj2, "location"));

4.Utilize Object.keys and Object.values in a function





5.Iterate through an object using a for...in loop






6.Define a function that utilizes ...rest syntax to accept an arbitrary number of arguments





7.Use ...spread syntax for Object literals and Array literals






8.Destructure an array to reference specific elements





9.Destructure an object to reference specific values





10.Write a function that accepts an array as an argument and returns an object representing the count of each character in the array






11.Did you find this lesson helpful?




12.In this article, you learned the importance of having green squares in
 your GitHub profile's green garden. You also learned how to create a
 private repository on GitHub and set up GitHub's green garden to track
 your contributions to private repositories. Finally, you learned when to
  commit for your App Academy projects.

13.Create objects using correct syntax with a variety of values.
14.Identify that an object is an unordered collection of values.
15.Key into an object to receive a single value using both Bracket and Dot notation.
16.Use Bracket notation to set a variable as a key in a Object.
17.Implement a check to see if a key already exists within an Object.
18.Understand how object precedence fits in with dot notation for objects.

////////////////////////Objects/////////////////////////////
19.Label variables as either Primitive vs. Reference.
20.Identify when to use dot notation (.) vs. bracket notation ([]) when accessing values of an object.
21.Use the obj[key] !== undefined pattern to check if a given variable that contains a key exists in an object.
22.Utilize Object.keys and Object.values in a function.
23.Iterate through an object using a for...in loop.
24.Define a function that utilizes ...rest syntax to accept an arbitrary number of arguments.
25.Use ...spread syntax for Object literals and Array literals.
26.Destructure an array to reference specific elements.
27.Destructure an object to reference specific values.
28.Write a function that accepts an array as an argument and returns an object representing the count of each character in the array.
//////////////////////////Callbacks////////////////////////////
29.Given multiple plausible reasons, identify why functions are called “First Class Objects” in JavaScript.
30.Given a code snippet containing an anonymous callback, a named callback, and multiple console.logs, predict what will be printed.
31.Write a function that takes in a value and two callbacks. The function should return the result of the callback that is greater.
32.Write a function, myMap, that takes in an array and a callback as arguments. The function should mimic the behavior of Array.map.
33.Write a function, myFilter, that takes in an array and a callback as arguments. The function should mimic the behavior of Array.filter.
34.Write a function, myEvery, that takes in an array and a callback as arguments. The function should mimic the behavior of Array.every.
Scope
35.Identify the difference between const, let, and var declarations.
36.Explain the difference between const, let, and var declarations.
37.Predict the evaluation of code that utilizes function scope, block scope, lexical scope, and scope chaining.
38.Define an arrow function.
39.Implement a closure and explain how the closure effects scope.
