var string1 = "This is the longest string ever.";
var string2 = "This is the shortest string ever.";
var string3 = "Is this the thing called Mount Everest?";
var string4 = "This is the Sherman on the Mount.";

var regex = /this/; // It is case sensitive "this" is not same as "This"

regex.test(string1);
regex.test(string2);
regex.test(string3);
regex.test(string4);

regex = /this/i; // Removes case sensitive "this" is same as "This"

regex = /^this/i; // Starting with "this"

regex = /this$/i;// Ending with "this"

regex = /ever.$/i; //Ending with "ever"

regex = /ever\.$/i; // Ending with "ever."

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// http://regex.info/book.html
