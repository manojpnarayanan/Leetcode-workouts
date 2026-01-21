/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
   if(s1.length!== s2.length) return false;
   if(s1===s2) return true
   let count=0;
   let first=-1 , second=-1;
   for(let i=0;i<s1.length;i++){
    let j=i
    if(s1[i]!==s2[j]){
         if(first===-1){
            first=i
         }else if(second===-1){
            second=i
         }else {
            return false;
         }
    }
   }
//    console.log(count)
//   return  count===2 ? true:false
return (
    s1[first]===s2[second] &&
    s1[second]===s2[first]
)
    
};