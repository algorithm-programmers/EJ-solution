/**
 * 등굣길
 *
 * @param {number} m 가로 길이
 * @param {number} n 세로 길이
 * @param {number[][]} puddles 웅덩이가 있는 좌표
 */
function solution(m, n, puddles) {
    let answer = 0;
    let dp = new Array(n).fill(0).map(() => new Array(m).fill(0));
    dp[0][0] = 1; // 시작점 1
  
    // 웅덩이 있는 곳 -1
    for (const puddle of puddles) {
      const x = puddle[0],
        y = puddle[1];
      dp[x - 1][y - 1] = -1;
    }
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        const currLoc = dp[i][j];
        if (currLoc === -1) {
          dp[i][j] = 0;
          continue;
        }
  
        if (i !== 0) {
          dp[i][j] += dp[i - 1][j];
        }
        if (j !== 0) {
          dp[i][j] += dp[i][j - 1];
        }
      }
    }
  
    answer = dp[n - 1][m - 1] % 1000000007;
    console.log(answer);
  
    return answer;
  }
  
  solution(4, 3, [[2, 2]], 4);
  