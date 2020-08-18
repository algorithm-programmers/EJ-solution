const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let data = 0;

rl.on('line', (line) => {
    data = parseInt(line);

}).on('close', () => {
    solution(data);
    process.exit();
});

// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
// let data = parseInt(input);
// solution(data);

/**
 * 수들의 합
 * 서로 다른 N개의 자연수의 합이 S라고 한다. S를 알 때, 자연수 N의 최댓값은 얼마일까?
 * 
 * @param {number} n 서로 다른 N개의 자연수의 합
 */
function solution(n) {
    let count = 1, sum = 0;

    while (sum < n) {
        sum += count;
        if(sum > n){
            count--;
            break;
        }
        count++;
    }

    console.log(count);
}