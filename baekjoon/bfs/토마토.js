const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];

rl.on('line', (line) => {
    arr.push(line.split(" ").map(el => parseInt(el)));

}).on('close', () => {
    const m = parseInt(arr[0][0]);
    const n = parseInt(arr[0][1]);

    arr.shift();
    solution(m, n, arr);

    process.exit();
});

// var fs = require('fs');
// var lines = fs.readFileSync('/dev/stdin').toString().split("\n");
// var data = lines.map(line => line.split(" ").map(el => parseInt(el)));

// const m = parseInt(data[0][0]);
// const n = parseInt(data[0][1]);

// data.shift();

// solution(data);

/**
 * 토마토
 * 토마토가 모두 익을 때까지의 최소 날짜를 구하라.
 * 
 * < 토마토의 상태 >
 * 1 : 익은 토마토
 * 0 : 익지 않은 토마토
 * -1 : 토마토 없음
 * 
 * @param {number} m 상자 가로 길이
 * @param {number} n 상자 세로 길이
 * @param {number[]} arr 상자 하나에 저장된 토마토의 수
 */
function solution(m, n, arr) {
    console.log(m, n, arr);

    const RIPEN = 1, NOT_RIPEN = 0, EMPTY = -1;

    let ripedTomatos = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (arr[i][j] === RIPEN) {
                ripedTomatos.push({ x: i, y: j });
            }
        }
    }

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    while (ripedTomatos.length > 0) {
        const tomato = ripedTomatos.shift();
        // 상하좌우 4번
        for (let i = 0; i < 4; i++) {
            const nextX = tomato.x + dx[i];
            const nextY = tomato.y + dy[i];

            // 범위 밖
            if (nextX < 0 || nextY < 0 || nextX >= m || nextY >= n) {
                continue;
            }

            // 익지 않은 토마토만 가져오도록
            if (arr[nextX][nextY] !== NOT_RIPEN) {
                continue;
            }

            arr[nextX][nextY] = arr[tomato.x][tomato.y] + 1;
            ripedTomatos.push({ x: nextX, y: nextY });
        }
    }
    // console.log(arr);

    let isCompleted = true;
    outerloop:
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const tomato = arr[i][j];
            if (tomato === NOT_RIPEN) {
                isCompleted = false;
                break outerloop;
            }
        }
    }

    const max = Math.max(...arr.map(row => Math.max(...row)));
    console.log(isCompleted ? max : -1);
}