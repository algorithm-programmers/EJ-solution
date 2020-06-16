/**
 * 실패율
 * = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
 * 
 * @param {number} N 전체 스테이지 개수
 * @param {number[]} stages 스테이지 번호가 담긴 배열
 */
function solution(N, stages) {
    const totalUsers = stages.length;

    // {스테이지 번호 : 멈춰있는 사용자 수, ...}
    let userLocation = {};
    for (let i = 1; i <= N; i++) {
        const count = stages.filter(stage => stage === i).length;
        userLocation[i] = count;
    }
    console.log(userLocation);

    // [{스테이지 번호: 실패율 },...]
    let failureArr = [];
    for (let i = 1; i <= N; i++) {
        let stagePlayedCount = 0;
        for (let j = 1; j < i; j++) {
            stagePlayedCount += userLocation[j] ? userLocation[j] : 0;
        }

        let rate = 0;
        const count = userLocation[i];
        if (count) {
            rate = count / (totalUsers - stagePlayedCount);
        } else {
            rate = 0;
        }
        failureArr.push({ index: i, failureRate: rate });
    }

    console.log(failureArr);

    const answer = failureArr.sort((a, b) => {
        const aFailure = a.failureRate;
        const bFailure = b.failureRate;
        if(aFailure === bFailure){
            return a.index - b.index;
        }
        return b.failureRate - a.failureRate
    }).reduce((prev, curr) => {
        return [...prev, curr.index];
    }, []);

    console.log(answer);
    return answer;
}

// solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
solution(4, [4, 4, 4, 4, 4]);
// solution()