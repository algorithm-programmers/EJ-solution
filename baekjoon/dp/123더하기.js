const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];

rl.on('line', function (line) {
    arr.push(line);
}).on('close', function () {
    solution(arr);

    process.exit();
});

/**
 * 1,2,3 더하기
 * 
 * @param {number[]} arr 
 */
function solution(arr) {
    arr.shift();
    // console.log(arr);

    let dp = new Array(Math.max(...arr) + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;

    for (let i = 0; i < arr.length; i++) {
        const inputNumber = arr[i];
        for (let j = 1; j <= inputNumber; j++) {
            if(!dp[j]){
                dp[j] = dp[j-1] + dp[j-2] + dp[j-3];
            }
        }
        console.log(dp[inputNumber]);
    }
    // console.log(dp);
}

/*

입력
3
4
7
10
------
출력
7
44
274

*/