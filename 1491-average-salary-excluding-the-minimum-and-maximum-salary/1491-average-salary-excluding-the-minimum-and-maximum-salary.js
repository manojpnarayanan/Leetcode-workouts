/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    const min=Math.min(...salary)
    const max=Math.max(...salary);
    // console.log(min,max);
    let count=0
    const total=salary.reduce((acc,num)=>{
        if(num!==min && num!==max){
            acc+=num;
            count++
        }
        return acc;
    },0);
    // console.log(count)
    // console.log(total)
    // console.log(total/count)
    return total/count

};