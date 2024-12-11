// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //v1
  // return str.split('').reverse().join('');

  //v2
  // let reversed = '';
  // for(let el of str) {
  //     reversed  = el + reversed;
  // }
  // return reversed;

  //v3
  return str.split('').reduce((a, b) => b + a);
}

module.exports = reverse;
