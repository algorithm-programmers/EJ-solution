const readline = require('readline');
const { rootCertificates } = require('tls');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let data = [];

rl.on('line', (line) => {
    data.push(line.split(""));

}).on('close', () => {
    solution(data);

    process.exit();
});

/**
 * 하얀 칸
 * . : 빈 칸
 * F : 말이 있는 칸
 * 
 * @param {string[]} data 체스판의 상태
 */
function solution(pan) {
    const countHorse = pan.reduce((prev, row, rowIdx) => {
        let count = 0;
        row.map((el, elIdx) => {
            if((rowIdx % 2 === 0) && (elIdx % 2 === 0)){
                count += 1;
            }else if((rowIdx % 2=== 1) && (elIdx % 2 === 1)){
                count += 1;
            }
        });
        console.log(prev, row, rowIdx, count);
        return prev + count;
    }, 0);

    console.log(pan);
    console.log(countHorse);
}