/**
 * 땅따먹기
 * 같은 열을 연속해서 밟을 수는 없다.
 * 
 * @param {number[][]} params 
 */
function solution(land) {
    const NOT_SELECTED = -1;
    let prevIdx = NOT_SELECTED;

    let sum = 0;
    
    for (let i = 0; i < land.length; i++) {
        const row = land[i];

        let max = 0, maxIdx = 0;
        row.map((r, rIdx) => {
            if(r > max && rIdx !== prevIdx){
                max = r;
                maxIdx = rIdx;
            }
        })

        // console.log(row, max, maxIdx);
        sum += max;
        prevIdx = maxIdx;
    }

    console.log(sum);

    return sum;
}

// solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]);
solution([[1,2,3,5],[5,6,7,100],[4,3,2,1]]);