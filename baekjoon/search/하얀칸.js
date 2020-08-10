// 보편적인 입력 방법을 사용하면 런타임 에러가 난다.

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let data = [];

// rl.on('line', (line) => {
//     data.push(line.split(""));

// }).on('close', () => {
//     solution(data);

//     process.exit();
// });

var fs = require('fs');
var lines = fs.readFileSync('/dev/stdin').toString().split("\n");
var data = lines.map(line => line.split(""));
solution(data);

/**
 * 하얀 칸
 * . : 빈 칸
 * F : 말이 있는 칸
 * 
 * @param {string[][]} pan 체스판의 상태
 */
function solution(pan) {
    const HORSE = 'F';

    let count = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const el = pan[i][j];
            if ((i + j) % 2 === 0 && el === HORSE) {
                count++;
            }
        }
    }

    console.log(count);
}

// reduce 사용
const countHorse = pan.reduce((prev, row, rowIdx) => {
    let count = 0;
    for (let elIdx = 0; elIdx < row.length; elIdx++) {
        const el = row[elIdx];
        if (el !== HORSE) {
            continue;
        }

        // rowIdx % 2 === 0 && elIdx % 2 === 0
        // rowIdx % 2 === 1 && elIdx % 2 === 1
        if ((rowIdx + elIdx) % 2 === 0) {
            count++;
        }
    }

    // console.log(prev, row, rowIdx, count);
    return prev + count;
}, 0);