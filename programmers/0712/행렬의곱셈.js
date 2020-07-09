/**
 * 행렬의 곱셈
 * 
 * @param {number[][]} arr1
 * @param {number[][]} arr2 
 */
function solution(arr1, arr2) {
    let answer = [];
    for (let i = 0; i < arr1.length; i++) {
        let tmpArr = [];
        for (let j = 0; j < arr2[0].length; j++) {
            let tmpSum = 0;
            for (let k = 0; k < arr2.length; k++) {
                // console.log(arr1[i][k], arr2[j][k]);

                tmpSum += arr1[i][k] * arr2[k][j];
            }
            // console.log("------->", tmpSum);
            tmpArr.push(tmpSum);
        }
        answer.push(tmpArr);
    }

    console.log('answer : ', answer);

    return answer;
}

// solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]);
solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]]);

/*
2 3 2   5 4 3
4 2 4   2 4 1
3 1 4   3 1 1
*/