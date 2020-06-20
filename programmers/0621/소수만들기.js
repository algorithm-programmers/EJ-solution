/**
 * 소수 만들기
 * 숫자 세 개로 만들 수 있는 소수의 개수를 구하라
 * 
 * @param {number[]} nums 
 */
function solution(nums) {
    let answer = 0;
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            for (let k = j + 1; k < length; k++) {
                const num = nums[i] + nums[j] + nums[k];
                if (isPrime(num)) {
                    answer++;
                }
            }
        }
    }

    return answer;
}

function isPrime(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    return count === 2 ? true : false;
}

solution([1, 2, 3, 4]);