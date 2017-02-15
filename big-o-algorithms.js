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
function findLargestArr(arr) {
  let total = 0;
  let bigArr = [];

  for (var i = 0; i < arr.length; i++) {
    let sum = 0;

    for (var j = 0; j < arr.length; j++) {
      sum +=arr[i][j];

      if (sum >= total) {
        total = sum;
        bigArr = arr[i]
      }
    }
  }
  console.log(bigArr, 'is largest array');
  console.log(total, 'is the total of the largest array');
}

findLargestArr([[200],[1,10]]);
