/**
 * 예산
 * 
 * @param {number[]} budgets 예산 요청 리스트
 * @param {number} M 총 예산의 합
 */
function solution(budgets, M) {
    let answer = 0;

    budgets.sort((a, b) => b - a);
    console.log(budgets);
    
    const sum = budgets.reduce((prev, curr) => {
        return prev + curr;
    }, 0);
    console.log(sum);
    
    return answer;
}

solution([120, 110, 140, 150], 485);

// 230 + 290 = 520