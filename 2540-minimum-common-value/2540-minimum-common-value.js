/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let num=new Set(nums2);
    let min=0;
    for(let x of nums1){
        if(num.has(x)){
            min=x;
            return x
        }
    }
    return -1

};