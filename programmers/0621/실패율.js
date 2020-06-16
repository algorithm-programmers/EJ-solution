/**
 * 실패율
 * = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
 * 
 * @param {number} N 전체 스테이지 개수
 * @param {number[]} stages 스테이지 번호가 담긴 배열
 */
function solution(N, stages) {
    // [{스테이지 번호: 실패율 },...]
    let failureArr = [];
    for (let i = 1; i <= N; i++) {
        const succeededPlayers = stages.filter(stage => stage === i).length;
        
        let rate = 0;
        if(succeededPlayers !== 0){
            const stagePlayedCount = stages.filter(stage => stage >= i).length;
            rate = succeededPlayers / stagePlayedCount;
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

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
// solution(4, [4, 4, 4, 4, 4]);
// solution(4, [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4])

/**
 * 리뷰
 * 
 * 시간 초과도 줄이고 불필요한 코드도 간단하게 수정하였다. 
 * 처음에 불필요하게 reduce()를 많이 활용하려고 했던 것 같다.
 */