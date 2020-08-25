const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let data = [];

rl.on('line', (line) => {
    data.push(line);

}).on('close', () => {
    solution(data[0], data[1]);

    process.exit();
});

function solution(data, bomb) {
    let stack = [];
    const bombLength = bomb.length;
    const bombLastKeyword = bomb[bomb.length - 1];
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        stack.push(element);

        const stackLength = stack.length;
        if (stackLength < bombLength || element !== bombLastKeyword) {
            continue;
        }

        if(stack.slice(stackLength - bombLength).join("") === bomb){
            stack.splice(stackLength - bombLength);
        }
    }

    if (stack.length === 0) {
        console.log("FRULA");
    }else{
        console.log(stack.join(""));
    }
}

// 메모리 초과
function solution(data, bomb) {
    data = data.split(bomb).join("");
    while(data.includes(bomb)){
        data = data.split(bomb).join("");
    }
    
    if(data.length === 0){
        console.log("FRULA");
    }else{
        console.log(data);
    }
}