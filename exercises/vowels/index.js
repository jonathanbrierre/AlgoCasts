// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let vowelArray = ['a','e','i','o','u'];
    let total = 0;
    let lowered = str.toLowerCase()
    for(let i = 0; i<str.length; i++){
        if(vowelArray.includes(lowered[i])){
            total+=1
        }
    }
    return total
}

module.exports = vowels;
