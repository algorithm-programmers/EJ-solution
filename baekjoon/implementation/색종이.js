const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let data = [];

rl.on('line', (line) => {
    data.push(line.split(" ").map(el => parseInt(el)));

}).on('close', () => {
    const n = data.shift();
    solution(n, data);

    process.exit();
});

// var fs = require('fs');
// var lines = fs.readFileSync('/dev/stdin').toString().split("\n");
// lines.shift();
// var data = lines.split(" ").map(line => parseInt(line));
// data.pop();
// solution(data);

/**
 * 색종이
 * 가로, 세로의 크기가 각각 100인 정사각형 모양의 흰색 도화지
 * 가로, 세로의 크기가 각각 10인 정사각형 모양의 검은색 색종이
 * 
 * 색종이의 왼쪽 모서리의 좌표가 배열로 주어진다.
 * 
 * @param {number} n 색종이의 수
 * @param {number[]} data 색종이의 왼쪽 변과 도화지 사이의 거리, 색종이의 아래쪽 변과 도화지의 아래쪽 변 사이의 거리
 */
function solution(n, data) {
    let paper = new Array(100).fill().map(el => new Array(100).fill(false));

    for (let i = 0; i < n; i++) {
        const colorPaper = data[i];
        const x = colorPaper[0], y = colorPaper[1];

        for (let j = 0; j < 10; j++) {
            for (let m = 0; m < 10; m++) {
                paper[x + j][y + m] = true;
            }
        }
    }

    const answer = paper.reduce((prev, curr) => {
        for (const el of curr) {
            if (el) {
                prev++;
            }
        }

        return prev;
    }, 0);

    console.log(answer);
}