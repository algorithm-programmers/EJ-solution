/**
 * 입국심사
 * 
 * @param {number} n 입국심사를 기다리는 사람
 * @param {number[]} times 심사관 배열
 */
function solution(n, times) {
    let left = 1;
    let right = Math.max(...times) * n; // 느린 심사관이 모든 사람들을 심사하는 경우

    let answer = right;

    while(left <= right){
        const mid = (left + right) / 2;
        let done = times.reduce((prev, curr) => prev + parseInt(mid / curr), 0);
        
        console.log(mid, left, right, done);
        
        // 심사관이 더 맡을 수 있다면 시간을 줄인다.
        if(done >= n){
            if(mid < answer){
                answer = mid;
            }
            right = mid - 1;
        }
        // 시간 늘림
        else{
            left = mid + 1;
        }
    }

    answer = Math.floor(answer)
    console.log(answer);
    
    return answer;
}

// solution(6, [7, 10]);   // 28
solution(1, [2, 2]);