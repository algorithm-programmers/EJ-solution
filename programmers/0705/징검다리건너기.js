/**
 * 징검다리 건너기
 * 
 * @param {number[]} stones 징검다리 숫자 배열
 * @param {number} k 한 번에 건너뛸 수 있는 디딤돌의 최대 칸 수
 */
function solution(stones, k) {
    const minStone = Math.min(...stones);
    stones = stones.map(stone => stone -= minStone);
    let numOfPeople = minStone;
    while (true) {
        console.log(numOfPeople, stones);
        let prevIdx = 0;
        for (let i = 0; i < stones.length; i++) {
            const currStone = stones[i];
            if (currStone === 0) {
                continue;
            }
            const diffStep = i - prevIdx;
            if (diffStep > k) {
                console.log(i, numOfPeople);
                return numOfPeople;
            }

            --stones[i];
            prevIdx = i;
        }
        numOfPeople++;
    }
}

solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3); // 3
// solution([1, 1, 1, 3, 4, 2, 1, 1], 3);  // 3