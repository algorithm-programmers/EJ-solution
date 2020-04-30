/**
 * 서울에서 경산까지
 * K시간 내에 여행할 때 모을 수 있는 최대 모금액
 * 참고) https://seoyeonkk.tistory.com/17
 * 
 * @param {number[]} K 최대 시간
 * @param {number[][]} travel 이동 수단별 걸리는 시간과 모금액
 */
function solution(K, travel) {
    let answer = 0;

    const length = travel.length;

    // dp[구간][이동시간] = 각 구간별 도보, 자전거로 이동했을 때의 최대 모금액
    let dp = new Array(101).fill(0).map(() => new Array(100001).fill(0));
    dp[0][travel[0][0]] = travel[0][1]; // 구간 1 도보 이동
    dp[0][travel[0][2]] = travel[0][3]; // 구간 1 자전거 이동

    for (let i = 1; i < length; i++) {
        for (let j = 0; j <= K; j++) {
            // 이전 구간까지 j분 시간 걸려서 모금한 액수가 없으면 패스.
            if(dp[i-1][j] === 0) continue;

            const walkingTime = travel[i][0];
            const walkingMoney = travel[i][1];
            const bikingTime = travel[i][2];
            const bikingMoney = travel[i][3];

            // 도보 이동
            if(j + walkingTime <= K){
                dp[i][j + walkingTime] = Math.max(dp[i][j + walkingTime], dp[i-1][j] + walkingMoney);
                answer = Math.max(answer, dp[i][j + walkingTime]);
            }

            // 자전거 이동
            if(j + bikingTime <= K){
                dp[i][j + bikingTime] = Math.max(dp[i][j + bikingTime], dp[i-1][j] + bikingMoney);
                answer = Math.max(answer, dp[i][j + bikingTime]);
            }
        }
    }

    console.log(answer);

    return answer;
}

solution(1650, [[500, 200, 200, 100], [800, 370, 300, 120], [700, 250, 300, 90]]);  // 660



// dp[i][j] 값에 무엇이 들어가야하는지 생각하는게 어려웠다.