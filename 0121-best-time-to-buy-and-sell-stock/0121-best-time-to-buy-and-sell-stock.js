/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let start=Infinity
    let max=0;
    for(let x of prices){
        if(x <start){
            start=x
        }else{
            max=Math.max(max,x-start)
        }
    }
    return max
};