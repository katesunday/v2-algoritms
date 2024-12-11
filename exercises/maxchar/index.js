// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};
  let max = 0;
  let maxChar = '';
  for (let el of str) {
    if (chars[el]) {
      chars[el] = chars[el] + 1;
    } else {
      chars[el] = 1;
    }

    //v2
    // if (!chars[el]) {
    //   chars[el] = 1
    // } else {
    //   chars[el] = chars[el] + 1
    // }

    for (let el in chars) {
      if (chars[el] > max) {
        max = chars[el];
        maxChar = el;
      }
    }
  }
  return maxChar;
}

console.log(maxChar('abcccccccd'));
module.exports = maxChar;
