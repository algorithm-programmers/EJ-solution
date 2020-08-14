const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let data = [];

rl.on('line', (line) => {
    data.push(parseInt(line));

}).on('close', () => {
    solution(data);

    process.exit();
});

// var fs = require('fs');
// var lines = fs.readFileSync('/dev/stdin').toString().split("\n");
// var data = lines.map(line => parseInt(line));
// data.pop();
// solution(data);

/**
 * 베르트랑 공준
 * : 임의의 자연수 n에 대하여, n보다 크고, 2n보다 작거나 같은 소수는 적어도 하나 존재한다.
 * 각 수에 대해서 n보다 크고, 2n보다 작거나 같은 소수의 개수를 구하라.
 * 
 * @param {number[]} data 
 */
function solution(data) {
    for (let i = 0; i < data.length; i++) {
        const n = data[i];
        if(n === 0){
            break;
        }

        let countOfPrimeNumber = 0;
        for (let j = n + 1; j <= (2 * n); j++) {
            if (isPrime(j)) {
                countOfPrimeNumber++;
            }
        }

        console.log(countOfPrimeNumber);
    }
}

function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

// * 시간 초과 *
// function isPrime(n) {
//     let count = 0;
//     for (let i = 1; i <= n; i++) {
//         if (count > 2) {
//             return false;
//         }
//         if (n % i === 0) {
//             count++;
//         }
//     }
//     return count === 2 ? true : false;
// }