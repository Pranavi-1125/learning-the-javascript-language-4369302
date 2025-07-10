var one = 1,
  two = 2;

//The === operator compares values and data types, while the == operator compares only values.

one === one; // true
one !== one; // false
one !== two; // true
one === two; // false

one == one; // true
one == "1"; // true (?!) // By default When 1 is assigned to one, 1 is changed to '1'(string). So it return true when we compare 1 = '1'
one != "1"; // false (?!)
one === "1"; // false // Here it checks the datatye so it is false

one < two; // true

one > two; // false

one <= two; // true

one <= one; // true

one >= two; // false

10 >= two; // true

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#equality_operators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#relational_operators
