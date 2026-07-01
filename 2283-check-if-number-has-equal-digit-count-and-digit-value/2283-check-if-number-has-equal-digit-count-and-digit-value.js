/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    let map=new Map()

    for(let i=0;i<num.length;i++){
        let key=num[i];
        map.set(key,(map.get(key) ||0)+1)
    }
    // console.log(map)

    for(let j=0;j<num.length;j++){
        let actual=Number(num[j])
        // console.log(actual)
        const expected=map.get(String(j)) ||0
        // console.log(expected)
        if(actual !== expected ) return false
    }
    return true

};