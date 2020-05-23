/**
 * 야근 지수
 * 야근 피로도 = 남은 일 * 남은 일의 작업량^2
 * N시간 동안 야근 피로도를 최소화한 값을 구하라.
 * 
 * @param {number} n 퇴근까지 남은 N시간
 * @param {number[]} works 일에 대한 작업량
 */
function solution(n, works) {
    let answer = 0;

    const length = works.length - 1;

    const sum = works.reduce((prev, curr) => prev + curr, 0);
    if (n > sum) {
        return answer;
    }

    for (let i = 0; i < n; i++) {
        works = works.sort((a, b) => a - b);
        works[length] -= 1;
        
        console.log(i, works);

        //같은 작업량 한 번에 처리하기
        for (let j = length - 1; j >= 0; j--) {
            if(works[length] === works[j]){
                i += 1;
                if(i === n){
                    break;
                }
                works[j] -= 1;
            }
        }

    }
    
    answer = works.reduce((prev, curr) => prev + curr * curr, answer);

    console.log('답 :' + answer);
    console.log(works);

    return answer;
}

// solution(4, [4, 3, 3]); // 12
// solution(1, [2, 1, 2]); // 6
// solution(3, [1, 1]); // 0
// solution(5, [2,3,3,4]);
solution(15, [11,5,3,2,1]); // 11, [1,1,2,2,1]
// solution(6, [2,2,2]);   // 0

// i 6, [5,5,3,2,1]
// i 7, [4,5,3,2,1]
// i 8, [4,4,3,2,1]
// i 9, [3,4,3,2,1]
// i 10 [3,3,3,2,1]
// i 11 [2,3,3,2,1]
// i 12 [2,2,3,2,1]
// i 13 [2,2,2,2,1]
// i 14 [1,]
// 작업량이 큰 일 먼저 줄여나가는 것이 포인트.
