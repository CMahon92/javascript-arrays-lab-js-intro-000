// // Add your functions and code here
//
// //Part 1
//
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;

}

function destructivelyPrependKitten(name) {
kittens.unshift(name);
return kittens;

 }

function destructivelyRemoveLastKitten() {
  kittens.slice(-1);
  return kittens
}
