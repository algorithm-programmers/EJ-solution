/**
 * 실패율
 * 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
 * 
 * @param {number} N 전체 스테이지 개수
 * @param {number[]} stages 스테이지 번호가 담긴 배열
 */
function solution(N, stages) {
    const totalUsers = stages.length;
    const userLocation = stages.reduce((prev, curr) => {
        if(curr > N){
            return prev;
        }
        const count = prev[curr] ? prev[curr] + 1 : 1;
        return {...prev, [curr]: count}
    }, {});

    console.log(userLocation);

    let answer = [];
    for (let i = 1; i <= totalUsers; i++) {
        const count = userLocation[i];
        if(count){
            answer.push(i);
        }
    }

    console.log(answer);
    
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);