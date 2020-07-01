/**
 * 땅따먹기
 * 같은 열을 연속해서 밟을 수는 없다.
 * 
 * @param {number[][]} params 
 */
function solution(land) {
    const length = land.length;

    for (let i = length - 2; i >= 0; i--) {
        land[i][0] = land[i][0] + Math.max(land[i + 1][1], land[i + 1][2], land[i + 1][3])
        land[i][1] = land[i][1] + Math.max(land[i + 1][0], land[i + 1][2], land[i + 1][3])
        land[i][2] = land[i][2] + Math.max(land[i + 1][0], land[i + 1][1], land[i + 1][3])
        land[i][3] = land[i][3] + Math.max(land[i + 1][0], land[i + 1][1], land[i + 1][2])

    }
    
    const sum = Math.max(...land[0]);
    
    console.log(sum);

    return sum;
}

solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]);  // 16
// solution([[1, 2, 3, 5], [5, 6, 7, 100], [4, 3, 2, 1]]);

/**
 * K
 * (i, 0)
 * a        b       c       d
 * (i+1,0) (i+1,1)  (i+1,2) (i+1,3)
 */