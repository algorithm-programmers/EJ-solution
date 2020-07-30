const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];

rl.on('line', function (line) {
    arr.push(line.split(' ').map((el) => parseInt(el)));

}).on('close', function () {
    solution(arr);

    process.exit();
});

/**
 * 남욱이의 닭장
 * 다리가 잘린 닭의 수 U와 멀쩡한 닭의 수 T를 구하라.
 * 
 * @param {number[][]} arr 모든 닭의 다리수의 합 N (1 ≤ N ≤ 300) & 닭의 수 M (M ≤ N ≤ 2M)
 */
function solution(arr) {
    arr.shift();

    arr.map(el => {
        const totalLegs = el[0], totalChickens = el[1];
        
        const damagedChicken = (totalChickens * 2 ) - totalLegs;
        const safeChicken = totalChickens - damagedChicken;
    
        console.log(damagedChicken, safeChicken);
    });
}