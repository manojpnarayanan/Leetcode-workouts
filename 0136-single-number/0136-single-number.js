/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   let obj=nums.reduce((acc,num)=>{
    acc[num]=(acc[num]+1)|0;
    return acc
   },{});
   console.log(obj)
   for (let x in obj){
    if(obj[x]===0){
        return Number(x)
    }
   }
};