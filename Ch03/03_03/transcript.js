var bird = {
	genus : 'corvus',
	species : 'corvax',
	commonName: 'raven',
	callType : 'squawky',
	quote : 'Nevermore',
	maxOffspring : 5,
	noisy : true,
	deadly : false
};

bird.quote; // one way of retrieving the value

bird."quote"; // this does not work

bird["quote"]; // Another way of retrieving the value

bird.color = "black"; // Creating a new key and value

bird;

bird["where it lives"] = "in a tree"; // If we want to have a key with spaces then we can do in this way
bird.whereItLives = "in a tree";
bird.whereItLives;
bird['whereItLives'];

delete bird.color; // Deleting a key
bird;

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
