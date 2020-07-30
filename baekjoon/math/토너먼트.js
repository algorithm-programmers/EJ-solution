const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];

rl.on('line', (line) => {
    arr = line.split(' ').map((el) => parseInt(el));

}).on('close', () => {
    solution(arr);

    process.exit();
});

/**
 * 토너먼트
 * 김지민과 임한수가 대결하는 라운드 번호를 출력한다. 만약 서로 대결하지 않을 때는 -1을 출력한다.
 * 
 * @param {number[]} arr 참가자의 수 N & 1 라운드에서 김지민의 번호 & 임한수의 번호
 */
function solution(arr) {
    let kimjiminNum = arr[1], limhansooNum = arr[2];

    let count = 0;
    while (kimjiminNum != limhansooNum) {
        kimjiminNum = parseInt(kimjiminNum / 2) + (kimjiminNum % 2);
        limhansooNum = parseInt(limhansooNum / 2) + (limhansooNum % 2);

        count += 1;
    }

    console.log(count);
}