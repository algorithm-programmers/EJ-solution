/**
 * 징검다리 건너기
 * 
 * @param {number[]} stones 징검다리 숫자 배열
 * @param {number} k 한 번에 건너뛸 수 있는 디딤돌의 최대 칸 수
 */
function solution(stones, k) {
    let min = Math.min(...stones);
    let max = Math.max(...stones);

    while (min <= max) {
        let mid = Math.round((min + max) / 2);
        if (checkStone(stones, mid, k)) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
    console.log(min);
    
    return min;
}

function checkStone(stones, mid, k) {
    let cnt = 0;
    for (let i = 0; i < stones.length; i++) {
        const currStone = stones[i];
        if (currStone - mid <= 0) {
            // 연속으로 0 이하가 나오는 경우를 카운트한다.
            cnt++;
        } else {
            cnt = 0;
        }

        if (cnt >= k) {
            return false;
        }
    }
    return true;
}

solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3); // 3
// solution([1, 1, 1, 3, 4, 2, 1, 1], 3);  // 3