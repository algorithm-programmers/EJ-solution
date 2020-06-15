/**
 * 실패율
 * 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
 * 
 * @param {number} N 전체 스테이지 개수
 * @param {number[]} stages 스테이지 번호가 담긴 배열
 */
function solution(N, stages) {
    const totalUsers = stages.length;
    // {스테이지 번호 : 멈춰있는 사용자 수, ...}
    const userLocation = stages.reduce((prev, curr) => {
        if (curr > N) {
            return prev;
        }
        const count = prev[curr] ? prev[curr] + 1 : 1;
        return { ...prev, [curr]: count }
    }, {});

    // [{스테이지 번호: 실패율 },...]
    let failureArr = [];
    for (let i = 1; i <= N; i++) {
        let stagePlayedCount = 0;
        for (let j = 1; j < i; j++) {
            stagePlayedCount += userLocation[j];
        }

        let rate = 0;
        const count = userLocation[i];
        if (count) {
            // console.log(totalUsers, count);
            rate = count / (totalUsers - stagePlayedCount);
        } else {
            rate = 0;
        }
        failureArr.push({ index: i, failureRate: rate });
    }

    const answer = failureArr.sort((a, b) => b.failureRate - a.failureRate).reduce((prev, curr) => {
        return [...prev, curr.index];
    }, []);

    // console.log(answer);
    return answer;
}

// solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
solution(4, [4,4,4,4,4]);