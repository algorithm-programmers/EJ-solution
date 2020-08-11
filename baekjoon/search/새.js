
// var fs = require('fs');
// var line = fs.readFileSync('/dev/stdin').toString().split(" ").map(el => +el);
// solution(line)

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let data = '';

rl.on('line', (line) => {
    data = parseInt(line);

}).on('close', () => {
    solution(data);

    process.exit();
});


function solution(data) {
    let index = 1, count = 0, rest = data;

    while (rest > 0) {
        if (index > rest) {
            index = 1;
        }
        rest -= index;
        // console.log(count, index, rest);
        index++;
        count++;
    }

    console.log(count);
}