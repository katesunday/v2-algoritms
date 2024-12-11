// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;

  for (let el of str.toLowerCase()) {
    if (vowels.includes(el)) {
      counter++;
    }
  }

  return counter;
}

console.log(vowels('abcdefghijklmnopqrstuvwxyz'));
module.exports = vowels;
