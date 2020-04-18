/**
 * 타일 장식물
 * 피보나치 수열의 규칙을 가진 타일 장식물의 둘레 구하기
 * 
 * @param {number} N 자연수(<=80)
 */
function solution(N){
    let answer = 0;
    let arr = [1, 1];

    for (let i = 2; i < N; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    
    answer = arr[N - 1] * 4 + arr[N - 2] * 2;

    console.log(arr, answer);
    
    return answer;
}

solution(5); // 26
// solution(6); // 42