for (let i = 0; i < 10; i += 1) {
  console.log(i);
}

// very common use case: looping over an array.
var pageNames = [
  "Home",
  "About Us",
  "Contact Us",
  "JavaScript Playground",
  "News",
  "Blog"
];
for (i = 0; i < pageNames.length; i += 1) {
  if (document.title === pageNames[i]) { // In HTML code, there is a document title = "JavaScript Playground".
    console.log("We ARE here: " + pageNames[i]);
    break;
  } else {
    console.log("We are not here: " + pageNames[i]);
  }
}

// don't repeat yourself:// This is efficient than above one because pageNames[i] is repeating many times
var pageNames = [
  "Home",
  "About Us",
  "Contact Us",
  "JavaScript Playground",
  "News",
  "Blog"
];
for (i = 0; i < pageNames.length; i += 1) {
  var currentPageTitle = pageNames[i];

  if (document.title === currentPageTitle) {
    console.log("We ARE here: " + currentPageTitle);
  } else {
    console.log("We are not here: " + currentPageTitle);
  }
}

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
