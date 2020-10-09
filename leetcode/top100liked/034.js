/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let starting = -1, ending = -1;

    let idxArr = [];
    nums.map((num, idx) => {
        if(num === target){
            idxArr.push(idx);
        }
    });

    if(idxArr.length > 1){
        starting = idxArr[0];
        ending = idxArr[idxArr.length - 1];
    }else if(idxArr.length === 1){
        starting = ending = idxArr[0];
    }
    
    return [starting, ending];
};

searchRange([1], 1);