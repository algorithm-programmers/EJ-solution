/**
 * 카드 게임
 * - 양쪽 카드 모두 버리는 경우
 * - 왼쪽 카드만 버리는 경우
 * - 오른쪽 카드만 버리는 경우
 * ==> dp[i][j] = max(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]+right[j-1])
 * 
 * 
 * @param {number[]} left 왼쪽 더미 카드
 * @param {number[]} right 오른쪽 더미 카드
 */
function solution(left, right) {
    let answer = 0;
    const leftLen = left.length, rightLen = right.length;
    // 왼쪽 카드가 i, 오른쪽 카드가 j 일 때 최대 점수
    let dp = new Array(leftLen + 1).fill(0).map(() => new Array(rightLen + 1).fill(0));

    for (let i = 1; i <= leftLen; i++) {
        for (let j = 1; j <= rightLen; j++) {
            if(left[j] > right[i]){
                dp[i][j] = dp[i - 1][j] + right[i];
            }else{
                // 둘 다 버리는 경우, 왼쪽만 버리는 경우 중 큰 값
                dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i][j - 1]);
            }
        }
    }
    console.log(dp);
    console.log(dp[rightLen - 1][leftLen - 1]);
    
    answer = dp[rightLen - 1][leftLen - 1]
    console.log(answer);
    
    return answer;
}

solution([3, 2, 5], [2, 4, 1]);
// solution([1, 1, 1, 1, 3], [2, 3, 1, 1, 1]); // 3
// solution([3, 2, 5], [2, 4, 6]); // 6