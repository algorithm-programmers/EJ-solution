/**
 * 저울
 * 모든 추 무게의 총합 + 1 = 모든 추로 측정할 수 없는 최소 무게
 * 
 * @param {number[]} weight 
 */
function solution(weight) {
    let answer = 1; // 추의 최소 무게

    weight.sort((a, b) => a - b);
    weight.map(w => {
        if(answer >= w){
            answer += w;
        }
    });

    console.log(answer);

    return answer;
}

solution([3, 1, 6, 2, 7, 30, 1]);   // 21