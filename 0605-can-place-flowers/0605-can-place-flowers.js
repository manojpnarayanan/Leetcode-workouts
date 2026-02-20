/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    // let result=true;
    let count=0;
    if(flowerbed.length===1 && flowerbed[0]===0)count++
    for (let i=0;i<flowerbed.length;i++){
        if(i===0 && flowerbed[i]===0 && flowerbed[i+1]!==1){
            if(flowerbed[i]===flowerbed[i+1])count++
            flowerbed.splice(i,1,1)
        
        }else if(flowerbed[i-1]===flowerbed[i] && flowerbed[i+1]===flowerbed[i]  ){
            count++
            flowerbed.splice(i,1,1);
        }else if(i===flowerbed.length-1 && flowerbed[i] === flowerbed[i-1]){
            count++
        }     
    }
    // console.log(flowerbed)
    // console.log(count)
    if(count>=n)return true
    else return false
};