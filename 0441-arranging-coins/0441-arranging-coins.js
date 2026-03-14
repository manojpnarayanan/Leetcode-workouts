/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let stair=0;
    let count=0;
    if (n<2) return n
    for (let i=1;i<=n;i++){
        count+=i;
        if(count<=n){
            stair++
        }else{
            break;
        }
    };
     return stair
};