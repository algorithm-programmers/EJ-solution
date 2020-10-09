/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let answer = -1;
    nums.some((num, idx) => {
        if(num === target){
            answer = idx;
            return true;
        }
    })
    return answer;
};

// search([4,5,6,7,0,1,2], 0);
search([4,5,6,7,0,1,2], 3);