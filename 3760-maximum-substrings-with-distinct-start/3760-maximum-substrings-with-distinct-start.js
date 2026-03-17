/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
    //  return new Set(s).size
    let distinct='';
    const hasStr=new Set();
    for(let i=0;i<s.length;i++){
        if(!hasStr.has(s[i])){
            hasStr.add(s[i]);
            distinct+=s[i]
        }
    }
    return distinct.length
    
};