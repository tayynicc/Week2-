//////////////Advantages of utilizing scope

//1.Security - Scope adds security to our code by ensuring that variables can only be accessed by pre-defined parts
// of our programs.


//2. Reduced Variable Name Collisions - Scope reduces variable
//name collisions, also known as namespace collisions, by
//ensuring you can use the same variable name multiple times
//in different scopes without accidentally overwriting those
//variable's values.


////////////////Different kinds of scope

//////global scope, local scope, and block scope.

//Global scope
        //widest scope
        //represented by the window object in the browser
        //the global object in Node.js.
        //Adding attributes to these objects makes them available
            // throughout the entire program.

//Local scope
        // scope of a function is the set of variables that are available
        //for use within that function.
        //The local scope of a function includes:
        //he function's arguments
        //any local variables declared inside the function
        //any variables that were already declared when the function was defined
//Block scope
    //A block in JavaScript is denoted by a pair of curly braces ({}).
    // Examples of block statements in JavaScript are if conditionals or for and while loops.
    //Important An inner scope can reference outer variables, but an outer scope cannot
    // reference inner variables

//Lexical scope
    //Whenever you run a piece of JavaScript that code is first parsed before it is actually
    // run. This is known as the lexing time. In the lexing time your parser resolves variable names to their values when functions are nested.
    //lexing time so we can determine the values of variables without having to run any code.
    //avaScript is a language without dynamic scoping. This means that by looking at a piece of code we can determine the values of variables
    //just by looking at the different scopes involved.


    ////////////variables /////////////////////////
//three different ways to declare a variable.


// var
    //A var declared variable may or may not be reassigned, and the variable is scoped to a function.

//let
    //any variables declared with the keyword let allows you to reassign that variable. Variable declared using let is
    // scoped within a block.

//const
    // any variables declared with the keyword const will not allow you to reassign that variable. Variable declared
    //using const is scoped within a block.
    //Properties of constants:

    //They are block-scoped like let.
    // JavaScript enforces constants by raising an error if you try to reassign them.
    // Trying to redeclare a constant with a var or let by the same name will also raise an error.
    //the name binding of a constant is immutable.
    //Constants cannot be reassigned but, just like with let, new constants of the same names can be declared within nested scopes.
//we recommend you always use let & const.These two words allow us to be the most clear with our intentions for the variable we are creating.


//Hoisting and scoping with variables
    //"Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top
    //of their scope before code execution."

////////////////////Calculating Closures
//"A closure is the combination of a function and the lexical environment within which that function was declared."
//a closure is when an inner function uses, or changes, variables in an outer function.

//Closures have access to any variables within its own, as well as any outer function's, scope when they are declared. This is where the lexical environment comes in - the lexical environment consists of any variables available within the scope in which the closure was declared (which are the local inner scope,
//outer function's scope, and global scope).

//A closure will keep reference to all the variables when it was defined even if the outer function has returned.
////////////////Applications of closures
//Private State






/////////////////////Arrow Functions
//=>
//are a more concise way of declaring functions.
let averageArrow = (num1, num2) => {
    let avg = (num1 + num2) / 2;
    return avg;
  };


  (parameters, go, here) => {
    statement1;
    statement2;
    return <a value>;
  };


//////////////////////////////////////////////
  function fullName(fname, lname) {
  let str = "Hello " + fname + " " + lname;
  return str;
}

// vs.

let fullNameArrow = (fname, lname) => {
  let str = "Hello " + fname + " " + lname;
  return str;
};
If there is only a single parameter you may omit the ( ) around the parameter declaration:

param1 => {
  statement1;
  return value;
};
If you have no parameters with an arrow function you must still use the ( ):

// no parameters will use parenthesis
() => {
  statements;
  return value;
};

//To return a value from a fat arrow with multiple statements, you must explicitly return:
Fat arrows are anonymous, like their lambda counterparts in other languages.
