/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj={}
    for(let x of nums){
        obj[x]=(obj[x] || 0)+1
    }
    for(let x in obj){
        if(obj[x] === 1){
            return Number(x)
        }
    }
};