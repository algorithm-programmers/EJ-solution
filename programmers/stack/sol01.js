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

    // 왜 다음과 같이 안되는지 모르겠다.
    // for (let i = 0; i < temp.length; i++) {
    //     answer[i] = temp.pop();
    // }

    answer = temp.reverse();
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