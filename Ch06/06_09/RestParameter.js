// function addingMachine(...terms)

function addingMachine(...terms) { // Parameter is an array
  // initialize the total we'll be returning
  var total = 0;

  // this used to be `arguments` instead of `terms`
  for (var i = 0; i < terms.length; i += 1) {
    // grab the next number
    var number = terms[i];

    // check if the argument is a number.
    // if so, add it to the running total
    if (typeof number === "number") {
      total += number;
    }
  }

  // done - return the total
  return total;
}

function bake(temp = 350, time = 35, ...flavors) { //Here flavours is an array that carries as many inputs as possible can be given
  console.log(`Let's bake this cake at ${temp} degrees,`); //String literal prininting using Back tick(``)
  console.log(`for ${time} minutes\n`);
  
  if (flavors.length > 0) {
    console.log("And let's not forget these flavors", flavors);
  }
  
  console.log("Arguments contains everything", arguments);
}

bake(425, 30, 'chocolate', 'lemon', 'black forest');
bake(300, 30, 'vanilla');
bake();

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
