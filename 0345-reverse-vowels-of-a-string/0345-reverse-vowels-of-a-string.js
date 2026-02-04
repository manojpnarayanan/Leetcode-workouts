/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels=new Set('aeiou');
    let hasvowels=[];
    for(let i=0;i<s.length;i++){
        if(vowels.has(s[i].toLowerCase())){
            hasvowels.push(s[i])
        }
    }
    let newStr=''
    for(let i=0;i<s.length;i++){
        if(vowels.has(s[i].toLowerCase())){
            newStr+=hasvowels.splice(-1)
        }else{
            newStr+=s[i]
        }
    }
    return newStr
    

};