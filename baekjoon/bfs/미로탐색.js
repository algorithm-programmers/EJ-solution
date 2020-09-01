const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line);

}).on('close', () => {
    const firstLine = lines[0].split(" ");
    const n = parseInt(firstLine[0]);
    const m = parseInt(firstLine[1]);

    lines.shift();

    const data = lines.map(el => el.split("").map(el => el / 1));

    solution(n, m, data);

    process.exit();
});

// var fs = require('fs');
// var lines = fs.readFileSync('/dev/stdin').toString().split("\n");
// var firstLine = lines.shift();

// var data = lines.map(line => line.split("").map(el => parseInt(el)));

// solution(firstLine[0], firstLine[1], data);


/**
 * 미로
 * (1,1)에서 출발하여 (N,M) 위치로 이동할 때 지나야하는 최소의 칸 수
 * 
 * @param {number} n 
 * @param {number} m 
 * @param {number} arr 
 */
function solution(n, m, arr) {
    // 시계 방향
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    let queue = [];
    queue.push({ x: 0, y: 0 });

    while (queue.length > 0) {
        const element = queue.shift();

        for (let i = 0; i < 4; i++) {
            const nextX = element.x + dx[i];
            const nextY = element.y + dy[i];

            // 범위 밖
            if (nextX < 0 || nextY < 0 || nextX >= n || nextY >= m) {
                continue;
            }

            // 인접한 요소가 1일 때만 이동
            if (arr[nextX][nextY] !== 1) {
                continue;
            }

            // console.log(nextX, nextY);

            arr[nextX][nextY] = arr[element.x][element.y] + 1;
            queue.push({ x: nextX, y: nextY });
        }
    }

    const answer = arr[n - 1][m - 1];
    console.log(answer);
}