/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if(i === 1 && j === 1){
                dp[i][j] = 1;
            }else{
                dp[i][j] = dp[i][j-1] + dp[i-1][j];
            }
        }
    }

    return dp[m][n];
};

uniquePaths(3, 7); // 28