var thing = 12;
thing = "twelve";
typeof thing; //String

thing = 12;
typeof thing; //Number

thing = false;
typeof thing; //Boolean

thing = {};
typeof thing; //Object

thing = []; //Object
typeof thing; // Here for we dont know if it is a array because it gives object as its type
typeof thing === "object" && thing.hasOwnProperty("length"); // true
// So we use hasOwnProperty() - this checks if there is a property of that object called "length" and we can confirm that it is an array

thing = {};
typeof thing === "object" && thing.hasOwnProperty("length"); // false // Not an array

NaN; //Not A Number
typeof NaN; //Number
Number.isNaN(); //to check whether the var is NaN the this is the way Number.isNaN(NaN)

typeof null; // Object
thing === null; // These are the ways to check if it is null
thing = null;
thing === null;

let somethingLater; // Undefined
typeof somethingLater;  // Undefined
typeof nothingSilly; // Undefined

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

// https://lodash.com/docs/#isNumber
