const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line.split(" ").map(el => el / 1));

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

    for (let i = 0; i < data.length; i++) {
        const curr = data[i];

        const left = { x: curr[0], y: curr[1] };
        const right = { x: curr[2], y: curr[3] };

        for (let i = left.y; i < right.y; i++) {
            for (let j = left.x; j < right.x; j++) {
                paper[i][j] = true;
            }
        }
    }

    // console.log(paper);

    let area, areaList = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!paper[i][j]) {
                area = 0;
                dfs(i, j);
                areaList.push(area);
            }
        }
    }

    function dfs(x, y) {
        // 시계 방향
        const dx = [-1, 0, 1, 0];
        const dy = [0, 1, 0, -1];

        paper[x][y] = true;
        area++;

        for (let i = 0; i < 4; i++) {
            const nextX = x + dx[i];
            const nextY = y + dy[i];

            if (nextX < 0 || nextY < 0 || nextX >= n || nextY >= m) {
                continue;
            }

            if(paper[nextX][nextY]){
                continue;
            }

            dfs(nextX, nextY);
        }
    }
    
    areaList.sort((a, b) => a - b);

    // 결과 출력
    console.log(areaList.length);
    console.log(areaList.join(" "));
}