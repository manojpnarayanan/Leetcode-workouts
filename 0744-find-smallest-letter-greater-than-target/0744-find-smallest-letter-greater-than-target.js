/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    for(let x of letters){
        if(x>target){
            return x
        }    
    }
        return letters[0]

};