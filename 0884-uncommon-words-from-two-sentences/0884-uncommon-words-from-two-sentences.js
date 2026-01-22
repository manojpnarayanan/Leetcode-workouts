/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const obj={};
    const s=s1.split(" ")
    const t=s2.split(" ")
    for(let i=0;i<s.length;i++){
        obj[s[i]]=(obj[s[i]] | 0)+1
    }
    for(let i=0;i<t.length;i++){
        obj[t[i]]=(obj[t[i]] | 0)+1
    }
    const result=[];
    for(let x in obj){
        if(obj[x] ===1){
            result.push(x)
        }
    }
    return result
};