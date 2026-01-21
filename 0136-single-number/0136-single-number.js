/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   let obj=nums.reduce((acc,num)=>{
    acc[num]=(acc[num]|0)+1;
    return acc
   },{});
   
   for (let x in obj){
    if(obj[x]===1){
        return Number(x)
    }
   }
};