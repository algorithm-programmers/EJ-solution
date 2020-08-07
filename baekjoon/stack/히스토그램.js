const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];

rl.on('line', function (line) {
    arr.push(parseInt(line));

}).on('close', function () {
    arr.shift();
    solution(arr);

    process.exit();
});

/**
 * 히스토그램
 * 
 * @param {number[]} arr 막대그래프의 높이
 */
function solution(arr) {

    let stack = [], area = 0;

    for (let i = 0; i < arr.length; i++) {
        const currHeight = arr[i];
        const prevIdx = stack[stack.length - 1];
        const prevHeight = arr[prevIdx];

        while (stack.length > 0 && prevHeight > currHeight) {
            // console.log(stack, stack[stack.length - 1]);
            const index = stack.pop();
            const height = arr[index];

            let width = i;
            if (stack.length > 0) {
                width -= (stack[stack.length - 1] + 1);
            }

            area = Math.max(area, width * height);
            // console.log(i, '번째', height, '*', width, '=>', area);
        }
        stack.push(i);
    }

    // 오른쪽 끝까지 왔을 경우
    while (stack.length > 0) {
        const index = stack.pop();
        const height = arr[index];
        let width = arr.length;
        if (stack.length > 0) {
            width -= (stack[stack.length - 1] + 1);
        }
        area = Math.max(area, width * height);
        // console.log('area', width, height);
    }

    console.log(area);
}

/*

높이는 arr 로 바로 구할 수 있으므로 스택에는 인덱스를 저장한다.

*/