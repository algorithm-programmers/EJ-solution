/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {

    let length = matrix[0].length;

    /**
     * 줄 바꾸기
     */
    for (let i = 0; i < length; i++) {
        for (let j = i; j < length; j++) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }

    /**
     * 칸 바꾸기
     * 1번째 방법
     */
    // for (let i = 0; i < length; i++) {
    //     for (let j = 0; j < length / 2; j++) {
    //         function getOppositeNum(num) {
    //             return length - num - 1;
    //         }
    //         let opNum = getOppositeNum(j);
    //         let tmp = matrix[i][j];
    //         matrix[i][j] = matrix[i][opNum];
    //         matrix[i][opNum] = tmp;
    //     }
    // }
    
    /**
     * 2번째 방법
     */
    for (let i = 0; i < length; i++) {
        matrix[i].reverse();
    }

    console.log(matrix);
    return matrix;
};

rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);