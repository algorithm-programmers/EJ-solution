/**
 * 카드 게임
 * 
 * @param {number[]} left 왼쪽 더미 카드
 * @param {number[]} right 오른쪽 더미 카드
 */
function solution(left, right) {
    let answer = 0;
    
    while (right.length > 0) {
        const leftCard = left[0];
        const rightCard = right[0];
        if(leftCard > rightCard){
            const score = right.shift();
            answer += score;
        }else if(leftCard < rightCard){
            left.shift();
        }

    }

    return answer;
}

solution([3, 2, 5], [2, 4, 1]);