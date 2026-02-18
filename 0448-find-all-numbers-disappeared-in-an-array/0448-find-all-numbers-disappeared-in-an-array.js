/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // let n=Math.max(...nums);
    let num=new Set(nums);
    console.log(num)
    let out=[]
    // console.log(n)
    for(let i=1;i<=nums.length;i++){
        if(!num.has(i)){
            out.push(i)
        }
    }
    return out
};