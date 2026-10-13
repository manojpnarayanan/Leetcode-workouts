/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let obj={};
    for(let i=0;i<nums.length;i++){
        obj[nums[i]]=(obj[nums[i]] || 0)+1
    }
    let res=[];
    for(let x in obj){
        if(obj[x] === 1){
            res.push(Number(x))
        }
    }

    return res
};