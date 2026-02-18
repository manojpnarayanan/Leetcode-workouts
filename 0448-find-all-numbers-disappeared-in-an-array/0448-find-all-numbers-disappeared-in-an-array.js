/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let num=new Set(nums);
    let out=[]
    for(let i=1;i<=nums.length;i++){
        if(!num.has(i)){
            out.push(i)
        }
    }
    return out
};