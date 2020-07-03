/**
 * 거스름돈
 * DP
 * n 원을 거슬러 줄 방법의 수 구하기
 * 
 * @param {number} n 거슬러 줘야 하는 금액
 * @param {number[]} money Finn이 현재 보유하고 있는 돈의 종류
 */
function solution(n, money) {
    money = money.sort((a, b) => a - b);

    // i 금액을 만들 수 있는 방법의 수
    let dp = new Array(n + 1).fill(0);
    // 0원 : 1가지 방법
    dp[0] = 1;
    
    const MOD = 1000000007;

    money.map(m => {
        dp[m] += 1;
        for (let i = m + 1; i <= n; ++i) {
            dp[i] += dp[i - m] % MOD;
        }
    });

    console.log(dp, dp[n]);

    return dp[n];
}

solution(5, [1, 2, 5]);   // 4