// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // var splitString = str.split('')
    // var reversedArray = splitString.reverse()
    // return(reversedArray.join(''))

    // let reversed = '';
    // for(let i = 0; i < str.length; i++) {
    //     reversed = str[i] + reversed
    //     debugger;
    // }
    let reversed = ''
    for (let character of str){
        reversed = character +reversed
        
    }
    return reversed
}

reverse('hello')
module.exports = reverse;
