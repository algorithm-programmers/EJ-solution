const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line.split(" ").map(el => el/1));

}).on('close', () => {

    const n = parseInt(lines[0][0]);
    const m = parseInt(lines[0][1]);
    const k = parseInt(lines[0][2]);

    lines.shift();

    solution(m, n, k, lines);

    process.exit();
});

/**
 * 영역 구하기
 * 
 * @param {number} m 모눈종이 세로
 * @param {number} n 모눈종이 가로
 * @param {number} k 직사각형 개수
 * @param {number[][]} lines 직사각형 좌표(왼쪽 아래 꼭짓점의 x, y좌표값과 오른쪽 위 꼭짓점의 x, y좌표값)
 */
function solution(m, n, k, data) {
    
    let paper = new Array(n).fill().map(el => new Array(m).fill(false));

    // while(data.length > 0){
        const curr = data.shift();

        const left = {x: curr[0], y: curr[1]};
        const right = {x: curr[2], y: curr[3]};

        for (let i = left.x; i < right.x; i++) {
            for (let j = left.y; j < right.y; j++) {
                console.log(i, j);
                paper[i][j] = true;
            }
        }
    // }

    console.log(paper);
}