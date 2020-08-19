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

// 골드바흐의 추측 : 4 이상의 모든 짝수는 두 소수의 합으로 나타낼 수 있다.
// 최소값은 8. 8 = 2 + 2 + 2 + 2
function solution(num) {

    // num까지의 소수 구하기
    // 에라스토테네스의 체
    let primeNum = new Array(num).fill(true);
    primeNum[0] = primeNum[1] = false;
    for (let i = 2; i < num; i++) {
        if (primeNum[i]) {
            for (let j = i * i; j <= num; j += i) {
                primeNum[j] = false;
            }
        }
    }

    let answer = [];
    if (num < 8) {
        console.log(-1);
        return;
    } else {
        if (num % 2 === 0) {
            answer.push(2, 2);
            num -= 4;
        } else {
            answer.push(2, 3);
            num -= 5;
        }
    }
    
    // 골든바흐
    outerloop:
    for (let i = 2; i < num; i++) {
        for (let j = 0; j < num; j++) {
            const sum = i + j;
            if(sum === num && primeNum[i] && primeNum[j]){
                answer.push(i, j);
                break outerloop;
            }
        }
    }

    // 출력
    for (let i = 0; i < answer.length; i++) {
        const element = answer[i];
        console.log(element);
    }
}