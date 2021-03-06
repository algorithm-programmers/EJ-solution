function solution(heights) {
    var answer = [];
    var temp = [];
    var n = heights.length;
    while(n > 0){
        var curr = heights.pop();

        var i = n - 1;
        while(i >= 0){
            if(curr < heights[i]){
                temp.push(i + 1);
                break;
            }else if(i == 0){
                temp.push(0);
            }
            i--;
        }

        n--;
    }

    // for 문을 이용해서 배열을 뒤집으려면, 
    // 배열의 길이는 따로 저장해두어야한다.
    var m = temp.length;
    for (let i = 0; i < m ; i++) {
        answer[i] = temp.pop();
    }

    // answer = temp.reverse();
    return answer;
}

solution([6,9,5,7,4])


// 프로그래머스 > 스택/큐 > 탑
// https://stackoverflow.com/questions/1590247/how-do-you-implement-a-stack-and-a-queue-in-javascript

// 스택
var stack = [];
stack.push(2);       // stack is now [2]
stack.push(5);       // stack is now [2, 5]
var i = stack.pop(); // stack is now [2]

// 큐
var queue = [];
queue.push(2);         // queue is now [2]
queue.push(5);         // queue is now [2, 5]
var i = queue.shift(); // queue is now [5]


// 다른 사람 풀이! 간단하다.
function solution2(heights){
    var answer = [];
    heights.map((h, idx) => {
        while(idx){
            idx--;
            if(heights[idx] > h){
                return idx + 1;
            }
        }
        return 0;
    })
    return answer;
}