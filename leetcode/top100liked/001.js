/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const num1 = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            const num2 = nums[j];
            if(num1 + num2 === target){
                console.log(num1, num2, [i, j]);
                return [i, j];
            }
        }
    }
};

twoSum([2,7,11,15], 9);
twoSum([3,2,4], 6);
twoSum([3,3], 6);