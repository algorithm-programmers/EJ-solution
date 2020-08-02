const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];

rl.on('line', (line) => {
    arr.push(line.split(' ').length === 1 ? line : line.split(' '));

}).on('close', () => {
    const notListened = parseInt(arr[0][0]);
    const notSeen = parseInt(arr[0][1]);

    arr.shift();

    solution(notListened, notSeen, arr);

    process.exit();
});

/**
 * 듣보잡
 * 
 * @param {number} n 듣도 못한 사람의 수
 * @param {number} m 보도 못한 사람의 수
 * @param {number[][]} peopleList n명의 듣도 못한 사람 명단 + m명의 보도 못한 사람 명단
 */
function solution(n, m, peopleList) {
    const notListenedList = new Set(peopleList.slice(0, n));
    const notSeenList = new Set(peopleList.slice(n));

    let notListenedAndSeenList = [];
    for (const el of notListenedList) {
        if(notSeenList.has(el)){
            notListenedAndSeenList.push(el)
        }
    }
    // const notListenedAndSeenList = notListenedList.filter(el => {
    //     return notSeenList.includes(el);
    // });

    notListenedAndSeenList.sort();

    console.log(notListenedAndSeenList.length);
    for (const el of notListenedAndSeenList) {
        console.log(el);
    }
}