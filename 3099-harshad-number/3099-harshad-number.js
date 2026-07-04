/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let sum=0;
    let check=x;
    while(x>0){
        let digit=x%10
        sum+=digit;
        x=Math.floor(x/10)
    }
    let res=check%sum===0 ? sum:-1
    return res
};