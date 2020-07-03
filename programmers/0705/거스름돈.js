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

    const length = money.length;

    // i 개의 화폐를 가지고 j 금액을 만들 수 있는 방법의 수
    let dp = new Array(length).fill(0).map(el => new Array(n).fill(1));

    const MOD = 1000000007;

    for (let i = 1; i < length; i++) {
        const lastAddedMoney = money[i];

        for (let j = 1; j < n; j++) {
            const compareMoney = j + 1;

            if (compareMoney === lastAddedMoney) {
                dp[i][j] = (dp[i - 1][j] + 1) % MOD;
            } else if (compareMoney < lastAddedMoney) {
                dp[i][j] = dp[i - 1][j] % MOD;
            } else if (compareMoney > lastAddedMoney) {
                dp[i][j] = (dp[i - 1][j] + dp[i][j - i - 1]) % MOD;
            }
        }
    }

    console.log(dp, dp[length - 1][n - 1]);

    return dp[length - 1][n - 1];
}

solution(5, [1, 2, 5]);   // 4