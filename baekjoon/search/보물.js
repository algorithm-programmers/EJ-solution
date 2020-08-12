const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let data = [];

rl.on('line', (line) => {
    data.push(line);

}).on('close', () => {
    const n = parseInt(data.shift());
    data = data.map(el => el.split(" ").map(el => parseInt(el)));

    solution(n, data);

    process.exit();
});

// var fs = require('fs');
// var lines = fs.readFileSync('/dev/stdin').toString().split("\n");
// var n = parseInt(data.shift());
// var data = lines.map(line => line.split(" ").map(el => +el));
// solution(n, data);

/**
 * 보물
 * S = A[0]*B[0] + ... + A[N-1]*B[N-1]
 * S 값을 가장 작게(최솟값) 만들기 위한 A 수를 재배열하라.
 * 
 * @param {number} n 길이, 50보다 작거나 같은 자연수
 * @param {number[]} data 첫째 줄은 A에 수, 둘째 줄은 B에 있는 수
 */
function solution(n, data) {
    let arrA = data[0], arrB = data[1];

    arrA = arrA.sort((a, b) => a - b);
    arrB = arrB.sort((a, b) => b - a);
    // console.log(arrA, arrB);

    let min = 0;
    for (let i = 0; i < n; i++) {
        min += arrA[i] * arrB[i];
    }

    console.log(min);
}

// A 오름차순 정렬, B 내림차순 정렬하면 [0,1,1,1,6], [8,7,3,2,1]이다
// 원래 B [2,7,8,3,1]을 재정렬하지 않고 이에 맞춰서 A를 [1,1,0,1,6] 재정렬한 것과 같다.