/**
 * N으로 표현
 * 
 * @param {number} N 사칙연산에 이용할 숫자
 * @param {number} number 연산하여 구할 숫자
 */
function solution(N, number) {
    let answer = 0;
    let dp = [];
    //
    let ops = [];
    ops.push(N + N);
    ops.push(N - N);
    ops.push(N * N);
    ops.push(N / N);

    console.log(ops);
    
    

    return answer;
}

solution(5, 12);    // 4
// solution(2, 11);