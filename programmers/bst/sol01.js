/**
 * 예산
 * 
 * @param {number[]} budgets 예산 요청 리스트
 * @param {number} M 총 예산의 합
 */
function solution(budgets, M) {
    budgets.sort(); // 오름차순 정렬
    
    let left = 0, right = budgets[budgets.length - 1];

    while (left <= right) {
        const mid = (left + right) / 2;
        const sum = budgets.reduce((prev, curr) => {
            return curr > mid ? prev + mid : prev + curr;
        }, 0);
        
        if(sum > M){
            right = mid - 1;
        }else{
            left = mid + 1;
        }

        console.log(left, right);
        
    }

    return Math.floor(right);
}

solution([120, 110, 140, 150], 485);

// 230 + 290 = 520