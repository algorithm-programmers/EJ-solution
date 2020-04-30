/**
 * 타겟 넘버
 * 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 구하라
 * 
 * @param {number[]} numbers 숫자 배열
 * @param {number} target 타겟 넘버
 */
function solution(numbers, target) {
    let answer = 0;

    // 초기값은 인덱스 0, 합계 0.
    getTarget(0, 0);
    
    function getTarget(index, sum){
        if(index === numbers.length){
            if(sum === target){
                answer++;
            }
            return;
        }

        // 각각 누적할 숫자 부호가 다를 경우 
        getTarget(index + 1, sum + numbers[index]);
        getTarget(index + 1, sum - numbers[index]);
    }

    console.log(answer);
    
    return answer;
}

solution([1, 1, 1, 1, 1], 3);   // 5