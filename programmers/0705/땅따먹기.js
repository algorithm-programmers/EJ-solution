/**
 * 땅따먹기
 * 같은 열을 연속해서 밟을 수는 없다.
 * 
 * @param {number[][]} params 
 */
function solution(land) {
    const NOT_SELECTED = -1;
    let prevIdx = NOT_SELECTED;
    for (let i = 0; i < land.length; i++) {
        const row = land[i];
        const max = Math.max(...row);
        const maxIdx = row.indexOf(max);

        console.log(row, max, maxIdx);
        prevIdx = maxIdx;
    }
}

solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]);