const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let data = [];

rl.on('line', (line) => {
    data.push(parseInt(line));

}).on('close', () => {
    const k = data.shift();

    solution(k, data);

    process.exit();
});

function solution(k, data) {

    let stack = [];
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if(element === 0){
            stack.pop();
            continue;
        }
        stack.push(element);
    }

    const answer = stack.reduce((prev, curr) => {
        return prev + curr;
    }, 0);
    
    console.log(answer);
}