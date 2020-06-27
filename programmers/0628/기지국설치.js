/**
 * 기지국 설치
 * 
 * @param {number} n 아파트의 개수
 * @param {number[]} stations 현재 기지국이 설치된 아파트의 번호가 담긴 1차원 배열
 * @param {number} w 전파의 도달 거리
 */
function solution(n, stations, w) {
    let answer = 0;
    let startIdx = 0;
    stations.map(station => {
        const endIdx = station - w - 1;
        const addingStation = Math.ceil((endIdx - startIdx) / ((2 * w) + 1));
        answer += addingStation;
        startIdx = station + w;
    });

    answer += Math.ceil((n - startIdx) / ((2 * w) + 1));

    return answer;
}

solution(11, [4, 11], 1);   // 3
// solution(16, [9], 2);       // 3

/**
 * 기지국이 안 닿는 아파트의 길이 / (2 * w) + 1 = 필요한 기지국의 개수가 나온다.
 */