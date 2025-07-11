function speakSomething(what = 'Speaking!') {
  for (var i = 0; i < 10; i += 1) {
    console.log(what);
  }
}

var speakSomething = function(what = 'Speaking!') {
  for (var i = 0; i < 10; i += 1) {
    console.log(what);
  }
};

setTimeout(speakSomething, 5000); // This allows the function to happen after 5000milliseconds = 5 Seconds

var obj = {
  sayHello: function() {  // This is an object and sayHello is key and this function is the value
    console.log("Hello");  
  }
};

obj.sayHello();

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
