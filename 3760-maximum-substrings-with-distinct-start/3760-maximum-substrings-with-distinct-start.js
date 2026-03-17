/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
    const distinct=new Set(s);
    return distinct.size
};