var animal = {
  genus: "corvus",
  species: "corvax",
  commonName: "raven",
  callType: "squawky",
  quote: "Nevermore",
  maxOffspring: 5,
  noisy: true,
  deadly: false,
};
animal;

var animal2 = animal; // Assigning object to a new one
animal2; // But both animal and animal2 are pointing to the same memory 

animal2.genus = "ursus"; // If made changes in one then the other gets changed too
animal2;
animal;

animal2 = {
  genus: "corvus",
  species: "corvax",
  commonName: "raven",
  callType: "squawky", // there is a deliberate bug here in the course, removed for your convenience :)
  quote: "Nevermore",
  maxOffspring: 5,
  noisy: true,
  deadly: false,
};

// bonus: make a copy of an object safely
animal2 = Object.assign({}, animal);
animal2 = { ...animal };
animal2 = JSON.parse(JSON.stringify(animal));

animal2.genus = "ursus";
animal2;
animal;

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
