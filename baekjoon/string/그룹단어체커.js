const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];

rl.on('line', (line) => {
    arr.push(line);

}).on('close', () => {
    arr.shift();
    solution(arr);

    process.exit();
});

/**
 * 그룹 단어 체커
 * 그룹 단어의 개수를 구하라.
 * 그룹 단어는 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 단어이다.
 * 
 * @param {string[]} arr 단어 배열
 */
function solution(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];

        let stack = [word[0]];
        for (let j = 1; j < word.length; j++) {
            const letter = word[j];

            const prevLetter = stack[stack.length - 1];
            if (prevLetter === letter) {
                continue;
            }

            stack.push(letter);
        }

        let letterCounts = {};
        stack.forEach(s => {
            letterCounts[s] = (letterCounts[s] || 0) + 1;
        });

        if(!Object.values(letterCounts).some(el => el > 1)){
            count++;
        }

        stack = [];
        letterCounts = {};
    }

    console.log(count);
}

// Object.filter = function (obj, predicate) {
//     let result = {}, key;

//     for (key in obj) {
//         if (obj.hasOwnProperty(key) && !predicate(obj[key])) {
//             result[key] = obj[key];
//         }
//     }

//     return result;
// };