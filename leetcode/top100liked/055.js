/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (max < i) return false; // 최댓값이 인덱스보다 작으면 갈 수 없는 곳
        max = Math.max(i + nums[i], max); // 최댓값 리셋팅
    }
    return true;
};

// canJump([2, 3, 1, 1, 4]); // true
console.log(canJump([2, 3, 1, 1, 4]));