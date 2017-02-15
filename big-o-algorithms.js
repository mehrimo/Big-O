'use strict';
// write a function for O(1)
var pets = ['cat', 'dog', 'rat'];
function findPets(pets) {
}
console.log(pets[1]);

// write a function for O(n)
var pets = ['cat', 'dog', 'rat'];
function findPets(pets) {
  for (var i = 0; i < pets.length; i++) {
    pets[i] = pets[i]
  }
}
console.log(pets[1]);

// write a function for O(n^2)
