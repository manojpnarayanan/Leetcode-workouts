/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if(n<=0) return false;
    function check(n){
        if (n===1) return true;
        if(n%2===0) return check(n/2)
        if(n%3===0) return check(n/3)
        if(n%5===0) return check(n/5)
        return false
    }
    return check(n)
    
   
    
}  
