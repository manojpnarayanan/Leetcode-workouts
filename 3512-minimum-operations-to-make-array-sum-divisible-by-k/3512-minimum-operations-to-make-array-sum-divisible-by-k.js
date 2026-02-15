/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const res=nums.reduce((acc,num)=>acc+num);
    if(res %k ===0) return 0;
    
    let count=0;
    
    for(let i=res;i>0;i-- ){
        if(i %k ===0){
            break;
        }else{
            count++
        }
    }
    return count
};