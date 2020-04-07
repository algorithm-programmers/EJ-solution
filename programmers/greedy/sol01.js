/**
 * 체육복
 * 
 * @param {number} n 전체 학생의 수
 * @param {Array} lost 체육복을 도난 맞은 학생
 * @param {Array} reserve 여벌 체육복이 있는 학생
 */
function solution(n, lost, reserve) {
    let answer = 0;
    const canBorrow = [];
    for (let i = 0; i < n; i++) {
        canBorrow[i] = 1;
        for (let j = 0; j < lost.length; j++) {
            if(lost[j] === i+1){
                canBorrow[lost[j] - 1] -= 1;
                continue;
            }
        }
        for (let k = 0; k < reserve.length; k++) {
            if(reserve[k] === i+1){
                canBorrow[reserve[k] - 1] += 1;
                continue;
            }
        }
    }

    canBorrow.map((b, idx) => {
        if(b === 2){
            if(canBorrow[idx - 1] <= 0){
                canBorrow[idx - 1] += 1;
                canBorrow[idx] -= 1;
            }else if(canBorrow[idx + 1] <= 0){
                canBorrow[idx + 1] += 1;
                canBorrow[idx] -= 1;
            }
        }
    })

    answer = canBorrow.filter(b => b > 0).length;
    
    return answer;
}

// solution(5, [2, 4], [1, 3, 5]);
// solution(5, [2, 4], [3]);
// solution(3, [3], [1]);
solution(3, [1,2], [3]);


// 문제 그대로, 
// 여벌 체육복을 가진 학생의 값은 2
// 도난 맞지 않은 학생은 1 
// 도난 맞은 학생은 -1 
// 으로 보고 답을 구했다.