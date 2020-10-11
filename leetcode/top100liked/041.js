/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums = [...new Set(nums)];
    nums.sort((a, b) => a - b);

    if(nums.length === 0){
        return 1;
    }

    let prevNum = 0, answer = -1;
    nums.some(num => {
        if(num < 1){
            return false;
        }

        if(num !== (prevNum + 1)){
            answer = prevNum + 1;
            return true;
        }
        prevNum = num;
    });


    if(prevNum === 0){
        return 1;
    }
    
    if(answer === -1){
        answer = nums[nums.length - 1] + 1;
    }

    // console.log(answer);
    return answer;
};

// simple one
var firstMissingPositive = function(nums){
    const max = Math.max(...nums);

    for (let i = 1; i <= max + 1; i++) {
        if(nums.indexOf(i) === -1){
            return i;
        }
    }

    return 1;
}

firstMissingPositive([1,2,0]);
// firstMissingPositive([3,4,-1,1]);
// firstMissingPositive([]);
// firstMissingPositive([-5]);
// firstMissingPositive([0,2,2,1,1]);