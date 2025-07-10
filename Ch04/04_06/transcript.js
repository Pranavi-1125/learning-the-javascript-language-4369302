// Topic : Terifs - one line ifs

var cherub = "Cupid";
// cherub = 'Norman';

if (cherub === "Cupid") console.log("Ouch, an arrow!  Ooo, I'm in love!");

if (cherub === "Cupid") console.log("Ouch, an arrow!  Ooo, I'm in love!");
else console.log("I feel nothing!");

let errorMsg = ''; 
//Truthy and Falsey concepts
// Truthy - if a variable is not empty then it is truthy
// Falsey - If a variable is empty then it is falsey

//Here below, errorMsg is falsey as it is an empty var so it doesnt go into the if condition

if (errorMsg) {
  console.error('There was an error', errorMsg);
}

if (!errorMsg) {
  console.log('Yay! No errors!');
}

let errors = [];

// if (errors) { // Nope - empty arrays are truthy

if (errors.length) {
  console.error("Please fix these errors", errors);
}

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#if...else_statement
//
// Truthy and falsy values are discussed here:
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
