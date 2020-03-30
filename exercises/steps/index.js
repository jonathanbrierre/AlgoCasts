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
    for(let i = n-1; i>=0; i--){
        let hash = ' '
        let tag = "#"
        console.log(hash.repeat(n).replace(hash.repeat(n-i), tag.repeat(n-i)))
    }
}

module.exports = steps;
