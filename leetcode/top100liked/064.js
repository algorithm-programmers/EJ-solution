/**
 * (m, n) 위치로 가는 최솟값 구하기
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(i > 0 && j > 0){
                grid[i][j] = Math.min(grid[i][j] + grid[i][j-1], grid[i][j] + grid[i-1][j]);
            }else if(i > 0){
                grid[i][j] += grid[i-1][j];
            }else if(j > 0){
                grid[i][j] += grid[i][j-1];
            }
        }
    }

    console.log(grid);
    return grid[m-1][n-1];
};

minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]);