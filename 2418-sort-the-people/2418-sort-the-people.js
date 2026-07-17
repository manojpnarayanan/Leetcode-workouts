/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
let result=[]
let tallest
while(heights.length>0){
    tallest=heights.indexOf(Math.max(...heights))
    // console.log(tallest)
    result.push(names[tallest])
    // console.log(result)
    heights.splice(tallest,1)
    names.splice(tallest,1)
}
return result


};