const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];

rl.on('line', function (line) {
    arr = line.split(' ').map((el) => parseInt(el));

}).on('close', function () {
    solution(arr);

    process.exit();
});

/**
 * 초콜릿 자르기
 * 
 * @param {number[]} arr 두 정수 N, M(1≤N, M≤300)
 */
function solution(arr) {
    const n = arr[0], m = arr[1];

    let dp = new Array(n).fill(0).map(el => new Array(m));
    
    for (let i = 0; i < n; i++) {
        
        dp[i][0] = i;
        for (let j = 1; j < m; j++) {
            dp[i][j] = dp[i][j - 1] + (i + 1);
        }
        
    }

    console.log(dp[n-1][m-1]);
}