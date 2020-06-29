/**
 * 폰켓몬
 * 
 * @param {number[]} nums 폰켓몬의 종류 번호가 담긴 1차원 배열
 */
function solution(nums) {
    
    const length = nums.length/2;
    const uniqueNums = [...new Set(nums)];

    return length < uniqueNums.length ? length : uniqueNums.length;
}

solution([3,1,2,3]);