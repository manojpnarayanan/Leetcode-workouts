/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const chars=[];
    for(let x of s){
        let exists=false;
        if(chars[chars.length-1]===x){
            exists=true;
        }
        if(!exists){
            chars.push(x)
        }else{
            chars.pop();
        }
    }
    return chars.join("")
};