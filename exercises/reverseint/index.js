// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let stringified = Math.abs(n).toString()
  let reversed = stringified.split('').reverse().join('')
  // return n > 0 ? Number(reversed) : -Number(reversed)
  return Number(reversed) * Math.sign(n)
}

module.exports = reverseInt
