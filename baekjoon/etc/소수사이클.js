const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let data = 0;

rl.on('line', (line) => {
    data = line.split(" ").map(el => parseInt(el));

}).on('close', () => {
    solution(data[0], data[1], data[2]);
    process.exit();
});

let primeNum = [];

// 반시계 방향 배열
function solution(N, K, A) {
    let list = new Array(N).fill().map((el, idx) => idx + 1);
    const listLen = list.length - 1;

    getPrimeNum(N);

    for (let i = 0; i < K; i++) {
        let startIdx = 0;
        for (let j = 0; j < primeNum[i]; j++) {
            if (startIdx === listLen) {
                swapList(list, startIdx, 0);
            } else {
                swapList(list, startIdx, startIdx + 1);
            }

            startIdx++;
            if(startIdx > listLen){
                startIdx = 0;
            }
        }
    }

    const aIdx = list.findIndex(val => val === A);
    const right = aIdx === 0 ? listLen : aIdx - 1;
    const left = aIdx === listLen ? 0 : aIdx + 1;
    
    console.log(list[left], list[right]);
}

function swapList(list, indexA, indexB) {
    let temp = list[indexA];
    list[indexA] = list[indexB];
    list[indexB] = temp;
}

function getPrimeNum(n) {
    let isPrimeNum = new Array(5000000).fill(true);
    isPrimeNum[0] = isPrimeNum[1] = false;
    for (let i = 2; i < 5000000; i++) {
        if (isPrimeNum[i]) {
            for (let j = i * i; j <= 5000000; j += i) {
                isPrimeNum[j] = false;
            }
        }
    }

    for (let i = 0; i < isPrimeNum.length; i++) {
        const element = isPrimeNum[i];
        if (element) {
            primeNum.push(i);
        }

        if (i === n) {
            break;
        }
    }
}