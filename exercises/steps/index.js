// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let i = 1; i <= n; i++) {
    let step = ''
    for (let j = 1; j <= i; j++) {
      step += '#'
    }
    for (let k = n - i; k >= 1; k--) {
      step += ' '
    }
    console.log(step)
  }
}

// console.log(steps(4))

module.exports = steps
