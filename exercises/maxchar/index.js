// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    
    let stringArray = str.split('')
    var elementCount = {}
    var compare = 0
    var mostFrequent;
    for(let i = 0; i < stringArray.length; i++){
        
        debugger;
        let word = stringArray[i]
        if(elementCount[word] === undefined){
            elementCount[word] = 1
        }
        else {
            elementCount[word] +=1
        }

        if (elementCount[word] > compare){
            compare = elementCount[word]
            mostFrequent = stringArray[i]
        }
    }
    return mostFrequent
}

maxChar('ggesssss')

module.exports = maxChar;
