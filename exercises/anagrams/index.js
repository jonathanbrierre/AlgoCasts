// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     if (!(stringA.length === stringB.length)){
//         return false
//     }else {
//         let objA ={}
//         let objB ={}

//         for(let char of stringA){
//             objA[char] = objA[char] +1 || 1
//         }
//         for(let char of stringB){
//             objB[char] = objB[char] +1 || 1
//         }
//         for (let char in objA){
//             if (!(objA[char]===objB[char])){
//                 return false
//             }
//         }
//         return true
//     }
// }

function anagrams(stringA, stringB){
    return cleanStringArray(stringA) === cleanStringArray(stringB)
}


function cleanStringArray(str){
    const cleaned = str.replace(/[^\w]/g, "").split('').sort().join('')
    return cleaned
    
}

module.exports = anagrams;
