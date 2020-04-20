/**
 * 정수삼각형
 * 
 * @param {number[][]} triangle 
 */
function solution(triangle) {
    const length = triangle.length;
    let answer = [],
      dp = new Array(length).fill(0).map(() => new Array());
  
    answer = dp[0][0] = triangle[0][0];
    for (let i = 1; i < length; i++) {
      for (let j = 0; j <= i; j++) {
        const prevLeft = dp[i - 1][j - 1];
        const prevRight = dp[i - 1][j];
        const currTriangle = triangle[i][j];
        if (j === 0) {
          dp[i][j] = prevRight + currTriangle;
        } else if (j === i) {
          dp[i][j] = prevLeft + currTriangle;
        } else {
          dp[i][j] = Math.max(prevLeft, prevRight) + currTriangle;
        }
  
        answer = Math.max(answer, dp[i][j]);
      }
    }
    console.log(dp, answer);
  
    return answer;
  }

solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]); //30